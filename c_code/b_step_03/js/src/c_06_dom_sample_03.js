//  c_06_dom_sample_03.js

(function($){
  // console.log( $.fn.jquery );

  // tab메뉴의 타이틀 중의 하나를 선택했을 경우 해당하는 순번의 내용요소를 나타나게 만들기
  // 제목과 내용 모두 .on 이름으로 처리했으로 해당하는 내용에 따른 .on을 첨부/제거의 역할이 필요
  // 클릭한 요소의 순번이 몇번째 인가? , 내가 처리해야하는 순번은 몇번째에 주어야 하는가?

  // 변수 -------------------------------------------
    var conBox = $('#contentBox');
    var conTitle = conBox.find('.tab_title_inner');
    var conTitleUl = conTitle.children('ul');
    var conTitleLi = conTitleUl.children('li');
    var conTitleBtn = conTitleLi.children('button');

    var conContent = conBox.find('.tab_content_inner');
    var conContentList = conContent.children('div');
  // -------------------------------------------------


  // 이벤트 ------------------------------------------
  conTitleBtn.on('click', function(event){
    event.preventDefault();
    // jQuery에서는 이벤트 처리된 주체를 $(this)라고 한다.
    // 클릭한 요소는 버튼요소이므로 자신이 아닌 그 부모의 순서값을 파악해야 한다.
    console.log( $(this).parent().index() );
  });

  // -------------------------------------------------
  // jQuery는 여러개의 선택자가 존재할때 이를 묶어서 한번에 클릭이 가능한데 이때 그 순서를 파악하는 것은 클릭시 index로 처리
  // javascript는 여러개의 선택자가 존재시 여러개를 클릭시에 그 클릭 대상들을 반복수행해서 처리해야 한다. (for/forEach)
  
})(jQuery);