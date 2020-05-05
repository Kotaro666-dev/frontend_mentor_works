const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const nav = document.getElementById("nav");

hamburger.style.visibility = "visible";
close.style.visibility = "hidden";
nav.style.visibility = "hidden";

function show() {
  if (hamburger.style.visibility == "visible") {
    hamburger.style.visibility = "hidden";
    close.style.visibility = "visible";
    nav.style.visibility = "visible";
  }
}

function hide() {
  if (close.style.visibility == "visible") {
    hamburger.style.visibility = "visible";
    close.style.visibility = "hidden";
    nav.style.visibility = "hidden";
  }
}

hamburger.addEventListener("click", show);
close.addEventListener("click", hide);
