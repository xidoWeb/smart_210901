// e_10_scrollMove_002.js

// * 브라우저에서 스크롤이 얼만큼 움직였는가에 따라 그 값을 가지고 이미지를 변경하게 처리
/**
 * 1. img모두 첨부 후 1장 빼고 display:none;
 * 2. 스크롤시 이동값 
 */

const elViewBox = document.querySelector('#viewBox');
const elImgArea = elViewBox.querySelector('.img_area');
const COUNT_NUM = 80;
const OPTION_ON ='on';

// 이미지 첨부 함수

const fnImgInsert = (n)=>{
  const convertStr = '00000000000000' + (n+1);
  const cutNum = convertStr.slice(-3);
  const [url, alt] = [`../multi/img/clean_machine/`, `청소기 광고`];
  const fileName = `${url}clean_${cutNum}.png`;
  const mkImg = document.createElement('img');
  if(n === 0){ mkImg.classList.add(OPTION_ON) }
  mkImg.setAttribute('src', fileName);
  mkImg.setAttribute('alt', alt);
  elImgArea.append(mkImg);
};

for(let i=0; i<COUNT_NUM; i+=1){
  fnImgInsert(i);  
}
// 기능처리 후 변수
const elImg = elImgArea.children;
const elImgArr = [...elImg]; //[].slice.call(elImg);
// --------------------------------------------------
// 이벤트
window.addEventListener('scroll',(e)=>{
  const moveScroll = parseInt(e.currentTarget.scrollY / 20);
  console.log(moveScroll);
  elImgArr.forEach((img,idx)=>{
    img.classList.remove(OPTION_ON);
    elImgArr[moveScroll].classList.add(OPTION_ON);
  });
});


// ===========================================================================================
// 숫자 마지막 3자리 파악하는 코드
//1. // console.log('00'+(i+1) ); // 001 ~ 080
//2. // console.log(("00" + (i+1)).substr(-3));
//3. // (i < 9) ? console.log('00'+(i+1) ): console.log('0'+(i+1) );
//4. // console.log(('000000000'+(i+1)).toString().padStart(3,'0'));
