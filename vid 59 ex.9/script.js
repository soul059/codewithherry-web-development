let y = prompt("enter your 1st number");
let c = prompt("enter your operator");
let z = prompt("enter your second number");
let d = Math.random()*100;

console.log(d);

let obj = {
    "+" : "-",
    "-" : "/",
    "/" : "**",
    "*" : "+",
}

if(d > 10){
    alert('your result is ' + eval(`${y}${c}${z}`));
}
else{
    c = obj[c]; 
    alert('your result is ' + eval(`${y}${c}${z}`));
}