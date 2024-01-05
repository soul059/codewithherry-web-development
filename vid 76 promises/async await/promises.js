let x =new Promise((resolve, reject) => {

    let m = Math.random();
    if(m< 0.3){
        reject("not done");
    }
    else{

        console.log('hello');
        resolve ("444");
    }
})

/*

  ->settle means resolve or reject
  -> resolve means promise has settled successfully
  ->reject means promise has not settled successfully

*/

console.log(x);
x.then((a) => {
  console.log(a);
}).catch((arr) => {
  console.log(arr);
})

