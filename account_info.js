
function incorrect() {
  document.getElementById("after_submit").style.visibility = "visible";
}
var signin = 0;
function check() {
  var email = document.form.email.value;
  var password = document.form.psw.value;
  if (email == "zeal.jain110@gmail.com" && password == "hello") {
    signin = 1;
    if (signin == 1) {
      alert(signin);
    }
    window.location.href = "account.html";
  } else {
    document.getElementById("after_submit").style.visibility = "visible";
  }
}


function signout() {
  signin = 0;
  window.location.href = "profile.html";
}

window.onload = function init() {
  if (signin == 0) {
    alert("lol");
    document.getElementById("lol").innerHTML = "<a href='profile.html'>Sign in</a>";
  } else if (signin == 1) {
    alert("ok");
    document.getElementById('lol').innerHTML = "<a href='profile.html'><img src='profile.png' alt='Profile Logo' width=40px height=40px ></a>";
  }
}



// function fetchJSON(path, callback) {
//   var httpRequest = new XMLHttpRequest();
//   httpRequest.onreadystatechange = function() {
//     if (httpRequest.readyState === 4) {
//       if (httpRequest.status === 200) {
//         var data = JSON.parse(httpRequest.responseText);
//         if (callback) callback(data);
//       }
//     }
//   };
//   httpRequest.open('GET', path);
//   httpRequest.send();
// }
