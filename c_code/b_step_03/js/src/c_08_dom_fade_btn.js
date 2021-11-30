// c_08_dom_fade_btn.js

// .card를 클릭시 각각 필요한 기능으로 모달창이 나타나게 만들기
// 방법 1. setInterval 이용하여, opacity로 처리되게 만들기 
// 방법 2. setTimeout 이용하여, opacity로 처리되게 만들기 
// 방법 3. css-transition 이용하여, opacity로 처리되게 만들기 

// 순서체크 
// 1. .card내부에 있는 a 클릭시 -> .new_area_modal(이하 모달)을 나타나게 만들기
// 2. a는 기본기능이 페이지 이동 -> preventDefault();
// 3. 모달기능이 처리되기 : display:block과 동시에 opacity:0 -> 서서히 opacity:1로 변경되게 처리


var newBox = document.getElementById('newBox');
var card   = document.getElementsByClassName('card');
var modal  = document.getElementsByClassName('new_area_modal')[0];

// ==========================================================
// 방법 1
var intervalBtn = card[0];

var intervalFn = function(){
  var value = 0, interval;
  interval = setInterval(function(){
    console.log( value  );
    value += 0.05;
    if(value <= 1){
      modal.style.opacity = value;
    }else{
      clearInterval( interval );
    }
  }, 10);
};


// 이벤트 수행
intervalBtn.addEventListener('click', function(event){
  event.preventDefault();
  modal.style.display = 'block';
  modal.style.opacity = 0;
  intervalFn();
});
// ==========================================================