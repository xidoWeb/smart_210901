
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

var content = [
  '오늘도 고생하셨어요!',
  '힘내세요.',
  '내일도 또 다시!!!'
];

var content2 = [];
content2[0] = '힘내세요.';
content2.push('내일도 또 다시!!!');
content2.unshift('오늘도 고생하셨어요!');
// console.log(content2);

var userFn = function(data){
  var random = Math.random() * 3;
  var int = parseInt(random);
  var plusText = data + '님' + ' ' + content[int];
  return plusText;
};

var userRel = userFn('me');
console.log( userRel );

var wrap = document.getElementById('wrap');
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