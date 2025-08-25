<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add additional processing or validation here

    // Example: Send an email
    $to = "eliot.jeanjean@gmail.com";
    $subject = "Contact site";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
}
?>
