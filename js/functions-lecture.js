function someFunctionNoParameters() {
    //inside of this space is where we tell our function to do stuff
    return alert("Hello there, Marco!")
}

someFunctionNoParameters()

function someFunctionWithParameters(name) {
    //inside of this space is where we tell our function to do stuff
    return alert("Hello there, " + name);
}

var myName = "Alex Davila"
someFunctionWithParameters(myName)

// A function that returns a value >> assign that value to a variable

function increment(num) { //"num" is a parameter, as in it does not need to be declared initially. It's value is declared once the user puts in a number into "num"(the parameter)
    return num + 1;
}

var result = increment(1);

console.log(result)

var four = increment(3);
var five = increment(increment(3))
var six = increment(increment(increment(3)))

console.log(four);
console.log(five);
console.log(six);

function multiplyByTwo(num) {
    return num * 2;
}

// You can use a function within a different function


console.log(multiplyByTwo(increment(3)));

// Anonymous functions [when passed into a parent function AKA 'callback function'




