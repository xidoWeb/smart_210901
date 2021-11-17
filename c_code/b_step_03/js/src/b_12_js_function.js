// b_12_js_function.js

// js에서 미리 만들어진 함수를 내장함수

var message = "별도의 메세지창을 띄워확인";
// alert(message);

var userOld = '나이를 입력하세요';
// var propResult = prompt(userOld);
// (propResult < 20) ? location = "http://naver.com" :  document.write('어서오세요');

var adultCheck = '당신은 성인이신가요?';
// var confirmCheck = confirm(adultCheck);
// (confirmCheck) ? document.write('성인이시군요') : document.write('미성년자임을 확인했습니다.') ;

// ------------------------------------------
// var console = {
//   log: function(){ return arguments },
//   warn: function(){ return arguments },
//   error:function(){ return arguments },
//   info:function(){ return arguments },
//   dir:function(){ return arguments },
//   table:function(){ return arguments },
//   time :function(){ return arguments },
//   timeEnd :function(){ return arguments },
//   group :function(){ return arguments },
//   groupEnd :function(){ return arguments },
//   clear:function(){}
// }

var arr = ['one', 'two', 'three', 'four', 'five'];
var obj = {'a': 'one', 'b':'two', c:'three'};
console.log(arr);
console.table(arr);
console.table(obj);

console.time();
console.log(arr);
console.timeEnd();

console.clear();