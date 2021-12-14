// e_01_importHtml.js

// header영역에 내용 채워넣기

// 불러올 data 변수
const headCode = '../temp/header.html';
const slideArea = '../temp/slide_area.html';

// 선택변수
const wrap = document.querySelector('#wrap');

const headBox = document.createElement('div');
const viewBox = document.querySelector('#viewBox');


headBox.id = 'headBox';
wrap.prepend(headBox);


fetch(headCode)
  .then( response => response.text() )
  .then((data)=> headBox.innerHTML = data );

fetch(slideArea)
  .then( response => response.text() )
  .then( data => viewBox.innerHTML = data  )
  .then(()=>{
    const slideScript = document.createElement('script');
    slideScript.src = "../dist/src/e_01_slide_area.js";
    wrap.after(slideScript);
  });