// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let arr = ["keval","tapan","utsav","smit","pranjal","milan"];
let ans = []

for (const x of arr) {
    if(x.length < 6){
        ans.push("gryffindor");
    }
    else if(x.length < 8){
        ans.push("hufflepuff");
    }
    else if(x.length <12){
        ans.push("ravenclaw")
    }
    else{
        ans.push("slytherin");
    }
}

console.log(ans);
