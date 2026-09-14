<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = isset($_POST['name']) ? trim($_POST['name']) : '';
        $day = isset($_POST['day']) ? trim($_POST['day']) : '';

        if(!empty($name) && !empty($day)){
            $_SESSION['booking_inf'] = [
                'name' => $name,
                'day' => $day,
                'status' => 'confirmed'
            ];
        }
    }
    header("Location: admin.php");
    exit();
?>