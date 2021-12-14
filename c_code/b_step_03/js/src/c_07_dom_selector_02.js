// c_07_dom_selector_02.js

var conBox = document.querySelector('#conBox');
var conNav = conBox.querySelector('.con_nav');
var conChildLi = conNav.children;
console.log( conChildLi );

// HTML Collection 처리된 요소는 배열처럼 보이지만 
// 실제로는 배열이 아닌 유사배열의 형식이라
// 그 내부로 접근이 불가능
// 그래서 해당하는 요소를 모두 배열형식으로 변경하여야
// 그 내부에 접근이 가능

// 강제로 배열성격을 띄게 만들려면 배열의 기능을 강제로 가져와서 처리
/*
  var convertConLi = Array.prototype.slice.apply(conChildLi);
  // console.log( convertConLi );

  var filterCheck = Array.prototype.filter.call(conChildLi ,function(data){
    return data;
  });
  // console.log( filterCheck );
*/
var conLiSam = [].slice.call(conChildLi);
// console.log( convertConLiSam );
var conLiFLink = [];
conLiSam.forEach(function(selector, index){
  conLiFLink.push( selector.children[0] );
  // selector.children[0].addEventListener('click', function(e){
  //   e.preventDefault();
  //   console.log( this, index );
  // });
});
console.log( conLiFLink );