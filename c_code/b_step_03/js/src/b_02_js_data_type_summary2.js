
// var dicList = [];
// dicList내부에 계산한 값을 히스토리처럼 저장!!

var dicList = [];
/* // 1.
dicList.push('a');
dicList.push('b');
dicList.push('c');
dicList.push('d');
dicList.push('f');
dicList.push('l');
console.log( dicList ); 
*/

var fn1 = function(a,b){
  var c = a + b;
  var rel = a + '+' + b + '=' + c;
  dicList.push(rel); // 배열에 담는 기능
  console.log(c);    // console창에 결과를 출력
  return c;          // 함수실행시 결과값
};

fn1(2,4);
fn1(3,9);
fn1(4,8);
fn1(2,7);
fn1(6,20);
console.log( dicList );

// 모든 눈에보이는 내용들을 모두 식으로 바꾼다

// Math.floor();
// 원주율, 체온, 키, 시력, 몸무게, 나이... 
// 그룹?
// {체온:수치, 키:수치, 시력:수치, 몸무게:수치, 나이:수치}



