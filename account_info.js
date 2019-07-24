function incorrect() {
  document.getElementById("after_submit").style.visibility = "visible";
};

var signin = 0;
function check() {
  var email = document.form.email.value;
  var password = document.form.psw.value;
  if (email == "zeal.jain110@gmail.com" && password == "hello") {
    signin = 1;
    window.location.href = "account.html";
  } else {
    document.getElementById("after_submit").style.visibility = "visible";
  }
}

if (signin == 0) {
  document.getElementById("profile") = "Sign in";
} else {
  document.getElementById("profile") = "<img src='profile.png' alt='Profile Logo' width=40px height=40px >";
}
