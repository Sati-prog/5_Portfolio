<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'polejim.kz@gmail.com';
$mail->Password = 'Sa1tanat';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
 
$mail->setFrom('polejim.kz@gmail.com', 'POLEJIM');
$mail->addAddress('polejim.kz@gmail.com');

$mail->isHTML(true);

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>