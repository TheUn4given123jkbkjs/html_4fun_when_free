<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $name = $_POST['name'] ?? 'N/A';
        $email = $_POST['email'] ?? 'N/A';
        $birthday = $_POST['birthday'] ?? 'N/A';
        $birthtime = $_POST['birthtime'] ?? 'N/A';
        $gender = $_POST['gender'] ?? 'N/A';
        $country = $_POST['country'] ?? 'N/A';
        $favorite_ide = isset($_POST['favorite_ide']) && is_array($_POST['favorite_ide']) ? implode(", ", $_POST['favorite_ide']) : 'N/A';
        $toeic = $_POST['toeic'] ?? 'N/A';
        $message = $_POST['message'] ?? 'N/A';

        echo "<h2>Registration Data Received Successfully!</h2>";
        echo "<ul>";
        echo "<li><b>Name:</b> " . htmlspecialchars($name) . "</li>";
        echo "<li><b>Email:</b> " . htmlspecialchars($email) . "</li>";
        echo "<li><b>Birthday:</b> " . htmlspecialchars($birthday) . "</li>";
        echo "<li><b>Birthtime:</b> " . htmlspecialchars($birthtime) . "</li>";
        echo "<li><b>Gender:</b> " . htmlspecialchars($gender) . "</li>";
        echo "<li><b>Country:</b> " . htmlspecialchars($country) . "</li>";
        echo "<li><b>Favorite IDE:</b> " . htmlspecialchars($favorite_ide) . "</li>";
        echo "<li><b>TOEIC Score:</b> " . htmlspecialchars($toeic) . "</li>";
        echo "<li><b>Message:</b> " . htmlspecialchars($message) . "</li>";
        echo "</ul>";
        
        echo "<br><a href='register.html'>Back to Register</a>";
    } else {
        echo "Invalid Request Method!";
    }
    
    
?>