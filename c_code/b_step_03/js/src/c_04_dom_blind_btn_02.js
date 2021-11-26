
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

// 함수1: 슬라이드기능으로 사라지는 기능 ---------------
var slideUpFn = function(height){
  var setH = height;
  // console.log( setH );
  slideH = setInterval(function(){
    setH -= 1;
    if(setH >= 0) {
      jsContentArea.style.height = setH + 'px';
    }else{
      clearInterval(slideH);
      jsContentArea.style = null;
      jsContentArea.style.display = 'none';
    }
  }, 1);
};
// ------------------------------------------
// 함수2: 슬라이드 기능으로 나타나는 기능 ---------------
var countFn = function(n){
  // setTimeout : 일정시간 뒤에 한번만 수행
  // setInterval : 일정시간 마다 수행 - clearInterval
  var arr = [2,4,7,10, 20, 30, 50, 90, 432, 654, 777, 963];
  
  var red, green, blue;
  setTimeout( function(){
    red = (Math.floor(Math.random() * 256)).toString(16);
    green = (Math.floor(Math.random() * 256)).toString(16);
    blue = (Math.floor(Math.random() * 256)).toString(16);

    if( red.length   !== 2)  { red   = '0' + red;   }
    if( green.length !== 2)  { green = '0' + green; }
    if( blue.length  !== 2) { blue   = '0' + blue;  }
    console.log( red+green+blue );  
    var randomColor = '#'+red+green+blue;

    // var ram = Math.floor( Math.random()*12 )
    // console.log( arr[ram] );
    jsContentArea.style.backgroundColor = randomColor;
  },500);
};




// --------------------------------------------
// jsCloseBtn 클릭 이벤트
jsCloseBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideUpFn(conHResult);  
});

// jsOpenBtn 클릭 이벤트
jsOpenBtn.addEventListener('click', function(event){
  event.preventDefault();
  countFn(0);
});


