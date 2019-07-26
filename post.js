geocoder = new google.maps.Geocoder();

function postBackgroundColor() {
  document.body.style.backgroundColor = "#F5E1BD";

}

function getCoordinates(address, callback){
  var coordinates;
  geocoder.geocode({address: address}, function (results, status){
    coordinatesObj = results[0].geometry.location;
    coordinates = [coordinatesObj.nb, coordinatesObj.ob];
    callback(coordinates);
  })
}



function mapData() {
  var latitude = document.getElementbyId('addressFruit');
  var longitude document.getElementbyId('addressFruit');
  var fruitType = document.getElementbyId('fruitType');
  var accesibility = document.getElementbyId9('accessibility');
  var phoneNum =document.getElementbyId('phoneNum');
  var email = document.getElementbyId('email');
  var instructions = document.getElementbyId('notes');
  var source = document.getElementbyId('source');
  // alert("Okay! All your data has been entered press 'Continue'")
  // form.Content.innerHTML = "";

}

function sayhi() {
  alert("hi");
}
