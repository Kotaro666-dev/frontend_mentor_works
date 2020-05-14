const hamburgerID = document.getElementById("hamburger");
const crossID = document.getElementById("cross");
const navID = document.getElementById("nav");
const boxshadowID = document.getElementById("boxshadow");
const listItemID = document.getElementById("list_item");

hamburgerID.onclick = function() {
  hamburgerID.style.display = "none";
  crossID.style.display = "block";
  navID.style.display = "block";
  boxshadowID.style.display = "block";
};

crossID.onclick = function() {
  hamburgerID.style.display = "block";
  crossID.style.display = "none";
  navID.style.display = "none";
  boxshadowID.style.display = "none";
};
