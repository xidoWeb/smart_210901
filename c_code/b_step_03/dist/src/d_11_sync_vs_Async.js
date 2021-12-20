// d_11_sync_vs_Async.js

let num = 0;

/*
// 순서의 흐름대로 처리
console.log('1:', num );
console.log('2:', num += 1 );
console.log('3:', num += 3 );
console.log('4:', num += 5 );
console.log('5:', num );
*/


/* 
// 만들어진 코드의 순서대로 진행? , 적용가능한 코드먼저 처리 후 추가 작업
console.log('1:', num );
console.log('2:', num += 1 );
setTimeout( () => { console.log('3:', num += 3 );} , 100);
setTimeout( ()=> {  console.log('4:', num += 5 );}, 300);
console.log('5:', num );
*/