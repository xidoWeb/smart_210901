// d_06_promise_polyfill.js 
// -----------------------------------------------------------------
const box = 10;
const fnBox = ()=>{ return box; }
const fnPlus = (a = 3, b) => { 
  // const c = a || 3;
  return a + b;
}

class FileData{
  constructor (name, date){
    this.name = name;
    this.date = date;
  }
}

//-----------------------------------
/*
const promi = new Promise( (resolve, reject) => {
  setTimeout(()=>{
    resolve('success');
  }, 500)
});

const rel = promi.then( (resolve)=>{ return resolve; })
console.log( rel );
*/
// @babel/polyfill 기능  - require 처리 오류
// -----------------------------------------

// 순서의 흐름을 처리하기는 기능

// 1. 원두를 갈고
// 2. 커피를 내리고
// 3. 물을 타서
// 4. 마신다

let one   = '원두를 간다.'; // 1.5초
let two   = '커피를 내린다.'; // 1초
let three = '물을 탄다.'; // 0.5초
let four  = '마신다.'; // 0

// setTimeout( ()=> {  console.log( one );   }, 1500);
// setTimeout( ()=> {  console.log( two );   }, 1000);
// setTimeout( ()=> {  console.log( three ); }, 500);
// setTimeout( ()=> {  console.log( four );  }, 0);

// setTimeout( ()=> {  
//   console.log( one );   
//   setTimeout( ()=> {  
//     console.log( two );   
//     setTimeout( ()=> {  
//       console.log( three ); 
//       setTimeout( ()=> {  
//         console.log( four );  
//       }, 0);
//     }, 500);
//   }, 1000);
// }, 1500);

const fnOne = new Promise((resolve, reject)=>{
  setTimeout(()=>{   resolve(one);  },1500);
});
const fnTwo = new Promise((resolve, reject)=>{
  setTimeout(()=>{   resolve(two);  },1000);
});
const fnThree = new Promise((resolve, reject)=>{
  setTimeout(()=>{   resolve(three);  },500);
});
const fnFour = new Promise((resolve, reject)=>{
  setTimeout(()=>{   resolve(four);  },0);
});

// fnOne.then((response)=>{
//   console.log( response );
//   fnTwo.then((response)=>{
//     console.log( response);
//     fnThree.then((response)=>{
//       console.log(response);
//       fnFour.then((response)=>{
//         console.log(response);
//       })
//     })
//   })
// })

fnOne
  .then(console.log)
  .then(()=>fnTwo)
  .then(console.log)
  .then(()=>fnThree)
  .then(console.log)
  .then(()=>fnFour)
  .then(console.log)


  // -------------------------------------------------
  const fnFirst = ()=>{
    return new Promise( (resolve, reject)=>{
      setTimeout( () => { resolve(one) }, 1500);
    })
  }

  const fnSecond = (data)=>{
    return new Promise( (resolve, reject) => {
      setTimeout( ()=>{  resolve( `${data} -> ${two}` ) }, 1000);
    })
  }
  const fnThird = (data)=>{
    return new Promise( (resolve, reject) => {
      setTimeout( ()=>{ resolve( `${data} -> ${three}` ) }, 500)
    })
  }
  const fnForth = (data)=>{
    return new Promise( (resolve, reject) => {
      setTimeout( ()=>{ resolve( `${data} -> ${four}` ) }, 0)
    })
  }
// ------------------------------------
//  fnFirst()
//    .then( response => fnSecond(response) )
//    .then( response => fnThird(response)  )
//    .then( response => fnForth(response)  )
//    .then( response => console.log(response)  )

fnFirst().then( fnSecond ).then( fnThird ).then( fnForth  ).then( console.log );


