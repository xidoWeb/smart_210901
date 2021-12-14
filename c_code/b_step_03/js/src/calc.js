"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multi = exports.minus = void 0;

// calc.js

/*
  // 방법1 - IIFE
  let math = {};
  (()=>{  
    let sum = (a, b)=>{
      return a + b;
    };
    math.sum = sum;
  })();
*/
// -----------------------

/* // 방법2
export default function sum(a, b){
  return a + b;
};
// export default sum;
*/
// css/scss 불러올때 import, 내보낼때 X
// js는 불러올때 import, 내보낼때 export로 선택해서 
// -----------------------
var multi = function multi(a, b) {
  return a * b;
};

exports.multi = multi;

var minus = function minus(a, b) {
  return a - b;
};

exports.minus = minus;