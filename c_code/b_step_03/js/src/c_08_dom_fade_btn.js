// c_08_dom_fade_btn.js

// .card를 클릭시 각각 필요한 기능으로 모달창이 나타나게 만들기
// 방법 1. setInterval 이용하여, opacity로 처리되게 만들기 
// 방법 2. setTimeout 이용하여, opacity로 처리되게 만들기 
// 방법 3. css-transition 이용하여, opacity로 처리되게 만들기 

// 순서체크 
// 1. .card내부에 있는 a 클릭시 -> .new_area_modal(이하 모달)을 나타나게 만들기
// 2. a는 기본기능이 페이지 이동 -> preventDefault();
// 3. 모달기능이 처리되기 : display:block과 동시에 opacity:0 -> 서서히 opacity:1로 변경되게 처리


var newBox       = document.getElementById('newBox');
var card         = document.getElementsByClassName('card');
var modal        = document.getElementsByClassName('new_area_modal')[0];
var closeBtnPart = modal.getElementsByClassName('close_btn')[0];
var closeBtn     = closeBtnPart.children[0];
var cardIndex    = 0;

// 공통함수

// displayFn : 상황에 맞게 display:block or display:none 처리하는 함수
var displayFn =  function(view){
  var displayCheck = view || false;
  console.log( displayCheck );
  if(!displayCheck){
    modal.style.display = 'block';
    modal.style.opacity = 0;
  }else{
    modal.style = null;
    modal.style.display = 'none';
    card[cardIndex].children[0].focus();
  }
};

// ==========================================================
// 방법 1
var intervalBtn = card[0];

// 함수
var intervalFn = function(){
  var value = 0;
  var interval;
  interval = setInterval(function(){
    value += 1;
    if(value <= 100){
      modal.style.opacity = value / 100;
    }else{
      modal.style.opacity = null; // 완성 후 의미없는 속성 처리
      clearInterval( interval );
    }
  }, 1);
};

// 이벤트 수행
intervalBtn.addEventListener('click', function(event){
  event.preventDefault();
  cardIndex = 0;  
  displayFn();
  intervalFn();
  closeBtn.focus();
});

// ==========================================================
// 방법2
var timeoutBtn = card[1];

// 함수 
var opValue = 0;
var timeoutFn = function(){  
  opValue += 1; 
  setTimeout(function(){
    modal.style.opacity = opValue + '%';
    (opValue <= 100) ? timeoutFn() : modal.style.opacity = null;
  }, 1);
};

// 이벤트 수행
timeoutBtn.addEventListener('click', function(event){
  event.preventDefault();  
  cardIndex = 1;
  displayFn();
  timeoutFn();
  closeBtn.focus();
});
// ==========================================================
// 방법 3.
// css-transition
var cssBtn = card[2];

// 함수
var cssTransitionFn = function(timed){
  var timed = timed || 500;
  // modal.style.transitionProperty = 'opacity';
  // modal.style.transitionDuration = '500ms';
  // modal.style.transitionTimingFunction = 'linear';
  modal.style.transition = 'opacity '+ timed +'ms linear';
  setTimeout(function(){
    modal.style.opacity = 1;
  },1);
  setTimeout(function(){
    modal.style = null;
    modal.style.display = 'block';
  }, timed + 1);
};

// 이벤트 수행
cssBtn.addEventListener('click', function(event){
  event.preventDefault();
  cardIndex = 2;
  displayFn();
  cssTransitionFn(300);
  closeBtn.focus();
});

// ============================================================
// 닫기 버튼 수행

// 함수
var intervalHideFn = function(){
  var style = modal.style;
  var value = getComputedStyle(modal).opacity * 100;
  var interval;
  interval = setInterval(function(){
    value -= 1;
    if(value >= 0){
      style.opacity = value / 100;
    }else{
      clearInterval( interval );
      displayFn(true);
    }                  
  }, 1);
};

// 이벤트
closeBtn.addEventListener('click', function(event){
  event.preventDefault();
  intervalHideFn();
});

console.clear();
// 카드 클릭시 모달창 띄우면서 focus는 해당버튼으로 focus처리되도록 처리
// ==================================================