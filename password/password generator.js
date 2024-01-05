// let div = document.querySelector("div");

function randomA(){
    return Math.floor(65+ Math.random() *25);
}
function randoma(){
    return Math.floor(97+ Math.random() *25);
}
function randomn(){
    return Math.floor(0+Math.random() *9);
}
function random(){
    return  Math.floor(0+Math.random() *n);
}




let n = Math.floor(8+Math.random() *4);

let other = "!@#$%^&*_-";
let chack={

    chackA:()=>{
        for(let i=0;i<n;i++){
            if(pass[i] >= 'A' && pass[i] <= 'z') {
                return 1;
            }
            return 0;
        }
    },
    chackN: ()=>{
        for(let i=0;i<n;i++){
            if(pass[i] >= 0 && pass[i] <= 9) {
                return 1;
            }
            return 0;
        }
    },
    chackO: ()=>{
        for(let i=0;i<n;i++){
            for(let j=0;j<9;j++){
            if(pass[i] == other[j]) {
                return 1;
            }}
            return 0;
        }
    }
}

let pass = [];

for(let i=0;i<n;i++){
    pass.push(String.fromCharCode(randoma())); 
}
pass[random()] = String.fromCharCode(randomA());
pass[random()] = randomn();
pass[random()] = other[randomn()];

let x = chack.chackA.apply();
let y = chack.chackN.apply();
let z = chack.chackO.apply();
console.log(x,y,z);



console.log(pass);


