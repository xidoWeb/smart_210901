// c_03_dom_check_restore_01.js

// window > document > [elements]
// getComputedStyle()
// toggle

// window는 브라우저 자체로 window객체명은 생략이 가능하다.
console.log( window.document );
window.console.log('!!');
window.document.querySelector('h1');

// nodejs  -> window 개념대신 global

// document란? 
// 우리가 실제로 사용하는 웹 사이트 화면이 나오는 페이지
// document는 object
// -----------------------------------------------------
// document.querySelectorAll('li') // 찾아서 확인
// document.getElementsByTagName('li'); // 찾아서 가져오겠다.

var conBox = document.querySelector('#contentBox'); // [0]
conBox.style.width = '500px';
var conStyle = getComputedStyle(conBox).width;
console.log( conStyle );