function postBackgroundColor() {
  document.body.style.backgroundColor = "#F5E1BD";

}



function mapData() {
  var address = document.getElementById('finnaPost');
  var fruitType = document.getElementById('fruitType');
  alert(address.innerHTML);
  alert(fruitType);
  address.innerHTML = "Welcome " +fruitType.value + ".<br/>";
  form.Content.innerHTML = "";


}
