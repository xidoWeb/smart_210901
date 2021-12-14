// c_11_dom_insert_data.js
// 별도 자료 ----------------------------
var data = [
  {
    title:'title'      , 
    contents:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link:'http://naver.com', 
    bgImg:'../multi/img/bottle.jpg',
    bgNarr:'병이미지에 대한 간략한 설명'
  }, 

  {
    title:'spring'     , 
    contents:'Dolores laborum expedita eum maxime dolore porro ipsam.' ,
    link:'http://csswinner.com' ,
    bgImg:'../multi/img/cookie.jpg',
    bgNarr:'cookie 이미지에 설명 작성'
  },

  {
    title:'javascript' , 
    contents:'Quod, impedit?' ,
    link:'http://gdweb.co.kr' 
  },

  {
    title:'winter'     , 
    contents:'Rem enim tempore maxime voluptas facilis id ad commodi quis.' ,
    link:'http://naver.net',
    bgImg:'../multi/img/bottle.jpg',
    bgNarr:'병이미지에 대한 간략한 설명'
  },
  
  {
    title:'summer'     , 
    contents:'Lorem, ipsum dolor.' ,
    link:'http://google.com',
    bgImg:'../multi/img/juice.jpg',
    bgNarr:'juice image 설명'
  }, 

  {
    title:'banana'     , 
    contents:'Lorem ipsum dolor sit amet.' 
  },
  
  {
    title:'group'      , 
    contents:'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
    bgImg:'../multi/img/juice.jpg',
    bgNarr:'juice 이미지에 대한 간략한 설명'
  }
];
// --------------------------------------
// 시나리오: 
// .card 내부에 li요소 삽입
// 별도의 data 객체를 만들어 해당하는 내용이 li에 첨부되게 진행

// 변수 기존내용 선택
var conBox = document.querySelector('#conBox');
var cardUl = conBox.querySelector('.card');

var i = 0; 
var len = data.length;
var makeLi; 
// ---------------------------------------
// 기능 수행
/* // 점점 복잡해져가는 내용에 의해 추가 작업이 어려움
for(; i < 3; i+=1){
  makeLi = document.createElement('li');
  // makeLi.innerHTML = (i + 1) + data[i].title + ' ' + '<br />' + data[i].contents + ' ';
  makeLi.innerHTML = '<div class="bg_img" style="background-image:url(' + (data[i].bgImg) + ')"><span class="blind">' + data[i].bgNarr + '</span></div><dl><dt>' + data[i].title + '</dt><dd><span>' + data[i].contents + '</span><br /><a href=\"' + data[i].link + '\" target=\"_blank\">자세히 보기</a></dd></dl>';
  cardUl.appendChild(makeLi);
}
*/

// 우선 기본 코드를 모두 담은 후에 필요한 부분만 색출해서 수정/첨부/삭제
var baseCode = '<div class="bg_img"><span class="blind"></span></div>\
                <dl>\
                  <dt></dt>\
                  <dd>\
                    <span></span>\
                    <br />\
                    <a target="_blank">자세히 보기</a>\
                  </dd>\
                </dl>';

for(; i < len; i += 1){
  makeLi = document.createElement('li');
  makeLi.innerHTML = baseCode;
  cardUl.appendChild(makeLi);
}

// ======================================================
// 내용 중 1번째 내용만 우선 정리해서 삽입
// data[0].
// bgImg: background-image , bgNarr: 설명
// title : 제목
// contents: 내용, link: link주소
// ======================================================
// 시나리오 2 : 
// 1. li요소 첫번째 선택
// 2. 공통 n번째를 가르키는 변수를 생성
// ======================================================

var li         = cardUl.querySelectorAll('li');
var setCardFn = function(n){
  var idx        = n;
  var dt         = li[idx].querySelector('dt');
  var narr       = li[idx].querySelector('dd span');
  var link       = li[idx].querySelector('dd a');
  var bgImg      = li[idx].querySelector('.bg_img');
  var bgNarr     = bgImg.querySelector('span');
  
  // 사용이미지없거나, 링크 주소가 없거나(!!undefined) 한다면 해당 요소는 삭제
  dt.innerText   = data[idx].title;
  narr.innerText = data[idx].contents;

  ( !!data[idx].link ) ? link.href = data[idx].link : link.remove();

  if(data[idx].bgImg !== undefined){ 
    bgImg.style.backgroundImage = 'url(' + data[idx].bgImg + ')';
    bgNarr.innerText = data[idx].bgNarr;
  }else{
    bgImg.remove();    
  }

}; // setCardFn(n)

// li 내용 처리
for(i = 0 ; i < len; i += 1){
  setCardFn(i);
}

// ---------------------------------------
// cardUl.appendChild(makeLi); 여기서 innerHTML :(중복을 허용하지 않고 내부자료를 삭제 후 덮어 씌우기) 대신 append : 기존 자료에 추가 
// escape 문자 : 해당하는 글자가 어떠한 기능을 처리하게 만드는 것을 \' \' \& \| \! , \n \t
//link.setAttribute('href', data[idx].link); // 어떠한 속성도 처리 가능 data-속성

