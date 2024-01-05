const { error } = require("console");
const fs = require("fs");
// console.log(fs);

console.log("starting...");
// fs.writeFileSync("keavl.txt","keval is a new coder");

fs.writeFile("Keval.txt","keval is good boy", ()=>{
    console.log("Done");
    fs.readFile("Keval.txt",(error, data)=>{
        console.log(error,data.toString());
        
    })
})

// fs.appendFile("keval.txt","so good boy", (e,d)=>{
//     console.log(d);
    
// })
console.log("finished");

