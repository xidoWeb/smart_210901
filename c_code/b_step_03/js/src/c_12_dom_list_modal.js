// c_12_dom_list_modal.js



// 시나리오
// 1. li 가져와서 여러개 생성


// 변수
var elConBox = document.querySelector('#contentBox');
var elCardPart = elConBox.querySelector('.card_part');

// 기능
// 요소생성방법 1 (element로인식)
// var mkLi = document.createElement('li');
// mkLi.innerHTML = '<a href="#">li 내용을 복사해서 사용해 봅시다!!!</a>';

// 요소생성방법 2 (text로 인식)
// var elLiOrigin = '<li><a href="#">li 내용을 복사해서 사용해 봅시다!!!</a></li>';

// 요소생성방법 2 (기존 html문서에서 copy)
var elLiOrigin = elCardPart.children[0]; // 요소 상태 그대로 가져오기
elLiOrigin.remove(); // 기존(원본)요소 삭제(추가생성시에 혼동을 막기위해)

var cloneEl = elLiOrigin.cloneNode(elLiOrigin); // 기존data 복제(복제기능을 반복)
elCardPart.append(elLiOrigin);// 복제요소를 첨부 




