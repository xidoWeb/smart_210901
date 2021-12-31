// d_13_class.js

const dataFile = [
  {id:1, brand:'nescafe', type:'coffee', title:'제목을작성_01', content:'내용을 작성_01', img:'a.jpg', imgUrl:'../img/path/'},
  {id:2, brand:'stabug', type:'drink', title:'제목을작성_02', content:'내용을 작성_02', img:'b.jpg', imgUrl:'../img/path/'},
  {id:3, brand:'eriya', type:'coffee', title:'제목을작성_03', content:'내용을 작성_03', img:'c.jpg', imgUrl:'../img/path/'},
  {id:4, brand:'nescafe', type:'cookie', title:'제목을작성_04', content:'내용을 작성_04', img:'d.jpg', imgUrl:'../img/path/'},
  {id:5, brand:'nescafe', type:'coffee', title:'제목을작성_05', content:'내용을 작성_05', img:'e.jpg', imgUrl:'../img/path/'},
  {id:6, brand:'eriya', type:'cookie', title:'제목을작성_06', content:'내용을 작성_06', img:'f.jpg', imgUrl:'../img/path/'},
  {id:7, brand:'stabug', type:'drink', title:'제목을작성_07', content:'내용을 작성_07', img:'g.jpg', imgUrl:'../img/path/'},
];

const BoxSet = function(title, content, imgUrl, img){
  this.title = title;
  this.content = content;
  this.img = imgUrl + img
}
const newData = [];

// const data = new BoxSet(dataFile[0].title, dataFile[0].content);
// console.log( data );
dataFile.forEach((data,idx)=>{
  let mySelect = new BoxSet(data.title, data.content, data.imgUrl, data.img);
  newData.push(mySelect);
});

console.log(newData[2].img);

let dataType = dataFile.filter(data=>{ // 필요한 조건이 맞으면 해당 객체를 뽑아내는것
  return data.type === 'coffee';
});
console.log( 'dataType:', dataType );

const nArr = [1,2,3,4,5,6,7];
console.log( nArr );
let newNArr = nArr.map(n=>{ // 내용 전체를 순환하여 처리하는 것
  return n*n;
});

console.log( newNArr );

const fileArr = ['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg'];
const fileUrl = fileArr.map(file=>{
  return '../img/path/'+file;
});
console.log( fileUrl );


// const BoxSet = function(title, content, imgUrl, img){
//   this.title = title;
//   this.content = content;
//   this.img = imgUrl + img
// }
// const newData = new BoxSet(a, b)

class BoxReSet {
  constructor ( title, content, imgUrl, img) {
    this.title = title;
    this.content = content;
    this.img = imgUrl + img
  }
}

let setBox2 = [];
dataFile.forEach((data,idx)=>{
  setBox2.push(new BoxReSet(data.title, data.content, data.imgUrl, data.img));

});
console.log( setBox2 );

// ==================================================================================
