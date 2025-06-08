<?php
include "../views/index.html";
//var_dump($_POST);

if($_POST["opc"]=="s"){
    $total = $_POST["n1"]+$_POST["n2"];
}
else if($_POST["opc"]=="r"){
    $total = $_POST["n1"]-$_POST["n2"];
}
else if($_POST["opc"]=="m"){
    $total = $_POST["n1"]*$_POST["n2"];
}
else if($_POST["opc"]=="d"){
    $total = $_POST["n1"]/$_POST["n2"];
}
else{
    $total = $_POST["n1"]**$_POST["n2"];
}

echo "<br><p style='border:2px gray solid;text-align:center;color:olive;font-family:calibri'>El resultado es $total</p>";
include "../models/calculadora.php";

$objeto = new calculadora();    //Instancia a la clase calculadora
$respuesta = $objeto->Registrar($_POST["n1"],$_POST["n2"],$total,$_POST["opc"]);

if($respuesta instanceof Exception){
    echo "En este momento, no podemos responder a tu petición, intenta más tarde";
}
else{
    echo "Registrado con éxito<br><br>";
}

$tabla = $objeto->Consultar();
//var_dump($tabla);

echo "<table class='table table-striped table-hover'><tr>
                    <th>CÓDIGO</th>
                    <th>NUMERO 1</th>
                    <th>NUMERO 2</th>
                    <th>RESULTADO</th>
                    <th>OPERACION SELECCIONADA</th></tr>";
foreach($tabla as $fila){
    echo "<tr><td>$fila[0]</td>
                <td>$fila[1]</td>
                <td>$fila[2]</td>
                <td>$fila[3]</td>
                <td>$fila[4]</td></tr>";
}
echo "</table>";
?>