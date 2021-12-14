# Scss

[TOC]

---

## scss 심화2

이전 내용을 익히고 정리하셨다면, 이제 추가 문법을 익혀보도록하겠습니다.
@mixin과 유사하지만 다소 다른 느낌의 @function과, 
@media screen 사용시 css와의 다른 작업방식에대해 다루도록 하겠습니다. 

---

### @function

@mixin유사한 기능이지만 여러모로 다른 형태가 @funtion 입니다.
javascript 또는 jQuery를 사용해 보셨다면 @function 의 기능이 무엇인이 알수 있습니다.
이름에서처럼 함수의 기능을 처리하는 기능입니다.

먼저 간단하게 @mixin과 @function을 구분하자면, 아래와 같습니다.

1. **@mixin**은 선택자가 없이 사용할 수 있으며,  **@function**는 선택자가 반드시 존재해야하며, 대체로 값을 적용할 때 사용이 가능하다.
2. **@mixin**은 호출시 **@include**를 이용해서 @mixin이름을 작성해야하며, 
   **@function**은 함수의 이름만 호출하면된다.
   단, @function에서는 도출할 결과값을 **@return**을 사용해야한다.

---

#### @function basic

**@function**의 가장 많이 쓰이는 형태는 함수의 매개변수(인수)의 값을 통해 연산하는 것입니다. 
간단하게  `vw`단위값을 계산해보도록하겠습니다.

```scss
/* scss */
// 가로값을 px값을 입력했을시
@function vw($width, $windowWidth) {
  $vw : ($width / $windowWidth * 100) + vw;
  @return $vw
}

.my-module { width: vw(320,1280); height: vw(100,1280);}
```

```scss
/* css */
.my-module {width: 25vw; height: 7.8125vw; }
```

위 내용처럼  **width**의 값을 처리할때 vw계산은 다보 번거롭고 불편하기도 합니다. 우리는 이것을 쉽게 계산하기 위해 사용할 가로값과, 기준크기값을 입력해서  vw값을 계산하도록 처리하면 쉽게 적용할 수 있습니다.

조금 더 다뤄보겠습니다.

저의 경우는 웹페이지 광고배너를 만들때, 하나의 페이지에 9개의 가로슬라이드형 배너를 만들경우 광고를 감싸는 요소를 900%정도크기의 값으로 사용합니다. 그리고 그 자식에게는 9개로 나눈 값을 가로크기로 만들어주어야합니다. 어떻게 해야할까요? 

**width:calc(100 / 9)%** 라고 할 수도 있지만, IE8까지 고려한다면 참 남감합니다.

>  (쉽게말해 가로 100% / 9 를 계산해서 %값을 입력하려합니다.)

```scss
/* scss */
@function banner-half($num){
    $cut : 100% / $num;
    @return $cut;
}

#bannerBox{width:800px; height:500px;
    >.anner_wrap{width:900%; height:inherit;
        >li{width:banner-half(9); height:inherit;}
    }
}
```

```scss
/* scss */
#bannerBox { width: 800px; height: 500px;}
#bannerBox > .anner_wrap { width: 900%; height: inherit; }
#bannerBox > .anner_wrap > li { width: 11.11111%; height: inherit; }
```

간단하게 계산하기 편하게 만들어주는 기능으로 써먹을 수 있습니다. 
배너의 경우는 **javascript**를 통해 처리하는 것이 일반적이지만, 지금은 **scss**를 설명하기 위한 예시이므로, 내용을 파악하는데 사용하면 좋을듯 합니다.

위 내용에서 이름을 보다보면 가독성을 위해 **banner-half**라고 작성하긴 했지만, 
매번 작성하기 불편할 수도 있습니다.  이럴때 축약으로 처리할 수도 있습니다. 

```scss
@function banner-half($num){
    $cut : 100% / $num;
    @return $cut;
}
@function cf($n){
  @return banner-half($n)
}

li{width:cf(9);}
```

```scss
li{width:11.11111%;}
```

---

####@function + @mixin

위의 예시를 통해 함수를 사용하는 방법을 간단하게 익혔습니다. 
하지만 우리는 하나의 수치를 가로값을 사용할때 이렇게 작성해야 할 수도 있습니다. 

```scss
/* css */
width:100px; width:6.25rem; width:10vw; 
```

 여러 상황을 고려해서 작업한다고 처리했을때를 고려하여 간단한 예시를 만들었습니다. 
만양 위와 같은 상황이 여러번 이루어진다면 어떨까요? 많은 불편함이 생기게 됩니다. 
심지어 vw 값의 경우는 작업자들의 협업을 고려하여 기준크기값을 작성해주어야 하는 경우도 발생하게 됩니다. 

이런 상황을 고려할 경우에는 **@mixin**을 사용하는 것이 좋습니다.

```scss
/* scss */
@mixin vw($width, $baseWidth){
    width: $width+px;
    width: ($width / 16) + rem;
    width: ($width / $baseWidth * 100) + vw; /* #{$width} / #{$baseWidth} * 100 */
}
p{@include vw(200, 1920); }
```

```scss
/* scss */
p { width: 200px;  width: 12.5rem; width: 10.41667vw; /* 200 / 1920  * 100 */ }
```

위 내용에서 vw관련 주석처리까지 간단하게 처리해주기에 다방면에서 편하다는 장점이 있습니다.

하지만 rem을 사용해야한다면? 별도의 설정으로 다시만들어주어야 하는 것은 같을 수 있지만, 같은 공식을 여러번 써야한다는 불편함이 있습니다.

그래서 별도의 함수로 빼보도록 하겠습니다. 

```scss
/* scss */
@mixin vw($size, $num, $baseWidth){
   $w: vw($num, $baseWidth);  // @function vw 호출
   #{$size}: $num+px; 
   #{$size}: rem($num);       // @function rem 호출
   #{$size}: $w; /* #{num}px / #{$baseWidth}px * 100% =  #{$w} */ 
}

@mixin rem($size, $num){
    #{$size}:$num + px;
    #{$size}:rem($num);   // @function rem 호출 
}

// ================================================
@function rem($num){ 
  @return $num / 16 + rem; 
}

@function vw($num, $baseWidth){
  @return ($num / $baseWidth * 100) + vw; 
}
// ================================================

p{
  @include vw(width, 100, 1920);
  @include rem(height,30);
  max-width:rem(150);
  }
```

```scss
/* css */
p {
  width: 100px;
  width: 6.25rem;
  width: 5.20833vw;
  /* numpx / 1920px * 100% =  5.20833vw */
  height: 30px;
  height: 1.875rem;
  max-width: 9.375rem;
}
```

