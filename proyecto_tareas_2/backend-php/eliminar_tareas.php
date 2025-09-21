<?php

include "conexion.php";
$dato = json_decode(file_get_contents("php://input"), true);
$id = intval($dato['id']);

//Validar que el ID sea primitivo
if ($id <= 0) {

    echo json_encode([
        'success' => false,
        'message' => 'ID inválido.'
    ]);
    exit;
}
$stmt = $conexion->prepare("DELETE FROM tareas1 WHERE id = ?");
$stmt->bind_param("i", $id);

if($stmt->execute()) {
    echo json_encode([
        'success' => true,
        'message' => 'Tarea eliminada correctamente.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Error al eliminar la tarea: ' . $conexion->error
    ]);
}

$stmt->close();
$conexion->close();


?>
