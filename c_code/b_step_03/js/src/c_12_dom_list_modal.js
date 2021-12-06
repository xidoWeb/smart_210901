// c_12_dom_list_modal.js



// 시나리오
// 1. li 가져와서 여러개 생성

// data 
var data = [
  {title:'title_01', content:"lorem text _ 01"},
  {title:'title_02', content:"lorem text _ 02"},
  {title:'title_03', content:"lorem text _ 03"},
  {title:'title_04', content:"lorem text _ 04"},
  {title:'title_05', content:"lorem text _ 05"},
  {title:'title_06', content:"lorem text _ 06"},
  {title:'title_07', content:"lorem text _ 07"},
  {title:'title_08', content:"lorem text _ 08"},
  {title:'title_09', content:"lorem text _ 09"},
  {title:'title_10', content:"lorem text _ 10"},
  {title:'title_11', content:"lorem text _ 11"},
  {title:'title_12', content:"lorem text _ 12"},
  {title:'title_13', content:"lorem text _ 13"},
  {title:'title_14', content:"lorem text _ 14"},
  {title:'title_15', content:"lorem text _ 15"},
];



// 변수
var elConBox = document.querySelector('#contentBox');
var elCardPart = elConBox.querySelector('.card_part');

var i=0; 
var dataLen = data.length;

// 기능
// 요소생성방법 1 (element로인식)
// var mkLi = document.createElement('li');
// mkLi.innerHTML = '<a href="#">li 내용을 복사해서 사용해 봅시다!!!</a>';

// 요소생성방법 2 (text로 인식)
// var elLiOrigin = '<li><a href="#">li 내용을 복사해서 사용해 봅시다!!!</a></li>';

// 요소생성방법 2 (기존 html문서에서 copy)
var elLiOrigin = elCardPart.children[0]; // 요소 상태 그대로 가져오기
elLiOrigin.remove(); // 기존(원본)요소 삭제(추가생성시에 혼동을 막기위해)


// 함수 수행 ======================================
var fnMakeCard = function(){
  var cloneEl = elLiOrigin.cloneNode(elLiOrigin); // 기존data 복제(복제기능을 반복)
  elCardPart.append(cloneEl);// 복제요소를 첨부 
}; //fnMakeCard()



// 함수 기본 수행 ======================================
for( ; i < dataLen; i+=1){
  fnMakeCard();
}





