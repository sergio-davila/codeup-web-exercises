"use strict";
var p = prompt("Enter in any odd number between 1 and 50 ;)")
while (p < 1 || p >= 50 || ((p % 2) === 0)) {
    p = prompt("Enter in any odd number between 1 and 50 ;)")
}

while (true) {
    var i = prompt('Give an odd number between 1 and 50.')
    if(i >= 1 && i <= 50 && i %2 !== 0) {
        break;
    }
}

for(var x = 0; x < 50; x++) {
    if (x === (Number(i))) {
        console.log("Yikes! We are skipping this number: " + i)
        continue;
    } else if (x >= 1 && x <= 50 && (x % 2) !== 0) {
        console.log("Here is an odd number: " + x)
    }
}