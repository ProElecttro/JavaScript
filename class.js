let alien = {
    Name: 'sonu',
    technology: 'hyperloop',
    'work exp': 12,
    laptop : {
        cpu : 'i7',
        ram : 8,
        brand : "Samsung"
    }
}

console.log(alien);

// '.' operator
console.log(alien.Name);
console.log(alien.technology);
console.log(alien.laptop.brand);
console.log(alien.laptop.brand.length);

// [] operator
console.log(alien['technology']);
// if the variable name is more than one word without sapace then we have to use [] operator
console.log(alien['work exp']);
// one more use is to fetch the data indirectly using a variable

//////??????????????////////////////
let input = 'name'
console.log(alien[input]);
//////??????????????////////////////

// ? operator
if(alien.laptop.brand_new === undefined);
else
    console.log(alien.laptop.brand_new.length)

// the shortcut for the above
    console.log(alien.laptop.brand_new?.length)
    console.log(alien.laptops?.brand?.length)
    console.log(alien.laptops?.brand?.length)

// delete property
    delete alien.laptop.brand
    console.log(alien.laptop);
    delete technology

    console.log(alien);

// for in loop**************
for(let key in alien){
    console.log(key, alien[key])
}

for(let key2 in alien.laptop){
    console.log(key2 , alien.laptop[key2])
}