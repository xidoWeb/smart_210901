// c_02_dom_make_navi_01.js

// 메뉴를 클릭하면, navigation영역이 나타나게 / 나타나 있으면 사라지게 해라
// 1. 메뉴클릭 .navi_btn>button 클릭
// 2. navigation영역이 나타나게 -> 그부모인 .nav_area에 .on을 붙인다 (향후 수정을 고려해보자)
// 3. 만약 navigation영역이 나타나 있다면 반대로 사라지게 해라 -> 그부모인 .nav_area에 .on을 제거
// 4. 옵션 : 버튼을 클릭시 발생하는 이벤트는 동작하지 않도록 처리


// 변수영역 ----------------------------------
var navArea = document.querySelector('.nav_area');
var naviBtnSelector = document.querySelector('.navi_btn');
var naviBtn = naviBtnSelector.querySelector('button');
var navOn = 'on';

// 이벤트영역 ----------------------------------
naviBtn.addEventListener('click', function(event){
  event.preventDefault();
  // navArea.classList.toggle('on');  
  var checkClassName = navArea.classList.contains(navOn);
  (checkClassName) ? navArea.classList.remove(navOn) : navArea.classList.add(navOn);
});
