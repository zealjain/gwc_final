
function hamburger_toggle() {
  const burger_toggle = document.querySelectorAll('#myLinks');
  if (burger_toggle.style.display == "block") {
    burger_toggle.style.display = "none";
  } else {
    burger_toggle.style.display = "block";
  }
}
