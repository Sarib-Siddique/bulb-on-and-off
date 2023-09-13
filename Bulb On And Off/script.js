var state = 0;
function bulbOnOff() {
  if (state == 1) {
    document.getElementById("img").src = "./Images/light-bulb-off.png";
    state = 0;
  } else {
    document.getElementById("img").src = "./Images/light-bulb-on.png";
    state = 1;
  }
}
