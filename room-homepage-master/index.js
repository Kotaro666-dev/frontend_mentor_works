const hamburgerIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const nav = document.getElementById("nav");
const angleLeft = document.getElementById("angleLeft");
const angleRight = document.getElementById("angleRight");

const heroImage = document.getElementById("heroImage");
const heroTitle = document.getElementById("heroTitle");
const heroDetails = document.getElementById("heroDetails");

const mediaQuery = window.matchMedia("(max-width: 767px)");
let data;

if (mediaQuery.matches) {
  data = [
    {
      image: "./images/mobile-image-hero-1.jpg",
      title: "Discover innovative ways to decorate",
      details:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      image: "./images/mobile-image-hero-2.jpg",
      title: "We are available all across the globe",
      details:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      image: "./images/mobile-image-hero-3.jpg",
      title: "Manufactured with the best materials",
      details:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];
} else {
  data = [
    {
      image: "./images/desktop-image-hero-1.jpg",
      title: "Discover innovative ways to decorate",
      details:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      image: "./images/desktop-image-hero-2.jpg",
      title: "We are available all across the globe",
      details:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      image: "./images/desktop-image-hero-3.jpg",
      title: "Manufactured with the best materials",
      details:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];
}

var index = 0;
heroImage.src = data[index]["image"];
heroTitle.innerHTML = data[index]["title"];
heroDetails.innerHTML = data[index]["details"];

function showNav() {
  hamburgerIcon.style.visibility = "hidden";
  closeIcon.style.visibility = "visible";
  nav.style.visibility = "visible";
}

function closeNav() {
  hamburgerIcon.style.visibility = "visible";
  closeIcon.style.visibility = "hidden";
  nav.style.visibility = "hidden";
}

function incrementIndex() {
  index++;
  updateHeroData();
}

function decrementIndex() {
  index--;
  updateHeroData();
}

function updateHeroData() {
  if (index == 3) {
    index = 0;
  } else if (index == -1) {
    index = 2;
  }
  // console.log(index);
  heroImage.src = data[index]["image"];
  heroTitle.innerHTML = data[index]["title"];
  heroDetails.innerHTML = data[index]["details"];
}

hamburgerIcon.addEventListener("click", showNav);
closeIcon.addEventListener("click", closeNav);
angleRight.addEventListener("click", incrementIndex);
angleLeft.addEventListener("click", decrementIndex);
