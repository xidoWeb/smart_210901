// d_12_rwd.js

// @media 화면타입 and (max-width:768px){}
const elWrap   = document.querySelector('#wrap');
const elMobile = document.querySelector('.mobile');
const elPc     = document.querySelector('.pc');

// ----------------------------------------------
const tab = 768; // 모든브라우저 사용가능
const laptop = 1440;

const dataDevice = [
  { type: 'mobile' , size : 599 },
  { type: 'tablet' , size : 767 },
  { type: 'laptop' , size : 1439 },
  { type: 'pc' }
];

let CK_DEVICE;
let winWidth = window.innerWidth; // 브라우저의 가로크기
// console.log( winWidth );

const fnSwitchView = (type)=>{
  switch(type){
    case dataDevice[0].type:
    case dataDevice[1].type:
      elWrap.append(elMobile);
      elPc.remove()
      break;
    default:
      elMobile.remove();
      elWrap.append(elPc);
  }
};

const fnRwd = (deviceType)=>{
  let beforeDevice = CK_DEVICE; // 새로 체크되는 크기를 파악하기 위해 이전값을 별도로 저장

  if(deviceType <= dataDevice[0].size){
    CK_DEVICE = dataDevice[0].type;
  }else if(deviceType <= dataDevice[1].size){
    CK_DEVICE = dataDevice[1].type;
  }else if(deviceType <= dataDevice[2].size){
    CK_DEVICE = dataDevice[2].type;
  }else{
    CK_DEVICE = dataDevice[3].type;
  }
// --------------------
// 사이즈가 변경되었을 때 이전에 있던 크기타입과, 현재 반영된 크기타입이 다른지 체크
// 320px (mobile), 480px (mobile)  이미 모바일환경인데 다시 모바일환경으로 재 세팅??

  if(beforeDevice !== CK_DEVICE){
    // console.log(CK_DEVICE);
    fnSwitchView(CK_DEVICE);
  }
};
fnRwd(winWidth);

window.addEventListener('resize', e=>{
  const winReWidth = window.innerWidth;
  fnRwd(winReWidth);
});

// 현재의 브라우저 사이즈가 변경되었을 때!!!
// 내가 현재 사용하는 디바이스 환경이 변화되었는가 아닌가를 판단
// 기존 디바이스환경과 다른 환경이면 새로운 환경으로 재 세팅해라!
// window.matchMedia([css조건의 내용와 동일하게 작성]).matches  -> true/false
