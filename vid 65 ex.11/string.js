let x = "keval";


//string are immutable
x[0] = 'x'; //error
console.log(x);


console.log(x.toUpperCase());
// Output: KEVAL
console.log(x.toLowerCase());
// Output: keval
console.log(x.indexOf("v"));
// Output: 2
console.log(x.length);
// Output: 5
console.log(x.endsWith("v"));
// Output: false
console.log(x.startsWith("k"));
// Output: true
console.log(x.slice(2));
// Output: eal
console.log(x.split(''));
// Output: ['k', 'e', 'v', 'a', 'l']
console.log(x.slice(2,4));
// Output: ea
console.log(x.replace("v",'*'));
// Output: ke*al
console.log(x.concat(" is a good boy"));
// Output: keval is a good boy
console.log(x.charAt(3));
// Output: l
console.log(x.trim());
// Output: keval if any spaces



