<?php
$errors = '';
$myemail = 'contact@jackburt.me.uk';


if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$captcha=$_POST['g-recaptcha-response'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

$honeypot = $_POST['firstname'];
if (!empty($honeypot)) {
    
    $errors .= "\n Error: The honeypot thinks you are a spambot. If this is a mistake I'm sorry! Please email me directly.";
}

if (!$captcha) {
    $errors .= "\n Error: Please complete the captcha before submitting the form, otherwise email me directly.";
} else {
$secretKey = "6LfF-NMUAAAAAJKcU5H62-1OnnhIv2EUa9FK7eN-";
$url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) . '&response=' . urlencode($captcha);
$response = file_get_contents($url);
$responseKeys = json_decode($response,true);
}

if(!$responseKeys["success"]) {

	$errors .= "\n Error: I think you may be a bot as you've failed the captcha. If this is a mistake, sorry! Please email me directly.";

}

if( empty($errors))
{
$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "You have received a new message:\n\n".
"Name:\n$name\n\n".
"Email:\n$email_address\n\nMessage:\n$message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: /email-confirm.html');
} else {
    header('Location: /email-failure.php?errors=$errors');
}
?>