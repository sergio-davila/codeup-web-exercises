/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know to the languages array


// TODO: replace the `var` keyword with `const`, then try to reassign a variable declared as `const`
const name = 'Sergio Davila';
const email = 'bleh@gmail.com';
const languages = ["Javascript", "HTML", "CSS"];

// nameMine = "Alex Davila"
// Unable to reassign variables declared as const, will give back an error

// TODO: rewrite the object literal using object property shorthand
// Correct way below
users.push({
  name,
  email,
  languages
});

console.log(users)

// Way I did it before I got the answer
// let name = nameMine;
// let email = emailMine;
// let languages = languagesMine;
// let usersPush = {name, email, languages};
// users.push(usersPush);

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// Correct way to do it below, both ways are correct
users.forEach((user) => emails.push(user.email));
users.forEach((user) => {
  return names.push(user.name);
});

// for (let user of users) {
//   emails.push(user.email)
// }

//console.log(emails);

// for (let user of users) {
//   names.push(user.name);
// }
//console.log(names);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
//                      Object destructuring in the parameter list
users.forEach(function({name, email, languages}) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition

  // const name = user.name;
  //const email - user.email;
  //const languages - user.languages;
  // Object destructuring in function below vv
  // const {name, email, languages} = user;


  // TODO: rewrite the assignment below to use template strings
  //developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name}'s email is ${email + '. ' + name} knows ${languages.join(', ')}`);
});
//console.log(developers);
// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
//developers.forEach(function (developer) {
for (let developer of developers) {
  // TODO: rewrite the assignment below to use template strings
  list += `
  <li>
  ${developer}
  </li>
`;
}
list += '</ul>';
//console.log(list);'

document.body.innerHTML = list;
