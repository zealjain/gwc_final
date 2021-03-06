var postiton;
var database = firebase.database();

function setPosition(newPosition) {
  this.position = newPosition;
}

function getPosition() {
  return position;
}
// this function converts all of the information from the form into variables using the IDs
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

  //this function will set all the variables into keys
  writeUserData(lat, lng, fruitType, accessibility, phoneNum, email, instructions, source);

  var confirm = getConfirmation();
  if(confirm == true){
    //createMarker(lat, lng, fruitType, accessibility, phoneNum, email, instructions, source);
    //readData();
    //window.location.href = 'pick.html';
  }
}

function writeUserData(lat, lng, fruitType, accessibility, phoneNum, email, instructions, source) {
  console.log(firebase.database().ref('userPosts/' + email));
  firebase.database().ref('userPosts/' + email).set({
    lat: lat,
    lng: lng,
    fruitType: fruitType,
    accessibility: accessibility,
    phoneNum: phoneNum,
    email: email,
    instructions: instructions,
    source: source
  });
  console.log("finished writing");
}
//this function confirms that the user knows about our terms and conditions

function getConfirmation() {
  var response = confirm("Your posting is getting approved by admin. By completing the post you are agreeing to our terms and conditions.");
  return response;
}
