<?php 
    session_start();
    if(isset($_SESSION['unique_id'])){
        include_once "config.php";
        $outgo_id = $_SESSION['unique_id'];
        $incom_id = mysqli_real_escape_string($conn, $_POST['incom_id']);
        $message = mysqli_real_escape_string($conn, $_POST['message']);
        if(!empty($message)){
            $sql = mysqli_query($conn, "INSERT INTO messages (incoming, outgoing, msg)
                                        VALUES ({$incom_id}, {$outgo_id}, '{$message}')") or die();
        }
    }else{
        header("location: ../login.php");
    }


    
?>