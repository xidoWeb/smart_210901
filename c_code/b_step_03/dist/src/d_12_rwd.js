// d_12_rwd.js

// @media 화면타입 and (max-width:768px){}

const elMobile = document.querySelector('.mobile');
const elPc = document.querySelector('.pc');

// ----------------------------------------------
const tab = 768; // 모든브라우저 사용가능
const tabDevice = '(max-width:768px)'; // 구형X

let winWidth = window.innerWidth; // 브라우저의 가로크기
console.log( winWidth );
const fnRwd = (deviceType)=>{
  if(deviceType < tab){
    elMobile.style.display = 'block';
    elPc.style.display = 'none';
  }else{
    elMobile.style.display = 'none';
    elPc.style.display = 'block';
  }
};
fnRwd(winWidth);

window.addEventListener('resize', e=>{
  const winReWidth = window.innerWidth;
  //location.reload(); //새로고침
  console.log( winReWidth );
  fnRwd(winReWidth);
});
