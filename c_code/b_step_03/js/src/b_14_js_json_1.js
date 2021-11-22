// b_14_js_json_1.js

var originData = [
  {  "id": 1,  "title": "Research Associate",  "link": "http://time.com" }, 
  {  "id": 2,  "title": "Senior Developer",  "link": "https://blogs.com"}, 
  {  "id": 3,  "title": "VP Quality Control",  "link": "https://xinhuanet.com"}, 
  {  "id": 4,  "title": "Automation Specialist II",  "link": "https://businesswire.com"}, 
  {  "id": 5,  "title": "Geological Engineer",  "link": "https://marriott.com"}, 
  {  "id": 6,  "title": "Account Representative III",  "link": "https://patch.com"}, 
  {  "id": 7,  "title": "Speech Pathologist",  "link": "https://who.int"}, 
  {  "id": 8,  "title": "Automation Specialist IV",  "link": "https://psu.edu"}, 
  {  "id": 9,  "title": "Health Coach I",  "link": "https://cnbc.com"}, 
  {  "id": 10,  "title": "Developer I",  "link": "http://miibeian.gov.cn"}
];

// originData copy
var textData = JSON.stringify( originData );
var dataList = JSON.parse( textData );  

// .navigation을 선택
// ul을 생성하여 담기

// document.getElementsByClassName('navigation')[0];
var navi = document.querySelector('.navigation');
// navi.style.width = '100%';
// navi.style.height = '50px';
// navi.style.backgroundColor = '#dcd';
navi.style = "width:100%; height:50px; background-color:#dcd";

//생성 -> document.createElement('ul');
// var makeUl2 = '<ul class="list"></ul>'; // innerHTML을 사용시 직접 내용을 작성
// navi.innerHTML = makeUl2;
var makeUl = document.createElement('ul'); // innHTML방식이아니라 내부에 추가로 삽입할때 요소로 삽입처리
makeUl.classList.add('list');
navi.append(makeUl);

// ---------------------------------------------------------------------
//ul.list선택                : querySelector('.list')
//내부에담을 li 생성         : createElement('li')
//li내부에 유일요소인 a생성  : createElement('a') -> '<a></a>'
//li를 .list에 담기          : (.list).append(li)
// a에 href=속성처리, text글자 삽입
// console.log( dataList[0].title, dataList[0].link );


// step 1 : li요소 하나만 생성하여 삽입하기!
var UlList = document.querySelector('.list');
var makeLi = document.createElement('li');
var title = dataList[0].title;
var link =  dataList[0].link;
var makeA = '<a class="link"></a>';
makeLi.innerHTML = makeA;
var findA = makeLi.querySelector('a');
findA.href = link;
findA.innerText = title;
UlList.append(makeLi);










