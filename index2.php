<?php
$imagem_nome= '';
$arquivo=fopen($imagem_nome,'r');
$contents = fread($arquivo, filesize($imagem_nome));
$encoded_attach = chunk_split(base64_encode($contents));
fclose($arquivo);
$limitador = "_=======". date('YmdHms'). time() . "=======_";

$mailheaders = "From: pio@email.com\r\n";
$mailheaders .= "MIME-version: 1.0\r\n";
$mailheaders .= "Content-type: multipart/related; boundary=\"$limitador\"\r\n";
$cid = date('YmdHms').'.'.time();

$texto='
<html>
    <body>
        <font size=4><br/> 
            Nome: <b> '. $_POST['name'] .' </b> <br>
            Email do enviador: <b> '. $_POST['email'] .' </b> <br>
            Link da imagem: <b> '. $_POST["photo"] .' </b> <br>
            Titulo da noticia: <b> '. $_POST['title_noticia'] .' </b> <br>
            Corpo da noticia: <b> '. $_POST['message'] .' </b> <br>
        </font>
    </body>
</html>
';

$msg_body = "--$limitador\r\n";
$msg_body .= "Content-type: text/html; charset=iso-8859-1\r\n";
$msg_body .= "$texto";
$msg_body .= "--$limitador\r\n";
$msg_body .= "Content-type: image/jpeg; name=\"$imagem_nome\"\r\n";
$msg_body .= "Content-Transfer-Encoding: base64\r\n";
$msg_body .= "Content-ID: <$cid>\r\n";
$msg_body .= "\n$encoded_attach\r\n";
$msg_body .= "--$limitador--\r\n";

#mail("user@email.com","Envio Noticia Site Pioneiro 2",$msg_body, $mailheaders);
#echo '<center><a href="/index.html"><h1>Concluir</h1></a></center>';

?>