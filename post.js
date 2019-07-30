var postiton;

//geocoder = new google.maps.Geocoder();
//
// function sayhi() {
//   alert("pickles");
// }

// function postBackgroundColor() {
//   document.body.style.backgroundColor = "#F5E1BD";
//
// }

//Geocode function
// function getCoordinates(address, callback){
//   var coordinates;
//   geocoder.geocode({address: address}, function (results, status){
//     coordinatesObj = results[0].geometry.location;
//     coordinates = [coordinatesObj.nb, coordinatesObj.ob];
//     callback(coordinates);
//   })
// }

function setPosition(newPosition) {
  this.position = newPosition;
}

function getPosition() {
  return position;
}

function mapData() {
  var tempPosition = getPosition();
  var lat = tempPosition.lat();
  var lng = tempPosition.lng();
  var fruitType = document.getElementById("fruitType").value;
  var accessibility = document.getElementById("accessibility").value;
  var phoneNum = document.getElementById("phoneNum").value;
  var email = document.getElementById("email").value;
  var instructions = document.getElementById("notes").value;
  var source = document.getElementById("source").value;

  var confirm = getConfirmation();
  if(confirm == true){
    createMarker(lat, lng, fruitType, accessibility, phoneNum, email, instructions, source);
    window.location.href = 'pick.html';
  }

}

function getConfirmation() {
  var response = confirm("By pressing OK you are agreeing to our Terms and Conditions");
  return response;
}
