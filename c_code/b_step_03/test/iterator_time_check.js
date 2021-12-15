// iterator_time_check.js

// for, forEach, for-of 사용시간 체크

const arr = ['banana', 'apple', 'iphone', 'samsung', 'javascript', 1,3,4,6,6,4,32,234];

// console.time('log');
// console.log( arr );
// console.timeEnd('log');
/*
console.log( arr );

console.log('-----------------------------------')
console.time('for');
for(let d=0; d<arr.length; d++){
  console.log(arr[d]);
}
console.timeEnd('for');

console.log('-----------------------------------')
console.time('for-of');
for(let d of arr){
  console.log( d );
}
console.timeEnd('for-of');
console.log('-----------------------------------')
console.time('forEach');
arr.forEach((d)=>{
  console.log(d)
});
console.timeEnd('forEach');

console.log('-----------------------------------')
console.time('forEach2');
arr.forEach(function(d){
  console.log(d)
});
console.timeEnd('forEach2');

*/
/*
var i=0;
for(; i<10; i++){
  console.log(i);
}
console.log('var:', i);
*/

// let
for(let i=0; i<10; i++){
  console.log( i );
}
console.log('-------------------------')
// console.log('let:', i );
// ----------------------------
let j=0;
for(; j<10; j++){
  console.log( j );
}
console.log('let:', j );

j+=1;
j+=1;
j+=1;
j+=1;
j+=1;
j+=1;
console.log('let:', j );
