// c_10_dom_tab_menu2.js

// 시나리오 1: 이벤트페이지에서 해당하는 연도를 클릭시, 그에 맞는 연도의 data목록이 나타나게 만들기
// 변수 선택 : 연도선택 ( .title_inner, li, button ), 해당 순번의 내용( .content_inner , .year_part )
// class 추가/제거 : .title_inner 내부의 li와 .content_inner>.year_part에 각각 '.on'을 추가/제거
// 선택자 사용법 : querySelector
// 순서를 선택/할당하는방식 : forEach
// .on을 할당하는 방법 : 선택순번 외 제거

// ===========================
// 변수++++++++++++++++++++++
var eventBox = document.querySelector('#eventBox');
var titleInner = eventBox.querySelector('.title_inner');
var titleUl = titleInner.children[0];
var titleList = titleUl.children;
var titleLiEl = [].slice.call(titleList); // button선택자는 추후 진행

var contentInner = eventBox.querySelector('.content_inner');
var contentYear = contentInner.querySelectorAll('.year_part');
var optionIndex = 0;

// 기능++++++++++++++++++++++
// optionIndex 순번에 맞는 탭메뉴 구성
titleLiEl[optionIndex].classList.add('on');
contentYear[optionIndex].classList.add('on');

// 함수++++++++++++++++++++++

// 이벤트++++++++++++++++++++++

// ===========================
