// d_13_class3.js

// 1. promise
// 2. fetch
// 3. async/await

// 콜백함수 -> 콜백지옥 -> 해석이 매우 어렵다 
// Promise는 순서대로 진행할 수 있도록, 어떠한 작업의 원활한 진행을 위해

const fnFirst = ()=>{
  return new Promise( (success, fail) => {
    setTimeout( ()=>{
      // 작업,작업,작업
      success(10);
    }, 1000);
  });
};

// (1)->(2)->(3)->(4)
fnFirst() 
.then((fnResult)=>{
  console.log(fnResult);
  return fnResult * 10;
})
.then( (data)=>{ 
  console.log( data );
})
// 순차진행, 가독성
// 에러처리 .catch()  여튼 수행 .finally()

// ----------------------------------------------------------
const elHead = document.querySelector('head');
const elBody = document.querySelector('body');
const tempSlide = document.querySelector('.temp');
const slideData = '../temp/slide_area2.html';

fetch(slideData)
.then((importText)=>{ return importText.text(); })
.then( (data)=>{
  let mkBox = document.createElement('div');
  mkBox.setAttribute('class','box');
  mkBox.innerHTML = data;
  tempSlide.append(mkBox);
})
.then(()=>{  
  let elLink = document.createElement('link');
  elLink.setAttribute('rel','styleSheet');
  elLink.setAttribute('href','../css/src/e_02_slide_area.css');
  elHead.append(elLink);
})
.then( ()=>{
  let elScript = document.createElement('script');
  elScript.setAttribute('src','../dist/src/e_02_slide_area.js');
  elBody.append(elScript);
})

// 우리생각 : 길을건넌다 / 신호등이 빨간색이다 / 기다린다 / 파란색이다 / 길을 건넌다.
// js생각   : 길을건넌다 / 빨간색이다 / 길을 건넌다. / 파란색이다 / 기다린다.
// Promise  : 길을건넌다 / 통과( 빨간색이다) / 통과( 기다린다) / 통과( 파란색) / 통과( 길을건넌다)

