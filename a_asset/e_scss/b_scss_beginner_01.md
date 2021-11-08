# Scss

## sass | scss 차이점

**Sass와 SCSS의 주요 차이점은 파일 확장자와 구문입니다.** 
Sass에는 두 가지 구문이 있습니다. 
첫 번째는 CSS 구문의 확장 인 Sassy CSS라고도하는 SCSS입니다. 
SCSS 구문을 사용하는 파일은 `.scss`확장자를 사용합니다 . 
[Sass 3 버전](http://sass-lang.com/documentation/file.SASS_CHANGELOG.html#3-0-0) 에서 SCSS는 "새로운 주 구문"으로 소개되었습니다.

SCSS가 최초로 존재했던 이유 중 하나는 새스 (Sass)의 채택을 돕는 것이 었습니다. 
CSS가 유효한 SCSS 구문이므로 일반 CSS 프로젝트를 Sass 프로젝트로 쉽게 전환 할 수 있습니다.

즉, CSS 파일의 파일 확장명을 유효한 SCSS 파일로 변경하기 만하면됩니다. 
Sass의 새로운 사용자가 Sass의 인기를 급상승하게 만들었던 이유는 Sass에 대한 훨씬 더 친숙한 구문이었습니다.

Sass의 다른 구문은 들여 쓰기 된 구문이라고도하며 때로는 그냥 "**Sass**"라고도합니다. 
대괄호 대신 들여 쓰기를 사용하여 CSS를 작성하는보다 간결한 방법을 제공하여 선택기와 새 줄을 중첩하는 것을 나타냅니다. 
새로운 속성을 나타내는 세미콜론보다. "**Sass**"구문을 사용하는 파일은 `.sass`확장자를 사용합니다 .

[scss활용법 참조 페이지](https://sass-guidelin.es/ko/)

------

## scss 기초

#### comment(주석)

```scss
/* css를 사용하는 주석처리방법과 동일합니다. */
// 한줄 주석입니다. 
// css로 변환이 되지는 않습니다.
```

---

#### variable(변수)

어떤 관계나 범위 안에서 여러 가지 값으로 변할 수 있는 수를 의미합니다. 
여기서 말하는 수는 숫자를 뜻하는 수는 아닙니다.
scss에서는 변수를 선언하기 위해 '$'를 작성후에 변수의 이름을 생성하게 되어있습니다. 

```scss
$primary : #afc;							// 변수 $primary 생성 후 색 #afc 대입
$basicColor : #333;							// 변수 $basicColor 생성 후 색 #333 대입
$font: "myriad pro", arial, sans-serif;		// 변수 $font 생성후 3가지형태의 서체 대입
```

변수를 사용하는 가장 중요한 목적 중에 하나는 하나의 값을 매번 적용시 문제되는 것을 정리하여 
손쉽게 정리하는데에도 한몫을 합니다. 
위의 코드는 각각 3가지의 변수를 생성하고 그 값을 적용시킨 예시 입니다.

```scss
$primaryLine : 1px;
$lineColor : #350;
$line : $primary solid $lineColor;
```

변수는 때로는 다른 변수에 대입하여 사용하기도 합니다.
위의 코드처럼 `$line`에 기본 선의 두께와 색상을 변수로 할당하여 적용시킬 수도 있습니다.

```scss
$url : "../img/test/";
$logo: $url + 'logo.jpg';
```

변수는 때로는 값의 일부를 저장할 수도 있습니다.
변수 `$logo`의 내용 `$url + 'logo.jpg'`에서 `+`의 기능은 
숫자의 더하기의 개념이 아닌 **문자열의 나열** 이라는 의미를 가지고 있습니다.
이를 활용하면 어떠한 경로값을 일부 저장하여 상황에 따라 이미지를 좀더 손쉽게 적용시킬 수도 있습니다.

---

#### light/dark(밝기조정)

scss에서 색상은 여러의미로 손쉬운 사용법을 적용할 수 있습니다.
간단하게 말하자면 `#fac`색상을 기본색상으로 적용한 내용을 **30%** 더 어둡게 적용한다거나, 
**20%** 밝게 처리하는 기능이 가능합니다.

##### lighten(밝게하기)

```scss
$fontColor : #333;
h1{background-color:lighten($fontColor, 30%);}			// $fontColor의 상을 30% 더 밝게
```

```scss
$primaryColor : rgba(50, 20, 90, 0.8);
h1{color:lighten($primaryColor, 50%);}					// $primaryColor 색상을 50% 밝게
```

##### darken(어둡게하기)

```scss
$fontColor : #cdf;
h1{background-color:darken($fontColor, 30%);}			// $fontColor의 상을 30% 더 어둡게
```

```scss
$primaryColor : rgba(150, 200, 190, 0.8);
h1{color:darken($primaryColor, 50%);}					// $primaryColor 색상을 50% 어둡게
```

---

#### import(파일불러오기)

```scss
@import url("./test.scss");					// css용 기본 파일불러오기 - 현재파일에 첨부되지 않음
@import "./test.scss";						// scss용 파일불러오기 - 현재파일과 합쳐저 첨부됨
```

css문서를 작성시 외부파일을 불러오는 방법은 `@import url(...);` 입니다.
이 내용의 경우는 외부문서를 불러와서 연결하는 형태로 사용됩니다.
실무에서는 속도저하가 일어나기 때문에 많이 사용하는 편은 아닙니다.

`@import "…";` 의 경우는 내용에 `url()`이라는 구문이 빠져 있는 상태입니다. 
이는 **scss**에서만 사용할 수 있는 방법으로 사용상의 특별한 점이 있습니다. 
`@import url(...);` 와는 다르게 **변환(comfile)**처리시 하나의 문서로 변환된다는 점 입니다.
이는 문서의 용량을 최소화시켜 브라우저의 속도를 최저화 처리하는 기법중의 하나로 처리됩니다.

이때 **scss**문서의 경우에는 뒤에오는 확장자명을 붙이지 않아도 인식하고 처리됩니다.

```scss
@import "test";						// scss용 파일불러오기, 'test.scss'문서 불러오기
```

문서의 작성시 아래와 같이 작성할 수도 있습니다.

```scss

scss/
|
|– base/
|   |– _reset.scss       			// # Reset/normalize
|   |– _typography.scss  			// # 타이포그래피 규칙
|
|– layout/
|   |– _navigation.scss  			// # 네비게이션
|   |– _grid.scss        			// # 그리드 시스템
|   |– _header.scss      			// # 헤더
|   |– _footer.scss      			// # 푸터
|   |– _sidebar.scss     			// # 사이드바
|   |– _forms.scss       			//# 폼
|
|– pages/
|   |– _home.scss        			// # 홈 한정 스타일
|   |– _contact.scss     			// # 연락처 한정 스타일
|
|– utils/
|   |– _variables.scss   			// # Sass 변수
|   |– _functions.scss   			// # Sass 함수
|   |– _mixins.scss      			// # Sass 믹스인
|   |– _helpers.scss     			// # 클래스 & 플레이스홀더 헬퍼
|
|– main.scss             			// # 메인 Sass 파일
```

여러 다양한 구조의 파일을 생성할 수 있는 구조중 위 내용은 일부를 정리한 폴더 구분표입니다.
위 내용중 특이한점이 있다면, 상위구조에 존재하는 `main.scss`의 경우는 보통문서와 큰 차이가 없으나, 
동일레벨의 폴더 부에는 모두 `_`기호가 붙어 있는것으 알수 있습니다.
대표적으로 `_reset.css`입니다. 

이는 문서를 공개하지 않고 숨김처리하여 작성되는 형태로서 **comfile**처리시 
해당파일은 변환처리되지 않도록 처리하는 방법중 하나입니다.

그렇기에`main.scss`에서는 `@import`기능을 이용하여 `main.css`로 변환시 
하나의 문서로 정리되도록 처리할 수 있도록 정리가 됩니다.

```scss
@import "./base/reset";				// base폴더 내의 reset.scss or _reset.scss 포함처리
```

위 내용을 보아도 알 수 있듯이 문서 또는 폴더명을 `_`를 사용하더라도 실제로 불러올 경우 `_`를 붙이지 않아도 
문제없이 불러올 수 있습니다.

---

#### Nesting(중첩)

선택자를 중첩하여 상위 선택자를 반복 입력하지 않아도 되는 기능입니다.

- 단, 최대 4개까지만 사용하는 것이 좋다.

```scss
#wrap{width:960px; height:auto; background-color:#ccc;
 .headBox{width:100%; height:150px; background-color:#afc;
   >h1{width:100px; height:120px; float:left; background-color:#fa0;
   &:hover{background-color:#f0f;}
   }// h1
 }// .headBox
}// #wrap
```

위 코드는 실제 css코드로 작성시 아래와 같은 코드를 작성하게 됩니다.

```css
#wrap{width:960px; height:auto; background-color:#ccc;}
#wrap .headBox{width:100%; height:150px; background-color:#afc;}
#wrap .headBox > h1{width:100px; height:120px; float:left; background-color:#fa0;}
#wrap .headBox > h1:hover{background-color:#f0f;}
```

------

#### string(문자열)

```scss
$url : "../img/test/";
$logo: $url + "logo.jpg";

body{background-image:url($logo);}
```

위 코드는 이전에 보았던 변수의 설정값과 동일한 내용입니다.
위 코드상의 내용에서 값에 해당하는 내용은 모두 **문자열**에 해당하는 값입니다.

문자에 해당하는 값은 앞, 뒤에 `" "`를 사용하는 것이 좋습니다.
또한, 위 내용의 내용에 조금더 정확한 표현을 하자면 아래의 코드로 사용하는 것이 좋습니다.

```scss
h1 { background:url(#{url} + "logo.jpg"); }
```

위 코드내용에 있는 `#{}`표현은 css표현에서 사용하는 `id`의 의미가 아닌 
**내용을 있는 그대로 표현(삽입)한다는 의미**로 사용되고 있으며, 
이를 **interpolation** 이라고 합니다.

---

