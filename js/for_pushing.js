"use strict";

function timesFour(input) {
    if (typeof input === "number") {
        return input * 4;
    } else if(typeof input !== "number") {
        return false;
    }
}

console.log(timesFour(12));

function calculateTax(totalPaid, taxPercent) {
    if (typeof totalPaid === "number" && typeof taxPercent === "number") {
        var finalAmount = totalPaid - (totalPaid * (taxPercent * .01));
        return "$" + finalAmount.toFixed(2);
    } else if (typeof totalPaid !== "number" || typeof taxPercent !== "number") {
        return false;
    }
}

console.log(calculateTax(50, 8));

function whatsUp() {
    var firstName = prompt("What is your first name, person I am speaking to?");
    var lastName = prompt("Beautiful first name! Now what is your last name?");
    alert("What's up " + firstName + " " + lastName + "! You are amazing and I hope everything goes well for you today and forever!")
}
whatsUp();

function isFactor(num1, num2){
    if (num1 === true || num1 === 0 || num1 === null){
        return false;
    }
    else if ((num2 % num1 === 0)){
        return true;
    }
    return false;
}

