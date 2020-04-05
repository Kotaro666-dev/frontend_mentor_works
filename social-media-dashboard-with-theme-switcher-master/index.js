const btnChangeMode = document.getElementById("toggleBtn");
const bodyElement = document.body;
const headerElement = document.getElementById("header");
const totalCard = document.querySelectorAll(".item-total");
const todayCard = document.querySelectorAll(".item-today");

const title = document.querySelectorAll(".title");
const followers = document.querySelectorAll(".followers-number");

btnChangeMode.addEventListener("click", darkMode);

function darkMode() {
  console.log(btnChangeMode);
  bodyElement.classList.toggle("dark-mode-body");
  headerElement.classList.toggle("dark-mode-top");

  for (let i = 0; i < totalCard.length; ++i) {
    totalCard[i].classList.toggle("dark-mode-cardBG");
  }

  for (let i = 0; i < todayCard.length; ++i) {
    todayCard[i].classList.toggle("dark-mode-cardBG");
  }

  for (let i = 0; i < title.length; ++i) {
    title[i].classList.toggle("dark-mode-color");
  }

  for (let i = 0; i < followers.length; ++i) {
    followers[i].classList.toggle("dark-mode-color");
  }

  //   console.log(title);
  //   console.log(todayCard);
}
