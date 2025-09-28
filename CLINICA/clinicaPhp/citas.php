<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=UTF-8');


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
include "conexion.php";
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set("display_errors", 1);

$method = $_SERVER['REQUEST_METHOD'];

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        echo json_encode([
            "success" => false,
            "error" => "No llegaron datos"
        ]);
        exit;
    }

    // 🔹 Validar datos
    $paciente_id = isset($data["paciente_id"]) ? intval($data["paciente_id"]) : null;
    $fecha = isset($data["fecha"]) ? $data["fecha"] : null;
    $hora = isset($data["hora"]) ? $data["hora"] : null;
    $odontologo = isset($data["odontologo"]) ? $data["odontologo"] : null;
    $estado = isset($data["estado"]) ? $data["estado"] : "pendiente";

    if (!$paciente_id || !$fecha || !$hora || !$odontologo) {
        echo json_encode([
            "success" => false,
            "error" => "Faltan datos obligatorios"
        ]);
        exit;
    }

    // 🔹 Preparar la consulta
    $stmt = $conexion->prepare("INSERT INTO citas (paciente_id, fecha, hora, odontologo, estado) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("issss", $paciente_id, $fecha, $hora, $odontologo, $estado);

    if ($stmt->execute()) {
        echo json_encode([
            "success" => true,
            "message" => "Cita creada exitosamente",
            "cita_id" => $stmt->insert_id
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "error" => $stmt->error
        ]);
    }

    $stmt->close();
    $conexion->close();
    exit;
}
$method = $_SERVER['REQUEST_METHOD'];

if ($method === "GET") {
    $result = $conexion->query("
        SELECT c.id, c.fecha, c.hora, c.odontologo, c.estado,
               p.nombre AS paciente
        FROM citas c
        INNER JOIN pacientes p ON p.id = c.paciente_id
    ");

    $citas = [];
    while ($row = $result->fetch_assoc()) {
        $citas[] = $row;
    }

    echo json_encode($citas);
    exit;
}
if ($method === "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data || !isset($data["id"])) {
        echo json_encode(["success" => false, "error" => "Faltan datos"]);
        exit;
    }

    $id = intval($data["id"]);
    $fecha = $data["fecha"] ?? null;
    $hora = $data["hora"] ?? null;
    $odontologo = $data["odontologo"] ?? null;
    $estado = $data["estado"] ?? "pendiente";

    if (!$fecha || !$hora || !$odontologo) {
        echo json_encode(["success" => false, "error" => "Faltan datos obligatorios"]);
        exit;
    }

    $stmt = $conexion->prepare("UPDATE citas SET fecha = ?, hora = ?, odontologo = ?, estado = ? WHERE id = ?");
    $stmt->bind_param("ssssi", $fecha, $hora, $odontologo, $estado, $id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Cita actualizada correctamente"]);
    } else {
        echo json_encode(["success" => false, "error" => $stmt->error]);
    }

    $stmt->close();
    $conexion->close();
    exit;
}
if ($method === "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data || !isset($data["id"])) {
        echo json_encode(["success" => false, "error" => "Falta el ID de la cita"]);
        exit;
    }

    $id = intval($data["id"]);

    $stmt = $conexion->prepare("DELETE FROM citas WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Cita eliminada correctamente"]);
    } else {
        echo json_encode(["success" => false, "error" => $stmt->error]);
    }

    $stmt->close();
    $conexion->close();
    exit;
}


