# Sass | scss

## scss?

CSS가 복잡해지고 스타일 시트가 커지고 유지 보수하기가 어려워 짐에 따라 CSS 전처리 기가 많이 보급되었습니다. [CSS 재](https://www.sitepoint.com/6-current-options-css-preprocessors/) 처리기는 코드 재사용 문제를 해결하고 개발을 단순화하기 위해 더 많은 추상화를 만들기 위해 만들어졌습니다. 이러한 전 처리기는 [CSS 사용자 정의 특성을](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care) 작성하여 CSS 언어 자체를 변경하게합니다 .

[sass/scss공식 사이트](http://www.sass-lang.com/)

---

[TOC]

---

## 기본프로그램 설치 방법

기본적으로 mac에서는 ruby가 설치되어 있으므로 별도로 설치할 필요가 없습니다.
또한, 사용하려는 기반(본 과정에서는 **ruby** or **node** 두가지 방법만 다루겠습니다)에 따라  설치할 수 있습니다.
두가지 방법중 하나만 사용하면 되며 두가지 방법 모두 사용할 필요는 없습니다.

### - windows설치

- [window-ruby설치](https://rubyinstaller.org/downloads/) : 기본형 - (32/64 버전에따라 다르므로 확인 수 설치하세요.)


- [node-sass](http://nodejs.org) : node-sass 설치형 - (LTS버전으로 설치하세요.)

### - mac 설치

- [node-sass](http://nodejs.org) : node-sass 설치형 - (LTS버전으로 설치하세요.)

---

### ruby에서 설치 및 확인

ruby-installer를 설치하였다면 이제 **ruby command** 프로그램을 작동시키세요.
윈도우 사용자는 **git-bash**로 통합 처리로 사용하는 방법과, **ruby command**를 별도로 실행시키는 방법이 있으며,
mac 사용자는 **terminal**을 실행하는 방법이 있습니다.

ruby는 기본적으로 별도의 팩키지 프로그램을 별도로 가지고 있습니다.
이를 **gem** 이라고 합니다.

ruby command에 작성하여 각 내용버전을 확인해 보세요!
(window의 통합처리방법은 마지막에 첨부하겠습니다.)

```shell
$ ruby -v				// ruby 설치 확인 및 버전체크
$ gem -v				// ruby package 'gem' 설치확인 및 버전체크
```

위 내용처럼 `ruby -v`를 작성하고 **엔터**키를 누르면 버전이 나오면서 설치된 내용을 확인 할 수 있습니다.
또한, `gem -v`를 작성하고 **엔터**키를 누르면 ruby팩키지인 **gem**의 버전을 확인하여 
**gem**이 설치되어 있는것을 확인할 수 있습니다.

```shell
$ sass -v 				// 설치된 'sass' 버전확인
```

위 내용은 실제 sass가 설치되어있다면 버전을 확인할 수 있는 내용입니다.
하지만 실제로 버전을 확인할 수는 없습니다. 
**sass**를 설치하지 않았기 때문에 내용을 알 수 없습니다.
**sass**를 설치해 보도록 하겠습니다.

```shell
$ gem install sass		// 컴퓨터에 'sass' 설치(mac의 경우 sudo gem install sass를 입력)
```

위 코드는 sass를 설치하기 위한 방법입니다.
mac의 경우 `sass gem install sass`를 입력하셔야 합니다.
`sudo`의 의미는 관리자 모드로 강제 설치하겠다는 뜻으로 이해하면 됩니다.

```shell
$ sass -v 				// 설치된 'sass' 버전확인
```

이제 버전을 확인하여 설치된 것을 알 수 있습니다.

---

### node-sass 설치

sass는 루비를 사용하여 개발하지 않는한 기본형태인 별도의 방법을 권장합니다.
실제로 node기반의 **libsass**가 속도가 더 빠르기 때문에 이방법을 권장합니다.

**libsass** : Sass는 원래 Ruby로 작성되었습니다.
​                [LibSass](http://libsass.org/) 는 Sass 엔진의 C / C ++ 포트로 간단하고 빠르고 쉽게 처리되도록 만든 형태입니다.

**node-sass**는 **ruby command**와 다른 커멘드툴을 사용합니다.
**node comand** 라는 것 입니다. 물론 **git-bash**를 활용하여도 됩니다.
다만, window의 경우는 ruby command와 동일하게 **git-bash**와 연동처리해야 합니다.
(window의 통합처리방법은 마지막에 첨부하겠습니다.)

```shell
$ node -v					// node.js 버전 확인
$ npm -v					// npm 버전 확인
$ node-sass -v				// node-sass 버전 확인
```

위 코드는 ruby command와 마찬가지로 node command에서 각 버전을 확인하는 방법입니다.
ruby가 아닌 node기반이기 때문에 nodejs가 이상없이 설치되었는지 확인하기위해
`node -v`를 작성하여 node 설치유무 및 버전확인을,
 `npm -v`를 작성하여 node package의 설치유무와 버전을 확인하는 기능입니다.

**ruby**의 **gem**처럼 **node**의 **package**는 **npm**입니다.

위 코드에서 마지막 작성된 `node-sass -v`의 내용은 
찾을 수 없다는 내용(**compound not found**)을 발생하게 됩니다.
즉, 설치되지 않았다는 표기 입니다.

```shell
$ npm install -g node-sass			// node-sass 설치(mac의 경우 앞에 'sudo' 입력)
```

위 코드는 node기반의 sass인 node-sass를 설치하는 명령어 입니다.
mac의 경우는 `sudo npm install -g node-sass`를 입력하여 관리자 모드로 설치하면 됩니니다.
내용중 `-g`의 뜻은 컴퓨터 전역에 설치하겠다는 의미입니다.

```shell
$ node-sass -v			// 설치된 'sass' 버전 확인
```

이제 컴퓨터에 node기반의 sass가 설치된 것을 확인할 수 있습니다.

특이한 점이 있다면 node-sass는 `javascript`기반이라고 설명하면서 다음내용에
`c/c++`기반의 `libsass`로 설치하였다는 설명을 함께 표기하여 libsass기반의 sass라는 것을 알 수 있습니다.

---

## 사용(동작)방법

먼저 **css**폴더와 **scss**(sass를 사용하는 분은 sass)폴더를 생성하겠습니다.

```shell
$ mkdir css scss				// 'css' 폴더와 'scss' 폴더 생성
$ touch scss/test.scss			// 'scss' 폴더에 'test.scss' 파일생성
```

폴더생성후 css폴더는 아무런 내용을 작성하지 않습니다.
 scss폴더의 내용이 css로 변환(**comfile**)되어 자동으로 저장되도록 처리할 예정입니다.

```scss
/* scss test 첫번째 문서를 만들어 확인합니다. */
html,body{background-color:#fac; margin:0; padding:0;}
#wrap{margin:0; padding:1em; border-bottom:3px solid #fa0;}
h1{margin:0; padding:0; background-color:#079; color:#fff;}
/* 문서를 작성하였습니다 */
```

위 코드는 `scss`폴더내에 작성된 `test.scss`파일의 내용입니다.
위 내용이 `css`폴더에 어떻게 처리되는지 아래 내용을 작성하여 이해해 보도록 하겠습니다.

ruby기반과 node기반이 sass는 변환시 명령어가 조금씩 다릅니다.
두 내용의 차이점을 구분하여 사용해보고 이해해 보는것도 재미가 있으니 확인해 보세요.

---

### ruby기반

```shell
$ sass -E utf-8 scss/test.scss:css
```

위 코드는 sass를 실행시키기 위한 코드입니다. 
내용을 설명하면 `sass`를 실행,  하여 `scss/ test.scss`파일을 `css`폴더로 변환 시키겠다는 의미 입니다.
이때 `-E utf-8`는 해당 파일에 한글을 사용기 변환처리하지 못하는 에러를 발생하게 됩니다. 

이를 방지하기 위해 한글을 이상없이 변환처리할 수 있도록 작성해야 하는 명령어 입니다.
이때  `scss/ test.scss`파일은 수정시마다 위 코드를 매번 작성하여 실행처리 해 주어야 합니다.

```shell
$ sass -E utf-8 scss:css
```

이전 코드와 비교해 보면 `scss/test.scss:css` 명령어 내용이 `scss:css`로 바뀌어 있습니다.
이는 하나의 파일뿐아니라 `scss`폴더의 파일/폴더 모두를 `css`폴더로 변환처리하겠다는 의미입니다.

하나의 파일을 하나하나 하기보다는 여러개의 파일을 수정/변환처리하도록 만드는 방법입니다.

```shell
$ sass -E utf-8 scss:css --style compressed
```

위 코드는 `scss`파일을 `css`로 변환시 변환처리되는 형태(`-—style`)를 설정하는 방법입니다.

변환처리되는 형태는 **nested** | **expanded** |**compact** | **compressed** 의 4가지가 있습니다.
직접 하나하나 작성하여 결과물이 어떻게 처리되는지 확인해 보세요.


```shell
$ sass -E utf-8 scss:css --watch
```

내용을 수정하고 매번 작성하는경우는 사실 번거롭고 불편합니다.
그래서 실시간으로 확인하고 변경시 자동으로 저장처리되면 편리한 작업이 될 수 있습니다.
이러한 작업의 명령어가 `--watch` 입니다.
위 코드를 한번 작성하고나면 특별히 신경쓰지 않아도 결과물을 자동으로 변환 처리되어 
실시간으로 확인이 가능하게 됩니다.

```shell
$ sass -E utf-8 --watch scss:css --style compact
```

위 코드는 이전 코드의 내용을 종합적으로 작성한 내용입니다.
문서 작업시마다 매번 작성해야하는 불편함이 존재하지만 
그래도 하나라도 빼먹으면 동작하지 않기에 잘 기억하고 사용하시길 바랍니다.

---

## node-sass기반

```shell
$ node-sass -o css scss/test.scss
```

위 코드는 sass를 실행시키기 위한 코드입니다. 
내용을 설명하면 `sass`를 실행,  하여 `scss/ test.scss`파일을 `css`폴더로 변환 시키겠다는 의미 입니다.
이때  `scss/ test.scss`파일은 수정시마다 위 코드를 매번 작성하여 실행처리 해 주어야 합니다.

ruby코드와의 차이점은 
변환할 폴더의 위치를 먼저 작성하고, 원본의 위치를 나중에 작성한다는 점이 다릅니다.
또한, node-sass는 `-E utf-8`를 작성하지 않아도 한글을 문제없이 처리 가능합니다.

이를 방지하기 위해 한글을 이상없이 변환처리할 수 있도록 작성해야 하는 명령어 입니다.

```shell
$ node-sass -o css scss
```

이전 코드와 비교해 보면 `scss/test.scss:css` 명령어 내용이 `css scss`로 바뀌어 있습니다.
이는 하나의 파일뿐아니라 `scss`폴더의 파일/폴더 모두를 `css`폴더로 변환처리하겠다는 의미입니다.

하나의 파일을 하나하나 하기보다는 여러개의 파일을 수정/변환처리하도록 만드는 방법입니다.

```shell
$ node-sass -o css scss --output-style compact
```

위 코드는 `scss`파일을 `css`로 변환시 변환처리되는 형태(`--output-style`)를 설정하는 방법입니다.
ruby기반에서는 `-—style`를 사용하였으나 명령어가 조금 다른형태로 제작되었으니 유의하세요.

변환처리되는 형태는 **nested** | **expanded** |**compact** | **compressed** 의 4가지가 있습니다.
직접 하나하나 작성하여 결과물이 어떻게 처리되는지 확인해 보세요.**

```shell
$ node-sass -o css scss -w
```

내용을 수정하고 매번 작성하는경우는 사실 번거롭고 불편합니다.
그래서 **실시간으로 확인하고 변경시 자동으로 저장**처리되면 편리한 작업이 될 수 있습니다.
이러한 작업의 명령어가 `-w` 입니다. 
이는 ruby 기반의 `--watch`와 동일합니다.( 축약형태입니다. )
위 코드를 한번 작성하고나면 특별히 신경쓰지 않아도 결과물을 자동으로 변환 처리되어 
실시간으로 확인이 가능하게 됩니다.

```shell
$ node-sass -o css scss --output-style compact -w
```

위 코드는 이전 코드의 내용을 종합적으로 작성한 내용입니다.
문서 작업시마다 매번 작성해야하는 불편함이 존재하지만 
그래도 하나라도 빼먹으면 동작하지 않기에 잘 기억하고 사용하시길 바랍니다.

---

## window 통합설치하는 방법

mac의 경우는 terminal로 통합되어 큰 불편함 없이 사용할 수 있지만 
windows의 경우는 부가적인 작업을 해야하는 불편함이 있습니다.
하지만 한번만 설정하면 이후 특별한 경우가 아닌한 추가적으로 세팅할 일이 없으니 염두해 두시고 작성하시면 됩니다.

---

### ruby + git-bash 통합하기

**ruby command**와 **git-bash**를 통합하여 **git-bash**에서 일괄 사용할 수 있도록 처리하는 방법입니다.

1. ruby command가 설치되어있는 **경로**를 찾아 복사
2. **내컴퓨터**에서 마우스 **오른버튼을** 눌러 **속성**을 클릭
3. 속성에서 **고급시스템설정 클릭** 
4. 하단 **환경변수**를 클릭
5. **시스템변수**란에서 **새로만들기** 버튼을 클릭 후 (변수 등록)
   1. **환경변수명**에 **ruby**
   2. **변수값**에 **ruby 경로 위치**를 붙여넣기 후 저장
6. `path`를 선택 후 편집 클릭
7. 값항목의 마지막위치로 이동 후
   1. 마지막 표기가 `;`가 없으면 `;`를 작성후 (작성되어있다면 그뒤에)
   2. `%ruby%;`를 작성후 저장(작성된 변수 불러오는 방법)
8. 모두 확인 버튼을 클릭하여 나간 후 **git-bash** 실행(실행되어있다면 닫고 재실행)
9. `ruby -v`를 작성하여 버전 및 통합 처리되었는지 확인

---

### node + git-bash 통합하기

**node command**와 **git-bash**를 통합하여 **git-bash**에서 일괄 사용할 수 있도록 처리하는 방법입니다.

1. node command가 설치되어있는 **경로**를 찾아 복사
2. **내컴퓨터**에서 마우스 **오른버튼을** 눌러 **속성**을 클릭
3. 속성에서 **고급시스템설정 클릭** 
4. 하단 **환경변수**를 클릭
5. **시스템변수**란에서 **새로만들기** 버튼을 클릭 후 (변수 등록)
   1. **환경변수명**에 **node**
   2. **변수값**에 **node 경로 위치**를 붙여넣기 후 저장
6. `path`를 선택 후 편집 클릭
7. 값항목의 마지막위치로 이동 후
   1. 마지막 표기가 `;`가 없으면 `;`를 작성후 (작성되어있다면 그뒤에)
   2. `%node%;`를 작성후 저장(작성된 변수 불러오는 방법)
8. 모두 확인 버튼을 클릭하여 나간 후 **git-bash** 실행(실행되어있다면 닫고 재실행)
9. `node -v`를 작성하여 버전 및 통합 처리되었는지 확인

---

모든 설치가 끝났습니다.

sass를 사용할때 마다 sass실행 명령어를 입력해야하는 번거로움이 있지만, 
그래도 css코드를 좀더 빠르고 의미있게 작성할 수 있는 장점이 있으므로 자주 활용하시길 바랍니다.

차후 command (terminal) 창이 아닌 gulp 또는 webpack등을 활용한 방법도 올리도록 하겠습니다.(미정)

[이제 다음 시간에는 sass의 사용법](./scss_beginner_01.md)을 익혀 보도록 하겠습니다.