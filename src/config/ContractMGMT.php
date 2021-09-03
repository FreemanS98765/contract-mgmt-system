<?php

    $hostname="45.130.83.186";
    $username="uqfk1kp5urx5x";
    $password="y211~9&6$23&";
    $database="dbt4yxagyszfid";

    $link = new mysqli($hostname, $username, $password, $database);

    if ($link->connect_error) {
        die("Connection failed: " . $link->connect_error);
    } else {echo "<br>Connected Successfully"; }

    /* Selects correct database */
    $mysqli->select_db($database) or die( "Unable to select database");

    /* Closes database connection */
    mysqli_close($link);

?>