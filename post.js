function postBackgroundColor() {
  document.body.style.backgroundColor = "#F5E1BD";

}



function mapData() {
  var address = document.getElementbyId('addressFruit');
  var fruitType = document.getElementbyId('fruitType');
  var latitude = document.getElementbyId('addressFruit');
  var longitude document.getElementbyId('addressFruit');
  var phoneNum =document.getElementbyId('phoneNum');
  var email = document.getElementbyId('email');
  var instructions = document.getElementbyId('notes');


  var fruitType = document.getElementByName('fruitType');
  alert(fruitType);
  address.innerHTML = "Welcome " +fruitType.value + ".<br/>";
  alert(address.innerHTML);

  // form.Content.innerHTML = "";
latitude, longitude, fruitType, accessibility, phoneNum, email, instructions, source

}
