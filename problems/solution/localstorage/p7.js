// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

let ul = document.querySelector(".ul");
let btn = document.querySelector(".btn");
let clear = document.querySelector(".clear");
let count =1;
if(localStorage.getItem("count")){
    count = localStorage.getItem("count")
}

function Newnotelocal(n,x) {
    localStorage.setItem(`note${n}`, x);
}
for(let i=1;i<localStorage.getItem("count");i++){

    if(localStorage.getItem(`note${i}`)){
        let li = document.createElement('li');
        let note = localStorage.getItem(`note${i}`);
        li.innerText = note;
        ul.append(li);
    }

}

btn.addEventListener("click", () => {
    let li = document.createElement('li');
    let note = prompt("Enter the Note :");
    if (note != null) {
        li.innerText = note;
        ul.append(li);
        Newnotelocal(count,note);
        count++;
        localStorage.setItem("count",count)
    }
        
})
clear.addEventListener("click",()=>{
    alert("All Notes are cleared!");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    localStorage.clear();
    location.reload();
})