<?php
include "conexion.php";

$dato = json_decode(file_get_contents("php://input"), true);
$titulo = trim($dato['titulo']);

if (empty($titulo)) {
    echo json_encode([
    "success" => false, 
    "message" => "El titulo no puede estar vacio"]);
    exit;
}
$sql = "INSERT INTO tareas1 (titulo) VALUES ('$titulo')";
if ($conexion->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Tarea creada exitosamente"]);
} else {
    echo json_encode(["success" => false, "message" => "Error al crear la tarea: " . $conexion->error]);
}

?>