// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowels(x){
    let count=0;
    for(let i=0;i<x.length;i++){
        if(/[aeiou]/gi.test(x[i])){
            count++;
        }
        /*
            if(x[i]==a ||x[i]==e||x[i]==i||x[i]==o||x[i]==u ){
                count++;
            }
        */
    }
    return count;
}

let str="keval";
console.log(vowels(str));
