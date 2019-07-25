function postBackgroundColor() {
  document.body.style.backgroundColor = "#F5E1BD";

}



function mapData() {
  var address = document.getElementById('addressFruit');
  var fruitType = document.getElementById('fruitType');
  alert(address);
  alert(fruitType);
  address.innerHTML = "Welcome " +fruitType.value + ".<br/>";
  form.Content.innerHTML = "";

}
