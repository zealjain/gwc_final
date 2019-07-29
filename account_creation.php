<?php
  if (isset($_POST["signup-submit"])) {
     $username = $_POST['uid'];
     $name = $_POST['fname'];
     $lname = $_POST['lname'];
     $address = $_POST['address'];
     $email = $_POST['mail'];
     $password = $_POST['pwd'];
     $password_repeat = $_POST['pwd-repeat'];

     if (empty($username) || (empty($name) || (empty($lname) || (empty($email) || (empty($address)) {
       header("Location: ../signup.php?error=emptyfields&uid=".$username."&fname".$name."&lname".$lname."&address".$address."&email=".$email);
       exit();
     }
     else if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !prep_match("/^[a-zA-Z0-9]*$/", $username)) {
       header("Location: ../signup.php?error=invalidmailuid".);
       exit();
     }
     else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       header("Location: ../signup.php?error=invalidmail&uid=".$username);
       exit();
     }
     else if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
       header("Location: ../signup.php?error=invaliduid&mail=".$username);
       exit();
     }
     else if ($password !== $password_repeat)) {
       header("Location: ../signup.php?error=passwordcheck&mail=".$email);
       exit();
     }
     else {

       $sql = "SELECT uidUsers FROM users WHERE uidUsers=? AND pwdUsers="
       $stmt = mysqli_stmt_init($conn);
       if (!mysqli_stmt_prepare($stmt, $sql)) {
         header("Location: ../signup.php?error=sqlerror");
         exit();
       }
       else {
         mysqli_stmt_bind_param($stmt, "s", $username);
         mysqli_stmt_execute($stmt);
         mysqli_stmt_store_result($stmt);
         $resultCheck = mysqli_stmt_num_rows();
         if ($resultCheck > 0) {
           header("Location: ../signup.php?error=usertaken&email=".$email);
           exit();
         }
         else {
           $sql = "INSERT INTO users () VALUES ()";
         }
       }
       // $userformdata = array(
       //   'uid' => $username,
       //   'name' => $name,
       //   'lname' => $lname,
       //   'address' => $address,
       //   'email' => $email,
       //   'pwd' => $password
       //  );
       //
       // //user data file name
       //  $userFile = "./userdata.json";
       //
       //  //load local Json get_included_file
       //  $jsonuserdata = file_get_contents($userFile) ;
       //
       //   //Push newly added user in to array
       //  array_push($user_arr_data, $userformdata) ;
       //
       //
       //
       // //Convert updated arrow in to Jason
       // $jsonuserdata = json_encode($userformdata, JSON_PRETTY_PRINT) ;
       //
       //
       // //Write json data in to userdata.json
       //
       // if(file_put_contents($userFile, $jsonuserdata)){
       //    header("Location: ../signup.php?signup=success")
       // }else {
       //   echo "error daving data" ;
       // }
     }
     // LEARN HOW TO LOOP THROUGH JSON FILE TO CHECK IF USERNAME IS TAKEN
     // else {
     //
     // }
  }

?>
