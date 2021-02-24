"use strict";

var names = ["Alex", "Nathan", "Vanesssssa", "Iffy"];

console.log(names.length);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}

names.forEach(function(name) {
    console.log(name);
});

function firstItem(array) {
    console.log(array[0]);
}
firstItem(names);

function secondItem(array) {
    console.log(array[1]);
}
secondItem(names);

function lastItem(array){
    var last = array[array.length - 1];
    console.log(last)
}
lastItem(names);