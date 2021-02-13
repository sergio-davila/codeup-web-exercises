"use strict";

var i = 2
while(i <= 65537) {
    console.log(i);
    i = i * 2;
}


var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var soldCones = Math.floor(Math.random() * 5) + 1;
    if (allCones < soldCones) {
        console.log("Can't sell you " + soldCones + " cones, I only got " + allCones + " cones fool.")
        continue;
    } allCones = allCones - soldCones
    console.log(soldCones + " cone(s) sold foo.")
    if (allCones === 0) {
        console.log("NO MORE CONES FOO")
    }} while (allCones > 0);


// Roland's version of the do-while loop.
// function iceCreamSell() {
//     do{
//         var conesSold =  Math.floor(Math.random() * 5) + 1;
//         if (conesSold > allCones){
//             console.log("Cannot sell you " + conesSold + " as I only have " + allCones + " left.");
//             continue;
//         }
//         console.log(conesSold + " cones sold...");
//         allCones = allCones - conesSold;
//     }while (allCones > 0);
//
//     console.log("Yay! I sold them all!");
//
// }
// iceCreamSell();