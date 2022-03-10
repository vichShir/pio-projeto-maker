<?php

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "user@email.com";
$subject = 'Noticia para o Jornal Virtual';

#mail ($to, $subject, $message . " email: " . $last_name, "From: " . $first_name);
#echo '<center><a href="/index.html"><h1>Concluir</h1></a></center>';

?>