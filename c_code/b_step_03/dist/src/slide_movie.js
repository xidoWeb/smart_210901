// slide_movie.js

// ============================
/** 시나리오1
 * 
 * 1. 다음버튼 클릭시 첫 요소가 마지막으로 이동 
 */
// ============================


// 변수
const elViewBox = document.querySelector('#viewBox');
const elSlideBtn = elViewBox.querySelector('.slide_btn');
const elSlideWrap = elViewBox.querySelector('.view_wrap');
const elModal = elViewBox.querySelector('.modal_area');
const elModalClose = elModal.querySelector('.modal_close > button');

let elSlideLi = elSlideWrap.querySelectorAll('li');

let elSlide = [...elSlideLi];
let PERMISSION = true;
elViewBox.style.overflowX = 'hidden';
// -------------------------------------------------

elSlide.forEach((el,idx)=>{
  el.setAttribute('data-num',idx);
});

// -------------------------------------------------
const fnSlideMove = (e)=>{
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    let target = e.target.classList.contains('next');
    elSlide = [...elSlideLi];
    (target) ?  
      elSlideWrap.append( elSlide.at(0) ) : 
      elSlideWrap.prepend( elSlide.at(-1) ) ;

    elSlideLi = elSlideWrap.querySelectorAll('li');
    setTimeout(()=>{ PERMISSION=true; },500);
  }
};


elSlideWrap.prepend( elSlide.at(-1) ) ;
elSlideWrap.prepend( elSlide.at(-2) ) ;
elSlideLi = elSlideWrap.querySelectorAll('li');

// 이벤트
elSlideBtn.addEventListener('click', fnSlideMove);

elSlideWrap.addEventListener('click', (e) => {
  e.preventDefault();
  let el = e.target;
  if(el.tagName.toLowerCase() === 'button' ){
    let num = el.parentNode.getAttribute('data-num');
    elModal.classList.add('on');
    elModalClose.focus();
  }
});

elModalClose.addEventListener('click', (e)=>{
  e.preventDefault();
  elModal.classList.remove('on');
});

// -----------------------------------------------------
// li를 클릭시 해당하는 내용에 맞는 영상을 모달창에 띄워 처리

// e.target.tagName.toLowerCase()  : 이벤트처리된.타겟의.요소이름.소문자로처리()