<?php

include "conexion.php";


$datos = json_decode(file_get_contents("php://input"), true);
$titulo = trim($datos("titulo"));

if (empty($titulo)) {
    echo json_encode([
        "sucesso" => false,
        "massage" => "El titulo de la tarea no puede estar vacio"
    ]);
    exit;
}
$sql = "INSERT INTO tareas(titulo) VALUES ('$titulo')";
if ($conexion->query($sql)) {
    echo json_encode([
        "sucesso" => true,
        "massage" => "Tarea creada correctamente"
    ]);
} else {
    echo json_encode([
        "sucesso" => false,
        "massage" => "error al crear la tara" . $conexion->error
    ]);
}

?>