
function incorrect() {
  document.getElementById("after_submit").style.visibility = "visible";
}
var signin = 0;
function check() {
  fetchJSON('fruitful.json') {
    for (var i = 0; i <fruitful.accounts.length; i++) {
      var email = document.form.email.value;
      var password = document.form.psw.value;
      if (email == fruitful.accounts.i.email && password == fruitful.accounts.i.password) {
        var correct = 1;
      }
    }
    if (correct == 1) {
      fruitful.accounts.i.status = "in";
      window.location.href = "account.html";
    } else {
      document.getElementById("after_submit").style.visibility = "visible";
    }
}


function signout() {
  fetchJSON('fruitful.json') {
    fruitufl.accounts. = 0;
    window.location.href = "profile.html";
}

window.onload = function init() {
  fetchJSON("fruitful.json") {
    if (fruitful.accounts.i.status == "out") {
      alert("lol");
      document.getElementById("lol").innerHTML = "<a href='profile.html'>Sign in</a>";
    } else {
      alert("ok");
      document.getElementById('lol').innerHTML = "<a href='profile.html'><img src='profile.png' alt='Profile Logo' width=40px height=40px ></a>";
    }
  }
}



function fetchJSON(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}
