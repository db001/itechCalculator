<?php
    $calc = $_GET['calc'];
    $calc = str_replace(' ', '+', $calc);
    print_r($calc);

    print_r("\n");

    $ip = $_SERVER['REMOTE_ADDR'];
    print_r($ip);

    print_r("\n");

    $dateAdded = date("d/m/y");
    print_r($dateAdded);
?>