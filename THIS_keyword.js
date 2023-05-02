let laptop2 = {
    cpu : 'i5',
    memory : '218 GB SSD',
    display : {
        size : '15.6 inch',
        type : 'Oled',
    },
    camera : {
        quality : 'UHD',
        pixels : '128Mp',
    },
}
let laptop1 = {
    cpu : 'i7',
    memory : '512 GB SSD',
    display : {
        size : '13.3 inch',
        type : 'retina',
    },
    camera : {
        quality : 'XHD',
        pixels : '64Mp',
    },

    //method
    config : function(){
        console.log(laptop1.display.size);
        // or you can use this keyword
        console.log(this.display.size);
        console.log(laptop2.display.size);
    },
    compare : function(laptop){
        if(this.cpu > laptop.cpu)
            return this;
        else
            return laptop
    }
}

laptop1.config();
console.log(laptop1.compare(laptop2));