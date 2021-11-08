# Scss

[TOC]

------

## scss 활용

### @extend , placeholder(%)

미리 작성된 내용을 불러오기 
`class`로 미리 만들어진 기능을 불러와서 새로작성되는 내용에 속성을 추가해야하는경우, 기존의 내용의 일부가 겹치는 경우가 있습니다.
이때, 내용이 겹치는 부분들을 새로작성하는 것이 아닌 미리 작성된 내용을 불러와서 사용해야 하는 경우에 쓰는 기능이 `@extend`입니다.

```scss
/* scss */
.hidden{width:0; height:0; overflow:hidden;}	// 미리 작성된 기능

h2{@extend .hidden;}
h3{@extend .hidden; position:absolute; z-index:-100;}
```

```css
/* css */
.hidden, h2, h3{width:0; height:0; overflow:hidden;}
h3{position:absolute; z-index:-100;}
```

위 코드에서 보면 `@extend`의 특징이 있습니다, 동일한 코드내용이 별도로 작성되는 것이아닌, `,`기능을 통한 여러내용을 하나로 모아사용한다는 것 입니다.
만약 여기에서 `.hidden{}`을 사용하지 않는다면 어떻게 해야할까요?

이러한 부분을 처리하기 위해 `.`대신 `%`를 사용활 수 있습니다.
이를 **가상클래스** 또는 **유령화(placeholder)** 처리라고 합니다. 

```scss
/* scss */
%hidden{display:block; position:absolute; 
        width:0; height:0; overflow:hidden;}	// 미리 작성된 기능

h4{@extend %hidden;}
#wrap .hidden_box{@extend %hidden;}
```

```css
/* css */
h4, #wrap .hidden_box{display:block; position:absolute; 
        width:0; height:0; overflow:hidden;}
```

임의로 만들어놓은 `.hidden{}`의 형태는 처리된 모양을 가집니다.
위 내용에서 중복되는 코드는 하나로 모아진다는 장점이 있지만, 상황에 따라서는 분리시켜야 하는 경우도 존재합니다. 
그렇기에 사용시 신중하게 생각하시고 처리하는 것을 권하며, 실제로 는 오히려 `@extend`보다 
`@mixin`을 사용하는 경우가 더 많습니다.

---

### @mixin / @include

`@mixin`의 형태는 별도의 이름을 설정하여 사용하며, 
이름뒤에 `( )`를 붙인 후 `{ }`안에 내용을 작성하도록 되어있습니다. 

---

#### 기초개념

```scss
/* scss @mixin 생성 */
@mixin firstMix(){
  display:block; position:absolute; width:0; height:0; overflow:hidden;
}
```

위 코드는 `firstMix`라는 이름을 가진 `@mixin`을 생성시킨 형태입니다. 
실제로 위 형태를 사용하기 위해서는 생성된 이름을 호출하면되는데, 이때 호출하는 형태는
`@include` 입니다.

```scss
/* scss @mixin 호출 */
h2 > span{@include firstMix();}
```

위 코드는 `h2 > span{ }`에 `firstMix`의 이름을 가진 `@mixin`을 호출한 형태입니다.
이때 `( )`안에는 내용이 없으므로 `( )`를 표기하지 않아도 동작되긴 하나, 기본 형태로는 붙여주는 것이 좋습니다. 

```css
/* css 결과 */
h2 > span {
  display:block; position:absolute; width:0; height:0; overflow:hidden;}
```

`@mixin`과 `@include`를 간단하게 정리하자면 

**@mixin : save**의 개념으로 사용하며, 하나가아닌 여러 기능을 모아서 사용할때 사용하며,
**@include : open**의 개념으로 사용하며, @mixin으로 만들어진 형태를 불러올때 사용합니다.

---

#### 인자삽입1(인자, 인수, 매개변수, 파라미터,parameter)

**인자란?**,  어떠한 값을 처리하기 위한 **원인이 되는 요소**를 의미하며, 실제로 `@mixin`을 사용할때에는 
추가적인 어떠한 값을 입력하여 일부를 수정하고 처리하는 기능도 담고 있습니다. 

그렇기에 사실 `@mixin`의 형태는 `@extend`의 기능과는 다소 다른 부분이 많습니다. 
이름의 형태를 보아서도 알수 있듯이 여러기능을 섞어서 만드는 형태로 볼 수 있습니다. 

```scss
/* scss */
@mixin size($width, $height){
	width:$width; height:$height; 
}

h1{@include size(100px, 200px);}
p{@include size(100px, 500px);}
.content{@include size(auto, 100px;);}
```

```css
/* css */
h1{width:100px; height:200px;}
p{width:100px; height:500px;}
.content{width:auto; height:100px;}
```

위 코드는 이름이 `size`인 `@mixin`을 생성하고, 내용에 `width`와 `height`를 생성하여 그 값을 설정할 수 있도록 처리하는 형태입니다. 
이때, `size`옆에 있는 `( )`내부에 변수를 설정하고, 내부에 해당하는 변수이름을 할당하면,
`@include size()`사용시 `( )`에 값을 입력하면 실제로 해당하는 변수의 위치에 값이 들어갈 수 있도록 처리됩니다, 

여기서 **인자**는 `( )`안에 작성하는 변수을 의미합니다. 

---

#### 인자 값 변경

`@mixin`의 경우는 다양한 형태를 취할 수 있습니다.
 그중의 첫번째는 변수값을 미리 설정하는 기능입니다.
값을 사용하지 않는 경우 미리 할당하면, 특별하게 작성하지 않아도 값이 할당되게 만드는 기능입니다. 
때로는 값을 일부 선택하여 바꿀 수도 있습니다.

```scss
/* scss */
@mixin bg($u, $p:center){
  width:100%; height:100%;
  display:block;
  background-image:url($u);
  backgrouhnd-repeat:no-repeat;
  background-position:$p;
}
h1{width:100px; height:50px;}
h1>a{@include bg("../img/import.png", top left);}
.link_box{width:auto; height:50px;}
.link_box>a{@include bg($u:"../img/link.png");}
```

```css
/* css */
h1{width:100px; height:50px;}
h1>a{width:100%; height:100%; display:block;
  background-image:url("../img/import.png");  
  backgrouhnd-repeat:no-repeat;  background-position:top left;}
.link_box{width:auto; height:50px;}
.link_box>a{width:100%; height:100%; display:block;
  background-image:url("../img/link.png");  
  backgrouhnd-repeat:no-repeat;  background-position:center;}
```

---

#### 외부값 삽입

`@mixin` 설정의 두번째는 변수값을 외부에서 별도로 첨부할 수 있는 기능입니다.
이는 반복처리되는 기능을 좀더 쉽고 빠르게 변경처리할 수있다는 장점이 있습니다. 

```scss
/* scss */
$img : "../img/header/";
@mixin bg($u:$img, $i){
  width:100%; height:100%;
  display:block;
  background-image:url($u + $i);
  backgrouhnd-repeat:no-repeat;
  background-position:center;
}

h1{width:100px; height:50px;}
h1>a{@include bg($i:"image.png");}
```

```css
/* css */
h1{width:100px; height:50px;}
h1>a{  width:100%; height:100%;  display:block;
  background-image:url("../img/header/image.png");
  backgrouhnd-repeat:no-repeat;  background-position:center;}
```

---

#### 여러 요소 삽입

`@mixin`  설정의 세번째는 내부에 여러 속성 뿐아니라, 선택자까지 삽입할 수 있다는 것입니다. 

```scss
/* scss */
@mixin lin(){
  a{width:100%; height:100%; display:block; background-color:#fac;}
  a:hover{background-color:#0ac; color:#fff;}
  a>span{width:0; height:0; display:block; 
         position:absolute; overflow:hidden; z-index:-100;}
}

div{width:100px; height:150px; @include lin();}
```

```css
/* css */
div{width:100px; height:150px;}
div  a{width:100%; height:100%; display:block; background-color:#fac;}
div  a:hover{background-color:#0ac; color:#fff;}
div  a>span{width:0; height:0; display:block; 
         position:absolute; overflow:hidden; z-index:-100;}
```

---

#### @mixin + #{}

```scss
/* scss */
@mixin prefix($attr, $value){
  -webkit-#{$attr}:$value;
  -moz-#{$attr}:$value;
  -ms-#{$attr}:$value;
  -o-#{$attr}:$value;
  #{$attr}:$value;
}

li{@include prefix(animation, ani 3s ease-in);}
div{@include prefix(transition:all 2s);}
```

```css
li{
  -webkit-animation:ani 3s ease-in;
  -moz-animation:ani 3s ease-in;
  -ms-animation:ani 3s ease-in;
  -o-animation:ani 3s ease-in;
  animation:ani 3s ease-in;
}
div{
  -webkit-transition:all 2s;
  -moz-transition:all 2s;
  -ms-transition:all 2s;
  -o-transition:all 2s;
  transition:all 2s;
}
```



---

위 기능 외에도 `@mixin`은 여러가지 기능을 할 수 있으며, 부분의 내용을 따로 작성하였으나, 모두 하나로 설정하여 처리할 수도 있습니다. 

