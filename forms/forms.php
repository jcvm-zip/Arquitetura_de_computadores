<?php

if (isset($_POST['email']) && !empty($_POST['email']))

$nome = addcslashes($_POST['name']);
$email = addcslashes($_POST['email']);
$mensagem = addcslashes($_POST['message']);

$host = "localhost";
$dbname = "dados_contato";
$user = "usersql";
$password = "123456";

$to = "jcvm.zip@proton.me";
$subject = "Contato - Computação Quântica"
$body = "Nome: ".$nome. "\n"
        ."Email: ".$email. "\n"
        ."Mensagem: ".$mensagem;

$header = "From: jeffesoncarvalho10@gmail.com"."\r\n"
            ."Reply-To: ".$email."\e\n"
            ."X=Mailer:PHP/".phpversion();

if(mail($to, $subject, $body, $header)) {
    echo("Email enviado com sucesso!");
} else {
    echo("Email não pode ser enviado!");
}

?>
