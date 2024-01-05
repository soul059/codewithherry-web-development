
async function time(){
   return new Promise((resolve, reject) => {  

       setTimeout(()=>{console.log('2 seconds')
       resolve("hi")
        },2000)
    }) 
}

// IIFE
(async function main(){
    await time();
    
    
    // Destructuring
    
    let [e,f] = [5,10];  // a will assigned to 5 and b assigned to 10
    let [x,y,...z] = [1,2,3,3,3,3,3] // x is 1 , y is 2 z is an arr of 5 element
    console.log(e,f);
    console.log(x,y,z);

    const obj = {
        a:10,
        b:20,
        c:30,
        d:40
    }
    // Object destructuring
    let {a, b} = obj; // c=10 d=20
    console.log(a,b);
})();