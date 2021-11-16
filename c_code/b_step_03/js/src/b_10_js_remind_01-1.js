// b_10_js_remind_01-1.js

var i = 0;

// 작업중간, 연산 과정상 필요한 결과물을 확인
console.log('결과물은 개발자모드에서만 확인가능'); 

// 내용을 작업하고나서 끝에는 ;을 붙여라.
// ;을 붙이는 정확한 위치
// 1. 변수 선언/수정 끝
// 2. 함수를 호출시 끝에
// 3. 식의종료 -> () ? : ;

// -------------------------------------------
// 형타입
// 1. 숫자
// 2. 문자
// 3. boolean : true/false
// 4. undefined / null
// 5. 객체( [], {} )
// 6. 함수

// 연산
var a = 10;
console.log( a + 5 ); // 15
console.log( a + '5' ); // 105
console.log( a + 'a' ); // 10a
console.log( parseInt(a+'a') );

var b = a+'';
var c = a.toString();

console.log(b+1, c+1);

// 자기 자신에게 추가연산
//  +=, -=, /=, *=, %=

//  a += 5; // 10+5 -> 15
//  a = a + 5; // 10+5 ->15

a = parseInt(a %= 3); // 10 / 3일경우 몫은 3 나머지는 1
console.log( a ); // /

(a > 2)?( a = 10 ):( a = 20 );
console.log(a);
console.log( a !== 20)

// ----------------------------------------
var arr = [1,2,3,4,5,6,7,8,0]; // 순서가 있는 값
var obj = {'a':1, 'b':2, 'c':3}; // 순서가없다. 정의

console.log( arr[4], obj.b, obj['b'] );

// ---------------------------------------
var fn = function(a){
  return a + b;
};

var fnCon = fn(arr[3]);
console.log( fnCon );