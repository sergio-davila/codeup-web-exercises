"use strict";

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

console.log(Math.round(30.567849)); // Math.round function returns the value of a number rounded to the nearest integer.

console.log(Math.ceil(20.0000001)); // Math.ceil() rounds up no matter what

console.log(Math.floor(20.9999999999)); // Math.floor() rounds down no matter what

console.log(Math.pow(2, 16)); // Math.pow() function returns the base to the exponent power, that is, base^exponent.

console.log(Math.sqrt(9)); // Math.sqrt() function returns the square root of a number.

console.log(Math.E); // Math.E property represents the base of natural logarithms, e, approximately 2.718.

console.log(Math.PI); // Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.