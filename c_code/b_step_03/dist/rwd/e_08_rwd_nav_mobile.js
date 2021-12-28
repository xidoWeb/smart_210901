// e_08_rwd_nav_mobile.js

// 1. #navBox 내부의 .nav_btn을 클릭시 
// 2. 해당하는 요소에 .on처리

{
    
  // ------------------------------------
  // 변수
  const elNavBox = document.querySelector('#navBox');
  const elGnb    = document.querySelector('.gnb');
  const elNavBtn = elNavBox.querySelector('.nav_btn');

  const OPTION_NAME = 'on';
  const OPTION_VIEW = 'block';
  const OPTION_NONE = 'none';

  // 이벤트
  elNavBtn.addEventListener('click', (e)=>{
    const ckOption = elNavBtn.classList.contains(OPTION_NAME);
    console.log('on:',ckOption);
    if(!ckOption){
      elGnb.style.display = OPTION_VIEW;
      elNavBtn.classList.add(OPTION_NAME);
    }else{
      elGnb.style.display = OPTION_NONE;
      elNavBtn.classList.remove(OPTION_NAME);
    }
  }); 
  // elNavBtn.children[0].addEventListener('focus', (e)=>{
  //   elNavBtn.classList.add(OPTION_NAME);
  //   if(ckOption){
  //     elGnb.style.display = OPTION_VIEW;
  //   }
  // });

}