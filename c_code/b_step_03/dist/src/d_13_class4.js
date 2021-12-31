// d_13_class4.js

const dataUrl = [
  '../data/person_card.json',
  '../data/sample.txt',
  '../data/video_modal.json',
  '../temp/slide_area3.jsx',
];

const elTemp = document.querySelector('.temp');
const fnMkDiv = (name)=>{
  let mkDiv = document.createElement('div');
  mkDiv.setAttribute('class', name);
  mkDiv.innerText = name;
  elTemp.append(mkDiv);
}

const pr = ()=>{
  return new Promise(resolve =>{
    resolve();
  });
};

// // 파일 생성을 위해 순차 진행
// pr()
// .then( ()=>{ fnMkDiv('one')   })
// .then( ()=>{ fnMkDiv('two')   })
// .then( ()=>{ fnMkDiv('three') })
// -------------------------------------------------------------------


// fetch(dataUrl[0]).then( () =>{ fnMkDiv('one_001') });
// fetch(dataUrl[1]).then( () =>{ fnMkDiv('two_002') });
// fetch(dataUrl[2]).then( () =>{ fnMkDiv('three_003') });
// fetch(dataUrl[3]).then( () =>{ fnMkDiv('four_004') });

// fetch(dataUrl[0])
//   .then( () =>{ fnMkDiv('one_001') })
//   .then( () => {
//     fetch(dataUrl[1])
//       .then( () =>{ fnMkDiv('one_002') })
//         .then(()=>{
//           fetch(dataUrl[2])
//             .then( () =>{ 
//               fnMkDiv('three_003') 
//             }).then(()=>{
//               fetch(dataUrl[3])
//                 .then( () =>{ 
//                   fnMkDiv('four_004') 
//                 })
//             })
//         })
//     })
// --------------------------------------------------------
// await {진행중인 내용이 끝날때까지 뒤에 내용을 기다리게하는 구문} - 감싸는 함수에서 async를 붙여야 함
// // sample : (async ()=>{})()
// // sample : (async function(){})()
// fetch를 이용하는 방법
// ( async () => {
//   await fetch(dataUrl[0]).then( () =>{ fnMkDiv('four_001') });
//   await fetch(dataUrl[1]).then( () =>{ fnMkDiv('four_002') });
//   await fetch(dataUrl[2]).then( () =>{ fnMkDiv('four_003') });
//   await fetch(dataUrl[3]).then( () =>{ fnMkDiv('four_004') });
// } )();

// Promise / fetch -> 폴리필 -> axios : js 라이브러리 - ie호환, json()
( async () => {
  await axios(dataUrl[0]).then( () =>{ fnMkDiv('four_001') });
  await axios(dataUrl[1]).then( () =>{ fnMkDiv('four_002') });
  await axios(dataUrl[2]).then( () =>{ fnMkDiv('four_003') });
  await axios(dataUrl[3]).then( () =>{ fnMkDiv('four_004') });
} )();