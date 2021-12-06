// c_10_dom_tab_menu2-3.js


// ++++++++++++++++++++++++++++
// 시나리오:
// * li카드를 선택시 모달창이 나타나게 만들기
// 1. 카드 클릭시 모달창을 띄울 요소를 생성
// 2. 모달창이 서서히 나타나게 하고(fade) // 일단 class로 대체
// v3. 모달창이 나타나면, 해당하는 모달창의 닫기 버튼에 자동으로 focus 처리
// v4. 모달창의 닫기버튼을 클릭하면, 기존에 있던 li카드의 위치로 돌아가서 해당 카드에 focus 처리
// ++++++++++++++++++++++++++++

// 변수
var elEventBox = document.querySelector('#eventBox');
var elEventArea = elEventBox.querySelector('.event_area');
var elContentInner = elEventArea.querySelector('.content_inner');
var elYearPart = elContentInner.querySelector('.year_part.on');
var elEventParticle = elYearPart.querySelector('.event_particle');
// var elEventLi = elEventParticle.querySelectorAll('li');
var elEventLi = elEventParticle.children;
var elEventLiArr = [].slice.call(elEventLi);



// 기능


// 함수


// 이벤트
elEventLiArr.forEach(function(element, index){
  var elLink = element.children[0];
  elLink.addEventListener('click', function(e){
    e.preventDefault();

  });
});


// ++++++++++++++++++++++++++++++++++++++++++++++
var footInner = document.querySelector('.footer_inner');
var footInnerLi = footInner.childNodes;
// console.log( footInnerLi );
// console.log( footInnerLi[3].nodeType  === 1);
// * childNodes에서 필요한 요소를 뽑아내려면: nodeType을 체크
// nodeType: 1- 요소 , 8-comment, 3-text 

/*
console.log( footInnerLi );
// var liArr = Array.prototype.slice.call(footInnerLi);
// var footTypeCheck = liArr.filter(function(data){
//   return data.nodeType === 1;
// });
// console.log( footTypeCheck );

var footTypeArr = Array.prototype.filter.call(footInnerLi, function(data){
  // 들어온 data의 형식이 요소의 개념인경우는 footTypeArr에 push()처리
  return data.nodeType === 1;
});
// footInnerLi.filter(function(){})
console.log( footTypeArr );

// NodeList의 경우는 forEach로 사용시 인식하는 형태이지만, 실제로는 배열이 아니기에, 배열기능은 원할하게 동작하지 않는다.
// 필요시 강제로 배열형식으로 처리해야 하는경우 Array.prototype기능을 사용한다.
*/



// ++++++++++++++++++++++++++++++++++++++++++++++
