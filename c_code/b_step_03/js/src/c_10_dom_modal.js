// c_10_dom_modal.js

// ++++++++++++++++++++++++++++
// 시나리오:
// * li카드를 선택시 모달창이 나타나게 만들기
// 1. 카드 클릭시 모달창을 띄울 요소를 생성(???) // 추후 처리
// 2. 모달창이 서서히 나타나게 하고(fade) // 일단 class로 대체
// 3. 모달창이 나타나면, 해당하는 모달창의 닫기 버튼에 자동으로 focus 처리
// 4. 모달창의 닫기버튼을 클릭하면, 기존에 있던 li카드의 위치로 돌아가서 해당 카드에 focus 처리
// ++++++++++++++++++++++++++++

// ============================
// 변수
var elEventBox       = document.querySelector('#eventBox');
var elContentInner   = elEventBox.querySelector('.content_inner');
var elYearPart       = elContentInner.querySelector('.year_part.on');
var elYearLi         = elYearPart.querySelectorAll('li a');
var elYearLiSelector = [].slice.call(elYearLi);
// console.log( elYearLiSelector );

var elModal          = elEventBox.querySelector('.event_modal');
var elModalCloseBtn  = elModal.querySelector('.modal_close button');

var OPTION_CHECK     = 'on';
// ============================
// 기능
// ============================
// 함수
// ============================
// 이벤트
elYearLiSelector.forEach(function(element, index){
  element.addEventListener('click', function(e){
    e.preventDefault();
    // this.getAttribute('data-href') // 차후 관련 주소를 통해 필요한 data를 처리....    
    elModal.classList.add(OPTION_CHECK);
    elModalCloseBtn.focus();
  });
}); 
// ============================
// +++++++++++++++++++++++++++
// 첨부 : 
// +++++++++++++++++++++++++++