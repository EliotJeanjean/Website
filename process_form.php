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

    // Redirection vers une page de confirmation
    header("Location: index.html");
    exit();  // Assurez-vous d'ajouter exit() après la redirection
}
?>
