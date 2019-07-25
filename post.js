function postBackgroundColor() {
  document.body.style.backgroundColor = "#F5E1BD";

}
function juliannesFunction() {
  alert("Congrats you posted!")
}

function mapData() {
  var address = document.getElementById('address')

}


function init() {
  fetchJSON('data.json',function(data) {
    console.log(data)
  });
}
