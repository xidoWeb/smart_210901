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

// ---------------------------------------

// if(){}else{}
// switch(){}
// for(){}  , for(in){} , [].forEach()
// function(){}

var launch = '돈까스';
if(launch === '짜장면'){
  console.log('짜장면먹으러 갑시다!');
}else if(launch === '볶음밥'){
  console.log('볶음밥먹으러 갑시다!');
}else if(launch === '삼겹살'){
  console.log('삼겹살먹으러 갑시다!');
}else{
  console.log(launch+' 먹겠습니다.');
}

var switchN = 5;
var data;
switch(switchN){
  case 1:
    data = '마우스 왼버튼을 클릭하였습니다.';
    break;
  case 2:
    data = '마우스 오른버튼을 클릭하였습니다.';
    break;
  case 3:
    data = '마우스 휠버튼을 클릭하였습니다.';
    break;
  case 4:
    data = '마우스 측면버튼을 클릭하였습니다.';
    break;
  default:
    data = '마우스 기타 다른버튼을 클릭하였습니다.';
    break;
}
console.log( data );

var arr2 = [1,2,4,3,5,6,8,3,5,9,10,20,50,26];
// for(최초; 비교; 증감){}
for(var j=0; j<10; j++){ // 10번 반복 수행
  console.log( 'j:', j, '-', arr2[j] );
}

// [].forEach(function(각요소하나씩, 순서){})
arr2.forEach(function(arg, idx){
  console.log(idx,':', arg, arr2[idx] );
});

// for(임의변수 in 객체){}
console.log( obj );
for(var k in obj){
  console.log( obj[k] );
}
// -----------------------------------

var an = [1,3,4];
var na = [1,3,4];
console.log( an === na ); // false
var n = 5;
var u = 5;
console.log( n === u ,'-------------------'); // true

for(var l=0; l<3; l+=1){
  console.log( an[l] === na[l] );
}

var nna = na;
console.log( nna === na );
// 주소를 참조하면 얕은 복사
// 값자체를 복사하면 깊은복사