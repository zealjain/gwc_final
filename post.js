var postiton;

function setPosition(newPosition) {
  this.position = newPosition;
}

function getPosition() {
  return position;
}

function mapData() {
  alert("map data running")
  var tempPosition = getPosition();
  var latitude = tempPosition.lat();
  var longitude = tempPosition.lng();
  alert(latitude + "," + longitude);

  //fruit
  var fruitType = document.getElementById("fruitType").value;
  alert(fruitType);

  //accessibility
  var accesibility = document.getElementById("accessibility").value;
  alert(accesibility);

  //phone Number
  var phoneNum = document.getElementById("phoneNum").value;
  alert(phoneNum);

  //email
  var email = document.getElementById("email").value;
  alert(email);

  //notes section
  var instructions = document.getElementById("notes").value;
  alert(instructions);

  //name or username
  var source = document.getElementById("source").value;
  alert(source);

  getConfirmation();

}

function getConfirmation() {
  var response = confirm("Is all data correct? Press OK to Continue");
  return response;
}
