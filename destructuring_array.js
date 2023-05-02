let nums = [4,44,463,5753];
console.log(nums);

let [a,b,c,d] = nums//////////******/

console.log(d);

let scores = [5,3,6,4,1,5]
console.log(scores);

let [p1,,p3,,p5,p6] = scores;

// score[1] and score[4] are not assigned to anything

// swaping value using destucturing array

let e = 6;
let f = 7;

console.log(e,f);
[e,f] = [f,e] //swaping
console.log(e,f);

// split method

let sentence = "My name is purushottam sharma, i am from bidar, karnataka, which is in iceland south carolina, hehe! just joking".split(' ');
// splits according to whatever we put in the braces
console.log(sentence);
let [a1,a2,a3, ...a4] = sentence
console.log("..." + a4);

//spliting based on ','
let another_sentence = "My name is purushottam sharma, i am from bidar, karnataka, which is in iceland south carolina, hehe! just joking".split(',');
console.log(another_sentence);
let [b1,b2,b3, ...b4] = another_sentence
console.log("..." + b3);