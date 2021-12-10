// d_05_promise.js

const fnOne = function(data){
  const rel3 = data * data;
  return rel3;
}

const fnTwo = function(data, fn){
  const rel2 = data / 2;
  return fn(rel2);
}

const fnThree = function(data, fn){
  const rel1 = data * 5;
  return fn(rel1, fnOne);
}

let valueReusult = fnThree(4, fnTwo);
console.log( valueReusult );

// button.addEventLister('click', function(){})