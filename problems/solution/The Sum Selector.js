// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function SumSelector(x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        if(x[i] <0){
            break;
        }
        else{
            sum +=x[i]; 
        }
    }
    return sum;
}

let arr =[1,1,1,1,-1,1,1];
console.log("Sum of elements in array is: "+SumSelector(arr));