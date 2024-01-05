
let arr =["Initizing Hacking ","Reading your Files ","Password files Detected ","Sending all Password and personal files to server ","Cleaning up "]


let dot = async ()=>{
    let last = document.querySelector(".text").lastElementChild;
    let sp = document.createElement("span");
    sp.innerText="."
    last.append(sp)
    setInterval(()=>{
        if(sp.innerText === "...")
        {
            sp.innerText="";
        }
        else{
            sp.innerText="."+sp.innerText;
        }
    },200);
}
const randomdaly =() =>{
    return new Promise((resolve, reject) => { 
        let x = 1 + Math.random()*6
        setTimeout(() =>{
            resolve()
        },x*1000)
    })
}
const intxt = async (a) =>{
    
    await randomdaly();
    let intxt = document.querySelector(".text");
    let p = document.createElement("p");
    p.innerHTML=a;
    intxt.append(p);
    dot();
}
async function main(){

    for (const op of arr) {
        await intxt(op);
    }
    
}

main();