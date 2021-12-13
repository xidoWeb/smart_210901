// d_07_async.js

const fnTest = () => { return 'test'; }

// const fnTest = () => 'test';
console.log( fnTest() );
// -----------------------------------
const fnPromi = () =>{
  return new Promise( (resolve, reject) => {
    resolve('test2');
  })
}
console.log( fnPromi() );
fnPromi().then(console.log);
// -----------------------------------
async function fnTest3(){ return 'test3'};
console.log( fnTest3() );
fnTest3().then(console.log);
// -----------------------------------
const fnTest4 = async () => 'test4';
console.log( fnTest4() );
fnTest4().then(console.log);
// ----------------------------------

async function fnTest5 (){
  await console.log('test5');
}

// function fnTest5(){
//   return Promise.resolve('test5').then(() => undefined);
// }

fnTest5()

// const A = new Promise();
// const B = new Promise();
// A.then().then(B).then().then();  -> Promise를 통해 순차기능을 수행시

// const C = async ()=>{}
// const D = async ()=>{}
// const fnF = async function(){
//   await C(); // c 먼저 수행
//   await D(); // c 수행 후 D수행
// }

function timed(){
  return new Promise(resolve => {
    setTimeout(()=>{ resolve('time') },500);
  })
}

async function fn1 (){
  await timed()
  return 'one'
}
async function fn2 (){
  await timed()
  return 'two'
}
async function fn3 (){
  await timed()
  return 'three'
}

async function fnRel(){
  const a = await fn1();
  const b = await fn2();
  const c = await fn3();
  return `${a} + ${b} + ${c}`;
}
fnRel().then( console.log );


// 순차 수행을 원할하게 처리하기 위해 나온 기능
// Promise - Promise, fetch, async/await  + then()
