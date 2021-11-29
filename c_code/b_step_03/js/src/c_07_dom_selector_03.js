// ../js/src/c_07_dom_selector_02.js

var bestBox = document.getElementById('bestBox');
var bestArea = bestBox.getElementsByClassName('best_area')[0];
var bestUl = bestArea.getElementsByTagName('ul')[0];
var bestLi = bestUl.children;

// console.log(bestLi);
/*
  var liLen = bestLi.length;
  console.log( liLen );
  var liArr = [];
  for(var i=0; i<liLen; i++){
    liArr.push(bestLi[i]);
  }
  console.log(liArr);
*/
var colorList = ['#caa','#adf','#fdd','#eee'];

var liArr = [].slice.call(bestLi);
console.log(liArr);
var setI = 0;

liArr.forEach(function(selector, index){
  var linkEl = selector.children[0];
  linkEl.addEventListener('click', function(event){
    event.preventDefault();
    // setI = index;
    // selector.classList.add('on');
    // console.log( this, index );
    bestUl.style.backgroundColor = colorList[index];
  });
});