<?php
include "conexion.php";
header("access-control-allow-origin: *");
header("access-control-allow-headers: content-type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

$datos = json_decode(file_get_contents("php://input"), true);
if (!$datos || !isset($datos['id']) || !isset($datos['estado'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Datos inválidos.'
    ]);
    exit;
}
$id = intval($datos['id']);
$estado = $datos['estado'] === 'pendiente' ? 'completado' : 'pendiente';

$sql = "UPDATE tareas1 SET estado = '$estado' WHERE id = $id";
if ($conexion->query($sql)) {
    echo json_encode([
        'success' => true,
        'message' => 'Estado cambiado correctamente.'
    ]); 
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Error al cambiar el estado: ' . $conexion->error
    ]);
}

?>


