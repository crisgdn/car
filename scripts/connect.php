<?php

    // Set up connection creds

    ini_set('display_errors', 1);
    error_reporting(E_ALL);


    $servername = "localhost";
    $database = "u505352870_car";
    $username = "u505352870_criscar";
    $password = "fusca82@BR";
     
    // Create connection
     
    $link = mysqli_connect($servername, $username, $password, $database);
     
    // Check connection
     
    if (!$link) {
     
        die("Connection failed: " . mysqli_connect_error());
     
    }
    //echo "Connected successfully";
   // mysqli_close($link);
 ?>