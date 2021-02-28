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