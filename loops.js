let i = 0;

for(i = 0 ; i < 5 ; i++){
    console.log("Hello",i);
}
i = 0

//checks the condition before each iteration
while(i < 5){
    console.log(" Hello",i);
    i++
}
i = 6

//checks the conditions after each iteration
do{//prints once         
    console.log("Hello",i);
    i++;
}while(i < 5)

//nested loops - loop inside a loop
//i know it from c++

/********************************************************* */

// if we know the starting point and ending point--->use for loop
// if i know only the condition but not the ending point--->use while loop
// if you want to print at the beginnening--->use do-while loop

let num1 = 458456857
let ans = 0
while(num1 > 0){
    ans = ans * 10 + num1 % 10
    num1 = parseInt(num1/10)
}
console.log(ans);