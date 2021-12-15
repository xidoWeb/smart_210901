// e_01_slide_area_fade.js
// -------------------------------------
// 시나리오
// 다음버튼 클릭시 - 'fadeOut'/(fadeIn) 기능을 이용하여, 이미지 변경
// 1. 현재 보이는 이미지(z-index:100) 에 버튼 클릭시 보이는 이미지 바로뒤 에 이미지가 나타나게 만들기
// 2. 현재 보이는 이미지를 투명도 1->0으로 변경 ( 100%, 50%, 0 )
// 3. 투명도가 0이 되면 display:none으로 사라지게
// 4. animation기법으로 처리되어 사라진 이미지 style(html에 새겨진) 제거
// -------------------------------------
(() => {
// 선택자 변수
const elViewBox2 = document.querySelector('#viewBox2');
const elSlide = elViewBox2.querySelector('.slide_02');

const elBtnPart = elSlide.querySelector('.view_btn');
const elNext = elBtnPart.querySelector('.next');
const elPrev = elBtnPart.querySelector('.prev');

const indi = elSlide.querySelector('.indicator'); // 인디케이터 사용 하지 않도록 제거
// indi.remove();
const indiLi = indi.querySelectorAll('li');

const viewCon = elSlide.querySelector('.view_content ul');
const viewLi  = viewCon.querySelectorAll('li');

// 옵션변수
let [CLASS_CHECK, countIndex, timed, cssFn, permission] = ['act', 0, 500, 'ease', true];
let beforeIndex = countIndex;
const liLen = viewLi.length;
// -------------------------------------------------------------
viewLi[countIndex].classList.replace('on', CLASS_CHECK); // 기존 li class이름 변경
indiLi[countIndex].classList.add('act');
// -------------------------------------------------------------
// 함수
const fnDelay = async ( t = timed ) => {
  const promise = new Promise(resolve => {
    setTimeout( ()=> {
      permission = true;
      resolve(permission);
    }, t)
  });
  return await promise;
};

const fnOpacity = () => {
    viewLi[countIndex].style.display = 'block'; // 바로 뒤에 나타나기

    viewLi[beforeIndex].style.transition = `all ${timed}ms  ${cssFn}`; // 사라질기능 animation
    viewLi[beforeIndex].style.opacity = 0;   // 투명도조절 + 위animation기능 처리

    indiLi[beforeIndex].classList.remove('act');
    indiLi[countIndex].classList.add('act');

    fnDelay(timed)
      .then( () => {
        viewLi[beforeIndex].removeAttribute('style');  // js설정된 style제거 (animate 제거)
        viewLi[beforeIndex].classList.remove(CLASS_CHECK); // .act 제거 (display:none)
        viewLi[countIndex].classList.add(CLASS_CHECK); // 순번이 바뀐 요소 (.act 첨부)
        beforeIndex = countIndex;  // 순서 기존변수, 변경변수값 통일
    });

  }; // fnOpacity; 
// -------------------------------------------------------------
// 이벤트처리
// elNext 클릭시
  elNext.addEventListener('click', (e)=>{
    e.preventDefault();
    if(permission){
      permission = false;
      (countIndex < liLen-1) ? countIndex += 1 : countIndex = 0;
      fnOpacity();    
    }
  });

  // elPrev 클릭시
  elPrev.addEventListener('click', (e)=>{
    e.preventDefault();
    if(permission){
      permission = false;
      (countIndex <= 0) ? countIndex = liLen-1 : countIndex -= 1;
      fnOpacity(); 
    }
  });

  // indicator 클릭
  indiLi.forEach((d,i)=>{
    d.addEventListener('click', (e) => {
      e.preventDefault();
      if(permission){
        permission = false;
        countIndex = i;
        fnOpacity(); 
      }
    });    
  })
// ----------------------------------------------------------------
})() 