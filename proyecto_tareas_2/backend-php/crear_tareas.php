<?php
include "conexion.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");


$dato = json_decode(file_get_contents("php://input"), true);
$titulo = trim($dato['titulo']);

if (empty($titulo)) {
    echo json_encode([
    "success" => false, 
    "message" => "El titulo no puede estar vacio"]);
    exit;
}
// $sql = "INSERT INTO tareas1 (titulo) VALUES ('$titulo')";
$stmt = $conexion->prepare("INSERT INTO tareas1 (titulo) VALUES (?)");
$stmt ->bind_param("s",$titulo);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true, 
    "message" => "Tarea creada exitosamente"]);
} else {
    echo json_encode([
        "success" => false,
     "message" => "Error al crear la tarea: " . $conexion->error]);
}

?>