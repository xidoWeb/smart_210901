# Scss

[TOC]

---

## scss 심화

다른 프로그래밍 언어에서도 사용되고있듯 scss에서도 다양한 문법형태가 존재합니다. 
그중에 가장 중요하고 반드시 알아야하는 것들이 아래에 있는 **if**, **for**, **funtion** 형태로 볼 수 있습니다.

---

### @if

**@if**문은 흔이 우리가 알고있는 **만약~라면** 이라고 하는 가정을 하고 
그에따른 내용이 참일경우에 실행되도록 만드는 기능이 바로 **@if** 입니다. 

**@if**를 사용하려면 반드시 알아야하는 **data type**이 바로 **boolean**입니다.
또한, 비교연산자를 같이 알고 익혀두면 좀 더 쉽게 다가갈 수 있습니다.
**boolean**이란 간단하게 정의하면 **참/거짓**을 구분하는 형태입니다. 
참을 `true`라고 하며, 거짓을 `false`라고 처리할 수 있습니다. 

```scss
@if expression {
   // CSS codes
} @else if condition {
   // CSS codes
} @else {
   // CSS codes
}
```

```scss
/* scss */

// 비교연산자: 좌변과 우변을 비교하여 값을 도출하는 연산자
// 작거나 같다 : <=, 작다 : <, 크거나 같다: >=, 크다 >, 같다 ==, 같지 않다 !=

$type: audi;
p {
   @if $type == benz {				// 변수 '$type'의 값이 'benz' 인지 비교
     								// '==' 같다라는 의미의 비교연산자를 사용
      color: red;					// 비교가 참이면 실행 후 종료
   } @else if $type == mahindra {	// 위내용이 거짓이면 실행 (다시 비교)
      color: blue;					// 비교가 참이면 실행 후 종료
   } @else if $type == audi {		// 위내용이 거짓이면 실행 (다시 비교)
      color: green;					// 비교가 참이면 실행 후 종료
   } @else {						// 위내용이 거짓이면 실행 (비교없이 바로 내용실행)
      color: black;					// 위 내용이 모두 거짓이면 실행
   }
}
```

```css
/* css */
p { color: green; }
```

---

### @while

반복문에서 많이 사용하는 형태입니다만
scss에서는 권장하지 않는 형태이므로 빼도록 하겠습니다. 

---

### @for

**@for**문은 **~하는동안**이라는 의미를 가지고 있습니다.
프로그램에서는 지정한 횟수만큼 실행문을 반복하여 유사한 코드를 여러개 만들기 위해 사용하는 형태입니다. 
즉, 연속되어진 숫자형태가 되어있는경우, 
일정한 규칙으로 **증감**(증가 또는 감소)하는 경우에 유용하게 사용할 수 있는 형태입니다. 

유사하지만 조금 다른 형태가 **@each**입니다. 
**@each는 @for와 같은 반복문의 형태로 사용**하지만 다소 다른점이 있다면,
숫자와 관련한 일정한 규칙의 **증감이 아닌 형태의 반복의 사용일 경우는 @each**문을 사용하는 점만 이해하면 됩니다. 

```scss
/* scss */
// 방법1
@for [$변수] from [시작값] through [끝값] {
  [반복내용 실행]
}
// 방법2
@for [$변수] from [시작] to [끝] {
  [반복내용 실행]
}
```

위 코드는 @for문의 사용을 할 경우 쓰이는 두가지 형태의 구문입니다. 
**@for**문을 사용하려면 일단 반복할 변수를 쓰게되는데 이때 들어가는 변수는 **임의 변수**입니다. 
즉, **시작할 숫자값** 몇부터 끝낼 **숫자 몇까지 사용**하겠다는 의미로 해석하면 좀더 쉽게 사용할 수 있습니다. 

`방법1`과 `방법2`의 형태에서 다른점이 있는 `through`는 **이상/이하**를 의미하며,` to`는 **초과/미만** 을 의미합니다.

```scss
/* scss */
@for $i from 1 through 10 {
  .coffee_#{$i} {background-position:0 (-10 * $i + 10) + px}	// 최초값 0을 사용하도록 처리
}
```

```css
/* css */
.coffee_1 { background-position: 0 0px; }
.coffee_2 { background-position: 0 -10px; }
.coffee_3 { background-position: 0 -20px; }
.coffee_4 { background-position: 0 -30px; }
.coffee_5 { background-position: 0 -40px; }
.coffee_6 { background-position: 0 -50px; }
.coffee_7 { background-position: 0 -60px; }
.coffee_8 { background-position: 0 -70px; }
.coffee_9 { background-position: 0 -80px; }
.coffee_10 { background-position: 0 -90px; }
```

위 코드의 내용을 보면 10개의 요소에 각각 들어가는 이미지의 `background-position`의 위치가 일정한 간격으로 위치이동이 되는 형태에서 사용할 경우 위의 형태처럼 반복 사용할 수 있는 기능이 됩니다.

물론 일정하지 않은경우에는 `list`기능을 사용하면 가능합니다. 

```scss
/* scss */
$coffeePosition:(0, -10px, -30px, -50px, -90px, -100px, -150px, -200px); 
// 규칙성 없는 위치의 경우, 미리설정

@for $i from 1 through length($coffeePosition) {	// 입력값의 갯수파악을 위해 'length()'사용
  .coffee_#{$i} {background-position:0 (nth($coffeePosition, $i) );}
}
```

```css
/* css */
.coffee_1 { background-position: 0 0; }
.coffee_2 { background-position: 0 -10px; }
.coffee_3 { background-position: 0 -30px; }
.coffee_4 { background-position: 0 -50px; }
.coffee_5 { background-position: 0 -90px; }
.coffee_6 { background-position: 0 -100px; }
.coffee_7 { background-position: 0 -150px; }
.coffee_8 { background-position: 0 -200px; }
```

위 코드의 내용을 통해 list기능을 좀더 편하게 사용할 수 있는것을 알 수 있습니다. 

약간의 응용을 하여, 이미지값을 바꿔서 처리한다면 아래의 코드를 사용하면 됩니다.

```scss
/* scss */
$url:"../image/header/";
$img:("img.png", "test.png", "logo.png", "button.jpg", "sticker.png" );

@for $i from 1 through length($img) {
  // .coffee_#{$i} {background-position:0 (-10 * $i + 10) + px}
  .coffee_#{$i} {background-image:url( $url + nth($img, $i) );}
} 
```

```css
/* scss */
.coffee_1 { background-image: url("../image/header/img.png"); }
.coffee_2 { background-image: url("../image/header/test.png"); }
.coffee_3 { background-image: url("../image/header/logo.png"); }
.coffee_4 { background-image: url("../image/header/button.jpg"); }
.coffee_5 { background-image: url("../image/header/sticker.png"); }
```



---

### @each

```scss
/* scss */
@each $name in ('save' 'cancel' 'help' 'test') {
    .icon-#{$name} {
        background-image: url('/images/#{$name}.png');
    }
}
```

```css
/* css */
.icon-save { background-image: url("/images/save.png"); }
.icon-cancel { background-image: url("/images/cancel.png"); }
.icon-help { background-image: url("/images/help.png"); }
.icon-test { background-image: url("/images/test.png"); }
```

아래코드는 `list`의 응용형태와, **@each**의 복합형태입니다. 
하나씩 분석해서 확인해보세요.

```scss
/* scss */

// list내에서 list를 다시 사용한 예시
$buttonConfig: 'save' 50px 'hover', 'cancel' 150px 'active', 'help' 100px 'img'; 

// @each문 사용
@each $tuple in $buttonConfig {
    .button-#{nth($tuple, 1)} {
              width: nth($tuple, 2);
    &:hover{background-image: url(nth($tuple,3)+'.png');}	// 현재라인은 삭제후 확인 이후 삽입
    }
}// @each
```

```css
/* css */
.button-save { width: 50px; }
.button-save:hover { background-image: url("hover.png"); }

.button-cancel { width: 150px; }
.button-cancel:hover { background-image: url("active.png"); }

.button-help { width: 100px; }
.button-help:hover { background-image: url("img.png"); }
```



---

### @function

@mixin과 혼돈이 있을것으로 판단하여 다음 수업자료에 첨부하겠습니다. 

---

### 