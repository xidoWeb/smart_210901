## 능력단위 : UI디자인

[toc]

---

### 과정내용

#### 21.10.27

##### 수업내용

- web에서 사용가능한 이미지

  - jpg(손실압축, 배경색투명불가능)
  - png(비손실압축, 배경색이투명가능-8비트는불가)
  - svg(vector)
  - gif(움짤)
  - webp(webM과 동일하게 구글에서 만든 이미지) - IE,safari,photoshop

  

- [x] 포토샵
  - [x] jpg 이미지 

---

**illustrator**

- [x] 세팅
- [x] 선택자/부분선택자
  - [x] **선택자** : 도형자체를 선택하거나, 그룹을 선택할때 사용
  - [x] **직접선택자** : 도형자체를 선택보다는 일부, 영역을 선택하여 모양을 변형
- [x] 색: 면색/선색
  - [x] 색상을 변경하고자 할때는, 면/선색이든 바꾸고하는 색상을 선택하여 앞으로 배치하고 이후에 변경
  - [x] CMYK/RGB : 컬러 모두 color picker에서 변경하는 것이 아니라 color패널에서 색상을 변경
- [x] 내용 확인 (`view`)
  - [x] **ctrl Y** : 객체가 만들어져인는지 확인  (`view > outline`)
  - [x] ctrl H 
  - [x] shift ctrl H
  - [x] ctrl R 
  - [x] ctrl shift D
- [x] 도형그리기 : property 패널과 함께 사용
  - [x] 사각형
  - [x] 다각형
  - [x] 별툴 : ctrl키를 누르면 외경/내경 중 하나를 고정하여 모양을 변경
- [x] arrange
  - [x] **shift ctrl ]**  : 맨앞으로 배치
  - [x] **shift ctrl  [** :맨뒤로 배치
  - [x] 여러요소를 한번에 앞/뒤로 배치해야하는 경우 여러개의 객체를 선택하여 사용
- [x] align : 정렬
  - [x] 한쪽정렬
  - [x] 각요소별 위치기준에 따른 정렬
  - [x] 추가옵션 : 각 요소와 요소사이에 간격 정렬
  - [x] 추가옵션2 : align to (selector , key , artboard)
- [x] pathfinder
  - [x] unite : 요소들을 하나로 합치는것 
  - [x] divide : 요소들을 분리(자르는 것)
- [x] **ctrl 8** : compound path <-> **shif ctrl alt 8**
  - [x] 분리되어있는 요소들을 완전한 하나의 도형으로 처리
- [x] **ctrl 7** : clipping mask
  - [x] 맨앞에는 하나의 요소, 뒤에는 여러개의 요소를 담아서 마스크 처리하는 기법
- [x] scale / offset
- [x] share
- [x] rotate
- [x] reflect
- [x] 연결 : **ctrl J** 

---

##### illustartor: 웹용을 위한 이미지 저장방법

- svg 저장 
- svg로 저장시 - 
  - compound path
  - artboard, 이미지 모두 소수점단위는 제거하고 
  - save as - use artboard 체크시 범위를 조금더 크게 / 체크안하면 이미지만 저장

---

### 과정내용

#### 21.11.01 ~ 04

##### css

- [x] responsive web 
- [x] figma를 이용한 반응형웹 구축
- [x] display:flex (display:grid)

##### js 

최신브라우저에서 js최신 표준을 지원하지만 그 기준이 현재의 표준보다 늦다. 
또한, 구형브라우저에서는 ES6 이상의 버전을 지원하지 않는다. 
이를 해결하기 위해 다양한 방법을 시도하는데 이를 폴리필처리한다고 한다. 
`babel`로 처리하면 간단하게 최신 내용을 작성하고, 
이를 변환하여 구형브라우저에서도 동작가능하도록 사용할 수 있다.

- [x] 변수 선언 - 호이스팅현상 
- [x] 형타입 체크 - 숫자, 문자, 특수(undefined/null),논리(true,false),객체(object,array),함수(function)
  - [x] 배열 메소드 : push, pop, unshift, shift
  - [x] 참조변수(배열,객체) : 공간을 공유하는 변수 / 일반변수 : 값 자체
  - [x] 함수- 선언식: 기명함수-함수에 이름을 가진다.(함수자체가 호이스팅) / 표현식 : 익명함수-변수에 함수를 담는다.(변수이름만 호이스팅)
  - [x] 즉시실행함수 : (function(매개변수){})(인수) - 선언과동시에 실행/메모리낭비줄이기위해, 외부에 노출되지않고, 기능을 각각 별도로 사용
  - [x] 전역변수, 지역변수
  - [x] 문자 + 문자 -> 문자, 문자 + 숫자 -> 문자, 숫자+숫자 ->숫자연산, 문자(연산자)숫자 -> NaN(숫자)


---

### 과정내용

#### 21.11.08 - 12

##### css - 전처리기(scss)

- [x] vscode - plugin - `live-sass compile`, prepros, node.js
- [x] 변수( `$이름` ), nesting( `선택자{ 선택자 { &:hover{} } }` ), 
- [x] list, map, `@mixin/@include` , `@for $var from 1 throuth 10 {}` ...
- [x] 보간법(interpolation) : `#{}`
- [ ] `@minxin/@include`, `@function`, `@if`

##### javascript

- [x] 연산자
  - [x] 사칙연산( + - * / % )
  - [x] 증감연산(++a, a++, --a, b--), 할당연산(+=, -=, /=, *=), 비교연산(||, &&, |, &), 동치연산(===, !==)
  - [x] 삼항연산 : 3가지 영역으로 나눠서 처리하는 연산   (조건)?(참):(거짓);
- [x] 객체내 객체( 배열/ 함수 ) [[],[],[],[]], [{},{},{},{a:[],b:[]}]
- [x] 문법
  - [x] 조건문(switch, if), 
  - [x] 반복문(~~while~~, do-while, for, for-in, forEach)
- [x] 메소드 : `사용자지정형태.메소드()`
  - [x] - length, push, shift, pop, unshift, split, reverse, join, splice, sort, forEach, reduce, filter

- [x] 내장함수 : `이미만들어진형태.메소드()` | `만들어져있는함수()`
  - [x] - alert(), prompt(),confirm(), Math.random(), Math.ceil(), Math.round(), console.log()

- [x] 함수-클로저,재귀함수
- [x] 깊은복사, 얕은복사
- [ ] this, prototype





---

## 시험: 2021.11.15

- 반응형으로 figma 디자인완성 (메인포함 전체인 모든페이지)
- 320, 768, 1280, 1440, 1920 (기준수치에서 변경 가능 하지만, 다른페이지모두 설정된 사이즈와 동일한 기준에서 변경)

---















