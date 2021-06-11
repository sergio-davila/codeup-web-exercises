// const number = parseInt(prompt('Enter a positive number: '));
var number = 100;
var num1 = 0, num2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(num1); // print 0
console.log(num2); // print 1

nextTerm = num1 + num2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    num1 = num2;
    num2 = nextTerm;
    nextTerm = num1 + num2;
}