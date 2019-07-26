
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
function incorrect() {
  document.getElementById("after_submit").style.visibility = "visible";
}
var signin = 0;
function check() {
  fetchJSON('fruitful.json', function(data) {
    for (var i = 0; i <data.length; i++) {
      var email = document.form.email.value;
      var password = document.form.psw.value;
      if (email == data[i].email && password == data[i].password) {
        var correct = 1;
        var account_index = i;
      }
    }
    if (correct == 1) {
      data[account_index].status = "in";
      window.location.href = "account.html";
    } else {
      document.getElementById("after_submit").style.visibility = "visible";
    }
    data.person[0] = account_index;
  });
}


function signout() {
  fetchJSON('fruitful.json', function(data) {
    var account_index = data.person[0];
    data[account_index].status = 'out';
    window.location.href = "profile.html";
  });
}

window.onload = function init() {
  fetchJSON("fruitful.json", function(data) {
    var account_index = data.person[0];
    if (data[account_index].status == "out") {
      alert("lol");
      document.getElementById("lol").innerHTML = "<a href='profile.html'>Sign in</a>";
    } else {
      alert("ok");
      document.getElementById('lol').innerHTML = "<a href='profile.html'><img src='profile.png' alt='Profile Logo' width=40px height=40px ></a>";
    }
  });
}
