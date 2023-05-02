let data = 8         // number type
let user = 'sonu'  // string type

//premitive datatype and object data type

//premitive
//nums, string, bool, null, undefined, symbol

let bigNum = 2323254682456
console.log(bigNum * 25)
// maximum permisible number is 9007199254740991

// for more big numbers use ' BigInt '
// put a 'n' at the end of the number
bigNum = 856234895689234689623498n
console.log(bigNum)
//but you cannot use operations on it like addition
//addition
console.log(bigNum + 5n)

let num = 7.34 //float
console.log(num)

//to know the type of the variable
console.log(typeof(num))

//for hexadecimal numbers start with 0x
let hexNum = 0x2f5ad7
console.log(hexNum)

//exponential 
let expnum = 34e2 // power of 10
console.log(expnum)

//infinity
num = 3/0 //infinity
console.log(num)

//minimum number and maximum number
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//any number greater than max num is infinity and any number smaller than the min num is -infinity
console.log(Number.MAX_VALUE * 10) //infinity

//increasing readability
let rednum = 1000000000000 // not readable
rednum = 10_0000_0_000_000 // readable

/////////////////////////////////
let firstName = "purushottam"
let lastName = "Sharma"

let name = firstName + " " + lastName

// to remove the special effect of the "" use \(back slash) before "
let Name = "purushottam \"sharma\" "
console.log(Name)

//bool
let bool = 5 < 6
console.log(bool)
console.log(typeof bool)

//not a number (NaN) is of datatype number
console.log(5 / "purushottam") // not a number
console.log(typeof(5 / "purushottam"))