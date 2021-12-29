// e_09_scrollMove.js

const headBox = document.querySelector('#headBox');
const OPTION_FIX = 'fix';

const offsetCheck = headBox.offsetTop;
console.log( offsetCheck );


window.addEventListener('scroll', e=>{
  const target = parseInt(e.currentTarget.scrollY);
  console.log('scroll:'+target, 'offset:'+offsetCheck );
  const headClass = headBox.classList;
  // 스크롤값이 현재 offset값보다 커지면 .fix 추가
  (target >= offsetCheck) ? headClass.add(OPTION_FIX) : headClass.remove(OPTION_FIX);
});