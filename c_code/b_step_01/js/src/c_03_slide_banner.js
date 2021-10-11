// c_03_slide_banner.js

// var t = 'test입니다.';
// console.log( t );

var next = document.querySelector('.next');
var slideCon = document.querySelector('.slide_con_wrap');
var slideDiv = slideCon.querySelectorAll('div');
var i = 0;

// 다음버튼을 클릭시 기능수행(function)
next.addEventListener('click', function(e){
  // next에 들어있는 기본 기능을 수행하지 않도록 처리
  e.preventDefault();

  // 주어진 변수 i에 1을 더해라
  i += 1;

  // i의 값이 5보다 크거나 같으면 수행
  if(i >= 5){   i = 0;  }
  
  // 0부터 4까지 반복(5번 반복수행)
  for(var j=0; j<5; j+=1){
    // div의 j번째에 들어있는 classs이름 'action'을 제거
    slideDiv[j].classList.remove('action');
  }
  // div의 i번째에 class이름 'action'을 추가
  slideDiv[i].classList.add('action');

});

/*
*/