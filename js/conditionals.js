var Color = "cyan"
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(color){
if(color === "blue") {
    return "BLUE IS THE BEST";
} else if (color === "red") {
    return "Red like strawberries.";
} else if (color === "green") {
    return "Green is sus af.";
} else {
    return "Wow that is SUCH an ugly color, sorry about your taste in colors. :'(";
}}
console.log(analyzeColor(randomColor));


switch (randomColor) {
    case "red":
        console.log("Red red wine.");
        break;
    case "blue":
        console.log("Blue is the best yo.");
        break;
    case "green":
        console.log("Green is sus af.");
        break;
    default:
        console.log("Wow that's an ugly color.")
}

//var PromptColor = prompt("Hey what is YOUR favorite color????? O_O");
//alert(analyzeColor(PromptColor));

var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(luckyNum, originalPrice) {
    if (luckyNum === 0) {
        return originalPrice
} else if(luckyNum === 1) {
        return originalPrice - (originalPrice * .10)
} else if(luckyNum === 2) {
        return originalPrice - (originalPrice * .25)
} else if(luckyNum === 3) {
        return originalPrice - (originalPrice * .35)
} else if(luckyNum === 4) {
        return originalPrice - (originalPrice * .50)
} else if(luckyNum === 5) {
        return originalPrice - originalPrice
} else {
        return "That ain't a number that was in the running, police please arrest this cheater."
    }}

console.log(calculateTotal(4, 100));

// alert(luckyNumber);
// var promptBill = prompt("What was your total bill?")
// alert("Congrats!!! This your new price!: " + (calculateTotal(luckyNumber, promptBill).toFixed(2)));

var yesOrNo = confirm("Would you like to put down a number?")
if (yesOrNo === false) {
    alert("Well you suck ass.")
} else if(yesOrNo === true) {
    var promptNum = parseInt(prompt("Put down a number, any number ;)"))
}
if(typeof promptNum === "number") {
    alert("THAT IS A NUMBER, GOOD JOB YOU!" )
    alert("This is your number after adding 100 to it: " + (parseInt(promptNum) + 100))
    if(promptNum % 2 === 0) {
        alert("Your number is even yoo!")
    } else if(promptNum % 2 !== 0) {
        alert("Your number is odd, like your face.")
    } if(Math.sign(parseInt(promptNum)) === 1) {
        alert("Your number is positive ;)")
    } else if(Math.sign(parseInt(promptNum)) === -1){
        alert("Your number IS NEGATIVE LAME-O. HAHAHAHA.")
    }
} else if(isNaN(promptNum) === true) {
    alert("That ain't a number FOOL.")
}

