// e_09_scrollWheel.js
// 변수 

// 변수 ----------------------------------------------------
const elWrap = document.querySelector('#wrap');

let scrollDelta = 0;
let scrollIndex = 0;
let PERMISSION = true;
const WIN_HEIGHT = window.innerHeight;
const TOTAL_HEIGHT = elWrap.clientHeight;
const MAX_SCROLL = TOTAL_HEIGHT - WIN_HEIGHT; // 화면에 보이는 만큼 제외한 높이값 확인

// 함수 ----------------------------------------------------
// 마우스 휠을 움직였을때 수치가 1씩 증가/감소 하게 하고
// 이때, 전체 길이 기준 작은 수치일 경우에 일정 크기만큼 이동하게 처리
// 중복 수행을 방지하기 위해 임의 변수 PERMISSION을 첨부하여 해당 기능을 제한

const fnScrollMove = ()=>{
  if(PERMISSION){
    PERMISSION = false;
    if(scrollDelta < 0 && scrollIndex >= 0) {
      scrollIndex += 1;
    }else if(scrollIndex > 0){
      scrollIndex -= 1;
    }
    
    // console.log( scrollIndex );
    let moveScroll =  WIN_HEIGHT * scrollIndex;
    if(moveScroll <= TOTAL_HEIGHT){
      window.scrollTo({
        top: moveScroll, 
        behavior:'smooth'
      });
    }  
    setTimeout(()=>{
      PERMISSION = true;
    }, 600);
  }
};


// 이벤트 ----------------------------------------------------

// fire fox 를 제외한 브라우저의 휠값 체크 -> -120 / 120
window.addEventListener('mousewheel', function(e){
  // console.log(e.wheelDeltaY); // ie에서 인식 불가
  // console.log(e.wheelDelta);
  scrollDelta = e.wheelDelta;
  fnScrollMove();
});

// fire for에서 휠값 체크 -> 3 / -3 이를 같은 공통 값으로 처리하기 위해 -40을 곱해서 처리
window.addEventListener('DOMMouseScroll', function(e){
  let deltaY = e.detail;
  // event내부에 wheelDelta기능이 없다면 (firefox기반)
  if(e.wheelDelta === undefined){  deltaY *= -40; }
  scrollDelta = deltaY;
  fnScrollMove();
});
