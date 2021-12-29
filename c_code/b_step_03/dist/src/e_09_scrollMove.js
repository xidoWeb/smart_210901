// e_09_scrollMove.js

const headBox = document.querySelector('#headBox');
const OPTION_FIX = 'fix';

const offsetCheck = headBox.offsetTop;
// console.log( offsetCheck );



window.addEventListener('scroll', e=>{
  const target = parseInt(e.currentTarget.scrollY);
  console.log('scroll:'+target, 'offset:'+offsetCheck );
  const headClass = headBox.classList;
  // 스크롤값이 현재 offset값보다 커지면 .fix 추가
  (target >= offsetCheck) ? headClass.add(OPTION_FIX) : headClass.remove(OPTION_FIX);
});

/**
 * scrollTop : 선택요소(element) 기준 스크롤의 움직임의 위치 값 
 * scrollY   : 브라우저(window) 기준 스크롤의 움직임의 위치 값
 * offsetTop : 선택자의 상단에서부터 떨어져있는 위치(스크롤바기준 0부터)
 * scrollTo
 * scrollBy
 * 
 * mousewheel / DOMMouseScroll
*/
