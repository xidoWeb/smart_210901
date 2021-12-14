// b_02_js_data_type.js
// 형타입을 파악하는함수 :  typeof(literal)
// 숫자로보이는 문자 ('1')를 강제로 숫자형타입으로 변환하는 함수 : parseInt(변수) , parseFloat(변수), number(변수)...

// ------------------------------------------------------------------------------------------
// 숫자(number)
var num = 7;
var num2 = num;
    num = 10;

console.log(  num, typeof(num)  );
console.log(  num2, typeof(num2)  );

// ------------------------------------------------------------------------------------------
// 문자(string)
var str = '123';
var str2 = str; // str2 = 123 
    str = '문자'; // str2 = 123

console.log( str, typeof(str) );
console.log( str2, typeof(str2) );

var str3 = str2 + 567; // 문자 + 숫자 -> 문자의나열 -> '123' + 567 -> 123567
console.log( str3 );
var str4 = parseInt(str2) + 567;
console.log( str4 );

console.log( typeof('50.4%') );
console.log( parseInt('50.7%  auto') );   // 첫글자부터 시작해서 정수숫자로 변환가능한 것 까지만 숫자화 처리 나머지는 버림
console.log( parseFloat('50.7% auto') ); // 첫글자부터 시작해서 실수 숫자모두 숫자로 변환 가능한 부분까지 숫자로처리 나머지는 버림
console.log( Number('50.7% auto') );     // 문자든/숫자든 관계없이 모두 숫자로 변환처리

var nan = NaN; // Not a Number
console.log( nan, typeof(nan) );

// ------------------------------------------------------------------------------------------
// Math 함수
var n = 5.54;
console.log('올림처리', Math.ceil(n) );
console.log('내림처리', Math.floor(n) );
console.log('반올림처리', Math.round(n) );
console.log('0~1까지의 난수', parseInt( Math.random() * 64 ) );
console.log('절대값', Math.abs( -n ) );

// ------------------------------------------------------------------------------------------
// 논리(boolean)
// 논리형은 결과를 true/false로 확인하여 처리하지만, 그 결과를 확인하는 검증이 매우 많다.
// ! -> 반대 ,  === -> 형타입까지 일치하는가? ...

var bool = false;
console.log( bool,  typeof(bool) );

// 존재하는 값에 !를 붙이면 값이 없다는 의미로 -> false가 되지만 본의도는 값이 있느냐 없느냐 판단용도로 쓰면 !한번더
console.log(!!n); 
console.log(!!0); 

// ------------------------------------------------------------------------------------------
// undefined
var und = undefined;
console.log( und, typeof(und) );
und = 'undefined';
console.log( und, typeof(und) );
und = undefined;
console.log( und, typeof(und) );

// ------------------------------------------------------------------------------------------
// null
var nul = null;
console.log( nul, typeof(nul) );

// null은 undefined와 null은 값이 없다는 의미의 특수한 형타입으로 있던 자료구조였으나, 
// 현재는 단순히 값이 누락시킨다 라는 의미로만 존재

// object/function 형타입은 단순 한가지의 개념을 가지고 있는 것이아니고, 여러 형타입을을 담은 복합성의 특징
// 그렇기에, object/function 형타입으로 사용할 변수처리는 참조변수 개념으로 처리
// 일반변수 = 단순 값을가지는 변수 / 참조변수 = 값을 가지는 변수가 아니라 어느 공간(주소)을 공유하는 변수

// 일반변수-사과 - 1일 1개 인경우는 내가 직접 들고있으면되지만, 
// 참조변수-사과창고 - 양이 늘어나면 별도의 공간에 담아야 하는 것과 같이. 해당 공간을 공유한다.
// js는 순서를 첫번째가 0부터 처리한다.
// ------------------------------------------------------------------------------------------
// object
// 1. array -----------------------------------------------
var arr = ['키보드', '마우스', '태블릿', '모니터', '노트북','웹캠'];
console.log( arr.constructor === Array ); // true
console.log(typeof(arr) );
console.log( arr[3] );

arr[5] = '마이크';
arr[9] = '웹캠';
console.log( arr[5], arr[6] );
console.log( arr[9], arr );


var arr2 = arr;
console.log( arr2 );
arr[9] = '빼빼로';
console.log( arr );
console.log( arr2 );

console.clear();

var arT = new Array(); // 가방이 필요하면 기본 형태가있는 원본 가방을 하나더 만들어 진걸 구매하여 가방을 하나 얻은것
console.log( arT );
arT[0] = '물';
arT[1] = '약';
console.log( arT );
// new Array()를 이용하여 배열을 생성하는 방식은 권장하지 않는다. -> 바로 [] 작성후 바로 수행

var arA = [];
arA[0] = '물';
arA[1] = '약';

arA.push('커피');
arA.push('쥬스');
arA.push('밥');
arA.unshift(5);
arA.unshift(0);
arA.unshift(0000);
console.log( arA ); // 1시기록

arA.pop();
arA.pop();
arA.shift();
arA.shift();
arA.shift();
console.log( arA ); // 2시기록
// ------------------------------------------------------------------------------------------
// console.clear();
// 2. object 
var obj = {};
// var objT = new Object();
console.log( obj, typeof(obj) );
console.log( obj.constructor === Object ); 

obj.apple = 'iphone';
obj.samsung = 'galaxy';
obj.google = 'pixel';
obj['농심'] = '너구리';
obj['오뚜기'] = '진라면';
obj['한국 야쿠르트'] = '건국우유';

console.log( obj );
console.log( obj.google );

var obj2 = {};
obj2[0] = '마이크';
obj2[1] = 'pen';
obj2[2] = '텀블러';
console.log( obj2 );

console.clear();
// ------------------------------------------------------------------------------------------
// function
var fn = function(a){
  // a는 매개변수(parameter), 인수/인자(argument)
  // return 마지막에 작성하는것으로, 어쨋든간에 최종 결론은?
  return 1 + a;
};

console.log( fn(5) );

var fn2 = function(a,b){
  var c = a + b;
  return c;
};

console.log( fn2(1,6) ); 

var d = 1+6;
console.log( d );

console.log( fn2(4,50) );
console.log( fn2(4,80) );
console.log( fn2(44,80) );
console.log( fn2(41,4) );

// 함수의 기본형태 : function(){}
// 함수 선언식 : 이름을 부여한다 -> 기명함수 : function 이름 () {}
// 함수 표현식 : 이름 부여하지않는다 -> 익명함수 -> 
//               이름이 없기에 대신 이름을 할당할 수 있는 무언가를 선언(변수선언) : var 변수명 = function (){}


// 함수 선언식
console.log( fn3() );
function fn3(){
  return 'test';
}
console.log( fn3() );

// 함수 표현식
// console.log( fn4() );
// console.log( fn4 );
var fn4 = function () {
  return 'test2';
};
console.log( fn4() );

// -----------------------------------------------------
console.clear();

var joker = '히스레저'; // 광범위한 범위를 가지고 있다. 전역 변수
function ckFn() {
  var y = 'xido'; // y의 사용 범위는  function ckFn() 내부에서만 동작 가능하기에 지역변수
  console.log( x, y); // 콘솔을 사용했으므로, 반환과는 관계없이 무조건 console창에 내용을 작성
  return y;
}

// 1. console.log( x ); //콘솔에 결과:  hero
// 2. ckFn(); // 콘솔에 결과: hero xido  , 반환된값 : xido
// 3. var rel = ckFn();   console.log( rel ); 
// 4. console.log( y ); //콘솔에 결과: 

function ckFn2(){
  // 함수 내부에서 var선언을 하느냐 아니냐에 따라 원(전역) 변수의 값이 변경되느냐 아니냐로 구분;
  // var joker = '호아킨 피닉스';
  joker = '호아킨 피닉스'; 
  return joker;
}
console.log( joker ); // '히스레저'
ckFn2();
console.log( joker ); // '호아킨 피닉스'

// ---------------------------------------------------------------------------------------------

// (function(){})() // 즉시실행함수: 익명함수의 기다림없이 바로 실행
// (function(){}()) // 즉시실행함수: 익명함수의 기다림없이 바로 실행
