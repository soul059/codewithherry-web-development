// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
function randomdaly(){
    return Math.floor(5+Math.random()*3)
}
async function placeOrder(){
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{
            resolve("Your order is confirmed");
        },randomdaly()*1000)
     })
}
(async function main(){

    console.log(await placeOrder());
})();