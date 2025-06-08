<?php

class calculadora{
    public function Registrar($numero1,$numero2,$total,$operacion){
        try{
            $conexion = new PDO("mysql:host=localhost;dbname=CALCULADORA","root");
            $insertar = $conexion->prepare("INSERT INTO REGISTRO (numero1,numero2,total,operacion) VALUES (?,?,?,?)");
            $insertar->execute([$numero1,$numero2,$total,$operacion]);
            $conexion = null;
            return true;
        }
        catch(Exception $e){
            return $e;
        }
    }

    public function Consultar(){
        try{
            $conexion = new PDO("mysql:host=localhost;dbname=CALCULADORA","root");
            $consultar = $conexion->prepare("SELECT * FROM REGISTRO");
            $consultar->execute();
            $tabla = $consultar->fetchAll(PDO::FETCH_NUM); 
            //fetch all convierte un objeto en un array
            $conexion = null;
            //Cierra la conexion existente
            return $tabla;
        }
        catch(Exception $e){
            return $e;
        }
    }

    public function ConsultarEspecifica($id){
        try{
            $conexion = new PDO("mysql:host=localhost;dbname=CALCULADORA","root");
            $cespecifica = $conexion ->prepare("SELECT * FROM REGISTRO WHERE id = ?");
            $cespecifica->execute([$id]);
            $tabla = $cespecifica->fetchAll(PDO::FETCH_NUM);
            $conexion = null;
            return $tabla;
        }
        catch(Exception $e){
            return $e;
        }
    }

    public function Actualizar($id,$numero1,$numero2,$total,$operacion){
        try{
            $conexion = new PDO("mysql:host=localhost;dbname=CALCULADORA","root");
            $actualizar = $conexion->prepare("update registro set numero1=?,numero2=?,total=?,operacion=? WHERE id=?");
            $actualizar->execute([$numero1,$numero2,$total,$operacion,$id]);
            $conexion = null;
            return true;
        }
        catch(Exception $e){
            return $e;
        }
    }

    public function Eliminar($id){
        try{
            $conexion = new PDO("mysql:host=localhost;dbname=CALCULADORA","root");
            $eliminar = $conexion->prepare("delete from registro where id=?");
            $eliminar->execute([$id]);
            $conexion = null;
            return true;
        }
        catch(Exception $e){
            return $e;
        }
    }
}

?>