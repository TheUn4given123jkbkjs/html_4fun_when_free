<?php
    session_start();

    $num = 10;

    for($i = 2; $i<$num; $i++){
        echo("Bang co chuong: $i<br>");
        for($j = 1; $j<=$num; $j++){
            $ans = $i*$j;
            echo("$i x $j = $ans <br>");
        }
        echo("<br>");
    }
?>