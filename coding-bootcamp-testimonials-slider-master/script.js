const prevID = document.getElementById("prev");
const nextID = document.getElementById("next");
const imageJonh = document.getElementById("imageJohn");
const imageTanja = document.getElementById("imageTanja");
const quotesJohn = document.getElementById("quotesJohn");
const quotesTanja = document.getElementById("quotesTanja");

imageJonh.classList.add("toggle");
quotesJohn.classList.add("toggle");

prevID.onclick = function() {
  imageJonh.classList.toggle("toggle");
  imageTanja.classList.toggle("toggle");
  quotesJohn.classList.toggle("toggle");
  quotesTanja.classList.toggle("toggle");
};

nextID.onclick = function() {
  imageJonh.classList.toggle("toggle");
  imageTanja.classList.toggle("toggle");
  quotesJohn.classList.toggle("toggle");
  quotesTanja.classList.toggle("toggle");
};
