<?php

header('Location: http://www.mwmcdermott.com/blankyou/thank-you.html');
$name = $_POST['name'];
$word = $_POST['word'];
$from = 'admin@mwmcdermott.com';
$to = $_POST['toEmail'];
$subject = $word . " you!";
$message = '
<html>
<head>
</head>
<body>
  <div>
  	<p>Hey!<p>
	<p>' . $subject . '</p>
	<p>-' . $name . '<p>
	<br>
	<a style="text-decoration:underline; color:salmon;" href="http://www.mwmcdermott.com/blankyou">Send your own Blank You!</a>
  </div>
</body>
</html>
';

$headers = "From: " . $from . "\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

mail($to, $subject, $message, $headers);

?> 