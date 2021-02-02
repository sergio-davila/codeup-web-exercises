"use strict";
console.log("Hello from external JavaScript!!");

var personName = "Sergio";
console.log("Hello, " + personName);

// Alert
alert("Welcome to my Website!");

//Confirm
var confirmLeave = confirm("Are you sure you want to leave??");
console.log("confirmLeave " + confirmLeave);

//Prompt
var favoriteColor = prompt("What is your favorite color?");
console.log("Your favorite color is " + favoriteColor);

//Exercises below
alert("YOOOO, " + favoriteColor + " is also my favorite color!! WOWOWOWOW!");


var bear = prompt("How many days did you rent out Brother Bear?");

alert("You rented Brother Bear out for this many days: " + bear);

var mermaid = prompt("How many days did you rent out Little Mermaid?");

alert("You rented Little Mermaid out for this many days: " + mermaid);

var hercules = prompt("How many days did you rent out Hercules?");

alert("You rented Hercules out for this many days: " + hercules);

alert("This is how much you have paid in total for the movies you rented: $" + ((hercules * 3) + (mermaid * 3) + (bear * 3)))

var googleRate = prompt("What is your hourly rate working for Google?");
var googleHours = prompt("How many hours did you work in total for Google?");
var googlePay = (googleRate) * (googleHours);

alert("This is how much you made working for Google: $" + (googlePay));

var amazonRate = prompt("What is your hourly rate working for Amazon?");
var amazonHours = prompt("How many hours did you work in total for Amazon?");
var amazonPay = (amazonRate) * (amazonHours);

alert("This is how much you made working for Amazon: $" + (amazonPay));

var facebookRate = prompt("What is your hourly rate working for Google?");
var facebookHours = prompt("How many hours did you work in total for Google?");
var facebookPay =  (facebookRate) * (facebookHours);

alert("This is how much you made working for Facebook: $" + (facebookPay));

var totalPay = (Number(googlePay) + Number(amazonPay) + Number(facebookPay));

alert("This is your total pay from the 3 jobs: $" + totalPay);

var ClassSize = confirm("Are there any spots open in the class?")
var ClassConflict = confirm("Are there no schedule conflicts?")

alert("Are you able to enroll? " + (ClassSize && ClassConflict));

var product = confirm("Are you buying more than two items?")
var premium = confirm("Are you a premium member?")
alert("Do you qualify for the discount? " + (product || premium));