
// javascript를 이용하여, 
// 버튼 클릭시 높이값이 0이 되도록처리
  // - 높이값을 먼저 파악, 최종 값이 0값
  // - 클릭시 기능 수행( 단, 기본기능 삭제 )
// 높이가 0이면, display:none;
  // - if()이용하여 0값으로 처리되었는지 체크
  // display:none 일 경우, 차후의 처리를 위해 style기능을 제거할지 파악

// ----------------------------------------
var jsBtn         = document.querySelector('.btn');
var jsCloseBtn    = jsBtn.querySelector('.close');
var jsOpenBtn     = jsBtn.querySelector('.open');
var jsOpenBtn2    = jsBtn.querySelector('.open2');
var jsContentArea = document.querySelector('.content_area');
// -----------------------------------------------
var conH = getComputedStyle(jsContentArea).height;
var conHResult = parseInt(conH);
var timed = 500;
var slideH;
// 함수 --------------------------------------------
var slideUpFn = function(height){
  var setH = height;
  // console.log( setH );
  slideH = setInterval(function(){
    setH -= 1;
    if(setH >= 0) {
      jsContentArea.style.height = setH + 'px'
    }else{
      clearInterval(slideH);
      // jsContentArea.style = null;
      jsContentArea.style.display = 'none';
    }
  }, timed / 100);
};

// --------------------------------------------
// jsCloseBtn클릭 이벤트
jsCloseBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideUpFn(conHResult);  
});


