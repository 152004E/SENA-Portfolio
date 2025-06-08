<?php



class Creditos
{
    public function Registrar($documento_cliente, $nombre_cliente, $electrodomestico, $valor,$cuantas_cuotas,$total)
    {


        // Conexión a la base de datos local
        try {
            $mbd = new PDO('mysql:host=localhost;dbname=creditos', 'root', '');
            $stmt = $mbd->prepare("INSERT INTO solicitud(documento_cliente,nombre_cliente,electrodomestico,valor,cuantas_cuotas,total) VALUES (?,?,?,?,?,?)");
            $stmt->execute([$documento_cliente, $nombre_cliente,  $electrodomestico, $valor,$cuantas_cuotas,$total]);

            $mbd = null;
            return true;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    public function Consultar()
    {

        try {
            $mbd = new PDO('mysql:host=localhost;dbname=calculadora', 'root', '');
            $consultar = $mbd->prepare("SELECT * FROM registro");
            $consultar->execute();

            $tabla = $consultar->fetchAll(PDO::FETCH_NUM);
             $mbd = null;
            return $tabla;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    public function ConsultaEspecifica($id)
    {
        try {
            $mbd = new PDO('mysql:host=localhost;dbname=calculadora', 'root', '');
            $cEspecifico = $mbd->prepare("SELECT * FROM cliente where id = ?");
            $cEspecifico->execute([$id]);

            $tabla = $cEspecifico->fetchAll(PDO::FETCH_NUM);
             $mbd = null;
            return $tabla;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    public function Actualizar($id, $num1, $num2, $operacion, $total) {

         try {
            $mbd = new PDO('mysql:host=localhost;dbname=calculadora', 'root', '');
            $actualizar = $mbd->prepare("  UPDATE registro set numero1= ?,numero2=?,total=?,operacion=? where id = ?");
            $actualizar->execute([$num1, $num2, $total, $operacion], $id);

            $mbd = null;
            return true;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }



    }
     public function Elimimar($id)
    {
        try {
            $mbd = new PDO('mysql:host=localhost;dbname=calculadora', 'root', '');
            $eliminar = $mbd->prepare("DELETE FROM registro where id = ?");
            $eliminar->execute([$id]);

            $mbd = null;
            return true;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}


?>