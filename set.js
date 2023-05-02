// SET in javaScript is a class
// set is a collection of unique data(not repeating)
// in javaScript it maintains the order
// it will not have index

let nums = new Set("kjfbvhbjkherth");
//output
// Set(9) { 'k', 'j', 'f', 'b', 'v', 'h', 'e', 'r', 't' }

// deletes the repetitions
console.log(nums);

//we can add some values if it is already there in the set then it willnot be saved
//using add operator

nums.add('ganesh');
nums.add('kiran');

console.log(nums);

let u = 1;
nums.forEach( h =>{
    console.log(h);
});

// .has() same as .find() in c++

console.log(nums.has('g'));// returns true or false

