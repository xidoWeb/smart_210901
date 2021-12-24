// d_12_rwd_matchMedia.js

// matchMedia를 이용하여 해당규격에 일치하는지(matches) 판단
// window.matchMedia('css크기를 그대로 옮겨놓은 형태').matches 

const wrap = document.querySelector('#wrap');
const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
mobile.remove();
pc.remove();
const size = 'screen and (max-width:768px)';
// const size2 = 'screen and (min-width:320px) and (max-width:768px)';
const mediaQuery = window.matchMedia(size);  
// 지정규격과 체크해서 맞으면 true 아니면 false
const fnCKMedia = ()=>{
  if(mediaQuery.matches){
    console.log('768보다 작은 크기');
    wrap.append(mobile);
    pc.remove();
  }else{
    console.log('768보다 큰 크기');
    wrap.append(pc);
    mobile.remove();
  }
};
fnCKMedia();
// ---------------------
// 정해진크기규격(max-width:768px)에서 변화할때 
mediaQuery.addEventListener('change', (e)=>{
  fnCKMedia();
});

// 이전버전에서는 무조건 브라우저의 크기가 변화할때마다(resize) 매번 확인해서 그 규격에 맞게 설정
// matchMedia는 최초의 설정된 크기를 기준으로 해당내용이 변경(change)되면 바로 확인하여 설정


// Question 어떻게 아래 규격을 확인할 것인가?
const dataDevice = [
  { type: 'mobile' , size : 599 }, // 600미만
  { type: 'tablet' , size : 767 }, // 600 ~ 767
  { type: 'laptop' , size : 1439 },// 768 ~ 1439
  { type: 'pc' }                   // 1440 ~     
];