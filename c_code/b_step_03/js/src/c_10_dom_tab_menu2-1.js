// 
// c_10_dom_tab_menj_2-1.js

var innerCode = '<a href="#" data-id><h4 class="event_title"></h4><p class="event_narration"></p><dl class="date"><dt class="blind">기간</dt><dd></dd></dl><dl class="event_check success"><dt></dt><dd></dd></dl></a>';

// 1. html요소를 생성, 지정된 위치에 삽입 - innerHTML, append

// 선택변수
var contentInner = document.querySelector('.content_inner');
var yearPart = contentInner.querySelectorAll('.year_part');
var latestYear = yearPart[0];
// console.log( latestYear )

// 기능
  // 1. ul생성
    var makeUl = document.createElement('ul');
    var makeLi = document.createElement('li');

    makeUl.className = 'two'; // 기존내용지우고 대체
    makeUl.classList.add('one');// 기존에 추가
    makeUl.setAttribute('data-id','three'); // 대체, 속성 변경가능

    latestYear.append( makeUl );
    // latestYear.appendChild( mkt );// 문자불가능
    var yearUl = latestYear.querySelector('ul');
    yearUl.append(makeLi);


// ------------------------------------------------------------------------------------
// append 는 지정된 선택자 내부에 필요한 요소(내용)을 기존 내용에 추가로 덧붙이는 기능
// appendChild 는 'Node'형식으로 구성된 내용만 담을수 있다(element).
// createElement는 요소를 생성하는 기능 - 생성만 가능하며 1회용, 추가로 덧붙이기 위해서는 append, appendChild ..을 사용
// 요소에 class속성을 추가하는 방법 
  // 1. 선택자.classList.add('이름'), 
  // 2. 선택자.className = '이름', 
  // 3. 선택자.setAttribute('속성명','이름');