<?php

include "conexion.php";


$datos = json_decode(file_get_contents("php://input"), true);
$id = intval($datos("id"));
$estado = $datos['estado'] === 'pendiente' ? 'completada' : 'pendiente';


$sql = "UPDATE tareas SET estado = '$estado' WHERE id = $id";
if ($conexion->query($sql)) {
    echo json_encode([
        "sucesso" => true,
        "massage" => "Tarea actualizada correctamente"
    ]);
} else {
    echo json_encode([
        "sucesso" => false,
        "massage" => "error al actualizar la tarea" . $conexion->error
    ]);
}
