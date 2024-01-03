<?php

$mail = $_POST['mail'];
$opcion = $_POST['opcion'];
$mensajeTexto = $_POST['mensaje'];

$mensaje = "Este mensaje fue enviado por " . $mail . ",\r\n";
$mensaje .= "Asunto: " . $opcion . ",\r\n";
$mensaje .= "Mensaje: " . $mensajeTexto . ",\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'agustinlaley@gmail.com';
$asunto = 'WebTec';

mail($para, $asunto, utf8_decode($mensaje));

header('Location: index.html');
exit;

?>