// e_10_scrollMove_002.js

// * 브라우저에서 스크롤이 얼만큼 움직였는가에 따라 그 값을 가지고 이미지를 변경하게 처리
/**
 * 1. img모두 첨부 후 1장 빼고 display:none;
 * 2. 스크롤시 이동값 
 * 3. 스크롤에의한 이미지가 다 끝나고 난 뒤, 이후에 보여줄 내용을 원활하게 보이도록 처리
 */

const elWrap    = document.querySelector('#wrap');
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
window.addEventListener('scroll',(e)=>{                  // 브라우저에서 스크롤이 실행되었을때
  const targetScroll = e.currentTarget.scrollY;          // 브라우저(this)가 스크롤이 움직인 값파악 (scrollY)
  let moveScroll = parseInt(targetScroll / 15);        // 스크롤값을 줄이기위해 일정값(15) 나눠 숫자제한
  // 이미지 중에서 moveScroll의 값에 해당하는이미지 나타나고, 나머지는 사라지게 수행
  // *이미지 처리 ---------------------------------------------------------------------
  // if(moveScroll >= COUNT_NUM){moveScroll = COUNT_NUM -1}     // moveScroll의 최대값을 COUNT_NUM을 넘기지 않도록 처리
  let scrollN = (moveScroll >= COUNT_NUM) ? COUNT_NUM -1 : moveScroll;                       

  elImgArr.forEach((img,idx)=>{
    // img.classList.remove(OPTION_ON);                   // 이미지 각각 전부 .on을 제거
    // elImgArr[moveScroll].classList.add(OPTION_ON);     // moveScroll 순번의 이미지는 .on 첨부

    // 정리 : scrollN값과 idx순번을 비교하여 일치하면 나타나고, 불일치하면 사라지게
    (idx !== scrollN) ? img.classList.remove(OPTION_ON) : img.classList.add(OPTION_ON);
  });

  // * 이미지담은 요소 이동수행 (topMove 이 음수로 나타나기 시작하는 시점)
  let topMove = COUNT_NUM + 20 - moveScroll;   // 이미지가 모두 처리된 시점을 기준으로 해당 요소는 위로이동하게
  if(topMove <= 0){
    elViewBox.style.top = (topMove * 15) + 'px';
  }  

});


// ===========================================================================================
// 숫자 마지막 3자리 파악하는 코드
//1. // console.log('00'+(i+1) ); // 001 ~ 080
//2. // console.log(("00" + (i+1)).substr(-3));
//3. // (i < 9) ? console.log('00'+(i+1) ): console.log('0'+(i+1) );
//4. // console.log(('000000000'+(i+1)).toString().padStart(3,'0'));
