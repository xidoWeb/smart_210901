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
/** 시나리오 - 2 
 * + 가로형슬라이드 형태를 구현을 위한 세팅 : 다음버튼 +
 * 2.1 다음버튼 클릭시 UL이 현재위치 기준 왼쪽으로 100% 이동 (왼쪽으로이동이기에  -100% * i)
 * 2.2 위 기능의 반복수행처리 체크
 * 2.3 기본 이동을 animation기능으로 부드럽게 이동
 * 2.4 원본이미지 마지막요소에 위치했을 경우 복제된곳으로 점프이동하여, 처음요소로 부드럽게 animation 이동
 * 2.5 여러번 반복 클릭시 문제점 발생됨 -> 권한을 부여하여 처리
 */
// =========================================
/** 시나리오 - 3
 * + 가로형슬라이드 형태를 구현을 위한 세팅 : 이전버튼 +
 * 3.1 다음버튼 클릭시 UL이 현재위치 기준 오른쪽으로 100% 이동 (오른쪽으로 이동이기에  +100% * i)
 * 3.2 위 기능의 반복수행처리 체크
 * 3.3 기본 이동을 animation기능으로 부드럽게 이동
 * 3.4 원본이미지 처음요소에 위치했을 경우 복제된곳으로 animation으로 이동하여, 복제원본요소로 점프 이동
 * 3.5 팁1 : 여러번 반복 클릭시 문제점 발생됨 -> 권한을 부여하여 처리
 * 3.6 팁2 : 움직이는 기준이 되는 변수는 "공통변수", 권한을 부여하는 변수 "공통변수" 
 */
// =========================================
/** 시나리오 - 4
 * + 슬라이 처리에 따른 count 수치 수행 +
 * 4.1 복제 이전의 갯수 파악하여 .total_count에 값 삽입
 * 4.2 현재 보이는 순번을 .now_count에 값 삽입
 * 4.3 다음/이전 버튼 수행시 .now_count값은 계속 변화 
 */
// =========================================
/** 시나리오 - 5.1
 * + 광고의 갯수를 파악하여, indicator li를 생성 +
 */
// =========================================
/** 시나리오 - 5.2 (5.2를 먼저 수행하고, 5.1을 이후에 처리)
 * + 인디케이터 처리 수행 +
 * 5.2.1 클릭시 해당 순번 파악 
 * 5.2.2 파악된 광고슬라이드 해당위치로 이동(공통변수)
 * 5.2.3 indicator li에 .on의 위치 변경
 */
// =========================================
/** 시나리오 - 6
 * + 일정 시간마다 광고가 자동으로 움직이게 처리 +
 * 광고영역에 마우스 올리면 일시정지
 * 영역을 벗어나면 다시 재생
 */
// =========================================
/** 시나리오추가 구성
 *  data불러와서 광고 갯수만큼 생성 (시나리오 0 )
 *  indicator 생성 (시나리오 5.1 )
 *  광고자체 링크는 우선 `tabIndex = -1` 마우스 클릭/indicator처리/다음/이전버튼으로 화면이 나타나는 시점에서 `tabIndex=0`
 *  indicator기준 클릭이아닌 focus처리시 광고화면이 이동, 엔터키를 누르면 해당하는 광고의 위치로 이동
 *  ...
 *  */ 
// ========================================

(()=>{
  
  // 변수 -----------------------------------------------------------------
  // 선택자 
  const elViewBox = document.querySelector('#viewBox');

  const slideNext = elViewBox.querySelector('.next');
  const slidePrev = elViewBox.querySelector('.prev');

  const elCount  = elViewBox.querySelector('.count_part');
  const elNowCount = elCount.querySelector('.now_count');
  const elTotalCount = elCount.querySelector('.total_count');

  const elSlideContent = elViewBox.querySelector('.slide_content');
  const elSlideUl = elSlideContent.querySelector('.slide_wrapper'); // ul
  // 현재의 선택자 li는 복제전 요소
  const elSlideLi = elSlideUl.querySelectorAll('li');// Node(4) [ li, li, li, li ]
  const elSlideCvt = [].slice.call(elSlideLi);  // [ li, li, li, li ]
  
  // 추가설정 변수
  let SLIDE_COUNT = 0;  // 슬라이드 위치 파악하는 변수
  let TIME_OPTION = 500; // 슬라이드 이동시간 처리 변수
  let PERMISSION = true; // 슬라이드 수행에 따른 권한 처리 변수
  const slideLen = elSlideLi.length; // 슬라이드 복제전 갯수 파악변수

  // 기능처리 --------------------------------
  // -----------
  // 5.2 (cloneNode는 indicator목록에 포함 되지 않는다)
  const indiPart = elViewBox.querySelector('.indicator_part');
  const indiLi = indiPart.querySelectorAll('li');
  
  // -----------
  // 1.1 마지막요소 복제하여 앞에 붙이기(prepend) - li갯수 5개로 변경
  const elSlideLast = elSlideCvt.at(-1); // li의 마지막 요소를 선택
  const cloneSlide = elSlideLast.cloneNode(true); // li의 마지막 요소를 복제(내부요소까지 복제)
  elSlideUl.prepend(cloneSlide); // 복제요소를 앞으로 추가로 첨부 : css에서 nth-child는 사용할 수 없다 (이름으로 할당!)

  // 1.2 변경된 요소의 갯수에 맞게, `elSlideUl` 의 사이즈와, 
  // 1.3 `elSlideLi`요소의 사이즈를 변경 (복제된 요소는 기존 변수로 선정된 요소와는 별개로 처리)
  // 1.4 메인에 보여주어야 하는 요소를 맞추기위해 위치 이동(왼쪽방향으로 -100% 만큼 이동);

  const ulStyle = elSlideUl.style;
  const elSlideLiRe = elSlideUl.querySelectorAll('li'); // 복제 후 li
  const elSlideLiReCvt = [].slice.call(elSlideLiRe);    

  elSlideLiReCvt.forEach( (li)=>{
    li.style.width = 100 / (slideLen + 1) + '%';
  });

  elSlideContent.style.overflowX = 'hidden';

  ulStyle.width = ( (slideLen + 1) * 100 )+'%';
  ulStyle.marginLeft = '-100%';  
  ulStyle.transition = `left ${TIME_OPTION}ms linear`;
  ulStyle.position = 'relative';
  ulStyle.left = 0;

  elTotalCount.innerText = slideLen;

  const fnDelay = async (ms = 0) => {
    return await new Promise(resolve=>{
      setTimeout( ()=> { resolve() }, ms)
    });
  };

  // 현재 슬라이드 위치를 표현하는 함수
  const fnNowCount = ()=>{
    elNowCount.innerText = SLIDE_COUNT + 1;
  };

  // indicator수행 함수 (수행중)
  const fnIndiRotate = ()=>{
        indiLi.forEach((el, index)=>{
          (index !== SLIDE_COUNT) ? el.classList.remove('on') : el.classList.add('on');
        });
  };

  // 다음버튼 클릭시 수행하는 함수
  const fnAniSlide = async () =>{
    if(SLIDE_COUNT >= slideLen){
      SLIDE_COUNT = 0;
      ulStyle.transition = null; //ani 삭제
      ulStyle.left = 100 +'%'; // 복제로이동
    }
    await fnDelay();
    ulStyle.transition = `left ${TIME_OPTION}ms linear`;// ani첨부(있으면 덮어씌우기)
    ulStyle.left = ( -100 * SLIDE_COUNT ) +'%';
    await fnDelay(TIME_OPTION + 200);
    fnIndiRotate();
    fnNowCount();
    PERMISSION = true;
  };
  // 이전버튼 클릭시 수행하는 함수
  const aniPrevSlide = async () => {
    ulStyle.left = ( -100 * SLIDE_COUNT ) + '%'; 
    await fnDelay(TIME_OPTION);
    if(SLIDE_COUNT <= -1){
      SLIDE_COUNT = slideLen - 1;
      ulStyle.transition = null;
      ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';  
    }
    await fnDelay(200);
    fnIndiRotate();    
    fnNowCount();
    ulStyle.transition = `left ${TIME_OPTION}ms linear`;
    PERMISSION = true;
  };
  // 일정시간마다 광고슬라이드 이동수행 (다음버튼 클릭과 동일한 기능)
  let slideGo;  
  const fnSlideMove = ()=> {
    slideGo = setInterval( ()=>{
        SLIDE_COUNT += 1;
        fnAniSlide();
    }, TIME_OPTION * 10 );
  };
  
  const fnSlidePause = () =>{
    clearInterval(slideGo);
  }

  // =================================================================
  // 기본함수 수행
  fnNowCount();
  fnSlideMove(); 
  // =================================================================
  // 다음버튼 클릭
  slideNext.addEventListener('click', (e)=>{
    e.preventDefault();
    if(PERMISSION){
      PERMISSION = false;
      SLIDE_COUNT += 1;
      fnAniSlide();
    }// if
  }); // slideNext.click

  // 이전버튼 클릭
  slidePrev.addEventListener('click', (e) => {
    e.preventDefault();
    if(PERMISSION === true){
      PERMISSION = false;
      SLIDE_COUNT -= 1;
      console.log( SLIDE_COUNT );      
      aniPrevSlide();
    }// if
  }); // slidePrev 클릭

  // indicator li 클릭
  indiLi.forEach((el, idx)=>{
    el.children[0].addEventListener('click', (e)=>{
      e.preventDefault();
      if(PERMISSION){
        PERMISSION = false;
        SLIDE_COUNT = idx;
        fnIndiRotate();
        fnNowCount();
        ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';
        setTimeout( ()=>{
            PERMISSION = true;
          }, TIME_OPTION+200);
        }
    });
  });

  //  광고영역에 마우스 올리면, 광고슬라이드 일시정지
  elViewBox.addEventListener('mouseenter', (e) => { // mouseenter, mouseover
    fnSlidePause();
  });

  // 광고영역에 마우스 벗어나면, 광고슬라이드 다시 재생
  elViewBox.addEventListener('mouseleave', (e)=>{  // mouseleave , mouseout
    fnSlideMove(); 
  });

// ====================================================================
})();


  // js에서는 잠시 기다렸다가 다음을 수행해라는 의미가 뒤에오는 코드들 까지 기다리게하는 의미가 아니다!
  // 이벤트 위임, 버블링, 캡쳐링
  // window.requestAnimationFrame(callback)

