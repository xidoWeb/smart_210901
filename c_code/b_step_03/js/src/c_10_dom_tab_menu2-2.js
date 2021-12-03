// c_10_dom_tab_menu2.js

// +++++++++++++++++++++++++++++++++++++++++++
// 시나리오: 
// * 새로운 2021년에 해당하는 div를 생성 ( <div class="year_part"></div> )내부에 각 이벤트 내용을 담기
// 1. .year_part는 .content_inner 내용의 뒤에 생성하는 것이 아닌 앞에 생성
// 2. .year_part를 생성함과 동시,( <h3>2021년도 이벤트</h3> )를 생성
// 3. h3뒤에 (<ul class="event_particle"></ul>)생성
// 4. ul 내부에 li를 생성 및 각 기능에 따르는 추가 요소들을 처리
      // <a href="" data-id="">
      //   <h4 class="event_title"></h4>
      //   <p class="event_narration"></p>
      //   <dl class="date"><dt class="blind">기간</dt><dd></dd></dl>
      //   <dl class="event_check"><dt>이벤트 진행</dt><dd></dd></dl>
      // </a>
// 5. 내부에 들어가는 각 요소의 내용을 별도의 객체로 생성하여 담을 수 있게 처리
// 6. 상황에 맞게 조건을 보고 그에 따른 추가 기능을 제작
// 7. li의 내부에 존재하는 a를 클릭시 별도의 모달창이 나타나게 하여, 향후 추가 data를 불러와서 적용할 수 있도록 처리
// +++++++++++++++++++++++++++++++++++++++++++


// -------------------------------------------
// data :
var eventData ={ 
      heading: '2021년도 이벤트', 
      eventList : [ // enentData.eventList
        'title1',   // enentData.eventList[0]
        'title2',   // enentData.eventList[1]
        'title3'    // enentData.eventList[2]
      ]
    };
// -------------------------------------------

// ===========================================
// 기본 변수
var eventInsertCode = '<a href="" data-id="">\
                        <h4 class="event_title"></h4>\
                        <p class="event_narration"></p>\
                          <dl class="date"><dt class="blind">기간</dt><dd></dd></dl>\
                          <dl class="event_check"><dt>이벤트 진행</dt><dd></dd></dl>\
                      </a>';

var elEventBox = document.querySelector('#eventBox');
var elContentInner = elEventBox.querySelector('.content_inner');

var yearPartList = eventData.eventList;
var partLen = yearPartList.length;
var i = 0;
// ===========================================
// 기능
// 생성 후 삽입 - h3/ul -------------------------------------

var mkYearPart = document.createElement('div'); // div 생성
    mkYearPart.setAttribute('class','year_part');   // div에 이름부여(.year_part)
    // mkYearPart.className = 'year_part';          // .year_part 에 이름부여기능 동일
    mkYearPart.innerHTML = '<h3>' + eventData.heading + '</h3>'; // .year_part에 h3생성
var elYearPartH3 = mkYearPart.querySelector('h3'); // h3 선택
var mkEventParticle = document.createElement('ul');// ul 생성
    mkEventParticle.setAttribute('class','event_particle'); // ul에 이름부여 (.event_particle)
    elYearPartH3.after(mkEventParticle); // .event_particle h3뒤에 삽입
    elContentInner.prepend(mkYearPart);  // .year_part 를 삽입    
var elEventParticle = elContentInner.querySelector('.event_particle'); // ul 선택자

// ===========================================
// 함수
// var fnMake = function(el,name){
//   var mkEl = document.createElement(el);
//   if(!!name) { mkEl.setAttribute('class', name); }
//   return mkEl;
// };

// ===========================================
// 이벤트(실제 최종 처리 기능)
// 목록 생성 및 삽입 - li -----------------------------------
// li의 갯수를 파악
yearPartList.forEach(function(data, index){
  var mkLi = document.createElement('li');
  elEventParticle.append(mkLi);

  // var mkLi = fnMake('li');
  // elEventParticle.append(mkLi);  
});


// ===========================================
// 첨부 : 
  //  el     : 요소(element)선택에대한변수
  //  mk   : 요소생성에 대한 변수
  //  ck     : 단순한 값을 판단하는 변수
  //  fn     : 함수 선택하는 변수
  //  Pascal : 생성자함수
  //  _      : 임시용 지역변수
  //  대문자 : 'string'
  //         : 기타
// append-prepend  before-after next-prev

// -------------------------------------------