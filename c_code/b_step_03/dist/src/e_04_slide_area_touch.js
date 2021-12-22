// e_04_slide_area_touch.js

// ================================
/** 전체 시나리오.
 * 1. 터치기반의 형식으로 광고 슬라이드 제작 
 * 2. 마우스 기반의 드래그형식의 슬라이드 제작
 * 3. slide 광고 틀 제작(json형식의 외부데이터 불러오기)
 */
// ================================
/** 
 * 외부 데이터 불러와서 적용 (html - 임시)
 */
// ================================
// ================================

const path = "../temp/slide_area3.jsx";

const elViewBox = document.querySelector('#viewBox');
const elTitle = document.querySelector('head>title');
// let elViewWrap;
// let elViewLi;

fetch(path)
.then( response => response.text() )
.then( (data)=>{
  elViewBox.innerHTML = data;
})
.then(()=>{
  const linkCss = document.createElement('link');
  linkCss.setAttribute('rel','stylesheet');
  linkCss.setAttribute('href','../css/src/e_04_slide_area_touch.css');
  elTitle.before(linkCss);
})
.then(()=>{
  const elViewWrap = elViewBox.querySelector('.view_wrap');
  const elViewLi = elViewWrap.querySelectorAll('li');
  const cloneEl = elViewLi[elViewLi.length -1].cloneNode(true);
  elViewWrap.prepend(cloneEl);
  return [elViewWrap, elViewLi];
})
.then((el)=>{
  const elViewCon = elViewBox.querySelector('.view_content');

  // elViewCon.addEventListener('touchstart', (e)=>{
  //   console.log( e.changedTouches[0].pageX );
  //   console.log( e.touches[0].pageX );
  // });
  // elViewCon.addEventListener('touchmove', (e)=>{
  //   console.log('changed:', e.changedTouches[0].pageX,  'touch:', e.touches[0].pageX  );    
  // });
  // elViewCon.addEventListener('touchend', (e)=>{
  //   console.log('changed:', e.changedTouches[0]);    
  //   console.log('touch:', e.touches[0].pageX  );    
  // });


  console.log( elViewCon.getBoundingClientRect().left );
})



// 터치를 기반으로 처리하기
// touchstart : 이벤트 핸들러 중 터치의 시작을 의미
// touchmove : 이벤트 핸들러 중 터치를 이용하여 움직이는 상황
// touchend : 이벤트 핸들러 중 터치의 끝을 의미
// event.changedTouches[0] : 터치를 인식하여 좌표를 계산하는 위치 
// event.touches[0] :  터치를 인식하여 좌표를 계산하는 위치 touchend가 없음
// 터치를 이용하여 좌표를 계산하는 기능 :  clientX, screenX, pageX 가 존재(y좌표도 있음)
// 대상의 위치를 기준으로 좌표를 계산(offsetX)하는 기능이 없음, 
// 이에, 해당 요소의 위치를 파악하는 기능필요 : target.getBoundingClientRect().left | target.getBoundingClientRect().top