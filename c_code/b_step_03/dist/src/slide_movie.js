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
const elModal = elViewBox.querySelector('.modal_area');
const elMovie = elModal.querySelector('.movie');
const elModalClose = elModal.querySelector('.modal_close > button');

let elSlideLi = elSlideWrap.querySelectorAll('li');

let elSlide = [...elSlideLi];
let PERMISSION = true;
elViewBox.style.overflowX = 'hidden';
let dbVideoData = [];
let videoCode = (fileName, type = 'mp4')=> { 
        return  ` <video controls autoplay muted preload>
                    <source src="${fileName}" type="video/${type}" /> 
                  </video>`};
// -------------------------------------------------

const path = "../data/video_modal.json";
fetch(path)
.then(response => response.json() )
.then((data)=>{
  dbVideoData = [...data];
  elSlide.forEach((el,idx)=>{
    el.setAttribute('data-num', dbVideoData[idx].id );
  });
});

// -------------------------------------------------
const fnSlideMove = (e)=>{
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    let target = e.target.classList.contains('next');
    elSlide = [...elSlideLi];
    (target) ?  
      elSlideWrap.append( elSlide.at(0) ) : 
      elSlideWrap.prepend( elSlide.at(-1) ) ;

    elSlideLi = elSlideWrap.querySelectorAll('li');
    setTimeout(()=>{ PERMISSION=true; },500);
  }
};
elSlideWrap.prepend( elSlide.at(-1) ) ;
elSlideWrap.prepend( elSlide.at(-2) ) ;
elSlideLi = elSlideWrap.querySelectorAll('li');

// 이벤트
elSlideBtn.addEventListener('click', fnSlideMove);

elSlideWrap.addEventListener('click', (e) => {
  e.preventDefault();
  let el = e.target;
  let selectData;
  // console.log(dbVideoData );
  if(el.tagName.toLowerCase() === 'button' ){
    let num = el.parentNode.getAttribute('data-num');
    
    // 필요한 data 찾아오기
    selectData = dbVideoData.filter((data)=> data.id === num );
    // console.log( selectData[0].file );
    let src = `../multi/video/${selectData[0].file}.mp4`;
    elMovie.innerHTML = videoCode(src);
    elModal.classList.add('on');
    elModalClose.focus();
  }
});

elModalClose.addEventListener('click', (e)=>{
  e.preventDefault();
  elModal.classList.remove('on');
  elMovie.children[0].remove();
});

// -----------------------------------------------------
// li를 클릭시 해당하는 내용에 맞는 영상을 모달창에 띄워 처리

// e.target.tagName.toLowerCase()  : 이벤트처리된.타겟의.요소이름.소문자로처리()