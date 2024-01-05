let a = prompt("enter the first number");
let b = prompt("enter the second number");
let sum;
if(a === NaN || b === NaN){
    throw console.error("this is wrong input");
}
else{
    try {
        sum =( parseInt(a) + parseInt(b) ) * x;
       
    } catch (error) {
        console.log('x is not avelable');
    }
    finally{
        console.log("this is it");
    }
}

/*
    finally is mainly use for function 
    when try and catch are reatining some value
*/
