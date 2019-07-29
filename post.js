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

function setPosition(newPosition){
  this.position = newPosition;
}

function getPosition(){
  return position;
}

function mapData() {
  alert("map data running")
  //var address = document.getElementbyId('addressFruit').innerHTML;
  // var longitude document.getElementbyId('addressFruit').value;
  var tempPosition = getPosition();
  var latitude = tempPosition.lat();
  var longitude = tempPosition.lng();
  alert(latitude + "," + longitude);
  var fruitType = document.getElementbyId("fruitType").innerHTML;
  alert(fruitType);
  var accesibility = document.getElementbyId("accessibility").innerHTML;
  var phoneNum =document.getElementbyId("phoneNum").innerHTML;
  var email = document.getElementbyId("email").innerHTML;
  var instructions = document.getElementbyId("notes").innerHTML;
  var source = document.getElementbyId("source").innerHTML;
  alert("Okay! All your data has been entered press 'Continue'")
  // form.Content.innerHTML = "";
}
