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
console.clear();
// 1. array -----------------------------------------------
var arr = ['키보드', '마우스', '태블릿', '모니터', '노트북','웹캠'];
console.log( arr.constructor === Array );
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

// ------------------------------------------------------------------------------------------

// function
