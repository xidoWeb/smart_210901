# Scss

[TOC]

---

### method

**method란?** 쉽게 설명하자면 **동작/행위(Behavior)**의 형태를 취하게 되는 기능으로,
이전에 배운 **@mixin**을 호출하여 사용시 **@include** 이후 **이름(값)**을 취하는 형태로 이해하면 쉽게 접근할 수 있습니다.

---

### operator

operator는 연산자를 의미합니다. 
우리가 알고있는 연산자는 무엇일까요? `+`, `-`,`*`,`/` 아닐까요?
연산자중 `+`를 먼저 확인해 보겠습니다.

```scss
/* scss */
div{width:10px + 10px; 
    height:(10 + 10)px; 
	font-size:(2 + 10) + px;}
```

위 코드는 상황에 따라 사이즈를 계산해야하는 경우가 있습니다. 
이때 필요한 계산을 어떻게 처리하는지를 확인하기 위해 
간단한 연산자를 작성하였습니다. 

```css
/* css */
div{width:20px; height:20 px; font-size:12px;}
```

결과를 보자면  두번째 작성된 `height`는 값과 단위가 떨어져 있는 것을 알 수 있습니다.
이는 실제로 올바른 결과를 얻을 수 없는 형태입니다. 
css에서는 숫자와 단위는 반드시 붙어있어야 하는 형태이기 때문입니다. 
실제로 값을 처리할 때 둘 모두 같은 단위값을 사용해야하며, 
하나의 단위값을 작성하기 위해서는 수치에 `( )`를 작성하고, 
마지막에 단위를 합치기 위해 `+`연산자를 사용하는 것이 이상적 입니다. 
실제로 연산자 중 `+`는 수치값은 더하여 처리하는 결과를 얻기도하지만, 
문자와는 연결하여 나열한다는 의미도 있습니다. 

이제 다른 연산자와 함께 확인해 보겠습니다.

많은 분들이 왜 수치를 직접 계산하여 입력하면 될것을 왜 연산기호로 보는지 궁금할 수 있습니다. 
위 내용을 기반으로 하나씩 설명하겠습니다.

```scss
/* scss */
$primary: #046;
$hover: #6ca;

div{color:$primary + $hover;}
div{color:$primary - $hover;}
div{color:$primary * $hover;}
div{color:$primary / $hover;}
```

수치로 연산을 처리할수도 있지만 실제로 색상을 더하는 경우도 있습니다.
이때 처리되는 값은 색상값을 연산하여 결과를 만들어 냅니다. 

```css
/* css */
div { color: #66ffff; }
div { color: black; }
div { color: cyan; }
div { color: #000001; }
```

위 결과와 같이 **연산자(operator)**는 계산을 하는데 있어 많은 기능을 처리하고 있습니다.

```scss
/* scss */
li{width:10 * 10px;}
li{width:(10 * 10) + px;}
// li{width:10px * 10px;}		// 연산할 수 없는 형태이므로 에러를 표기합니다. 
// li{width:10em * 10px;}		// 연산할 수 없는 형태이므로 에러를 표기합니다. 
```

위 코드내용중 마지막 두줄에 작성된`li{width:10px * 10px;}`와 `li{width:10em * 10px;}`의 내용은 
실제로 연산되지 않습니다.
다른 단위의 연산과 동일한 단위를 같이 사용하는 것은 잘못된 연산이므로 사용할 수 없습니다. 

이에따라 마지막 내용은 삭제처리후 결과를 확인해 보겠습니다. 

```css
/* css */
li{width:100px;}
li{width:100px;}
```

위와 같이 값을 연산하는 것이 문제없이 처리되는 것을 알 수 있습니다. 
처음 내용을 보면 `li{width:(10 * 10) + px;}`내용을 언급한 적이 있습니다.
이는 상황에 따라 단위값을 작성하는 것보다 전체를 묶어서 처리하는 것이 빠르고 정확하게 처리할 수 있으며,
여러 연산과 겹처 처리하는 과정에서도 같은 표현을 할 수 있기 때문에 `( )`를 묶어 연산처리 후 
**단위**를 이어 붙이는 것을 권장합니다. 

---

### list

`list`는 **html**의 list와 유사합니다.
여러가지 항목을 나열하여 놓은 것 이라고 이해하면 쉽습니다.

```scss
/* scss */
$list: (#333, #132, #21f);			// 변수 '$list' 의 갯수 를 입력
li{color:nth($list, 2);}			// 변수 '$list' 의 2번째 항목 입력
```

list의 사용은 실제로 여러개의 내용을 나열하여, 해당순서의 위치를 찾아 사용할때 쓰는 형태입니다.
해당 순서를 찻는 의미로 `nth()`라고 하는 **메소드**를 사용하며,
 메소드 내에서는 변수이름과 해당 변수의 순서를 작성하여 선택하게 되는 기능입니다.

```scss
/* scss */
$list: #afc, #1ef, #faa, #fcc;		// 변수 '$list'의 list형태의 내용입력
li{content:length($list);}			// 변수 '$list'의 갯수를 파악하고자 한다면 'length()'를 사용
```

위 내용을 보면 이상한 점이 있습니다.
첫번째는 `( )`를 사용하고 내부에 `,`를 사용하였는데, 두번째는 `( )`기호가 없습니다. 
실제로 `list`는 다양한 형태로 사용할 수 있습니다.

```scss
/* scss */
 $list1:(#afc, #1ef, #faa, #fcc, #fff, #123, #132);
 $list2:#afc, #1ef, #faa, #fcc, #fff, #123, #132;
 $list3:(#afc #1ef #faa #fcc #fff #123 #132);
 $list4:#afc #1ef #faa #fcc #fff #123 #132;
 $list5:(#afc),(#1ef),(#faa),(#fcc),(#fff),(#123),(#132);
 $list6:(#afc) (#1ef) (#faa) (#fcc) (#fff) (#123) (#132);
 $list7:( (#afc),(#1ef),(#faa),(#fcc),(#fff),(#123),(#132) );

.li_01{content:lenth($list1); color:nth($list1, 1);}
.li_02{content:lenth($list2); color:nth($list2, 2);}
.li_03{content:lenth($list3); color:nth($list3, 3);}
.li_04{content:lenth($list4); color:nth($list4, 4);}
.li_05{content:lenth($list5); color:nth($list5, 5);}
.li_06{content:lenth($list6); color:nth($list6, 6);}
.li_07{content:lenth($list7); color:nth($list7, 7);}
```

위 내용은 모두 같은 결과물을 만드는 `list`입니다.

```css
/* css */
.li_01 { content: 7; color: #afc; }
.li_02 { content: 7; color: #1ef; }
.li_03 { content: 7; color: #faa; }
.li_04 { content: 7; color: #fcc; }
.li_05 { content: 7; color: #fff; }
.li_06 { content: 7; color: #123; }
.li_07 { content: 7; color: #132; }
```

#### list명령어 기타

list를 확인하고 처리하는 기능에는 다양한 명령어들이 있습니다. 
사용방법을 찾아 확인해보세요.

| 이름                                   | 기술                        |
| ------------------------------------ | ------------------------- |
| `length($list)`                      | 리스트의 길이를 돌려줍니다.           |
| `nth($list, $n)`                     | 목록의 특정 항목을 반환합니다.         |
| `set-nth($list, $n, $value)`         | 목록의 n 번째 항목을 바꿉니다.        |
| `join($list1, $list2, [$separator])` | 두 목록을 하나로 결합합니다.          |
| `append($list1, $val, [$separator])` | 단일 값을 목록 끝에 추가합니다.        |
| `zip($lists…)`                       | 여러 목록을 단일 다차원 목록으로 결합합니다. |
| `index($list, $value)`               | 리스트 내의 값의 위치를 돌려줍니다.      |
| `list-separator(#list)`              | 리스트의 separator를 돌려줍니다.    |

위 내용중의 하나의 기능에 대해 간단한 설명을 드리면 아래와 같습니다.(`append`)

```scss
          ┌──The list where you want to append
          |
          |      ┌──The appended value
       ┌──┴─┐  ┌─┴─┐
append($list1, $val, [$separator])
                      └────┬───┘
                           └─Just 'comma' or 'space'

```



---

### maps

`maps`은 **css**이나 **html**의 `속성:속성값`의 기능과 유사하며, **css**의 형태와 유사합니다.
해당하는 것의 속성을 선택하면 그에따른 값을 얻어내는 형태로 볼 수 있습니다. 

```scss
/* scss */
$map: (
  color1:#afc,
  color2:#1cc
);

li{color:map-get($map,color1);}
```

위 코드를 보자면 변수 `$map`에는 두가지의 속성이 있습니다.
`color1`과 `color2`입니다. 이에 따른 값은 `#afc`와 `#1cc`로 구성되어져 있습니다.
`maps`의 기능을 사용하기 위해 `maap-get()`메소드를 사용하여 변수`$map`의 속성(key) `color1`의 값(value)을 사용하라는 의미입니다.

이러한 속성중 `color1`을 선택한 결과는 아래와 같습니다.

```css
/* css */
li{color:#afc;}
```

maps의 기본형태는 아래와 같습니다.

```scss
/* scss */
$map : (
	key1 : value;
    key2 : value;
    key3 : value;
);
```

위 형태를 기반으로 간단한 예시를 보겠습니다.

```scss
// $colors 관련 내용
$colors: (
  light: #ccc,
  dark: #000
);
// $brand-color 관련내용
$brand-colors: (
  main: red,
  alternative: blue
);

// Merge maps(여러개의 변수를 합치는데 사용하는 명령어)
$merged: map-merge($colors, $brand-colors);

// use
.element {
  content: map-get($merged, alternative);
}
```



---

### data type

언어로 처리되는 것은 문자, 숫자 등의 다양한 형태가 있습니다.
이를 **Data type**이라고 말합니다.

물론 sass/scss에도 존재합니다.
이전에 배운 형태와 함께 scss에서 알아야하는 기본 **data type**에 대해 간단히 정리하자면 아래와 같습니다.

- **Number**: 숫자형태
- **String** : 문자형태
- **Color** : 색상
- **List** : list형태(목록을 가진형태)
- **Maps** : "key:value"를 가진 형태
- **Boolean** : true(참) | false(거짓) 두가지만 가질 수 있는 형태
- **Null** : 값(value)이 없는 비어있는 형태

**data type**을 확인하기 위해서는 `type-of()`기능을 사용하면 
쉽게 확인할 수 있습니다.

```scss
/* scss에서의 Data type 확인하기 */
$num : 10;
$str: "scss test!";
$color: #afc;
$list: 1,2,3;
$maps:(key1:10, key2:200, key3:1);
$boolean:true;
$null:null;

.li_01{ content:type-of($num); }  // content는 의미 없음
.li_02{ content:type-of($str); }
.li_03{ content:type-of($color); }
.li_04{ content:type-of($list); }
.li_05{ content:type-of($maps); }
.li_06{ content:type-of($boolean); }
.li_07{ content:type-of($null); }
```

위 내용은 각 변수의 `data type`을 확인하기 위한 내용입니다.
내용에 작성된 `content`은 큰 의미가 없습니다. (다른 이름을 사용하여도 무방합니다.)

```css
/* css 결과 값 확인하여 data type 파악하기 */
.li_01{ content:number; }
.li_02{ content:string; }
.li_03{ content:color; }
.li_04{ content:list; }
.li_05{ content:map; }
.li_06{ content:bool; }
.li_07{ content:null; }
```



---

다음시간 **scss** 심화

#### @for

#### @if

#### @while

#### @each

#### @function

------



