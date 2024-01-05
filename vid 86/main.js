
//named export
import {a,b,c} from "./mymodiul.js"
console.log(a,b,c);

// default export
import keval from "./mymodiul.js" //we can import that with any name
console.log(keval);

console.log(__dirname,__filename);

// (function(exports,require,module, __dirname,__filename){
//     // Mofule code actually lives here
// });
