<?php


$servidor = "localhost";
$usuario = "root";
$password = "";
$base_Datos = "tareas_db";
$puerto = 33065; // Agregando el puerto personalizado

$conexion = new mysqli($servidor, $usuario, $password, $base_Datos, $puerto);

if ($conexion->connect_error) {
    die("La conexion ha fallado: " . $conexion->connect_error);
}
