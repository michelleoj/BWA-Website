<?php 

//Sanitizes input 
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
$subject = 'test';

$recipient = "mchlljy@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $message, $mailheader) or die("Error!");
echo "Thank You!";


//TODO 
//Validate the user inputs to make sure they're correct formats
?>
