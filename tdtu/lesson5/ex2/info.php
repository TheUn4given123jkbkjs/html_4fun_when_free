<?php
    session_start();
    header("Content-Type: application/json");

    if(isset($_SESSION['user_info'])){
        echo json_encode($_SESSION["user_info"]);
    }
    else{
        echo json_encode(null);
    }
?>