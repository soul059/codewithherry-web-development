class humane{
    constructor(name){
        this.name = name
        console.log("my name is " + this.name);  
    }
    food(){
        console.log("I'm eating...");
    }
    walk(){
        console.log("I'm walking...");
    }
    drive(w){
        this.w = w
        console.log("I'm driving " + this.w);
    }

}
class enginner extends humane{
    constructor(name,branch){
        super(name);
        this.branch = branch;
    }
}
let keval = new enginner("krval","information technology")
console.log(keval)

// keval.con('Keval')  // my name is Keval
keval.food()         // I'm eating...
keval.walk()         // I'm walking...
keval.drive('Car')   // I'm driving Car

let tapan = new humane("tapan")
// tapan.call('Tapan')
tapan.food()
tapan.walk()