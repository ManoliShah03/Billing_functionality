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

// increment
//  function increment() {
//    var quantityitem = document.getElementById("quantity").value;
//    quantityitem++;

//    if (quantityitem > 1) {
//       document.querySelector(".minus-btn").setAttribute("disabled","disabled");
//       document.querySelector(".minus-btn").classList.remove("disabled","disabled");
//    }

//    document.getElementById("quantity").value = quantityitem;
//  }

// decrement
// document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
// function decrement() {

//     quantityitem = document.getElementById("quantity").value;
//     quantityitem--;

//     if (quantityitem == 1) {
//         document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
//     }

//     document.getElementById("quantity").value = quantityitem;
// }

// function quantityOfItemInc() {
//   var quantityitem = document.getElementById("quantity").value;
//   quantityitem++;

//   if (quantityitem > 1) {
//     document.querySelector(".minus-btn").removeAttribute("disabled");
//     document.querySelector(".minus-btn").classList.remove("disabled");
//   }


//   document.getElementById("quantity").value = quantityitem;
// }

//decreament
// document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
// function quantityOfItemDec() {

//   quantityitem = document.getElementById("quantity").value;
//   quantityitem--;

//   if (quantityitem == 0) {
//     document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
//   }

//   document.getElementById("quantity").value = quantityitem;
// }


// increament
function quantityOfItemInc() {
  var quantityitem = document.getElementById("quantity").value;
  quantityitem++;

  if (quantityitem > 1) {
      document.querySelector(".minus-btn").removeAttribute("disabled");
      document.querySelector(".minus-btn").classList.remove("disabled");
  }

  document.getElementById("quantity").value = quantityitem;
}

// decreament
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
function quantityOfItemDec() {

  quantityitem = document.getElementById("quantity").value;
  quantityitem--;

  if (quantityitem == 1) {
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
  }

  document.getElementById("quantity").value = quantityitem;
}

// function ItemValidation() {
//   reg = /^[0-9]+$/;
//   for (var i = 0; i < price.length; i++) {
//     if (reg.test(price[i]) || price[i] == ".") {
//       finalValueOfItem += price[i];
//     }
//   }
//}

// const priceOftheThing = document.getElementById("priceOfThing");

// console.log(priceOftheThing);
// let price = priceOftheThing[].innerHTML;
// console.log("Price of Element : ", price);