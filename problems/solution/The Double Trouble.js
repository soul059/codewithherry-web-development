// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1,2,3,4,5,6,4,2,7];
function Double(x){
    
    let cpy = []
    for(let i=0;i<x.length ;i++)
        cpy.push(0);
    for(let i=0;i<x.length;i++){
        for(let j=i+1;j<x.length;j++){
            if(x[i]==x[j]){
                cpy[i]=1;
            }
        }
    }
    for(let i=0;i<x.length ;i++){
        if(cpy[i]==1){
            continue
        }
        else{
            x[i]*=2;
        }
    }
    return x;
}

console.log(Double(arr));
