<?php
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