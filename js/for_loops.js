"use strict";

// Fizzy code example
// for (var i = 0; i < 50; i++) {
//     if (i === 25) {
//         continue;
//     } else if (i % 6===0) {
//         console.log("Codeup")
//     } else if (i % 2 === 0) {
//         console.log("Code")
//     } else if (i % 3 === 0) {
//         console.log("Up")
//     } else {
//         console.log(i)
//     }
// }

function showMultiplicationTable () {
    for (var a = 1; a <= 10; a++) {
        var result = a * 7;
        console.log("7 * " + a + " = " + result);
    }
}

showMultiplicationTable();

// Math.floor(Math.random() * 181 + 20)

for (var i = 1; i <= 10; i++) {
    var random = Math.floor(Math.random() * 181 + 20)
    if (random % 2 === 0) {
        console.log(random + " is even.")
    } else {
        console.log(random + " is odd.")
    }
}

for (var s = 1; s < 10; s++) {
    var string = s.toString();
    var repeatt = string.repeat(s);
    var num = parseInt(repeatt);
    console.log(num)
}

for (var b = 100; b >= 5; b -= 5) {
    console.log(b)
}


// Roland's version of the number pyramid code.
// function numberPyramid(){
//     for (var x = 1; x < 10; x++){
//         var output = "";
//         for (var j = 1;j <= x; j++){
//             output = output.concat(x);
//         }
//         console.log(output);
//     }
// }
//
// numberPyramid();