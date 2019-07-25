function postBackgroundColor() {
  document.body.style.backgroundColor = "#F5E1BD";

}



function mapData() {
  var address = document.getElementByName('finnaPost');
  var fruitType = document.getElementByName('fruitType');
  alert(fruitType);
  address.innerHTML = "Welcome " +fruitType.value + ".<br/>";
  alert(address.innerHTML);

  // form.Content.innerHTML = "";


}
