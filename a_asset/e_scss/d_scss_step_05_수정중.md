# Scss

[TOC]

---

## scss 심화3 

기본 문법은 모두 익히셨습니다. 이제 우리는 다소 특이한 형태의 문법을 익혀보도록 하겠습니다.
여러상황에서  적용할 수 있는 **@content** 입니다.

---

### @content

sass 3.2버전부터 추가된 @content는 @mixin 내부에 값을 전달하여 처리가 가능한 기능입니다.

```scss
/* scss */
@mixin apply-to-ie6-only {
  * html { @content }
}

@include apply-to-ie6-only {
  #logo { background-image: url(/logo.gif);}
}
```

```css
/* css */
* html #logo {
  background-image: url(/logo.gif);
}
```

선언은 외부 범위의 선택자와 선언이 중복되는 많은 곳에서 싸여 져야하는 곳이라면 <br />
어디에서나 사용할 수 있습니다



---

### @content in @media query

별도의 장치 별 스타일 시트를 유지하는 대신 미디어 쿼리를 인라인 할 수 있지만 <br />반복적으로 쿼리를 작성하면 상당히 다루기 힘들 수 있습니다. <br />콘텐츠 블록을 쿼리를 래핑하는 믹스 인으로 전달하여 단순화 할 수 있습니다.

```scss
/* scss */
@mixin media($width) {
  @media only screen and (max-width: $width) {
    @content;
  }
}

@include media(320px) {
  background: red;
}
```

```css
@media only screen and (max-width: 320px) {
  background: red;
}
```

이는 Bourbon에서 사용 하는 [HiDPI 믹스](http://bourbon.io/docs/#hidpi-media-query) 와 같이 길고 매우 구체적인 미디어 쿼리에 특히 유용합니다 .



---

### @content in @keyframes

키 프레임은 콘텐츠 복제의 좋은 예입니다. <br />각 공급 업체별 선택기에 대한 선언을 다시 작성하는 대신 믹싱을 작성하여 대신 수행 할 수 있습니다.

```scss
@mixin keyframes($name) {
  @-webkit-keyframes #{$name} {
    @content;
  }

  @-moz-keyframes #{$name} {
    @content;
  }

  @keyframes #{$name} {
    @content;
  }
}

@include keyframes(fadeIn) {
  from {opacity: 0%;}
  to {opacity: 100%;}
}
```

```css
@-webkit-keyframes fadeIn {
  from {  opacity: 0%; }
  to {  opacity: 100%; }
}

@-moz-keyframes fadeIn {
  from {  opacity: 0%;}
  to { opacity: 100%;}
}

@keyframes fadeIn {
  from { opacity: 0%;}
  to { opacity: 100%;}
}
```

---

### Context Specificity

```scss
@mixin create-context($classes...) {
  @each $class in $classes {
    .#{$class} & {
      @content;
  }
}

@mixin context--alternate-template {
  @include create-context(about, blog) {
    @content
  }
}

.header {
  height: 12em;
  background: red;

  @include context--alternate-template {
    background: green;
  }
}
```

```css
.header {
  height: 12em;
  background: red;
}

.about .header {
  background: green;
}

.blog .header {
  background: green;
}
```



---

### Getting BEM!

sass 3.3 버전이후부터 추가된 기능중 하나는 @at-root입니다.

```scss
@mixin element($name) {
  @at-root #{&}__#{$name} {
    @content;
  }
}

@mixin modifier($name) {
  @at-root #{&}--#{$name} {
    @content;
  }
}

.block {
  color: red;

  @include element(element) {
    color: green;

    @include modifier(modifier) {
      color: blue;
    }
  }
}
```

```css
/* css */
.block { color: red; }
.block__element { color: green; }
.block__element--modifier {color: blue; }
```



















