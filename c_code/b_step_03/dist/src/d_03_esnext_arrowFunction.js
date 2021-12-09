// d_03_esnext_arrowFunction.js

// 함수표현식
const fnBox = function(a){
  return a * 10;
};
fnBox(5);
console.log( fnBox );
// -----------------------
const fnBox2 = a => a * 10;

console.log( fnBox2 );
// 즉시실행함수

// 함수 선언식