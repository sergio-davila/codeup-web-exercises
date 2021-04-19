"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

//var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokexmon');
// return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?

//console.log(pokemonAPI);

//TODO: add a method that runs if the Promise resolves successfully

// pokemonAPI.then(response => {
//     response.json().then(jsonResponseData => {
//         console.log(jsonResponseData)
//     })
//     //console.log(response)
// });

//TODO: add a method that runs if the Promise fails

//pokemonAPI.catch(reason => console.log(reason));

//TODO: In the callback function of the .then method, parse the response into JSON



/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokexmon').then((response) => {
    return response.json()
}).then((jsonData) => {
    console.log(jsonData)
});

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API

// TODO: Use Promise chaining to console log the json response

// TODO: chain another method that iterates through the results array and console logs the names

// TODO: Demonstrate Promise.all and Promise.race
