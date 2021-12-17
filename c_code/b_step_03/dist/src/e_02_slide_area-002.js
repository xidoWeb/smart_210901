// e_02_slide_area-002.js
// =========================================
/** 시나리오 - 1 
 * + 가로형슬라이드 형태를 구현을 위한 세팅 +
 * 1.1 광고슬라이드 마지막요소를 복제하여 첫번째 요소 앞에 배치
 * 1.2 내부요소의 부모요소의 크기를 기존 값보다 더 크게(400% -> 500%) 설정
 * 1.3 내부 요소들의 크기값을 기준 크기값에맞게 or 갯수로 분할하여 배치(1/4 -> 1/5)
 * 1.4 기본 첫번째 광고가 보이지 않고 복제된 광고가 나타나 있어 1칸만큼 이동하여 배치
 * 1.5 css 처리(nth-child) 에 관한 문제점 해결 - css에서 직접 수정
 */
// =========================================


(()=>{
  
  // 변수 -----------------------------------------------------------------
  // 선택자 
  const elViewBox = document.querySelector('#viewBox');
  const elSlideContent = elViewBox.querySelector('.slide_content');
  const elSlideUl = elSlideContent.querySelector('.slide_wrapper'); // ul
  // 현재의 선택자 li는 복제전 요소
  const elSlideLi = elSlideUl.querySelectorAll('li');// Node(4) [ li, li, li, li ]
  const elSlideCvt = [].slice.call(elSlideLi);  // [ li, li, li, li ]

  // 추가설정 변수
  const slideLen = elSlideLi.length;

  // 기능처리 --------------------------------
  // 1.1 마지막요소 복제하여 앞에 붙이기(prepend) - li갯수 5개로 변경
  const elSlideLast = elSlideCvt.at(-1); // li의 마지막 요소를 선택
  const cloneSlide = elSlideLast.cloneNode(true); // li의 마지막 요소를 복제(내부요소까지 복제)
  elSlideUl.prepend(cloneSlide); // 복제요소를 앞으로 추가로 첨부 : css에서 nth-child는 사용할 수 없다 (이름으로 할당!)

  // 1.2 변경된 요소의 갯수에 맞게, `elSlideUl` 의 사이즈와, 
  // 1.3 `elSlideLi`요소의 사이즈를 변경 (복제된 요소는 기존 변수로 선정된 요소와는 별개로 처리)
  // 1.4 메인에 보여주어야 하는 요소를 맞추기위해 위치 이동(왼쪽방향으로 -100% 만큼 이동);

  const ulStyle = elSlideUl.style;
  ulStyle.width = ( (slideLen + 1) * 100 )+'%';
  ulStyle.position = 'relative';
  ulStyle.left = 0;
  ulStyle.marginLeft = '-100%';
  

  const elSlideLiRe = elSlideUl.querySelectorAll('li');
  const elSlideLiReCvt = [].slice.call(elSlideLiRe);

  elSlideLiReCvt.forEach( (li,idx)=>{
    li.style.width = 100 / (slideLen + 1) + '%';
  });

// =========================================
/** 시나리오 - 2 
 * + 가로형슬라이드 형태를 구현을 위한 세팅 +
 * 2.1 다음버튼 클릭시 UL이 현재위치 기준 왼쪽으로 100% 이동 (왼쪽으로이동이기에  -100% * i)
 * 2.2 위 기능의 반복수행처리 체크
 * 2.3 기본 이동을 animation기능으로 부드럽게 이동
 * 3.4 원본이미지 마지막요소에 위치했을 경우 복제된곳으로 점프이동하여, 처음요소로 부드럽게 animation 이동
 * 3.5 여러번 반복 클릭시 문제점 발생됨
 */
// =========================================
// elSlideContent.style.overflowX = 'hidden';
const slideNext = elViewBox.querySelector('.next');
const slidePrev = elViewBox.querySelector('.prev');

let SLIDE_COUNT = 0;
let TIME_OPTION = 500;
ulStyle.transition = `left ${TIME_OPTION}ms linear`;

slideNext.addEventListener('click', (e)=>{
  e.preventDefault();
  SLIDE_COUNT += 1;

  if(SLIDE_COUNT >= slideLen){
    SLIDE_COUNT = 0;
    ulStyle.transition = null; //ani 삭제
    ulStyle.left = 100 +'%'; // 복제로이동
  }

  setTimeout(()=>{
    ulStyle.transition = `left ${TIME_OPTION}ms linear`;// ani첨부(있으면 덮어씌우기)
    ulStyle.left = ( -100 * SLIDE_COUNT ) +'%';
  }, 0)

});

// 1 - 2 - 3 - 4 - 4+ - 1 - 2 - 3 - 4 - 4+













})()