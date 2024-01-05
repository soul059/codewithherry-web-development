let but =  document.querySelectorAll("button");
let disply = document.querySelector(".dis");
let clear = document.querySelector(".cler");


but.forEach((box) => {
    box.addEventListener("keyboard",() => {
        console.log("im clicked");
        if(box.innerText == "C"){
            disply.innerHTML = "";
        }
        else if(box.innerText == "=")
        {
            let ans = eval(disply.innerText);
            disply.innerText = ans;
        }
        else{
            let num = box.innerText;

            if(num == "00"){
                but[15].disabled = true;
            }

            disply.innerText = disply.innerText + num;
        }
    })
    
});