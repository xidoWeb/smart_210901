// c_04_dom_blind_btn.js

// jQuery식 버튼클릭시 슬라이딩으로 display 처리
(function($){
  // .btn 내부에 있는 버튼을 클릭하여, .content_area 내용이 사라지거나, 나타나게 만들기

  // -----------------------------------------
  var btn         = $('.btn');
  var closeBtn    = btn.children('.close');
  var openBtn     = btn.children('.open');
  var open2Btn    = btn.children('.open2');
  var contentArea = $('.content_area');
  // -----------------------------------------
  closeBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideUp(1000);
  });
  openBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideDown(1000);
  });


})(jQuery);

// javascript를 이용하여, 
// 버튼 클릭시 높이값이 0이 되도록처리
// 높이가 0이면, display:none;

// 시...작~