geocoder = new google.maps.Geocoder();
//
// function sayhi() {
//   alert("pickles");
// }

// function postBackgroundColor() {
//   document.body.style.backgroundColor = "#F5E1BD";
//
// }

<<<<<<< HEAD
function getCoordinates(address, callback) {
=======
//Geocode function
function getCoordinates(address, callback){
>>>>>>> 59a3a5e7350c99a1792bf40234b48ef1c77d2ace
  var coordinates;
  geocoder.geocode({address: address}, function (results, status){
    coordinatesObj = results[0].geometry.location;
    coordinates = [coordinatesObj.nb, coordinatesObj.ob];
    callback(coordinates);
  })
}



function mapData() {
  var address = document.getElementbyId('addressFruit').value;
  // var longitude document.getElementbyId('addressFruit').value;
  var fruitType = document.getElementbyId("fruitType").value;
  var accesibility = document.getElementbyId("accessibility").value;
  var phoneNum =document.getElementbyId("phoneNum").value;
  var email = document.getElementbyId("email").value;
  var instructions = document.getElementbyId("notes").value;
  var source = document.getElementbyId("source").value;
  // alert("Okay! All your data has been entered press 'Continue'")
  // form.Content.innerHTML = "";
}
