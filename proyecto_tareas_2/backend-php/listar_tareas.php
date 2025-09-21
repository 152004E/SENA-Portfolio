<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
include "conexion.php";
$resultado = $conexion->query("SELECT * FROM tareas1 ORDER   BY id DESC");
$tareas = [];

if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $tareas[] = $fila;
    }
    echo json_encode($tareas, JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Tarea creada exitosamente" . $conexion->error
    ]);
}

// while ($fila = $resultado->fetch_assoc()) {
//     $tareas[] = $fila;
// }


