
  //$user_arr_data = array() ; //empty array
//Get form data

//header("Content-Type: application/html; charset=UTF-8");

// $fname = $_POST['fname'] ;
// $lname = $_POST['lname'] ;
// $email = $_POST['email'] ;

// $userformdata = array(
//   'fname' => $_POST['fname'],
//   'lname'=> $_POST['lname'],
//   'email'=> $_POST['email'],
//   'password' => $_POST['psw']
//  );

// //user data file name
//  $userFile = "./userdata.json";

 // //load local Json get_included_file
 //  $jsonuserdata = file_get_contents($userFile) ;

//for (i in length of json array):
    //if $email = jsonfile[i].email
      // $Userexisterror = "Your email already has account" ;
      // $lname1 = "bhupali";
//  $user_arr_data = json_decode($jsonuserdata, true) ;

  //Push newly added user in to array
//  array_push($user_arr_data, $userformdata) ;



//Convert updated arrow in to Jason
//$jsonuserdata = json_encode($userformdata, JSON_PRETTY_PRINT) ;


//Write json data in to userdata.json

// if(file_put_contents($userFile, $jsonuserdata)){
//    echo "!!!user data saved" ;
// }else {
//   echo "error daving data" ;
// }


<html lang="en" dir="ltr">
  <head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <title>Log In</title>
    <link rel="stylesheet" href="profile_style.css">
    <script async src="create_accountTC.js"></script>
  </head>

  <header>
  <nav id="navbar">
    <a href="index.html"><img src="https://afroleft.com/content/images/2015/08/fruitful-logo-iteration3-2.jpg" alt="Fruitful logo" id="header-img"></a>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="pick.html">Pick</a></li>
      <li><a href="post.html">Post</a></li>
      <li><a href="profile.html">Sign In</a></li>
    </ul>
  </nav>
  </header>

  <body>
    <form id="form" method="POST" action="account_creation.php">
      <div class="container">
        <h1>CREATE ACCOUNT</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>

        <label for="uid"><b>Username</b></label>
        <input type="text" placeholder="Enter A Username" name= "uid" required>

        <label for="fname"><b>First Name</b></label>
        <input type="text" placeholder="Enter Your First Name" name= "fname" required>

        <label for="lname"><b>Last Name</b></label>
        <input type="text" placeholder="Enter Your Last Name" name= "lname" required>

        <label for="fname"><b>Home Address</b></label>
        <input type="text" placeholder="Enter Your Home Address" name= "address" required>

        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

        <label>
          <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
        </label>

        <p>By creating an account you agree to our <a href="#myModal" style="color:dodgerblue" id="myBtn">Terms & Privacy</a>.</p>

        <!-- The Modal -->
        <div id="myModal" class="modal">

          <!-- Modal content -->
          <div class="modal-content">
            <span class="close">&times;</span>
            <h1>Terms and Conditions ("Terms")</h1>
            <p>Last updated: July 25, 2019</p>
            <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully and completely before using the file:///Users/michellew/Documents/GitHub/gwc_final/index.html website (the "Service") operated by Fruitful ("us", "we", or "our").</p>
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. The Terms and Conditions agreement  for Fruitful has been created with the help of <a href="https://www.termsfeed.com/">TermsFeed</a>.</p>
            <h2 class="tc_heading">Accounts</h2>
            <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
            <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
            <h2 class="tc_heading">External Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Fruitful.</p>
            <p>Fruitful has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Fruitful shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
            <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
            <h2 class="tc_heading">Privacy</h2>
            <p> All information you input in Fruitful will be publicly avaliable. You are responsible for any information you submit </p>
            <h2>Security</h2>
			      <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
            <h2 class="tc_heading">Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
            <h2 class="tc_heading">Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
            <h2 class="tc_heading">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us.</p>
            <p>WE ARE NOT LIABLE FOR ANY INJURIES/DISEASES/ISSUES CAUSED BY USING OUR SITE OR OBTAINING FRIUT<p>
          </div>

        </div>

        <div class="clearfix">
          <button type="button" onclick="window.location.href='profile.html'" class="cancelbtn">« Back</button>
          <button type="submit" name="signup-submit" class="signupbtn">Sign Up</button>
        </div>
      </div>
    </form>

    <footer>
      <p>Created By Dhriti, Julianne, Zeal, Surabhi, and Michelle </p>
    </footer>

  </body>
</html>
//load local Json get_included_file
 //$jsonuserdata = file_get_contents($userFile) ;

//Convert Jason in to arry
//if($jsonuserdata == NULL ){
  //$user_arr_data = json_decode($jsonuserdata, true) ;
//}else {
  //echo "jason data is null" ;
//}
