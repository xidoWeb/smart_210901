// c_11_dom_insert_data.js
// 별도 자료 ----------------------------
var data = [
  {title:'title'      , 
  contents:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  link:'http://naver.com' }, 

  {title:'spring'     , 
  contents:'Dolores laborum expedita eum maxime dolore porro ipsam.' ,
  link:'http://csswinner.com' },

  {title:'javascript' , 
  contents:'Quod, impedit?' ,
  link:'http://gdweb.co.kr' },

  {title:'winter'     , 
  contents:'Rem enim tempore maxime voluptas facilis id ad commodi rerum unde quis.' ,
  link:'http://naver.net' },
  
  {title:'summer'     , 
  contents:'Lorem, ipsum dolor.' ,
  link:'http://google.com' }, 

  {title:'banana'     , 
  contents:'Lorem ipsum dolor sit amet.' },
  
  {title:'group'      , 
  contents:'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
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
for(; i<len; i+=1){
  makeLi = document.createElement('li');
  // makeLi.innerHTML = (i + 1) + data[i].title + ' ' + '<br />' + data[i].contents + ' ';
  makeLi.innerHTML = '<dl><dt>' + data[i].title + '</dt><dd><span>' + data[i].contents + '<span><br /><a href=\"' + data[i].link + '\" target=\"_blank\">자세히 보기</a></dd></dl>';
  cardUl.appendChild(makeLi);
}
// ---------------------------------------
// cardUl.appendChild(makeLi); 여기서 innerHTML :(중복을 허용하지 않고 내부자료를 삭제 후 덮어 씌우기) 대신 append : 기존 자료에 추가 
// escape 문자 : 해당하는 글자가 어떠한 기능을 처리하게 만드는 것을 \' \' \& \| \! , \n \t
