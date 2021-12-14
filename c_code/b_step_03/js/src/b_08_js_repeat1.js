// b_08_js_repeat1.js

// while(){} -------------------------------

  var i = 10; // 1.최초값
  while( i < 10 ){ // 2.조건비교(참이면 내용 수행, 거짓이면 끝낸다)
    console.log('while:', i);
    i+=1; // 3. 변수연산후 2번으로 이동
  }


// do-whild  ---------------------------------

  var j = 10;
  do{
    console.log('do-while:', j);
    j+=1;
  } while (j < 5)

// -------------------------------------------

// for(){} -----------------------------------

var w = 0;
while(w < 20){
  console.log('w: ', w);
  w += 2;
}

// var y = 0;
// for( ; y < 20 ; ){
//   console.log('y: ', y);
//   y += 2;
// }

var y = 0;
// for(; y < 20 ;  y += 2){
//   console.log('y: ', y);
// }
// console.log(y)
var y = 0;
for(y = 0; y < 5 ;  y += 1){
  console.log('y: ', y);
}
console.log(y);


console.clear();
// 문제 : 2021년 기준으로 과거 50년을 모두 도출
// 2021년 - 2020년 - 2019년 ... 
// 1. console.log
// 2. document
/*
var yy = 2021;
var text = '년';
var targetY = 2021-50;
for(; yy >= targetY; yy -= 1 ){
  console.log( yy + text );
}
*/

// 생성자함수를 사용하는 방법
// 1. 첫글자가 대문자
// 2. 생성자그대로 사용하는 것이 아닌 해당하는 함수를 복제하여 객체로 사용 `new` 연산자를 붙여서 사용
// 3. 함수중에 기존에 존재하는 함수를 내장함수라고 불리우며, 생성자함수도 내장되어있는 기능이 있다.

// 날짜와 관련된 함수 Date();
var date = new Date();
// console.log( date.getFullYear() );
var yy = date.getFullYear();
var text = '년';
var targetY = yy - 50;
var ul = document.querySelector('.test');
var li;

for(; yy >= targetY; yy -= 1 ){
  // console.log( yy + text );
  // document.write(yy+text);

  li = document.createElement('li');
  li.innerText = yy+text;
  ul.append(li);
}

// 요소를 생성하는 방법
// 1. document.createElement(요소이름);
// 2. 생성된 요소에 기능 첨부
// 3. 생성된 요소를 선택된 요소에 담기: append()