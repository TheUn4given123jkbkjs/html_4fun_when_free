<?php
session_start();

header('Content-Type: application/json');

if (isset($_SESSION['booking_info'])) {
    echo json_encode($_SESSION['booking_info']);
} else {
    echo json_encode(null);
}
?>