// e_01_slide_area_fade.js
// -------------------------------------
// 시나리오
// 다음버튼 클릭시 - 'fadeOut'/(fadeIn) 기능을 이용하여, 이미지 변경
// 1. 현재 보이는 이미지(z-index:10) 에 버튼 클릭시 보이는 이미지 바로뒤 에 이미지가 나타나게 만들기
// 2. 현재 보이는 이미지를 투명도 1->0으로 변경 ( 100%, 50%, 0 )
// 3. 투명도가 0이 되면 display:none으로 사라지게
// 4. animation기법으로 처리되어 사라진 이미지 style(html에 새겨진) 제거
// -------------------------------------
(() => {
// 선택자 변수
const elViewBox2 = document.querySelector('#viewBox2');
const elSlide = elViewBox2.querySelector('.slide_02');

const elBtnPart = elSlide.querySelector('.view_btn');
const elNext = elBtnPart.querySelector('.next');
const elPrev = elBtnPart.querySelector('.prev');

const indi = elSlide.querySelector('.indicator');
indi.remove();

const viewCon = elSlide.querySelector('.view_content ul');
const viewLi  = viewCon.querySelectorAll('li');

// 옵션변수
// let CLASS_CHECK = 'act';
// let countIndex = 0;
let [CLASS_CHECK, countIndex, timed, cssFn] = ['act', 0, 500, 'ease'];
// -------------------------------------------------------------
viewLi[countIndex].classList.remove('on');

viewLi[countIndex].style.display = 'block';
viewLi[countIndex].style.zIndex = '10';
viewLi[countIndex].style.position = 'absolute';
viewLi[countIndex].style.transition = `all ${timed*2}ms  ${cssFn}`;

// -------------------------------------------------------------
// 함수

// -------------------------------------------------------------
// 이벤트처리
// elNext클릭시

elNext.addEventListener('click', (e)=>{
  e.preventDefault();
  viewLi[countIndex].style.opacity = 0;
});

})()