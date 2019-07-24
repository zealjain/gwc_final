function incorrect() {
  document.getElementById("after_submit").style.visibility = "visible";
};
function check() {
  var email = document.form.email.value;
  var password = document.form.psw.value;
  if (email == "zeal.jain110@gmail.com" && password == "hello") {
    window.location.href = "account.html";
  } else {
    document.getElementById("after_submit").style.visibility = "visible";
  }
}
