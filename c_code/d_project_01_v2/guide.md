# 웹페이지 제작

[toc]



## node를 이용하여 `sass`설치 및 실행

nodejs: 개발하는 동안에 서포트가되어 도와주는 기능(런타임) 을 가진 환경

nodejs내부에는 기능을가진 앱스토어(실행프로그램모음)가 있다. : npm

---

1. nodejs 설치 및 확인 
2. ` npm install --global sass`  : sass설치 (맥의 경우 관리자권한을 위해 앞에 `sudo `붙일것 - 노트북비번필요)
3. ` sass --version `  : 설치유무 확인
4. `sass --watch scss:css` : 동작

---

## 웹페이지 구성시 준비사항

### 기본 자료 

   1. 변수 선언 : 색상/font 
   2. @mixin 세팅 : font작업 세팅, size, 이미지설정 ....
   3. reset, common : 회사의 기본 가이드작업을 위한 기반 

2. 작성 : 코드를 의미있게 작성하는 습관

3. html에서 ID 속성은 기본의미가, 유일, label에서 input과 연동, anker에서 연동이므로 그 의미에 맞는 사용

4. css에서 선택자 사용시 3단계까지만 유효(nesting기법에서도 3단계까지만 작성, @at-root)

   ``` scss
   #wrap {
       margin:auto;
       > div {width:100%; }
       @at-root .box { height:300px;}
   }   
   // ---------------------------------------------
   #wrap {margin:auto;}
   #wrap > div {width:100%;}
   .box {height;300px;}
   ```
   
---

### 이름 부여시

#### html 이름 설정

   1. body내부 첫 영역을 잡는 요소에 `#wrap`
   
   2. `id`설정 : camelCase `#wrapBox`
   
   3. `class`설정 : snake_case(under_score) `.box_area`
   
   4. `name` 설정 : id이름과 동일하지만 구분형식(double\_\_Under\_\_Score)으로 `_`를 두개 연속삽입
   
   5. naming 방식 : BEM(block_element_modifier)- 형태-의미-수식어 
       - **element level 구성**: `Box` > `_area` > `_inner` > `_part` > `_content` > `_detail`
       - **상태 처리(class 첨부)**: js에서 DOM 선택자 사용시 , 상태메세지 
         - 마우스 올린상태 : `over`
         - 선택(체크)된 상태 : `select`
         - focus처리 상태 : `focus`
         - 자료가 나타나있는 상태 :  `on`
         - Error 표시 : `err`
         - Success 표시 : `suc`
         - Warning 표시 : `warn`
         - 기타 상태 체크(대표예시) : `act`,`run`, `pause`

---

#### Directory 구성(개발용) :

```
📚 public
 |
 |- (📂scss) - (📂common)  - _mixin.scss , _variable.scss , reset.scss , common.scss
              - (📂src)    -  main.scss  
              - (📂page)   - (📂base) - _headBox.scss, _footBox.scss
           			       - (📂main) - _view.scss, _view_smart.scss, _view_tablet.scss
                           - (📂about)
                           - (📂product)

|- (📂font) - 사용자폰트, fontawesome사용
|- (📂html)
|- (📂multi) - (📂img)
             - (📂video)
             - (📂audio)
|-(📂js) - (📂common) - normalize
          - (📂src)
```



---

#### File naming 기법  :

1. 

​       











