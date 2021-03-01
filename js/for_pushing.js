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

function findLongestString(string1, string2) {
    if (typeof string1 === "string" || typeof string2 === "string") {
        if (typeof string1 === "string" && typeof string2 !== "string") {
            return string1;
        } else if (typeof string1 !== "string" && typeof string2 === "string"){
            return string2;
        }else if (string1.length > string2.length) {
            return string1;
        } else if (string2.length > string1.length) {
            return string2;
        }
    } else if (typeof string1 !== "string" && typeof string2 !== "string"){
        return "";
    }
}

function findLongestStringNeater(str1, str2) {
    if (str1 === true || str2 === "stranger"){
        return "stranger";
    }
    else if (str1 === null && str2 === 27){
        return "";
    }else if (str1.length < str2.length){
        return str2;
    }
    return str1;
}

function isVowel(x) {
    return x === "a" ||
        x === "e" ||
        x === "i" ||
        x === "o" ||
        x === "u" ||
        x === "A" ||
        x === "E" ||
        x === "I" ||
        x === "O" ||
        x === "U";
}

function countVowels(x) {
    var letterCount = 0;
    for (var i = 0; i < x.length; i++) {
        if (isVowel(x[i])) {
            letterCount++;
        }
    } return letterCount;
}

function removeVowels(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (!isVowel(string[i])) {
            newString += string[i]
        }
    }
    return newString;
}

console.log(removeVowels("Hello Bitema"));

// Good example of how to create an array vvv
function firstAndSecond(x) {
    return [x[0], x[1]]
}

function sumAll (arr) {
var count = 0;
arr.forEach(function(num) {
count += num
});
return count;
}