function validateCC(ccN) {
    ccN = ccN.split(' ').join("");
    if(parseInt(ccN) <= 0 || (!/\d{15,16}(~W[a-zA-Z])*$/.test(ccN)) || ccN.length > 16) {
        return false;
    }
    var arr = new Array();
    for(var i = 0; i < ccN.length; i++) {
        arr[arr.length] = ccN.charCodeAt(i) - 48;
    }
    arr.reverse();
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        var tmp = arr[i];
        if((i % 2) != 0) {
            tmp *= 2;
            if(tmp > 9) {
                tmp -= 9;
            }
        }
        sum += tmp;
    }
    return (sum % 10) == 0;
}
function cardType(ccN) {
    ccN = ccN.split(' ').join("");
    var card = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
    };
    for(var c in card) {
        if(card[c].test(cardNumber)) {
            return c;
        }
    }
    return null;
}
function update(ccN) {
    var valid = document.getElementById("valid");
    if(validateCreditCardNumber(ccN)) {
        valid.innerText = "Valid Card Number";
        valid.style.color = "green";
    }
    else {
        valid.innerText = "Invalid Card Number";
        valid.style.color = "black";
    }
}