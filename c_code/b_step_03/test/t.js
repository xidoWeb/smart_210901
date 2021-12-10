const p = document.querySelector('.result > span');

const fnN = function(n, i){
  const _i = i || 1;
  return new Promise((resolve, reject) => {
    resolve(n * _i);
  })
}


let n1 = 10 * 2 * 5;
let n2 =  5 * 2 * 5;

fnN(10).then((rel)=>{
  return fnN(rel,2)
}).then(rel =>{
  return fnN(rel, 5)
}).then( console.log )


let r = n1+n2;
p.innerText = r;

