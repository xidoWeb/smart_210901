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
let beforeIndex = countIndex;
const liLen = viewLi.length;
// -------------------------------------------------------------
viewLi[countIndex].classList.remove('on');


// -------------------------------------------------------------
// 함수
const fnInsertStyle = () => {
  viewLi[beforeIndex].style.display    = 'block';
  viewLi[beforeIndex].style.zIndex     = '100';
  viewLi[beforeIndex].style.position   = 'absolute'; // css에서 작성
  viewLi[beforeIndex].style.transition = `all ${timed}ms  ${cssFn}`; //css에서 or js
};

const fnOpacity = () => {
  viewLi[countIndex].style.display = 'block';
  viewLi[beforeIndex].style.opacity = 0;
    // 수행2
    setTimeout( () => {
      viewLi[beforeIndex].removeAttribute('style'); // viewLi[beforeIndex].style = null;
      beforeIndex = countIndex;
      fnInsertStyle();
    }, timed);
};
// 함수 기본 수행
fnInsertStyle();
// -------------------------------------------------------------
// 이벤트처리
// elNext클릭시
  elNext.addEventListener('click', (e)=>{
    e.preventDefault();
    // 수행1
    (countIndex < liLen-1) ? countIndex += 1 : countIndex = 0;
    fnOpacity();
  });
})()