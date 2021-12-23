// e_05_slide_movie.js

// =====================================
/**
 * 1. 외부파일 불러오기 : slide_area3.jsx
 * 2. js문서 별도로 제작 기능수행
 */
// =====================================


const path = '../temp/slide_movie.html';
const body = document.querySelector('body');
const viewBox = document.querySelector('#viewBox');

const fnScript = ()=>{
  const mkScript = document.createElement('script');
  mkScript.src = '../dist/src/slide_movie.js';
  body.prepend(mkScript);
}

fetch(path)
  .then(response => response.text() )
  .then( (element)=>{
    viewBox.innerHTML = element;
    fnScript();
  }) 