let dog = {
    name : "Tommy",
    breed : "gully kutta",
    'life span' : 12 , 
    food : "anything",

    //function is also called as method
    sound : () => "Woof"
}

console.log(`i have the dog named ${dog.name} it is actually a ${dog.breed} whose lifespan is ${dog['life span']} it's favourite food is ${dog.food} after eating the food it makes the sound ${dog.sound()}`);
