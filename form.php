<?php

$mail = $_POST['mail']
$opcion = $_POST['opcion']
$mensaje = $_POST['mensaje']

$mensaje = "este mensaje fue enviado por " . $mail . ",\r\n";
$mensaje = "asunto " . $opcion . ",\r\n";
$mensaje = "mensaje " . $mensaje . ",\r\n";
$mensaje = "enviado el  " . date('d/m/Y', time());

$para = 'agustinlaley@gmail.com';
$asunto = 'WebTec';

mail($para, $asunto, utf8_decode($mensaje), $header);

header('location:index.html')

?>