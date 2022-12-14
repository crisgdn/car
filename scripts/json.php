<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    header("Access-Control_Allow_Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once("config.php");

    $label = "id";

    //Return all results
    $getContent = getAll('tbl_projects');

    

    if(!is_string($getContent)) {

        $result = [];
        while($conResult = mysqli_fetch_assoc($getContent)) {
           $result[$conResult[$label]] = $conResult;
        }
        echo json_encode($result, JSON_PRETTY_PRINT);
    }else{
        //Error Message
        echo $getContent;
    }


?>