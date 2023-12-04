var array = [ ];

function factor(num) {
  for (i = 1; i <= num; i++) {
    array.push(i);
  }  
  
};

let x =prompt("enter the number");
parseInt(x, 10)
factor(x);
console.log(array.reduce(function(a, b) {
    return a * b;
  }))