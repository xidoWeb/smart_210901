// e_08_rwd_nav_pc.js

// 1. navBox 내부의 gnb제목에 마우스 올릴경우
// 2. 서브 내용이 각각 처리되게 만들기
// 3. gnb 자식인 li를 벗어나면
// 4. 사라지게 만들기

// -----------------------------------------
{
  
// 변수 
const elNavBox = document.querySelector('#navBox');
const elGnb    = elNavBox.querySelector('.gnb');
const elGnbLi  = elGnb.children;
const elGnbLiArr = [...elGnbLi];

const OPTION_NAME = 'on';


// 이벤트 
elGnbLiArr.forEach((el, idx)=>{
  el.addEventListener('mouseenter', (e)=>{
    const elTarget = e.target;
    elTarget.classList.add(OPTION_NAME);
  });

  el.addEventListener('mouseleave', (e)=>{
    const elTarget = e.target;
    elTarget.classList.remove(OPTION_NAME);
  });

  const elLink = el.querySelector('.gnb_title').children[0];
  elLink.addEventListener('focus', (e)=>{
    // const elTarget = e.target.parentNode.parentNode;
    // console.log(elTarget); // a를 기준으로 부모의 부모   

    for(let i=0; i<elGnbLiArr.length; i++){
      if(i !== idx){
        elGnbLiArr[i].classList.remove(OPTION_NAME);
      }else{
        // elTarget.classList.add(OPTION_NAME);
        elGnbLiArr[i].classList.add(OPTION_NAME);
      }
    }
  });
  // .sub_list의 마직막 요소의 a에 focusout 또는 blur처리시 li에 on제거
});

}
