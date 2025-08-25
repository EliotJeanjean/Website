<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Example: Send an email to yourself (site owner)
    $to_owner = "eliot.jeanjean@gmail.com";
    $subject_owner = "Contact site";
    $headers_owner = "From: $email";
    $message_owner = "Vous avez reçu un nouveau message de $name :\n\n$message";

    mail($to_owner, $subject_owner, $message_owner, $headers_owner);

    // Example: Send a confirmation email to the sender
    $subject_user = "Confirmation de votre message";
    $headers_user = "From: eliot.jeanjean@gmail.com"; // Remplacez cela par votre adresse e-mail
    $message_user = "Bonjour $name,\n\nMerci de m'avoir contacté. Voici un résumé de votre message :\n\n$message\n\nCordialement,\nEliot Jeanjean ✧";

    mail($email, $subject_user, $message_user, $headers_user);

    // Vous pouvez ajouter d'autres traitements ici si nécessaire
}
?>
