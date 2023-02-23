function copyAddress() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var street = document.getElementById("street");
    var postal = document.getElementById("postal");
    var city = document.getElementById("city");
    var country = document.getElementById("country");

    var fbname = document.getElementById("fbname");

    var lbname = document.getElementById("lbname");
   
    var bstreet = document.getElementById("bstreet");
    var bpostal = document.getElementById("bpostal");
    var bcity = document.getElementById("bcity");
    var bcountry = document.getElementById("bcountry");
    var check = document.getElementById("check");


    if (check.checked == true) {
        fbname.value = fname.value;
        lbname.value = lname.value;
        bstreet.value = street.value;
        bpostal.value = postal.value;
        bcity.value = city.value;
        bcountry.value = country.value;

    }
    else {
        fbname.value = "";
        lbname.value = "";
        bstreet.value = "";
        bpostal.value = "";
        bcity.value = "";
        bcountry.value = "";
    }

}

function validateForm() {
    
    var fname = document.forms.address.fname.value;
    var lname = document.forms.address.lname.value;
    var street = document.forms.address.address.value;
    var postal = document.forms.address.postal.value;
    var city = document.forms.address.city.value;
    var country = document.forms.address.country.value;

    var regName = /^[A-Za-z]+$/;
    var regnum = /^[0-9]*$/;
    var letters = /^[A-Za-z]+$/;

    if (!regName.test(fname)) {
        window.alert("First Name incorrect");
        return false;
    }
    if (!regName.test(lname)) {
        window.alert("Last Name incorrect");
        return false;
    }

    if (postal.length < 5 || !regnum.test(postal)) {
        window.alert("Postal Code Incorrect")
        return false;
    }
    if (!letters.test(country)) {
        window.alert("Country Incorrect")
        return false;

    }

    if (!letters.test(city)) {
        window.alert("City Incorrect")
        return false;

    }

    var fbname = document.forms.address.fbname.value;
    var lbname = document.forms.address.lbname.value;
    var bstreet = document.forms.address.baddress.value;
    var bpostal = document.forms.address.bpostal.value;
    var bcity = document.forms.address.bcity.value;
    var bcountry = document.forms.address.bcountry.value;

    if (!regName.test(fbname)) {
        window.alert("First Name incorrect");
        return false;
    }
    if (!regName.test(lbname)) {
        window.alert("Last Name incorrect");
        return false;
    }

        if (bpostal.length < 5 || !regnum.test(bpostal)) {   
        window.alert("Postal Code Incorrect")
        return false;
    }
    if (!letters.test(bcountry)) {
        window.alert("Country Incorrect")
        return false;
    }

    if (!letters.test(bcity)) {
        window.alert("City Incorrect")
        return false;

    }
  
    window.alert("Order Placed")
    return true;

}







