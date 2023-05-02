// map-->ES6

// every value in an array need to have a key,
// which may not be a number
// map is a class

let score_map = new Map(); // declaring a map

// setting values to the map
// we set the value, we don't add

// score_map.set(key,value)
score_map.set("sonu", "maisore pak");
score_map.set("rohit","gulab jamun");
score_map.set("salomi","rasagulla");

// .has only finds the key not the value
console.log(score_map.has("sonu"));
console.log(score_map.has("rasagulla")); // false, not a key, it's value

// printing the map using the for-of loop

for(let [a,b] of score_map){ // a is key and b is value
    console.log(a+" "+b);
}

for(let c of score_map){ // c is key and value
    console.log(c);
}

// using forEach

// the syntax for the forEach loop is
// .forEach(value , index , array)
// so value should come first then the key
score_map.forEach( (v,k) => {
    console.log(k, " : ", v)
});