
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
function check() {
  fetchJSON('fruitful.json', function(data) {
    var email = document.form.email.value;
    var password = document.form.psw.value;
    for (var i = 0; i <data.length; i++) {
      if (email == data[i].email && password == data[i].password) {
        var correct = 1;
        var account_index = i;
      }
    }
    if (correct == 1) {
      data[account_index].status = "in";
      window.location.href = "account.html";
      var signin = "1";
      alert(signin);
    } else {
      document.getElementById("after_submit").style.visibility = "visible";
    }
  });
}


function signout() {
  fetchJSON('fruitful.json', function(data) {
    var account_index = data[0];
    account_index = parseInt(account_index);
    data.accounts[account_index].status = 'out';
    signin = "none";
    window.location.href = "profile.html";
  });
}

window.onload = function init() {
  fetchJSON("fruitful.json", function(data) {
    alert(signin);
    if (signin === "none") {
      document.getElementById("lol").innerHTML = "<a href='profile.html'>Sign in</a>";
    } else {
      document.getElementById('lol').innerHTML = "<a href='profile.html'><img src='profile.png' alt='Profile Logo' width=40px height=40px ></a>";
    }
  });
}
