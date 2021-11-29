// c_07_dom_selector_01.js

// #wrap {}
var wrap = document.getElementById('wrap');
console.log( wrap );
// wrap.style.width = '90%';
// wrap.style.margin = 'auto';
// wrap.style.backgroundColor = '#eee';
wrap.style = 'width:90%; margin:auto; background-color:#fda; padding:0.5rem;';

// h1
var h1 = wrap.getElementsByTagName('h1')[0];
// console.log( h1 );
h1.style = 'width:100px; height:30px; background-color:#dfd;';

var h1Link = h1.children;
h1Link[0].style = 'padding:0.5rem; color:#05f;';
h1Link[1].classList.add('blind');
console.log( h1Link );

// ------------------------------------------------------------------
var headBox = document.querySelector('#headBox');
headBox.style = 'width:100%; height:auto; background-color:#adf;';
var headH1 = headBox.querySelector('h1'); 
// headH1.style = 'border-radius:5px; font-size:1.2rem';
headH1.style.borderRadius = '5px';
headH1.style.fontSize = '1.2rem';


// ---------------------------------------------------------------------------
// HTML collection : 옛날방식의 선택자
// document.getElementById();

// querySelector : 선택자는 아직 전부 사용하기엔 조금 무리가 있다.
// document.querySelector();