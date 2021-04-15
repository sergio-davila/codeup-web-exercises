/* **************************************************************
*
*       Object Property Variable Assignment Shorthand
*
*****************************************************************/
//TODO TOGETHER: Create a newDog object using shorthand syntax

let breed = "Mutt";
let age = 8;
let dogName = "Kewpie";
let isCute = true;

//old way
// let oldDog = {
// 	breed: breed,
// 	age: age,
// 	dogName: dogName,
// 	isCute: isCute
// }

// console.log(oldDog);



// //new way

let newDog = {
    breed,
    age,
    dogName,
    isCute
}


console.log(newDog);





/*****************************************************************
 *                       Object Destructuring
 *          Shorthand for creating variables from object properties
 *          Based on the name of the key
 *****************************************************************/

var personA = {
    name: 'codeup',
    age: 7
};

// // old way
// var name = personA.name;
// var age = personA.age;
//
//
// console.log(name); // 'codeup'
// console.log(age); // 7


//TODO TOGETHER: REFACTOR the above approach using ES6

// const {name, age} = personA;
//
// console.log(name);
// console.log(age);






/*==============================================*/


const pals = {
    dog: "Spike",
    cat: "Tom",
    mouse: "Jerry"
};

//old way
// let myDog = pals.dog;
// let myCat = pals.cat;
// let myMouse = pals.mouse;
//
//
// console.log(myDog); //Spike
// console.log(myCat); //Tom
// console.log(myMouse); //Jerry


//TODO TOGETHER: REFACTOR the above approach using ES6
//new way

// let {dog, cat, mouse} = pals;
//
// pals.dog = "Rex"
// console.log(dog);
// console.log(cat);
// console.log(mouse);
// console.log(pals);


/*==============================================*/

//TODO: Use object destructuring with the following object

const theFlash = {
    name: "Barry Allen",
    alias: "The Flash",
    occupation: "Forensic Scientist",
    powers: "Super Speed"
}

let {name, alias, occupation, powers} = theFlash;

console.log(alias);
console.log(powers);
console.log(occupation);


/*==============================================*/
//Destructuring with Arrays

let cats = ["CJ", "Claude", "Max"];

//oldway
// let cat1 = cats[0];
// let cat2 = cats[1];
// let cat3 = cats[2];


//new way
let [cat1, cat2, cat3] = cats;

// console.log(cat1);
// console.log(cat2);
// console.log(cat3);


/*==============================================*/

const alphabet = ['A', 'B', 'C', 'D', 'E'];

//old way
// const a = alphabet[0];
// const b = alphabet[1];
// const c = alphabet[2];


//TODO TOGETHER: new way

// const [a, b, c] = alphabet;

// console.log(a);
// console.log(b);
// console.log(c);



//TODO TOGETHER: To skip an element...

// const [a, ,c] = alphabet;

// console.log(a);
// // console.log(b);
// console.log(c);
// // console.log(d);


//TODO TOGETHER: To get all elements...Spread operator *BONUS

const [a, b, c, ...bleh] = alphabet; // the three dots followed by a variable name stores the rest of the array into that variable name

console.log(a);
console.log(b);
console.log(c);
console.log(bleh);


/*==============================================*/
// Using with functions


//old way
function tellMeAbout({name, age}) {
	console.log(name); // 'Douglas'
	console.log(age); // 38
}


//new way


//
const person = {
	name: 'Douglas',
	age: 38
};

tellMeAbout(person);


/*==============================================*/



// let shape1 = {
// 	height: 10,
// 	width: 10
// }

// let shape2 = {
// 	height: 5,
// 	width: 5
// }

// console.log(getArea(shape1)); //100
// console.log(getArea(shape2)); //25


//TODO: Refactor the getArea function from above using arrow syntax