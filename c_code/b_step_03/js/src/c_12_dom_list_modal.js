// c_12_dom_list_modal.js



// 시나리오
// 1. li 가져와서 여러개 생성

// data 
var data = [
  {title:'title_01', content:"lorem text _ 01", dataLink:'data_01.json'},
  {title:'title_02', content:"lorem text _ 02", dataLink:'data_02.json'},
  {title:'title_03', content:"lorem text _ 03", dataLink:'data_03.json'},
  {title:'title_04', content:"lorem text _ 04", dataLink:'data_04.json'},
  {title:'title_05', content:"lorem text _ 05", dataLink:'data_05.json'},
  {title:'title_06', content:"lorem text _ 06", dataLink:'data_06.json'},
  {title:'title_07', content:"lorem text _ 07", dataLink:'data_07.json'},
  {title:'title_08', content:"lorem text _ 08", dataLink:'data_08.json'},
  {title:'title_09', content:"lorem text _ 09", dataLink:'data_09.json'},
  {title:'title_10', content:"lorem text _ 10", dataLink:'data_10.json'},
  {title:'title_11', content:"lorem text _ 11", dataLink:'data_11.json'},
  {title:'title_12', content:"lorem text _ 12", dataLink:'data_12.json'},
  {title:'title_13', content:"lorem text _ 13", dataLink:'data_13.json'},
  {title:'title_14', content:"lorem text _ 14", dataLink:'data_14.json'},
  {title:'title_15', content:"lorem text _ 15", dataLink:'data_15.json'},
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


// 모달요소 기본가져오고 기존값 제거
var elModal = elConBox.querySelector('.card_modal');
elModal.remove();
var elCardModal;
// 함수 수행 ======================================
var fnMakeCard = function(n){
  var cloneEl = elLiOrigin.cloneNode(elLiOrigin); // 기존data 복제(복제기능을 반복)
  
  cloneEl.children[0].innerText = data[n].content;
  cloneEl.children[0].title = data[n].title;
  cloneEl.children[0].setAttribute('data-link', data[n].dataLink);

  elCardPart.append(cloneEl);// 복제요소를 첨부 
}; //fnMakeCard()

var fnRemoveModal = function(e){
  e.preventDefault();
  elCardModal.remove();
};

// li클릭시 수행 함수
var fnClickLi = function(e){
  e.preventDefault();
  // var dataLink = this.getAttribute('data-link');

  // 클릭시 수행하는 기능
    elConBox.append(elModal);//  .card_modal을 생성
    elCardModal = elConBox.querySelector('.card_modal');
    var elCloseBtn = elCardModal.querySelector('button');
    elCardModal.classList.add('on'); // .card_modal영역이 나타나기(on)
    elCloseBtn.addEventListener('click', fnRemoveModal); // 내부 닫기버튼사용가능하게
  // =======================================
};

// 함수 기본 수행 ======================================
for( ; i < dataLen; i+=1){
  fnMakeCard(i);
}

// 추가변수
var elLi = elCardPart.querySelectorAll('li > a');

// 이벤트
elLi.forEach(function(element, index){
  element.addEventListener('click', fnClickLi);
});





