<?php

$numeprenume = $_POST["name"];
$email = $_POST["email"];
$mesaj = $_POST["textarr"];
echo $numeprenume;
echo $email;
echo $mesaj;
$mesajcomplet = "Numele complet: ".$numeprenume."<br> Email-ul: ".$email."<br> Mesajul: ".$mesaj;


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "../phpmailer/vendor/autoload.php";


$mail = new PHPMailer(true);

//Enable SMTP debugging.
$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "...@gmail.com";                 
$mail->Password = "";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to
$mail->Port = 587;                                   

$mail->From = "....@gmail.com";
$mail->FromName = "Persoana contact";

$mail->addAddress("...@gmail.com", "Recepient Name");

$mail->isHTML(true);

$mail->Subject = "Comanda carte";
$mail->Body = $mesajcomplet;

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}

header("Location: ../index.html");

?>