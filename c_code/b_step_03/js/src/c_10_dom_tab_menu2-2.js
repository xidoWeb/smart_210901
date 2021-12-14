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
      // 제목, 내용(선택), 기간(시작일-종료일), 진행여부(plan, play, end, stop), 추가데이터주소, 적용이미지(background)
      eventList : [ 
        {
          title:'spring event',
          content:'신년 맞이 대축제..',
          date:'2021.02.04 - 2021.02.21',
          status:'play',
          morePath:'../data/y21.0201.json',
          bgImg:'../multi/img/event/bg_01.png'
        },
        {
          title:'spring event2',
          content:'싱그러운 봄을 위한 세일 이벤트',
          date:'2021.03.04 - 2021.04.05',
          status:'end',
          morePath:'../data/y21.0402.json',
          bgImg:'../multi/img/event/bg_02.png'
        },
        {
          title:'summer flaver',
          date:'2021.07.15 - 2021.07.30',
          status:'stop',
          morePath:'../data/y21.0702.json',
          bgImg:'../multi/img/event/bg_03.png'
        }
      ]
    };
// -------------------------------------------
// 내용 이벤트 날짜 기준 순서 뒤집기
eventData.eventList.reverse();
// ===========================================
// 기본 변수
// eventInsertCode
var EVENT_INSERT_CODE  = '<a href data-id>\
                            <h4 class="event_title">제목을 넣어주세요.</h4>\
                            <p class="event_narration">설명을 담아주세요(선택)</p>\
                              <dl class="date"><dt class="blind">기간</dt><dd>시작-종료일 작성</dd></dl>\
                              <dl class="event_check"><dt>이벤트 진행</dt><dd>준비,진행,종료,취소</dd></dl>\
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

// li내부에 각각의 내용을 설정하는 함수
var fnFixContent = function(parentElement, data){
    var elParent = parentElement;


    // data요소 내부에 들어있는 property: title, content(option), date, status(select), morePath(외부주소), bgImg(배경)
    var elH4 = elParent.querySelector('.event_title');
    var elP = elParent.querySelector('.event_narration');
    var elDate = elParent.querySelector('.date > dd');
    var elEventCh = elParent.querySelector('.event_check');
    var elEventDd = elEventCh.querySelector('dd');
    var elLink    = elParent.querySelector('a');
    
    elH4.innerText = data.title;
    (data.content !== undefined) ? elP.innerText = data.content :  elP.remove();
    elDate.innerText = data.date; 

    // status (plan, play, end, stop) 중 하나만 선택(아무것도 작성안함), 
    // 해당하는 요소에 class이름부여, dd에 내용을 표기

    switch(data.status){
      case 'plan':
        elEventCh.classList.add('plan');
        elEventDd.innerText = '준비중';
        break;
      case 'play':
        elEventCh.classList.add('play');
        elEventDd.innerText = '진행';
        break;
      case 'end': 
        elEventCh.classList.add('end');
        elEventDd.innerText = '종료';
        break;
      case 'stop':
      default:
        elEventCh.classList.add('stop');
        elEventDd.innerText = '진행중지';
    }
    // -----
    // morePath(외부주소,배경이미지
    elLink.setAttribute( 'data-href', data.morePath );
    elLink.style.backgroundImage = 'url(' + data.bgImg + ')';
    elLink.style.backgroundColor = 'transparent';

}; // fnFixContent(mkLi, data);

// ===========================================
// 이벤트(실제 최종 처리 기능)
// 목록 생성 및 삽입 - li -----------------------------------
// li의 갯수를 파악
yearPartList.forEach(function(data, index){
  var mkLi = document.createElement('li');
  mkLi.innerHTML = EVENT_INSERT_CODE;
  elEventParticle.append(mkLi);

  // var mkLi = fnMake('li');
  // elEventParticle.append(mkLi);  

  fnFixContent(mkLi, data);
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

