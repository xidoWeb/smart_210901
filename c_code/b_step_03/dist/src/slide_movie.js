// slide_movie.js

// ============================
/** 시나리오1
 * 
 * 1. 다음버튼 클릭시 첫 요소가 마지막으로 이동 
 */
// ============================


// 변수
const elViewBox = document.querySelector('#viewBox');
const elSlideBtn = elViewBox.querySelector('.slide_btn');
const elSlideWrap = elViewBox.querySelector('.view_wrap');
const elSlideLi = elSlideWrap.querySelectorAll('li');
const elBtn = elSlideBtn.querySelectorAll('button');


const mkBtn = document.createElement('button');
mkBtn.innerText = '임시버튼 생성'
elSlideBtn.append( mkBtn );

console.log( elBtn );

// 이벤트
elSlideBtn.addEventListener('click', (e)=>{
  console.log( e.target );
  // e.target.classList.contains('next');
});
// elBtn.forEach((el,idx)=>{
//   el.addEventListener('click', e=>{
//     console.log( e );
//   })
// })


// ---------------------------------------------
// 이벤트 위임 : 실제로 클릭해야하는 요소가 아닌 그 부모에서 클릭했을 경우 해당하는 요소가 반응할 수 있도록 인식
// 버블링:부모에 전달, 캡처링:자식에게 전달