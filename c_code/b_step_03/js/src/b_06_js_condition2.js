// b_06_js_condition2.js

// 기능설명
// input에 글자를 입력할때 어떠한 글자를 입력했는지 체크

// 변수
var inputBox = document.querySelector('#inputBox');
var par = document.querySelector('p');
var narr;

// 함수설정
var keyFn = function (data) {
  switch (data) {
    case '1':
      narr = '숫자 1을 입력했습니다.';
      console.log('숫자1 입력했습니다.');
      break;
    case ' ':
      narr = '스페이스를 입력했습니다.';
      console.log('스페이스를 입력했습니다.');
      break;
    default:
      narr = '다른글자를 입력';
      console.log('다른글자를 입력');
  }
};// keyFn();

// 이벤트
// inputBox에 이벤트발생(글입력하면, 다음을 수행)
inputBox.addEventListener('keyup', function (event) {
  keyFn(event.key);
  par.innerText = narr;
});