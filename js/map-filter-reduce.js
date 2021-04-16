"use strict";

// 1.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2.

let languagesLengthArray = users.filter(function(user) {
    return user.languages.length >= 3
})

console.log(languagesLengthArray);

// 3.

let emailsArray = users.map(user => user.email)

console.log(emailsArray);

// 4.

let totalExperience = users.reduce((accumulation, user) => {
    return accumulation + user.yearsOfExperience;
}, 0);

let avgExperience = totalExperience / users.length;

console.log(avgExperience);

// 5.

let longestEmail = users.reduce((accumulation, user) => {
    if (user.email.length > accumulation.length) {
        accumulation = user.email
    }
    return accumulation
}, "");

console.log(longestEmail);

// 6.
// .reduce way
let nameString = users.reduce((accumulation, user, index) => {
    // Trying to get the final index of the array
    if (users.length - 1 === index) {
        return `${accumulation}${user.name}`
    } else {
        return `${accumulation}${user.name}, `
    }
}, "");

console.log(nameString);

// Douglas/.map way
let nameString2 = users.map(user => user.name).join(", ");

console.log(nameString2);

// BONUS 7.

// let languagesArray = users.reduce((langList, user,index) => {
//
//     return user.languages;
// }, []);
//
// console.log(languagesArray);

const uniqueLang = users.reduce((langList, user) => {
    // Loop through the languages and only store languages that you haven't seen in the langList.
    user.languages.forEach(function (language) {
        if (!langList.includes(language)) {
            langList.push(language);
        }
    })
    return langList
}, []);

console.log(uniqueLang);