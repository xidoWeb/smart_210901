// e_01_importHtml.js

// header영역에 내용 채워넣기

// 불러올 data 변수
(()=>{ 
  const headCode = '../temp/header.html';
  const slideArea = '../temp/slide_area.html';

  // 선택변수
  const body = document.querySelector('body');
  const wrap = document.querySelector('#wrap');

  const headBox = document.createElement('div');
  const viewBox = document.querySelector('#viewBox');
  const viewBox2 = document.querySelector('#viewBox2');

  // 함수 -----------------------------------
  const fnMakeScript = (urlData)=>{
    const slideScript = document.createElement('script');
    slideScript.src = urlData;
    body.append(slideScript);
  };

  //----------------------------------------
  headBox.id = 'headBox';
  wrap.prepend(headBox);

  // header
  fetch(headCode)
    .then( response => response.text() )
    .then((data)=> headBox.innerHTML = data );

  // viewBox - slide1
  fetch(slideArea)
    .then( response => response.text() )
    .then( data => viewBox.innerHTML = data  )
    .then(()=> fnMakeScript("../dist/src/e_01_slide_area.js") );

  // view - slide2
  fetch(slideArea)
    .then(response => response.text() )
    .then(html => viewBox2.innerHTML = html )
    .then(()=>{
      const part = viewBox2.querySelector('.part');
      // part.classList.remove('slide_01');
      // part.classList.add('slide_02');
      part.classList.replace('slide_01','slide_02');
      console.log( part.classList.value );
    })
    .then(() => fnMakeScript("../dist/src/e_01_slide_area_fade.js") );
})()

// {
//   const a = 10;
//   console.log( a );
// }
// (()=>{
//   const a = 10;
//   console.log( a );
// })()