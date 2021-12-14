// c_10_dom_tab_menu2.js

// 시나리오 1: 이벤트페이지에서 해당하는 연도를 클릭시, 그에 맞는 연도의 data목록이 나타나게 만들기
// 변수 선택 : 연도선택 ( .title_inner, li, button ), 해당 순번의 내용( .content_inner , .year_part )
// class 추가/제거 : .title_inner 내부의 li와 .content_inner>.year_part에 각각 '.on'을 추가/제거
// 선택자 사용법 : querySelector
// 순서를 선택/할당하는방식 : forEach
// .on을 할당하는 방법 : 선택순번 외 제거

// ===========================
// 변수++++++++++++++++++++++
var eventBox = document.querySelector('#eventBox');
var titleInner = eventBox.querySelector('.title_inner');
var titleUl = titleInner.children[0];
var titleList = titleUl.children;
var titleLiEl = [].slice.call(titleList); // button선택자는 추후 진행

var contentInner = eventBox.querySelector('.content_inner');
var contentYear = contentInner.querySelectorAll('.year_part');
var optionIndex = 0;
var optionName = 'on';

// 기능++++++++++++++++++++++
// 함수 classSwitchFn(선택자); 기능으로 처음 요소에 'on' 첨부

// 함수++++++++++++++++++++++
var classSwitchFn = function(element){
  element.forEach(function(data, idx){ 
    if(idx !== optionIndex){
      data.classList.remove(optionName); 
    }else{
      data.classList.add(optionName); 
    }
  });
};

// 함수 사전 수행 +++++++++++++
classSwitchFn(titleLiEl);
classSwitchFn(contentYear);

// 이벤트++++++++++++++++++++++
  // li의 요소 각각을 클릭시 수행하는 기능
  titleLiEl.forEach(function(element, index){
    var liBtn = element.children[0];
    liBtn.addEventListener('click', function(event){
      event.preventDefault();
      optionIndex = index;
      classSwitchFn(titleLiEl);
      classSwitchFn(contentYear);
    });
  });

// ===========================

