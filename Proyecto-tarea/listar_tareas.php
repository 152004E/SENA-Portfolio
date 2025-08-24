<?php
include "conexion.php";


$resultado = $conexion->query("SELECT * FROM tareas ORDER BY id DESC");
$tareas = [];

while ($fila = $resultado->fetch_assoc()){
    $tareas[]= $fila;
}

echo json_encode($fila);


?>