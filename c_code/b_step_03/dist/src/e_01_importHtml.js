// e_01_importHtml.js

// header영역에 내용 채워넣기

// 불러올 data 변수
const headCode = '../temp/header.html';
const slideArea = '../temp/slide_area.html';

// 선택변수
const wrap = document.querySelector('#wrap');

const headBox = document.createElement('div');
const viewBox = document.querySelector('#viewBox');

fetch(headCode)
  .then( response => {
    return response.text();
  })
  .then((data)=>{
    headBox.id = 'headBox';
    wrap.prepend(headBox);
    headBox.innerHTML = data;
  });

fetch(slideArea)
  .then( response => response.text() )
  .then( data => viewBox.innerHTML = data  );