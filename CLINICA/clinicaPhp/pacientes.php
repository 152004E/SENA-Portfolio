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

    $nombre = $data["nombre"];
    $documento = $data["documento"];
    $telefono = $data["telefono"];
    $correo = $data["correo"];

    $sql = "INSERT INTO pacientes (nombre,documento,telefono,correo) VALUES ('$nombre','$documento','$telefono','$correo')";


    if ($conexion->query($sql) === true) {
        echo json_encode([
            "success" => true,
            "message" => "Paciente agregado",
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "error" => $conexion->error
        ]);
    }
    exit;
}


if ($method === "GET") {
    $result = $conexion->query("SELECT * FROM pacientes");
    $pacientes = [];
    while ($row = $result->fetch_assoc()) {
        $pacientes[] = $row;
    }

    echo json_encode($pacientes);
    exit;
}


if ($method === "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);

    $id = $data["id"];
    $nombre = $data["nombre"];
    $documento = $data["documento"];
    $telefono = $data["telefono"];
    $correo = $data["correo"];

    $sql = "UPDATE pacientes SET nombre='$nombre',documento='$documento',telefono='$telefono', correo='$correo' WHERE id=$id";


    if ($conexion->query($sql) === true) {
        echo json_encode([
            "success" => true,
            "message" => "Paciente Actualizado",
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "error" => $conexion->error
        ]);
    }
    exit;
}

if ($method === "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data["id"]) || !is_numeric($data["id"])) {
        echo json_encode([
            "success" => false,
            "error" => "ID inválido o no enviado"
        ]);
        exit;
    }

    $id = intval($data["id"]);
    
    // Verificar si tiene citas
    $check = $conexion->prepare("SELECT COUNT(*) as total FROM citas WHERE paciente_id = ?");
    $check->bind_param("i", $id);
    $check->execute();
    $result = $check->get_result();
    $row = $result->fetch_assoc();
    
    if ($row['total'] > 0) {
        echo json_encode([
            "success" => false,
            "error" => "No se puede eliminar: el paciente tiene " . $row['total'] . " citas asociadas"
        ]);
        exit;
    }
    
    $check->close();
    
    // Si no tiene citas, eliminar
    $stmt = $conexion->prepare("DELETE FROM pacientes WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo json_encode([
            "success" => true,
            "message" => "Paciente eliminado correctamente",
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "error" => $stmt->error
        ]);
    }
    
    $stmt->close();
    exit;
}
