<?php
    $calc = $_GET['calc'];
    $calc = str_replace(' ', '+', $calc);
    $ip = $_SERVER['REMOTE_ADDR'];
    $timestamp = date('Y-m-d H:i:s');
    $browser = $_SERVER['HTTP_USER_AGENT'];

    // Open file for writing
    $file = fopen('calculations.csv', 'a');
    
    // Put data into array
    $data = array(
        $calc, $ip, $timestamp, $browser
    );
    
    // Save data to file
    fputcsv($file, $data);
    
    // Close file
    fclose($file);
?>