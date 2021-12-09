"use strict";

// d_03_esnext_arrowFunction.js
// 화살표함수는 생성자 함수 
// 또는 return처리할 값이 없는 함수를 제외하고 사용이 가능하다.
// 함수표현식
var fnBox = function fnBox(a) {
  return a * 10;
};

fnBox(5);
console.log(fnBox); // -----------------------

var fnBox2 = function fnBox2(a) {
  return a * 10;
};

console.log(fnBox2); // -----------------------
//함수 선언식

function fnBox3(a, b) {
  var c = (a + b) * 100 + 'size';
  return c;
}

var rel = fnBox3(5, 10);
console.log(rel);

var fnBox4 = function fnBox4(a, b) {
  var c = (a + b) * 100 + 'size';
  return c;
};

var rel2 = fnBox4(10, 3);
console.log(rel2); // --------------------------------

var arrNum = [1, 2, 4, 6, 8, 9, 20, 40, 56, 75, 88]; // const minNum = arrNum.filter(function(part){
//   return 40 >= part && part > 10 ;
// });

var minNum = arrNum.filter(function (part) {
  return 40 >= part && part > 10;
});
console.log(minNum);