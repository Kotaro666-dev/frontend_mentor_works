const switchElement = document.getElementById("toggleSwitch");
const priceBasic = document.getElementById("priceBasic");
const pricePro = document.getElementById("pricePro");
const priceMaster = document.getElementById("priceMaster");

priceBasic.textContent = "199.99";
pricePro.textContent = "249.99";
priceMaster.textContent = "399.99";

switchElement.addEventListener("click", ChangePrice);

let counter = 0;
function ChangePrice() {
  counter++;
  if (counter % 2 == 0) {
    priceBasic.textContent = "199.99";
    pricePro.textContent = "249.99";
    priceMaster.textContent = "399.99";
  } else {
    priceBasic.textContent = "19.99";
    pricePro.textContent = "24.99";
    priceMaster.textContent = "39.99";
  }
}
