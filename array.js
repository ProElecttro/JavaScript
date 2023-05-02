let values = new Array();

// or 
let scores = [43,252,'dkfh',457];
console.log(scores);

// pushijng a value to an array 
// same as push_back() in c++

scores.push(34)
console.log(scores)

scores.push('sonu')
console.log(scores)

///
scores[6] = "sharma"
console.log(scores)

// fetching a perticular value

// [] square braces
console.log(scores[3]);

// .at() operator
console.log(scores.at(2));

// pushong an object
scores.push({tech : 'JS'})
console.log(scores);

//pushing a function
scores.push(function(){console.log("hello");})
console.log(scores);

//calling that function
scores[8]();

//opposite of push is pop
scores.pop()
console.log(scores)

scores.pop()
console.log(scores)

//pop---> removes the data from the end
//shift---> removes the data from the beginning
//unshift---> adds a data from the beginning

//shift is more time consuming then the pop because it changes the indexof all the datas
//while pop just removes the last data

scores.shift();
console.log(scores)
scores.unshift("first");
console.log(scores)

// if you want to remove a data from the between
// use splice
//splice (i,j,k)
// i = starting index, j = deletes j elements starting with the index i,
// k = adds the element k at the index i
scores.splice(2,2,'oh')//removes 2 datas starting from the index 4
console.log(scores)