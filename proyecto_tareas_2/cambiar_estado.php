<?php

include "conexion.php";
$datos = json_decode(file_get_contents("php://input"), true);

$id = intval($datos['id']);
$estado= $datos['estado'] === 'pendiente' ? 'completado' : 'pendiente';

$sql = "UPDATE tareas1 SET estado = '$estado' WHERE id = $id";
if ($conexion->query($sql)) {
    echo json_encode(["ssuccess" => true, "message" => "Estado de tarea cambiado exitosamente"]);
} else {
    echo json_encode(["success" => false, "message" => "Error al cambiar el estado de la tarea: " . $conexion->error]);
}

?>