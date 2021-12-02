// c_11_dom_insert_data.js
// 별도 자료 ----------------------------
var data = ['title', 'spring', 'javacript', 'winter', 'summer', 'banana', 'group'];
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
  makeLi.innerText = data[i] + ' ' + (i + 1);
  cardUl.appendChild(makeLi);
}
// ---------------------------------------
// cardUl.appendChild(makeLi); 여기서 innerHTML :(중복을 허용하지 않고 내부자료를 삭제 후 덮어 씌우기) 대신 append : 기존 자료에 추가 
