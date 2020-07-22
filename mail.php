<?php
$to = "ybourouni@yahoo.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: webmaster@example.com" ;

$this_mail = mail($to,$subject,$txt,$headers);

if($this_mail) echo 'sent!';
else echo error_message;
?> 