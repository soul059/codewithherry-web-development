let arr = [12,2,1,"200","keval",true];


// arrays are mutable
arr[3] = "hello"; // change the value of 4th element to hello
console.log(arr);

console.log(arr.length);
// 6
console.log(arr[4]);
// keval
console.log(arr.toString());
// 12,2,1,200,keval,true
console.log(arr.join("-"));
// 12-2-1-200-keval-true

console.log(arr.pop());
// true poped element
console.log(arr);
// [12, 2, 1, "200", "keval"]

console.log(arr.push('x'));
// 7 new arr lenth
console.log(arr);
// [12, 2, 1, "200", "keval", 'x']

console.log(arr.shift());
//remove the first element from arr and returns it
console.log(arr);
// [ 2, 1, '200', 'keval', 'x' ]

console.log(arr.unshift("x"));
// 6 returns element length
console.log(arr);
// [ 'x', 2, 1, '200', 'keval', 'x' ]


// pop is brother of shift
// and
// push is brother of unshift

console.log(delete arr[2]);
//true
console.log(arr);
//[ 'x', 2, <1 empty item>, '200', 'keval', 'x' ]


// ther is one more function concat


console.log(arr.sort());
// [ 2, '200', 'keval', 'x', 'x', <1 empty item> ]
// it also adit the arr


console.log(arr.splice(3,1,true));
//         position to add,no of elements to remove,elements             
// [ 'x' ]
console.log(arr);
// [ 2, '200', 'keval', true, 'x', <1 empty item> ]



console.log(arr.slice(3,5));
// [ true, 'x' ]
console.log(arr);
// [ 2, '200', 'keval', true, 'x', <1 empty item> ]


console.log(arr.reverse());
// [ <1 empty item>, 'x', true,'keval', '200', 2]

arr = [1,2,3,4,5,6]
//for each loop for arrays like blow
arr.forEach((value,index,array) => {
    console.log(value);
    
});
// it will print all array element one by one


// this will creat new array of older array and caustomazed that
let x = arr.map((value,index,array)=>{
    return value*2;
})
console.log(x);


// this will filter the array and return new one
//simler to map
let y = arr.filter((value,index,array)=>{
    if(value > 3){
        return value;
    }
})
console.log(y);


//reduce method

//it reduce all array to a single value
let z = arr.reduce((a,b)=>{
    return a+b;
})
console.log(z);

