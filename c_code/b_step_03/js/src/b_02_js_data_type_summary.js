
// console.clear();

// 형타입!
// 1. 숫자 -> 값을 더하면 계산이된다! 
// 2. 문자 -> 값을 더하면 연결되어 처리된다! , 내가 작성할때 ' '안에 내용을 작성한다.
// 3. 논리 -> 내용을 비교(===, !== ...)하여 맞으면 true, 아니면 false를 도출
// 4. undefined -> 존재는 하는녀석인데 값은 없음!
// 5. null -> ? 언제쓰임? ... 패스!
// 6. 객체>배열/객체 -> 모르겠고 그냥 배열과/객체로 분리해서 일단 기억
// 6-1. 배열 -> 상세내용없이 오로지~ []안에 목록만 나열 
// 6-2. 객체 -> 무엇에는 무엇이있다(속성명:값)으로 존재하는 정의된 내용을 {} 내부에 나열 (css 작성내용과 유사)
// 7. 함수 -> 선언식? 표현식? 즉시실행? ..... 일단 function(){} 이렇게 생겼고, 이를 호출하기 위해 이름이 필요
// 7-1. 함수에 이름을 다는 방법은 변수명 = function(){} 으로 처리하자
// 7-2. 함수에 return이라는게 있는데 최종 결론도출
// 8. 스코프(범위) : 변수가 사용할 수 있는 범위 - 전역/지역

// -------------------------------------------------------------------------------------------------------------
var a   = '2021년';
var b   = '11월';
var c   = '04일';
var dot = '. ';
var date;
    // date = parseInt(a) + dot + parseInt(b) + dot + '0' + parseInt(c);
var iFn = function(i){
  return parseInt(i) + dot;
};
  date = iFn(a) + iFn(b) + '0' + iFn(c);
console.log( date ) // 2021. 11. 04.

// -----------------------------------------------------------------------------------------------------------
console.clear(); 

var user = function(a){
  var text = '님 오늘도 고생하셨어요!';
  return a + text;
};

console.log( user('xido') ); 

//문제 
//1. 다음내용이 도출되게하시오.
//  'xido'님 오늘도 고생하셨어요! 

//2. 다음내용이 랜덤( Math.random() * 3 )으로 나오게 도출하시오.
//  - xx님 오늘도 고생하셨어요! 
//  - xx님 힘내세요. 
//  - xx님 내일도 또 다시!!!

var ran = parseInt(Math.random() * 7);  
var arrSample = [1, 5, 'apple', 'banana', 'graph', 'kiwi','car'];
console.log( ran, arrSample[ran] );

console.clear();

var content2 = [];
content2[0] = '힘내세요.';
content2.push('내일도 또 다시!!!');
content2.unshift('오늘도 고생하셨어요!');
// console.log(content2);
var content = [  '오늘도 고생하셨어요!',  '힘내세요.',  '내일도 또 다시!!!'];
var userFn = function(data){
  var random = Math.random() * 3;
  var int = parseInt(random);
  var plusText = data + '님' + ' ' + content[int];
  return plusText;
};

var userRel = userFn('me');
console.log( userRel );
var wrap = document.getElementById('wrap');
var classWrap = document.getElementsByClassName('wrap')[0];
var p = document.createElement('p');
p.innerText = userRel;
wrap.append(p);

// js에서 id명을 선택하는 방법
// 1. document.getElementById(id이름);
// 2. document.querySelector(css와동일한선택자);

// 요소 생성하는 방법
// document.createElement('div');  // 생성해서 어딘가에 넣을 준비
// 선택자.innerHTML = '<div></div>'; // 기존 선택자 내부에 존재하는것 삭제
// 선택자.append(요소) // 선택자 내부 뒤에 요소를 삽입(단, text형태는 글자로 삽입)

console.clear();
// --------------------------------------------------------------------------------

var variable = '이것은 변수입니다.';
var indicatorNumber = 0;
// function(){}
// 함수()

// document.write( indicatorNumber );

// var 식 = (n)번째 광고내용이 바뀌는 식;
// 인디케이터를 클릭하면, 클릭한 인디케이터가 '몇번째'인지 파악하여, 변수 indicatorNumber에 순번을담아 식(indicatorNumber)을 수행하라

var indiFn = function(){ return 10; }; // 일정한 행동패턴을 저장 
// document.write( indiFn ); // 문자 'function(){ return 10; }'
document.write( indiFn() ); // 문자 'function(){ return 10; }'

// function(){
//   // 이유불문 나에게 돌려줄 값
//   return 10;
// }

// 1. 변수가 무엇이고 변수를 부르는 방법과 그 결과
  var variable = '이것은 변수입니다.';
// 2. 함수는 무엇이고 변수에 함수를 담아 함수를 부는 방법
  var indiFn = function(){ return 10; };

// 변수는 햄버거를 담는 그릇
// 함수는 햄버거를 만드는 방법
  var buger = '치즈버거';
  var buger2 = function(){ return '불고기버거' };

  // ----------------------------------------------------------------------
  
  var mybuger = '핫스파이스버거';
  console.log(mybuger);
  var selectBuger = function(재료){
    var primary = 재료;
    var makeBuger = '빵위에 ' + '양상추 ' + primary + ' 기타등등 ' + '소스 ' + '빵';    
    return primary + '버거'; // 이유불문 최종 결론으로 값
  };
console.log( selectBuger() );

// 변수가 먼지 알겠고, 함수가 먼지 구분이간다.
// 단, 함수를 어떻게 써야하는가?는 빼고, 그냥 변수의 결과를 얻는방법/ 함수를 호출하는방법/ 함수의 결과를 얻는 return의 의미

var selectB = function(){}; // 변수 selectB에 함수를 담은것

// ------------------------------------------------------------------------------------

var a = 10;
console.log( a );

// var ar = [5, 8, 'what', 'a']; // 많은 정보를 모아서 관리
// console.log( ar[2] );  // what

var blue = '파란색';
var red = '빨간색';
var yellow = '노란색';
var white = '흰색';

var colorCase = [blue, red, yellow, white]; // 대괄호, brackets
console.log( colorCase[2] );

// ------------------------------------------------------------------------
// ;작성위치 - 변수내용 끝, 기능 끝, ()이후 쓸게없다면;

var fnCall = function ( ) {
  console.log('game Go!');
};
fnCall ( );

var fnCall2 = function ( ) {
  return 'this is Game!';
}
console.log( fnCall2 () );

// console.log('문이열리네요 ㄱ....')  : 실제 구현x - 단순 led표시기에 표시되는 형태(console창에)
// return  : 실제 구현o - 기능자체가 돌아가는거
// 둘의 구분이 어렵다면, console.log()로 결과를 확인하고, 차~후에 console.log()내부에 들어가는 것을 return에 담기~~

// --------------------------------------------------------------------------------------------
console.clear();
// + - * / % 
var dic = [];

var sum = function(a, b){
  var c = a + b;
  var rel = a + '+' + b + '= ' + c;
  // 4 + 5 = 9
  // 4 '+' 5 '=' 9
  // 4 + '+' + 5 + '=' + 9
  // a + '+' + b + '=' + c
  dic.push(rel);
  return rel; 
};
// console.log( sum( 4, 5 ) );
// ---------------------------------

var minus = function(a, b){
  var c =  a - b;
  var rel = a + '-' + b + '= ' + c;
  dic.push(rel);
  return rel;
};
// console.log( minus( 6, 10 ) );
// ---------------------------------
var mul = function(a,b){
  var c = a* b;
  var rel = a + 'x' + b + '= ' + c;
  dic.push(rel);
  return rel;
}
// var m = mul(4, 7);
// console.log( m );
// --------------------------------
var divide = function(a, b){
  var c = parseInt(a / b); // parseInt(), Math.floor()
  var rel = a + '/' + b + '=' + c;
  var c2 = a % b;
  var rel2 = a + '%'  + b + '=' + c;
  var relPlus = rel + ' 나머지: '+ c2;
  dic.push(relPlus);
  return relPlus;
};
// var d = divide(7,5);
// console.log( d );
// ---------------------------------
var svg = function(a,b){
  var c = a + b / 2;
  var rel = a + '+' + b + '/' + 2 + '=' + c;
  // dic.push(rel); //배열에 값추가
  // return rel; // 값을 반환
  return dic.push(rel); // 배열에 값추가
};
// var s = svg(5,6);
// console.log( s );
// -----------------------------------
// sum(a, b); // 덧셈: 'a + b = ' 값
// minus(a, b); // 뺄셈: 'a - b = ' 값
// mul(a, b); // 곱셈: 'a * b = ' 값
// divide(a, b); // 나눗셈: 'a / b = ' 값  -> 정수값만 도출
// svg(a,b); // 평균: 'a * b / 2 = ' 값
// remainder(a,b); // 나머지값: 'a % b = ' 값

// -----------------------------------
// var dic = []; -> 각각 다 집어 넣어라!
// 함수를 수행할때 마다 return값 을 배열에 담도록 처리!
// 계산 히스토리를 만들어라!
// console.log( dic )

// sum();
// minus();
// mul();
// divide();
// svg();

sum(3,4);
sum(3,3);
mul(3,3);
svg(3,3);
divide(3,3);
console.log( dic ); // var dic = [];

// var arr12 = [1,2,3];
// arr12.push(4);
// arr12.push('a');
// arr12.push('345');
// arr12.push(45);
// console.log( arr12 );
// dic.push( 함수(a,b) );
// dic.push( 2+4=6  );
// dic.push( 2+4=6  );

