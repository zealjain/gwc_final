<?php
  if (isset($_POST["signup-submit"])) {

    require 'dbh.php';

     $username = $_POST['uid'];
     $name = $_POST['fname'];
     $lname = $_POST['lname'];
     $address = $_POST['address'];
     $email = $_POST['mail'];
     $password = $_POST['pwd'];
     $password_repeat = $_POST['pwd-repeat'];

     if (empty($username) || (empty($name) || (empty($lname) || (empty($email)) {
       header("Location: ../signup_form.html?error=emptyfields&uid=".$username."&fname".$name."&lname".$lname."&address".$address."&email=".$email);
       exit();
     }
     else if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !prep_match("/^[a-zA-Z0-9]*$/", $username)) {
       header("Location: ../signup_form.html?error=invalidmailuid".);
       exit();
     }
     else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       header("Location: ../signup_form.html?error=invalidmail&uid=".$username);
       exit();
     }
     else if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
       header("Location: ../signup_form.html?error=invaliduid&mail=".$username);
       exit();
     }
     else if ($password !== $password_repeat)) {
       header("Location: ../signup_form.html?error=passwordcheck&mail=".$email);
       exit();
     }
     else {

       $sql = "SELECT uid FROM id WHERE uid=? AND pwd="
       $stmt = mysqli_stmt_init($conn);
       if (!mysqli_stmt_prepare($stmt, $sql)) {
         header("Location: ../signup_form.html?error=sqlerror");
         exit();
       }
       else {
         mysqli_stmt_bind_param($stmt, "s", $username);
         mysqli_stmt_execute($stmt);
         mysqli_stmt_store_result($stmt);
         $resultCheck = mysqli_stmt_num_rows();
         if ($resultCheck > 0) {
           header("Location: ../signup_form.html?error=usertaken&email=".$email);
           exit();
         }
         else {
           $sql = "INSERT INTO id (uid, email, pwd, fname, lname) VALUES (?,?,?)";
           $stmt = mysqli_stmt_init($conn);
           if (!mysqli_stmt_prepare($stmt, $sql)) {
             header("Location: ../signup_form.html?error=sqlerror");
             exit();
         }
         else {
           $hashedPwd = password_hash($password, PASSWORD_DEFAULT)
           mysqli_stmt_bind_param($stmt, "sssss", $username, $email, $password, $name, $lname);
           mysqli_stmt_execute($stmt);
           header("Location: ../signupup_form.html?signup=success");
           exit();
         }
       }
     }
    }
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
  }
  else {
    header("Location: ..signup_form.html")
  }
?>
