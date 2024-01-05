async function getData(){
    return new Promise((resolve, reject) => {
      setTimeout((a) =>{
        console.log('IM in functoin');
        resolve(450);
      },3500);
    })
    
}

async function main(){

    console.log('loding mmodules');
    
    console.log('do somthing else');
    
    console.log('load data');
    
    let data = await getData();
    
    console.log(data);
    
    console.log('process data');
}

main();


//another approch to print without async java 

// data.then((x)=>{
//     console.log(data);

//     console.log('process data');
// })
