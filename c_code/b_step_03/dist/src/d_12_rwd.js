// d_12_rwd.js

// @media 화면타입 and (max-width:768px){}

const elMobile = document.querySelector('.mobile');
const elPc = document.querySelector('.pc');

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

// const tabDevice = '(max-width:768px)'; // 구형X

let winWidth = window.innerWidth; // 브라우저의 가로크기
// console.log( winWidth );

const fnSwitchView = (type)=>{
  switch(type){
    case dataDevice[0].type:
    case dataDevice[1].type:
      elMobile.style.display = 'block';
      elPc.style.display = 'none';
      break;
    default:
      elMobile.style.display = 'none';
      elPc.style.display = 'block';
  }
};

const fnRwd = (deviceType)=>{
  let beforeDevice = CK_DEVICE;
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
  if(beforeDevice !== CK_DEVICE){
    console.log(CK_DEVICE);
    fnSwitchView(CK_DEVICE);
  }
};
fnRwd(winWidth);

window.addEventListener('resize', e=>{
  const winReWidth = window.innerWidth;
  fnRwd(winReWidth);
});
