// e_06_responsive.js

// ===============================
/**
 * header영역 불러오기
 */

{
  const path = '/temp/';
  const headerData = 'rwd_header.html';

  const elBody = document.querySelector('body');
  const elHeadBox = document.querySelector('#headBox');
  const fnScript = ()=>{
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src','/dist/rwd/rwd_import_nav.js');
    elBody.append(mkScript);
  };

  fetch(path+headerData)
    .then( response => response.text() )
    .then( (element) =>{
      elHeadBox.innerHTML = element;
    })
    .then(()=>{
      fnScript();
    })
}