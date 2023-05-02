// constructor function
function Alien(name, lifespan, sound){//use first letter capital in the constructor function
    this.name = name;
    this.lefespan = lifespan;
    this.sound = function(){
        console.log(sound);
    }

    //if there is a return statement in the constructor function the it skips it
    return 5
}

// objects
let dog = new Alien("tommy",12,"Woof");
let cat = new Alien("kitty",3,"meow");
let man = new Alien("rajesh",80,"Hare Krishna!");

man.sound();