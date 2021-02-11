"use strict";

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
    for (var i = 1; i <= 10; i++) {
        var result = i * 7;
        console.log("7 * " + i + " = " + result);
    }
}

//showMultiplicationTable();

// Math.floor(Math.random() * 181 + 20)

// for (var i = 1; i <= 10; i++) {
//     var random = Math.floor(Math.random() * 181 + 20)
//     if (random % 2 === 0) {
//         console.log(random + " is even.")
//     } else {
//         console.log(random + " is odd.")
//     }
// }

// for (var i = 1; i < 10; i++) {
//     var string = i.toString()
//     var repeatt = string.repeat(i)
//     var num = parseInt(repeatt)
//     console.log(num)
// }

for (var i = 100; i >= 5; i -= 5) {
    console.log(i)
}

