// e_08_rwd_nav_pc.js

// 1. navBox 내부의 gnb제목에 마우스 올릴경우
// 2. 서브 내용이 각각 처리되게 만들기
// 3. gnb 자식인 li를 벗어나면
// 4. 사라지게 만들기

// -----------------------------------------

// 변수 
const elNavBox = document.querySelector('#navBox');
const elGnb    = elNavBox.querySelector('.gnb');
const elGnbLi  = elGnb.children;
const elGnbLiArr = [...elGnbLi];
console.log(elGnbLiArr);

// 이벤트 
elGnbLiArr.forEach((el,idx)=>{
  el.addEventListener('mouseenter', (e)=>{
    console.log(e.target.tagName);
  });
});