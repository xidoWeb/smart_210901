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
// console.log(arr);
// console.table(arr);
// console.table(obj);

// console.time();
// console.log(arr);
// console.timeEnd();

// console.clear();

// ------------------------------------------------
// Math  round, ceil, floor ......

var random = Math.ceil(Math.random() * 10); // 1~10 사이의 난수
console.log( random );

// parseInt(), parseFloat() :변환이 가능한 부분까지만(순서대로) 숫자로 처리
// ------------------------------------------------
var num = 20.456789;
var num2 = '50.9876543vw012';
var unit = '30px';
// 500px -> 600px브라우저 -> vw
console.log( parseFloat(num2) );

// -----------------------------------------------
// 강제로 문자형식을 숫자로 치환하여 임의 계산까지 완수하는 형태
// typescript가 나온 현시점에서는 타입의 체크에대해 중요성이 있기에 다소 쓰기에 조금 문제가 있음
var sum = eval('5' + '5'); 
console.log( sum  );
console.clear() ;

// js에서 문자형태의 숫자는 기본 연산이 된다.(단, + 형태는 연결로 처리)
// 문자형식의 숫자는 연산시 암묵적 변환을 거쳐서 숫자로 변환이 가능하면 처리
// 변환이 가능하지 않으면 NaN을 도출

var n1 = "7";
var n2 = 'a';
var n = n2 - n1; // NaN
var nRel = isNaN(n); // js에서 is..는 참/거짓을 판단하는 함수
console.log( n, nRel );

// -----------------------------------------------------
// URI : Uniform Resource Identifier - 인터넷 식별자(UTF-8형식)
// encodeURI()  -> 인터넷에서 식별가능한 형태로 변환하는 함수
// 변환불가능한 텍스트 : A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) # 
var space = ' ';
var encodeS = encodeURI(space); // %20
console.log( space, encodeS );

// encodeURIComponent()  -> 문자형식을 모두 변환해주는 기능
// 변환 불가능한 텍스트 :  A-Z a-z 0-9 - _ . ! ~ * ' ( )
var url = 'http://naver.com';
var encode = encodeURIComponent(url);
console.log(encode);

// decodeURI() : encodeURI()의 복원기능
// decodeURIComponent() : encodeURIComponent()의 복원기능
var korea = 'https://대한민국.kr';
var enKorea = encodeURI(korea);
console.log( enKorea );
var deKorea = decodeURI(enKorea);
console.log( deKorea );

// ------------------------------------------
