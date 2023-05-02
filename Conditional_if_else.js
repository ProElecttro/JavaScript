////////////putting the semicolon is not compulsory

let a = 4;
let b = 5;

// if-else
if (a > b) {
    console.log("a is greater");
} else if (a === b) {
    console.log("a is equal to b");
    console.log("a = b = ", a);
} else
    console.log("b is greater");

//ternary operator
let ans = (a > b) ? "a greater" : "b greater";
console.log(ans);
// or 
console.log(a > b ? "a greater" : "b greater");

//switch statement
let day = "Tuesday"

switch (day) {
    case "Monday": console.log("7am"); break;
    case "Tuesday": case "Wednesday": console.log("9am"); break;
    case "Thurday": console.log("10am"); break;
    default: console.log("7am"); break;
}