// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function randomdaly(){
    return Math.floor(5+Math.random()*5);
}

async function brewCoffee(coffee){
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{
            resolve(`the ${coffee} is ready`);
        },randomdaly()*1000)
     })
}

brewCoffee("capechino").then(v=>{
    console.log(v);
})