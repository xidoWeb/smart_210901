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
(()=>{

  // 요소 선택
  const elSlide_01 = document.querySelector('.slide_01');

  const elBtnDetail = elSlide_01.querySelector('.view_btn');
  const elNext = elBtnDetail.querySelector('.next');
  const elPrev = elBtnDetail.querySelector('.prev');

  const elViewContent = elSlide_01.querySelector('.view_content');
  const elViewConUl = elViewContent.querySelector('ul');
  const elViewAddv = elViewConUl.querySelectorAll('li');

  const elIndicatorDetail = elSlide_01.querySelector('.indicator ul');
  const elIndiLi = elIndicatorDetail.children;
  const elIndiList = Array.prototype.slice.call(elIndiLi);

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
  // ----------------------------------------
  // 전체 갯수 중 선택한 순번을 제외한 나머지 형제를 선택
  const fnSiblings = (select, idx = checkIndex) => {
    const otherArr = [];
    select.forEach((element, index)=>{
      //let check = element.classList.contains(OPTION_CLASSNAME);
      // if(!check){ otherArr.push(element) }
      if(idx !== index){ otherArr.push(element) }
    })
    return otherArr;
  };
  // console.log( fnSiblings() );

  // 다음버튼클릭시 1씩 카운트업하면서, 선택순번이 아닌경우 on빼라
  const fnAddCountType2 = () => {
    (checkIndex < addLen -1) ? checkIndex += 1 : checkIndex = 0;
    elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
    fnSiblings(elViewAddv, checkIndex).forEach( (el) => {
      el.classList.remove(OPTION_CLASSNAME);
    });
  };
  const fnRemoveCountType2 = () => {
    (checkIndex > 0) ? checkIndex -= 1 : checkIndex = addLen -1;
    elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
    fnSiblings(elViewAddv, checkIndex).forEach( (el) => {
      el.classList.remove(OPTION_CLASSNAME);
    });
  };

  const fnIndexCountType2 = () => {
    elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
    fnSiblings(elViewAddv, checkIndex).forEach( (el) => {
      el.classList.remove(OPTION_CLASSNAME);
    });
  }
  // ----------------------------------------------------------
  const fnAddCountType3 = () => {
    (checkIndex < addLen -1) ? checkIndex += 1 : checkIndex = 0;
    elViewAddv.forEach( (el)=>{  el.classList.remove(OPTION_CLASSNAME); });
    elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
  };

  const fnRemoveCountType3 = () => {
    (checkIndex > 0) ? checkIndex -= 1 : checkIndex = addLen -1;
    elViewAddv.forEach( (el)=>{  el.classList.remove(OPTION_CLASSNAME); });
    elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
  };
  // -----------------------------------------------------------
  // 이벤트 ++
  // 다음버튼 클릭
  elNext.addEventListener('click', (e) => {
    e.preventDefault();
    // fnAddCountType1();
    // fnAddCountType2();
    fnAddCountType3();
  });

  // 이전버튼 클릭
  elPrev.addEventListener('click', (e) => {
    e.preventDefault();
    // fnRemoveCountType1();
    // fnRemoveCountType2();
    fnRemoveCountType3();
  });

  // indicator 클릭하여 순서 파악
  elIndiList.forEach( (element, index) => {
    let link = element.querySelector('a');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log( index );
      checkIndex = index;
      fnIndexCountType2();
    });
  });

  // ============================================================

  // const fnT = function( i = '값 입력하세요~~!' ){  
  //   // if(!i){ 
  //   //   return '값 입력되지 않았음' 
  //   // }else{
  //   //   return i;
  //   // }
    
  //   // return i || '값 입력되지 않았음';
    
  //   return i;  
  // }

  // console.log( fnT(12) );



  const arrayList = ['a', 'b','c','d'];
  // console.log(arrayList[0]);
  // console.log(arrayList[2]);

  // for(let i=0; i<4; i++){
  //   console.log( arrayList[i] );
  // }

  arrayList.forEach( (d,i) => {
    // console.log( d );
    // console.log(arrayList[i]);
  });
  // forEach ( 배열의 각요소, 각요소의 순번 )

  const arrayList2 = ['a', 'b','c','d'];
  const otherArr = [];
  let selectI = 1;

  arrayList2.forEach( (d,i) => {
    if(selectI !== i){
      otherArr.push(d);
    }
  });

  const otherArr2 = arrayList.filter((el)=>{
    return el !== arrayList2[selectI];
  });
  // console.log( otherArr );
  // console.log( otherArr2 );
  // console.clear();
})()
// -----------------------------------------
