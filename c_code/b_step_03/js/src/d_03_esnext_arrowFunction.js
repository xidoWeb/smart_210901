"use strict";

// d_03_esnext_arrowFunction.js
// 함수표현식
var fnBox = function fnBox(a) {
  return a * 10;
};

fnBox(5);
console.log(fnBox); // -----------------------

var fnBox2 = function fnBox2(a) {
  return a * 10;
};

console.log(fnBox2); // 즉시실행함수
// 함수 선언식