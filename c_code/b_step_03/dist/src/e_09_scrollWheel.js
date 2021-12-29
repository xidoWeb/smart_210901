// e_09_scrollWheel.js
// 변수 

// 변수 ----------------------------------------------------
let scrollDelta = 0;
let scrollIndex = 0;
let PERMISSION = true;
const WIN_HEIGHT = window.innerHeight;

// 함수 ----------------------------------------------------
const fnScrollMove = ()=>{
  if(PERMISSION){
    PERMISSION = false;
    if(scrollDelta < 0 && scrollIndex >= 0) {
      scrollIndex += 1;
    }else if(scrollIndex > 0){
      scrollIndex -= 1;
    }
    
    // console.log( scrollIndex );
    window.scrollTo({
      top:WIN_HEIGHT * scrollIndex, 
      behavior:'smooth'
    });
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