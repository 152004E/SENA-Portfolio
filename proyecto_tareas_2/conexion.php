<?php

$servidor = "localhost";
$usuario = "root";
$password = "";
$base_Datos = "tareas_db";

$conexion = new mysqli($servidor, $usuario, $password, $base_Datos,33065);

if ($conexion->connect_error) {
    die("La conexion ha fallado: " . $conexion->connect_error);
}
?>