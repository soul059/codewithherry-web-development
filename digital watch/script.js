let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");


hours.innerHTML = new Date().getHours();
minutes.innerHTML = new Date().getMinutes();
seconds.innerHTML = new Date().getSeconds();

async function timeUpdate (){
    setInterval(()=>{
        seconds.innerHTML = new Date().getSeconds();
        if(seconds.innerHTML == 0){
            minutes.innerHTML = new Date().getMinutes();
        }
        if(minutes.innerHTML == 0){
            hours.innerHTML = new Date().getHours();
        }
    },1000)
}
                            
timeUpdate();
