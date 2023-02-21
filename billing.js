var ItemValue, ItemQuantity;
var priceToPay;


document.getElementById("validationBtn").addEventListener("click", function(event){
    event.preventDefault()
  });


//form validation
function validateForm() {
    
    var flag = false;
console.log("manoli");
console.log("test");
    var ship_first_name, ship_last_name, ship_street_add,  ship_city, ship_postal, ship_state;
    var bill_first_name, bill_last_name, bill_street_add, bill_city, bill_postal, bill_state;

    ship_first_name = document.forms["myForm"]["ShippingAd"].value;
    ship_last_name = document.forms["myForm"]["ShippingAd1"].value;
    ship_street_add = document.forms["myForm"]["ShippingAd2"].value;
    ship_city = document.forms["myForm"]["ShippingAd6"].value;
    ship_postal = document.forms["myForm"]["ShippingAd9"].value;
    ship_state = document.forms["myForm"]["ShippingAd12"].value;

    bill_first_name = document.forms["myForm"]["BillingAd"].value;
    bill_last_name = document.forms["myForm"]["BillingAd1"].value;
    bill_street_add = document.forms["myForm"]["BillingAd2"].value;
    bill_city = document.forms["myForm"]["BillingAd6"].value;
    bill_postal = document.forms["myForm"]["BillingAd9"].value;
    bill_state = document.forms["myForm"]["BillingAd12"].value;

// first name validation
    var regName = /^[A-Za-z]+$/;

    if(ship_first_name == "" || ship_first_name==null){
        alert('First Name cannot be empty');
        return false;
    }

    if(!(regName.test(ship_first_name)))
    {
        alert('Invalid First Name given');
        return false;
    }


    if ((ship_first_name.length <= 2) || (ship_first_name.length > 20)) {
        alert("To Less Characters in First Name for Shipping Adress");
        return false;
    }

// last name validation
    var regName = /^[A-Za-z]+$/;
    if(ship_last_name == "" || ship_last_name==null){
        alert('Last Name cannot be empty');
        return false;
    }
    if(!(regName.test(ship_last_name)))
    {
        alert('Invalid Last Name given');
        return false;
    }

    if ((ship_last_name.length <= 2) || (ship_last_name.length > 20)) {
        alert("To Less Characters in Last Name for Shipping Adress");
        return false;
    }


//street adress validation
if (ship_street_add == "" || ship_street_add == null) {
    alert("Street Address nedded for Shipping Adress");
    return false;
}

//City validation
if (ship_city == "" || ship_city == null) {
    alert("City Name nedded for Shipping Adress");
    return false;
}

//Postal-code validation
if (ship_postal == "" || ship_postal == null) {
    alert("Postal Code nedded for Shipping Adress");
    return false;
}

if (!/^[0-9]+$/.test(ship_postal)) {
    alert("Only Numeric values allowed");
    return false;
}


//state validation
if (ship_state == null || ship_state == "") {
    alert("State Name nedded for Shipping Adress");
    return false;
}


var ship_bill_value = document.getElementById("myCheck");

if (ship_bill_value.checked == true) {
    bill_first_name = ship_first_name;
    bill_last_name = ship_last_name;
    bill_street_add = ship_street_add;
    bill_city = ship_city;
    bill_postal = ship_postal;
    bill_state = ship_state;

    flag = true;
}

else {

//bill first name validation
var regName = /^[A-Za-z]+$/;
if(bill_first_name == "" || bill_first_name==null){
    alert('First Name cannot be empty');
    return false;
}

if(!(regName.test(bill_first_name)))
{
    alert('Invalid First Name given');
    return false;
}


if ((bill_first_name.length <= 2) || (bill_first_name.length > 20)) {
    alert("To Less Characters in First Name for Billing Adress");
    return false;
}

//last name validation
var regName = /^[A-Za-z]+$/;
    if(bill_last_name == "" || bill_last_name==null){
        alert('Last Name cannot be empty');
        return false;
    }
    if(!(regName.test(bill_last_name)))
    {
        alert('Invalid Last Name given');
        return false;
    }

    if ((bill_last_name.length <= 2) || (bill_last_name.length > 20)) {
        alert("To Less Characters in Last Name for Billing Adress");
        return false;
    }


//street adress validation
if (bill_street_add == "" || bill_street_add == null) {
    alert("Street Address nedded for Billing Adress");
    return false;
}

//City validation
if (bill_city == "" || bill_city == null) {
    alert("City Name nedded for Billing Adress");
    return false;
}

//Postal-code validation
if (bill_postal == "" || bill_postal == null) {
    alert("Postal Code nedded for Billing Adress");
    return false;
}
if (!/^[0-9]+$/.test(bill_postal)) {
    alert("Only Numeric values allowed");
    return false;
}


//state validation
if (bill_state == null || bill_state == "") {
    alert("State Name nedded for Billing Adress");
    return false;
}
flag = true;
}
if (flag == true) {
    Place_Order()
}
};


// billing and shipping 


        function myFunction() {
            var checkBox = document.getElementById("myCheck");
            var textShip = document.getElementById("ShippingAd");
            var textBil = document.getElementById("BillingAd");

            var textShip1 = document.getElementById("ShippingAd1");
            var textBil1 = document.getElementById("BillingAd1");

            var textShip2 = document.getElementById("ShippingAd2");
            var textBil2 = document.getElementById("BillingAd2");

            var textShip6 = document.getElementById("ShippingAd6");
            var textBil6 = document.getElementById("BillingAd6");


            var textShip12 = document.getElementById("ShippingAd12");
            var textBil12 = document.getElementById("BillingAd12");


            var textShip9 = document.getElementById("ShippingAd9");
            var textBil9 = document.getElementById("BillingAd9");



            if (checkBox.checked == true) {
                textBil.value = textShip.value;
            } else {
                textBil.value = "";
            }

            if (checkBox.checked == true) {
                textBil1.value = textShip1.value;
            } else {
                textBil1.value = "";
            }

            if (checkBox.checked == true) {
                textBil2.value = textShip2.value;
            } else {
                textBil2.value = "";
            }

            if (checkBox.checked == true) {
                textBil6.value = textShip6.value;
            } else {
                textBil6.value = "";
            }


            if ( checkBox.checked == true){
                textBil12.value = textShip12.value;
            } else{
                textBil12.value = "";
            }

            if ( checkBox.checked == true){
                textBil9.value = textShip9.value;
            } else{
                textBil9.value = "";
            }

        };

function Place_Order() {
    // ItemValue = localStorage.getItem("ItemValue");
    // ItemQuantity = Number(localStorage.getItem("ItemQuantity"));

    // priceToPay = ItemValue * ItemQuantity;
    // printedText = `total : Quantity: ${ItemQuantity} ItemValue: ${priceToPay}`
    // alert(printedText);

alert("Your order has been generated");

};








