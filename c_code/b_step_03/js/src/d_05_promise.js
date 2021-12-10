"use strict";

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

// d_05_promise.js

/*
const fnOne = function(data){
  const rel3 = data * data;
  return rel3;
}

const fnTwo = function(data, fn){
  const rel2 = data / 2;
  return fn(rel2);
}

const fnThree = function(data, fn){
  const rel1 = data * 5;
  return fn(rel1, fnOne);
}

let valueReusult = fnThree(4, fnTwo);
console.log( valueReusult );

// button.addEventLister('click', function(){})
*/

/*
  const fn2One =  data => data**2;

  const fn2Two = (data) => {
    const rel = data / 2;
    return fn2One(rel);
  }

  const fn2Three = (data) => {
    const rel = data * 5;
    return fn2Two(rel);
  }

  let valueResult2 = fn2Three(10);
  console.log( valueResult2 );
*/

/* */
// promise
// 1. pending : 진행전/진행중
// 2. fulfilled : 성공
// 3. reject : 실패/오류
var fnDataValue = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('success!');
  }, 500);
});
fnDataValue.then(function (resolve) {
  // console.log( resolve );
  return '성공하였습니다.';
}).then(function (data) {
  console.log(data);
}); // promise 기능 수행 후
// 다음을 수행
// 실행 컨텍스트 : 브라우저에서 실행되는 순서를 파악하고 처리하는 형태
// 스택 : 수행하는 순서에서 처리되는 모양
// 힙   : 스택과는 별도로 관리하는 것