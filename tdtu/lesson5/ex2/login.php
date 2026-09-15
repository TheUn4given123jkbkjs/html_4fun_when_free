<?php
    session_start();
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $mssv = isset($_POST["mssv"]) ? trim($_POST["mssv"]) : '';
        $name = isset($_POST["name"]) ? trim($_POST["name"]) : '';
        $gender = isset($_POST["gender"]) ? trim($_POST["gender"]) : '';
        $birthday = isset($_POST["birthday"]) ? trim($_POST["birthday"]) : '';        
        $_SESSION["user_info"] = [
            "MSSV" => $mssv,
            "HoVaTen" => $name,
            "GioiTinh" => $gender,
            "NgaySinh" => $birthday
        ];

        session_write_close();
        header("Location: info.html");
        exit();
    }
?>