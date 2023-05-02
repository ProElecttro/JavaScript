function greet(){
    console.log("Hello World");
}

greet();
//some code........
greet();
//some more code........
greet();
//some moOore code........

// returning and passing a value from a function
function greeting(user){
    return `Hello ${user}`
}
let user = "sonu";
let str = greeting(user);
console.log(str);

//function to add two numbers

let add = function(num1,num2){
    return num1+num2;
}

function adding (num1,num2){// another way
    return num1+num2;
}

let result = add(5,65)
console.log(result);

let sum = add;
result = sum(2,46)
console.log(result);

//asssigning a function to a variable or you can call object
//sum is a function = add function
console.log(sum);

//function overloading same as c++, learnt it

///////
//function
let prod = function(a,b){
    return a*b;
}
let ans = prod(34,5)
console.log(ans);

//arrow function
let prods = (a,b) => {
    return a*b;
}
ans = prod(67,7)
console.log(ans);

// in any block statement if only one statement is there then no need to put {}
// in arrow function if only the return statement is written then no need to write the return keyword

let product = (a,b) => a*b; // this a function

ans = prod(3,45)
console.log(ans);