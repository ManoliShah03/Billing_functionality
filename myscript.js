// for product page
function bigImg(x) {
  x.style.height = "90px";
  x.style.width = "90px";
}

function normalImg(x) {
  x.style.height = "70px";
  x.style.width = "70px";
}


//for product to billing page

function myFunction() {
  location.href = "billing.html";
}

function quantityOfItemInc() {
  var quantityitem = document.getElementById("quantity").value;
  quantityitem++;

  if (quantityitem > 1) {
      document.querySelector(".minus-btn").removeAttribute("disabled");
      document.querySelector(".minus-btn").classList.remove("disabled");
  }

  document.getElementById("quantity").value = quantityitem;
}


document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
function quantityOfItemDec() {

  quantityitem = document.getElementById("quantity").value;
  quantityitem--;

  if (quantityitem == 1) {
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
  }

  document.getElementById("quantity").value = quantityitem;
}
