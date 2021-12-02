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
for(; i < 2; i+=1){
  makeLi = document.createElement('li');
  // makeLi.innerHTML = (i + 1) + data[i].title + ' ' + '<br />' + data[i].contents + ' ';
  makeLi.innerHTML = '<div class="bg_img" style="background-image:url(' + data[i].bgImg + ')"><span class="blind">' + data[i].bgNarr + '</span></div><dl><dt>' + data[i].title + '</dt><dd><span>' + data[i].contents + '</span><br /><a href=\"' + data[i].link + '\" target=\"_blank\">자세히 보기</a></dd></dl>';
  cardUl.appendChild(makeLi);
}
// ---------------------------------------
// cardUl.appendChild(makeLi); 여기서 innerHTML :(중복을 허용하지 않고 내부자료를 삭제 후 덮어 씌우기) 대신 append : 기존 자료에 추가 
// escape 문자 : 해당하는 글자가 어떠한 기능을 처리하게 만드는 것을 \' \' \& \| \! , \n \t
