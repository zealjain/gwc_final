<?php
$url = parse_url(getenv("mysql://b030d8f71e70b5:314bb055@us-cdbr-iron-east-02.cleardb.net/heroku_7431d3ae5da2615?reconnect=true"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);

$conn = mysqli_connect($server, $username, $password, $db);

if (!$conn) {
  die("Connection failed: ".mysqli_connect_error());
}
else {
  echo("yeet");
}

?>
