// 
// c_10_dom_tab_menj_2-1.js


var innerCode = '<button type="button" data-import data-id><h4 class="event_title"></h4><p class="event_narration"></p><dl class="date"><dt class="blind">기간</dt><dd></dd></dl><dl class="event_check success"><dt></dt><dd></dd></dl></button>';

var innerCode2 = '\
    <button type="button" data-import="../event/y21042_data.json" data-id="event_21042">\
      <h4 class="event_title">summer flaver</h4>\
      <p class="event_narration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eaque?</p>\
      <dl class="date">\
        <dt class="blind">기간</dt>\
        <dd>2022. 01. 05 - 2022. 02. 15</dd>\
      </dl>\
      <dl class="event_check success">\
        <dt>이벤트 진행 상태</dt>\
        <dd>이벤트 종료</dd>\
      </dl>\
    </button>';


var innerCode3Fn = function (){
  return ( //jsx
    `
    <button type="button" data-import="../event/y21042_data.json" data-id="event_21042">
      <h4 class="event_title">summer flaver</h4>
      <p class="event_narration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eaque?</p>
      <dl class="date">
        <dt class="blind">기간</dt>
        <dd>2022. 01. 05 - 2022. 02. 15</dd>
      </dl>
      <dl class="event_check success">
        <dt>이벤트 진행 상태</dt>
        <dd>이벤트 종료</dd>
      </dl>
    </button>
    `
  );
};

// ----------------------------------------------------------------
// 탭메뉴 내용에 필요한 코드 형식 삽입하기

var testWrap = document.querySelector('#test_wrap');
var testList = testWrap.querySelectorAll('li');

testList[0].innerHTML = innerCode;
testList[1].innerHTML = innerCode2;
testList[2].innerHTML = innerCode3Fn();
