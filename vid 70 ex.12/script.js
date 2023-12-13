// let box = document.querySelectorAll(".box");
// console.log(box);
// let colors = ["red", "blue", "green", "white", "purple", "black", "yellow", "pink", "brown", "orange"];

// box.forEach(e =>{
//     let x = Math.floor(Math.random()*10)
//     console.log(x);
//     e.style.color = colors[x];
// })
// console.log("\n");
// box.forEach(e=>{
//     let x = Math.floor(Math.random()*10)
//     console.log(x);
//     e.style.backgroundColor = colors[x];
// })

let box = document.querySelectorAll(".box");

function color(){
    let val1 = Math.floor(0 + Math.random()*255);
    let val2 = Math.floor(0 + Math.random()*255);
    let val3 = Math.floor(0 + Math.random()*255);
    return `rgb(${val1},${val2}, ${val3})`;
}
