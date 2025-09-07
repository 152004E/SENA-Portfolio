<?php 

include "conexion.php";
$dato = json_decode(file_get_contents("php://input"), true);
$id = intval($dato['id']);

//Validar que el ID sea primitivo
if ($id <= 0) {
    echo json_encode(["exito" => false, "message" => "ID de tarea no valido"]);
    exit;
}
$sql = "DELETE FROM tareas1 WHERE id = $id";
if ($conexion->query($sql)) {
    echo json_encode(["exito" => true, "message" => "Tarea eliminada exitosamente"]);
} else {
    echo json_encode(["exito" => false, "message" => "Error al eliminar la tarea: " . $conexion->error]);
}


?>