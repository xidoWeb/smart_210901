// e_01_slide_area.js

// ===========================================
// 광고슬라이드1 
// -------------------------------------
// 시나리오
// 1. 다음버튼 클릭시 li의 다음내용이 나타나게만들기
// 1.1 li의 갯수
// 1.2 class='on'; 여부 
// 1.2.1 이전값 파악해서 on(+-)
// 1.2.2 선택한것 추가 다른것 빼기
// 1.2.3 전체를 빼고 선택한 요소 추가

// 1.3 순번이 마지막에 가면 처음으로 이동

// 2. 이전버튼을 클릭시 위 기능을 동일하게 수행
// -------------------------------------

// 요소 선택
const elSlide_01 = document.querySelector('.slide_01');

const elBtnDetail = elSlide_01.querySelector('.view_btn');
const elNext = elBtnDetail.querySelector('.next');
const elPrev = elBtnDetail.querySelector('.prev');

const elViewContent = elSlide_01.querySelector('.view_content');
const elViewConUl = elViewContent.querySelector('ul');
const elViewAddv = elViewConUl.querySelectorAll('li');

// elAddLen
const addLen = elViewAddv.length;
const OPTION_CLASSNAME = 'on';
let checkIndex = 0;
// -----------------------------------------------------------
// 함수
const fnAddCountType1 = () => {
  let i = checkIndex;
  // 0 -> 1 -> 2 -> 3 -> 0
  (checkIndex < addLen -1) ? checkIndex += 1 : checkIndex = 0;
  elViewAddv[i].classList.remove(OPTION_CLASSNAME);
  elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
};

const fnRemoveCountType1 = () => {
  let i = checkIndex;
  // 0 -> 3(length-1) -> 2 -> 1 -> 0
  (checkIndex > 0) ? checkIndex -= 1 : checkIndex = addLen -1;
  elViewAddv[i].classList.remove(OPTION_CLASSNAME);
  elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
};

// -----------------------------------------------------------
// 이벤트 ++
// 다음버튼 클릭
elNext.addEventListener('click', (e) => {
  e.preventDefault();
  fnAddCountType1();
});

// 이전버튼 클릭
elPrev.addEventListener('click', (e) => {
  e.preventDefault();
  fnRemoveCountType1();
});


