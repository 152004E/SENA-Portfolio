<?php

$llantas = $_POST['llantas'];

if ($llantas > 3) {
    $total = $llantas * 125000;
} else {
    $total = $llantas * 160000;
}

echo "El total a pagar es: $total";

?>
<?php
$mbd = new PDO('mysql:host=sql310.infinityfree.com;dbname=if0_39069624_llantas', 'if0_39069624', "04nYCVX7WvRPmFK");
$stmt = $mbd->prepare("INSERT INTO cliente(nombre,cedula,llantas,total) VALUES (?,?,?,?)");
$stmt->execute([$_POST['nombre'], $_POST['cedula'], $_POST['llantas'], $total]);
$consultar = $mbd->prepare("SELECT * FROM cliente");
$consultar->execute();

$tabla = $consultar->fetchAll(PDO::FETCH_NUM);


echo "
    <table><tr>   	
    <th>ID</th>
    <th>Cedula del titular</th>
    <th>Número 2</th>
	<th>Resultado</th>		</tr>";
foreach ($tabla as $fila) {        //Recorre el arreglo $tabla como FETCH_NUM
    echo "<tr>		<td>$fila[0]</td>
            		<td>$fila[1]</td>
            		<td>$fila[2]</td>
            		<td>$fila[3]</td>		
            		<td>$fila[4]</td>		

        </tr>";
}
echo "</table>";



?>