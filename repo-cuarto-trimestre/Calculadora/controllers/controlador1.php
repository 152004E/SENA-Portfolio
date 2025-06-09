 <?php
    include("../views/index.html");
    echo '<link rel="stylesheet" href="../views/style.css" />';

    $valor = $_POST['valor'];

    $cuantasCuotas = $_POST['cuantasCuotas'];
    $total = 0;

    if ($cuantasCuotas == "primeraOpcion") {
        $total = $valor / 6;
        
    } else if ($cuantasCuotas =="segundaOpcion") {
       $total = $valor / 12;
    } else if ($cuantasCuotas == "TerceraOpcion") {
       $total = $valor / 18;

    }else{
        $total = "Valor incorrecto";
    }

 echo '
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container mt-5">
  <div class="alert alert-success shadow p-4" role="alert" style="font-size: 1.2rem;">
    <h4 class="alert-heading text-center">Resumen del Crédito</h4>
    <hr>
    <p><strong>Documento del cliente:</strong> ' . htmlspecialchars($_POST["NumDocumento"]) . '</p>
    <p><strong>Nombre del cliente:</strong> ' . htmlspecialchars($_POST["nombre"]) . '</p>
    <p><strong>Electrodoméstico:</strong> ' . htmlspecialchars($_POST["nombreElectr"]) . '</p>
    <p><strong>Valor del producto:</strong> $' . htmlspecialchars($valor) . '</p>
    <p><strong>Plan de cuotas:</strong> ' . htmlspecialchars($cuantasCuotas) . '</p>
    <p><strong>Valor por cuota:</strong> $' . htmlspecialchars($total) . '</p>
  </div>
</div>
';

include("../Models/calculadora.php");
$objeto = new Creditos(); // INSTANCIA DE LA CLASE CALCUALDORA
$RegistrarC = $objeto->Registrar($_POST["NumDocumento"], $_POST["nombre"], $_POST["nombreElectr"], $valor,$cuantasCuotas, $total);

if ($RegistrarC instanceof Exception) {
    $respuestaUser = "Error al registrar los datos, no podemos procesar su solicitud.";
}else{
    $respuestaUser = "Datos registrados correctamente.";
}














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