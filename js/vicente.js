function replaceString(x,y,z) {
    if(typeof x === "string" && typeof y === "string" && typeof z === "string") {
        return x.replace(y, z);
    } else {
        return false
    }
}

var hey = "Hey Vicente, What's up?";
// console.log(hey);
// console.log(replaceString(hey,"Vicente", "Hope"));

function timesFour(input) {
    if (typeof input === "number") {
        return input * 4;
    } else if(typeof input !== "number") {
        return false;
    }
}



// Showing my friend some javascript ^^^