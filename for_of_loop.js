let nums = [];

nums[0] = 5
nums[99] = 9

console.log(nums); // output -  [ 5, <98 empty items>, 9 ]

// for-in loop
for(let n in nums){
    console.log(nums[n]);
}// only prints the values which are defined

// for-of loop
for(let n of nums){
    console.log(n);
}// prints all the values even if it is not defined(as undefined)