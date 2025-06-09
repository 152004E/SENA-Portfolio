 <?php
    echo '<link rel="stylesheet" href="../views/style.css" />';
    include("../views/index.html");
    include("../Models/calculadora.php");



   $valor = $_POST['valor'];
$cuantasCuotas = $_POST['cuantasCuotas'];
$total = 0;

if ($cuantasCuotas == "6") {
    $total = round($valor / 6, 2);
} else if ($cuantasCuotas == "12") {
    $total = round($valor / 12, 2);
} else if ($cuantasCuotas == "18") {
    $total = round($valor / 18, 2);
} else {
    $total = "Valor incorrecto para el número de cuotas.";
}

    echo '

<body style="font-size: 1.2rem; background-color: #555252;">
  <div class="container mt-5 d-flex justify-content-center">
    <div class="alert alert-success shadow p-4 w-100" role="alert" style="
      max-width: 600px;
      background: linear-gradient(
        to right,
        rgba(223, 31, 38, 0.7),
        rgba(223, 31, 38, 0.4),
        rgba(223, 31, 38, 0.7)
      );
      color: white;
      border-radius: 15px;
    ">
      <h3 class="alert-heading text-center " style="font: size 49px;;">Resumen del Crédito</h3>
      <hr style="border-color: white;">
      <p><strong>Documento del cliente:</strong> ' . htmlspecialchars($_POST["NumDocumento"]) . '</p>
      <p><strong>Nombre del cliente:</strong> ' . htmlspecialchars($_POST["nombre"]) . '</p>
      <p><strong>Electrodoméstico:</strong> ' . htmlspecialchars($_POST["nombreElectr"]) . '</p>
      <p><strong>Valor del producto:</strong> $' . htmlspecialchars($valor) . '</p>
      <p><strong>Plan de cuotas:</strong> ' . htmlspecialchars($cuantasCuotas) . ' cuotas por pagar.</p>
      <p><strong>Valor por cuota:</strong> $' . htmlspecialchars($total) . '</p>
    </div>
  </div>
    <br>
';

    
    $objeto = new Creditos(); // INSTANCIA DE LA CLASE CALCUALDORA
/*
    $RegistrarC = $objeto->Registrar($_POST["NumDocumento"], $_POST["nombre"], $_POST["nombreElectr"], $valor, $cuantasCuotas, $total);

    if ($RegistrarC instanceof Exception) {
        $respuestaUser = "Error al registrar los datos, no podemos procesar su solicitud.";
    } else {
        $respuestaUser = "Datos registrados correctamente.";
    }*/
   

    $tabla = $objeto->Consultar();
    //var_dump($tabla);

    echo '

<div class="container mt-5" >
  <h3 class="text-center mb-4 text-white">📊 Tabla de Compras</h3>
  <div class="table-responsive">
    <table class="table table-striped table-hover table-bordered text-center shadow">
      <thead class="table-dark">
        <tr>
          <th>CÓDIGO</th>
          <th>CÉDULA CLIENTE</th>
          <th>NOMBRE CLIENTE</th>
          <th>ELECTRODOMÉSTICO</th>
          <th>VALOR DEL PRODUCTO</th>
          <th>CUOTAS A PAGAR</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>';

    foreach ($tabla as $fila) {
        echo "<tr>
            <td>$fila[0]</td>
            <td>$fila[1]</td>
            <td>$fila[2]</td>
            <td>$fila[3]</td>
            <td>$$fila[4]</td>
            <td>$fila[5]</td>
            <td>$$fila[6]</td>
          </tr>";
    }

    echo '   </tbody>
    </table>
  </div>
   <br>
    <br>
     <br>
      <br> <br> <br> <br>
</div> </body>';














    /*


    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operacion = $_POST['operacion'];
    $total =0;
    if ($operacion == "suma") {
        $total = $num1 + $num2;
    } elseif ($operacion == "resta") {
        $total = $num1 - $num2;
    } 
    elseif ($operacion == "multiplicacion") { 
        $total = $num1 * $num2;
    } 
    elseif ($operacion == "division") {
        $total = $num1 / $num2;
    } 
    else {
        $total = "Operación no válida";
    }


   echo '
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container mt-5">
  <div class="alert alert-success text-center shadow" role="alert" style="font-size: 1.2rem;">
    <strong>Resultado de la operación:</strong><br>
    <span class="fw-bold">' . htmlspecialchars($total) . '</span>
  </div>
</div>
';*/


    /*include("../Models/calculadora.php");
$objeto = new calculadora(); // INSTANCIA DE LA CLASE CALCUALDORA
$RRegistrar = $objeto->Registrar($_POST['num1'], $_POST['num2'], $total, $operacion);

if ($RRegistrar instanceof Exception) {
    $respuestaUser = "Error al registrar los datos, no podemos procesar su solicitud.";
}else{
    $respuestaUser = "Datos registrados correctamente.";
}*/


    ?>