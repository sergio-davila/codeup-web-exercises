
// Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.

// totalPets([{name: 'Fernando Mendoza', numPets: 1},{name: 'Douglas Hirsh', numPets: 8}, {name: 'Kenneth Howell', numPets: 3}]) //12

var petsArray = [{
    name: "Fernando Mendoza",
    numPets: 1
},{
    name: "Douglas Hirsh",
    numPets: 8
},{
    name: "Kenneth Howell",
    numPets: 3
}]
// My hard coded function below
function totalPets(x) {
   return x[0].numPets + x[1].numPets + x[2].numPets;
}

console.log(totalPets(petsArray));

// My actual working function
function totalPets2(x) {
    var numPetsTotal = 0;
    for(var i = 0; i < x.length; i++) {
        numPetsTotal = numPetsTotal + x[i].numPets;
    } return numPetsTotal;
}

console.log(totalPets2(petsArray));

// our gameplan:
//     * write the function first
// * one parameter
// * deal with the array
// ** extract what we need (RV) AND we probably need a LOOP [FD]
// *** need a loop? that's what a for loop is FOR!
//     *** extraction: extract each individual numPets in this loop
// ** how about a BUCKET [a place to store our running sum]

// our function:
function totalPetsKenneth(petsArray){

    var sum = 0;
    for(var i = 0; i < petsArray.length; i++){
        sum = sum + petsArray[i].numPets;
        // console.log("var 'sum' is currently " + sum) //uncomment if you want to track the running total of sum
    }
    return sum;
}

// more drills:
// Write a function named countPosi that accepts an array of numbers and returns the number of positive numbers in the array.
// countPosi([-2, 7, 4, -9, 1]) //3
// countPosi([3, 6, 9, -1]) //3
// countPosi([10]) //1


// Working function below
function countPositive(array) {
    var totalPositiveNum = 0;
    for(var i = 0; i < array.length; i++) {
        if(Math.sign(array[i]) === 1) {
            totalPositiveNum = totalPositiveNum + 1;
        }
    } return totalPositiveNum;
}

console.log(countPositive([-2, 7, 4, -9, 1]));

// Write a function named printRecipe that accepts a recipe object. A recipe object will have properties of title (a string), servings (a number), and ingredients (an array of strings). printRecipe will console.log each property in this format:

//     Example object:

    var caldoRecipe = {title: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}

// Expected look in console from running printRecipe(caldoRecipe):
// Caldo con Pollo
// Serves: 4
// Required ingredients: whole chicken, carrots, cabbage, potatoes, jalapeno, cilantro, salt, pepper, cumin, onion powder, garlic powder

function printRecipe(x) {
        console.log(x.title);
        console.log("Serves: " + x.servings);
        console.log("Required ingredients: " + x.ingredients);
}

console.log(printRecipe(caldoRecipe));

// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.

// convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
//  convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}

function convertAddressToObject(x) {
    var addressNum = '';
    var addressString = '';
    var address = {};
    for (var i = 0; i < x.length; i++) {
        if (x[i] === '0' || x[i] === '1' || x[i] === '2' || x[i] === '3' || x[i] === '4' || x[i] === '5' || x[i] === '6' || x[i] === '7' || x[i] === '8' || x[i] === '9') {
            addressNum = addressNum + x[i];
        } else {
            addressString = addressString + x[i];
        }
    }
    address.streetNumber = addressNum;
    address.streetName = addressString;
    return address;
}

console.log(convertAddressToObject('8626 Sunny Oaks'));