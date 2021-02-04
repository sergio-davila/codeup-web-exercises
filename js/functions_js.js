console.log("Welcome to my functions exercise!");

function sayHello(name) {
    return "Hello there, " + name
}

var myName = ("Alex");
var helloMessage = (sayHello("Alex"));

console.log(helloMessage);
console.log(sayHello(myName));

var random = Math.floor((Math.random() * 3) + 1);

function isTwo(num) {
    if (num === 2)
        return true
    else
        return false
}

console.log(isTwo(2));

console.log(isTwo(random));

var eight = 8
console.log(eight.toFixed(2)); // Used this variable and console log to test out toFixed, result: it worked.

function calculateTip(tipPercent, totalBill) {
    return tipPercent * totalBill
}

console.log(calculateTip(0.20, 28.60).toFixed(2));

var bill = (prompt("Hello there, " + myName + ", what was your total bill?"));
var percent = (prompt("And what percentage would you like to tip?"));

alert("This is the amount that you should tip, given your total bill and percentage: $" + (calculateTip(bill, percent).toFixed(2)));

function applyDiscount(price, discountPercent){
    return price - (price * discountPercent)
}

console.log(applyDiscount(20, .20));


