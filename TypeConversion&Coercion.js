let num  = 6
console.log(num , typeof num)

//type conversion

let num1 = 10
console.log(num1, typeof num1)

num1 = String('6')
console.log(num1, typeof num1)

///////////////////

// operations on different kinds of datatypes 
//****type coversion
let x
console.log(x, typeof x)

x = 5  // as number
console.log(x, typeof x)

x = x + "sonu" //as string
console.log(x, typeof x)

//Error! because is now string explicitly because it has letters "sonu" in it so it cannot perform subtrctioon operation 
// this is coercion 
x = x - 4  //as number
console.log(x, typeof x)

x = null
x = 5 
x = x + "" //as string
console.log(x, typeof x)

x = x - 4  //as number
console.log(x, typeof x)


x = 5
x = x - 4  //as number
console.log(x, typeof x)

//false boolean

x = x - 4  //as number
console.log(Boolean(0)) // false, Boolean(0, -0, 0n(bigInt zero), null, undefined) is false 

x = x - 4  //as number
console.log(Boolean(7)) //true, Boolean(any number except which are false) = true

// all numbers--->true
// true -------> 1
// false-------> 0

// the parseInt operation which converts the string into the number and only if the string starts with the integers
let y = parseInt("123hfe6534")
console.log(y, typeof y)

let z = parseInt("bjhu66465")//Error!, show as NaN
console.log(z, typeof z)