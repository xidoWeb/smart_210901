// operator.js

//방법 1-1
// console.log( math.sum(4,5) );
// ---------------------------------
// 방법 2-1
// import sum from './calc.js';
// console.log( sum(2,5) );
// ---------------------------------
//import {multi} from './calc.js';
//console.log( multi(5,4) );
// ---------------------------------
import * as calc from './calc.js';
console.log( calc.multi(5,4) );
console.log( calc.minus(5,4) );


