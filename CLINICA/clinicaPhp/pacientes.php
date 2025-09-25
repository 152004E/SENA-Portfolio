<?php
include "conexion.php";
header("Content-Type: application/json");


$method = $_SERVER('REQUEST_METHOD');

if ($method === "POST"){
    $data = json_encode(file_get_contents("php://input"),true);

    $nombre = $data["nombre"];
    $documento = $data["documento"];
    $telefono = $data["telefono"];
    $correo = $data["correo"];

    $sql = "INSERT INTO pacientes (nombre,documento,telefono,correo) VALUES ($nombre,$documento,$telefono,$correo)";


    if( $conexion->query($sql) === true){
        echo json_encode([
            "success" => true, "message" => "Paciente agregado",
        ]);
    }else{
        echo json_encode([
        "success" => false, "error" => $conexion->error
        ]);
    }
    exit;
}


if ($method === "GET") {
    $result = $conexion->query("SELECT * FROM pacientes");
    $pacientes = [];
    while($row = $result->fetch_assoc()){
        $pacientes = $row;
    }

    echo json_encode($pacientes);
    exit;
}


if ($method === "PUT"){
    $data = json_encode(file_get_contents("php://input"),true);

    $id = $data["id"];
    $nombre = $data["nombre"];
    $documento = $data["documento"];
    $telefono = $data["telefono"];
    $correo = $data["correo"];

    $sql = "UPDATE pacientes SET nombre='$nombre',documento='$documento',telefono=$telefono', correo='$correo' WHERE $id";


    if( $conexion->query($sql) === true){
        echo json_encode([
            "success" => true, "message" => "Paciente Actualizado",
        ]);
    }else{
        echo json_encode([
        "success" => false, "error" => $conexion->error
        ]);
    }
    exit;
}