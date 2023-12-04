let arr = [ ];

let x =prompt("enter the number");
parseInt(x, 10);

function fact(a){
    for(let i=1;i<=a;i++)
    {
        arr.push(i);
    }
    let f = arr.reduce((pre,crr) =>{
        return pre*crr;
    });
    console.log(f);
}
fact(x);