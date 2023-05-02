let user = "sonu";

function greeting(u){//u and num are local variables
    console.log(`${user} sharma`);//global functions can be accessed from any part of the function
    let num = 24
    return `Hello ${u}`
}

// console.log(`the value of num is ${num}`);
//Error! , num is a local variable for the function cannot be accessed outside function

let str = greeting(user);
console.log(str);