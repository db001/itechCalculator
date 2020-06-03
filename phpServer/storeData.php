<?php
    $calc = $_GET['calc'];
    $calc = str_replace(' ', '+', $calc);
    print_r($calc);

    print_r("\n");

    $ip = $_SERVER['REMOTE_ADDR'];
    print_r($ip);

    print_r("\n");

    $dateAdded = date("h:i:sa d/m/y");
    print_r($dateAdded);

    print_r("\n");

    $browser = $_SERVER['HTTP_USER_AGENT'];
    print_r($browser);

    // Open file for writing
    $file = fopen('calculations.csv', 'a');
    
    // Put data into array
    $data = array(
        $calc, $ip, $dateAdded, $browser
    );
    
    // Save data to file
    fputcsv($file, $data);
    
    // Close file
    fclose($file);
?>