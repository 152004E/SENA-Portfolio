<?php

use Dom\Sqlite;

$servidor = "localhost";
$usuario = "root";
$password = "";
$data_base = "tareas_db";


$conexion = new mysqli($servidor, $usuario, $password,$data_base);

if ($conexion->connect_error){
    die("Error de servidor").$conexion->connect_error;
}else{
    echo "conexion exitosa";
}
