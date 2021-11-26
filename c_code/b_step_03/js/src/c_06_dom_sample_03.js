//  c_06_dom_sample_03.js

(function($){
  // console.log( $.fn.jquery );

  // tab메뉴의 타이틀 중의 하나를 선택했을 경우 해당하는 순번의 내용요소를 나타나게 만들기
  // 제목과 내용 모두 .on 이름으로 처리했으로 해당하는 내용에 따른 .on을 첨부/제거의 역할이 필요
  // 클릭한 요소의 순번이 몇번째 인가? , 내가 처리해야하는 순번은 몇번째에 주어야 하는가?

  // 변수 -------------------------------------------
    var conBox = $('#contentBox');
    var conTitle = conBox.find('.tab_title_inner'); // find : 자손선택자 
    var conTitleUl = conTitle.children('ul'); // children : 자식선택자
    var conTitleLi = conTitleUl.children('li');
    var conTitleBtn = conTitleLi.children('button');

    var conContent = conBox.find('.tab_content_inner');
    var conContentList = conContent.children('div');
  // -------------------------------------------------
    var index;
  // -------------------------------------------------
  // var conB = document.querySelector('#contentBox');
  // var conT = conB.querySelector('.tab_title_inner'); // 자손선택자
  // var conUl = conT.children; // 자식선택자  유사배열, 
  // var conLi =  conUl.children; // X


  // 이벤트 ------------------------------------------
  conTitleBtn.on('click', function(event){
    event.preventDefault();
    // jQuery에서는 이벤트 처리된 주체를 $(this)라고 한다.
    // 클릭한 요소는 버튼요소이므로 자신이 아닌 그 부모의 순서값을 파악(index)해야 한다.
    index = $(this).parent().index(); // parent : 부모선택자 

    // 전체에 class제거 후 선택순서에 .on 첨부 ------------------
    // conTitleLi에 들어있는 .on을 모두 제거
    conTitleLi.removeClass('on'); 

    // conTitleLi중 index번째( eq(순서지정) )에 .on을 첨부
    conTitleLi.eq(index).addClass('on'); // eq(순서지정)  ==  배열요소[순서지정]

    conContentList.removeClass('on');
    conContentList.eq(index).addClass('on');
    // ------------------
  });

  // -------------------------------------------------
  // jQuery는 여러개의 선택자가 존재할때 이를 묶어서 한번에 클릭이 가능한데 이때 그 순서를 파악하는 것은 클릭시 index로 처리
  // javascript는 여러개의 선택자가 존재시 여러개를 클릭시에 그 클릭 대상들을 반복수행해서 처리해야 한다. (for/forEach)

})(jQuery);

/*
  // 배열의 개념과 비교시
  var arr = [1,3,5,7,9];
  console.log( arr[3] );         // 7 -> jQuery: eq(3);
  console.log( arr.indexOf(7) ); // 7의 위치를 파악 3 -> jQuery : index();
*/
