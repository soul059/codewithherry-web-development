// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str = "keval chauhan";

function Mirror(x){
    let s=[];
    for(let i=0,j=x.length;i<x.length;i++,j--){
        s[i]=x[j-1];
    }
    return x +" "+ s.join('');
}

console.log(Mirror(str));

/*
    To convert an array of characters to a string in JavaScript, you can use the join() method. Here’s an example:

JavaScript
AI-generated code. Review and use carefully. More info on FAQ.

var s = ['H', 'e', 'l', 'l', 'o'];
var str = s.join('');
This will convert the array s to a string, and the value of str will be "Hello"

*/