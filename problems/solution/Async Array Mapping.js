// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function ArrayMappinng(arr){
    return arr.map(v=>
        new Promise((resolve, reject) => { 
            setTimeout(()=>{
                resolve(v*2);
            },500)
         })
    )
}


let array = [1,2,3,4,5];
let prom = ArrayMappinng(array);

Promise.all(prom).then(results => console.log(results)) 



