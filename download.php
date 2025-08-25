<?php
// Function to get IP address location using ip-api.com API
function getIPAddressInfo($ip) {
    $url = 'http://ip-api.com/json/' . $ip;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}

// Check if the request is an AJAX request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the user's IP address
    $user_ip = $_SERVER['REMOTE_ADDR'];

    // Get IP address location information
    $ip_info = getIPAddressInfo($user_ip);

    // Email configuration
    $to = 'eliot.jeanjean@gmail.com';
    $subject = 'Portfolio Download Notification';
    $message = 'Someone has downloaded your portfolio.' . "\n\n";
    $message .= 'IP Address: ' . $user_ip . "\n";
    $message .= 'Location: ' . $ip_info['city'] . ', ' . $ip_info['regionName'] . ', ' . $ip_info['country'] . "\n";
    $message .= 'ISP: ' . $ip_info['isp'] . "\n";

    $headers = 'From: webmaster@eliotjeanjean.fr' . "\r\n" .
               'Reply-To: webmaster@eliotjeanjean.fr' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo 'Email sent';
    } else {
        echo 'Email sending failed';
    }
} else {
    echo 'Invalid request';
}
?>
