# smart_210901
# 웹 구성을 위한 세팅 

---

[toc]

---

## 

## GIT



### 깃 commit 처리시 작성하는 내용

``` shell
[글머리] 작성된 data요약 (file명) :글머리 표현아이콘: 설명 (이슈파트 위치)
```

#### 앞 글머리로 붙이는 형태

- **feat** : 새로운 기능에 대한 커밋 
- **fix** : 버그 수정에 대한 커밋 
- **build** : 빌드 관련 파일 수정에 대한 커밋 
- **petty** : 그 외 자잘한 수정에 대한 커밋 

- **ci** : CI관련 설정 수정에 대한 커밋 
- **docs** : 문서 수정에 대한 커밋 
- **style** : 코드 스타일 혹은 포맷 등에 관한 커밋 
- **refactoring**:  코드 리팩토링에 대한 커밋 
- **test** : 테스트 코드 수정에 대한 커밋

---

#### 중간 아이콘처리

- 새로운문서 또는 세팅 `:new: `:new: 
- 단계별 체크 `:ab:` :ab: 
- 긴급 수정(오탈자 등) `:ambulance:` :ambulance: 
- 웹 배포 및 웹 확인 테스트 `:airplane: ` :airplane:
- 이슈 발생으로 이전단계로 수정 `:arrow_backward: ` :arrow_backward: 
- doc 메모 `  :notebook:` :notebook:

---

### 깃 명령어

- `git clone '주소'` : repository에 자료를 받아서 사용
- `git status` : 현재 작성중인 디랙토리 기준 내용 상태파악
- `git add [첨부파일]` : git으로 보낼 자료 선택
- `git commit -m '설명'` : 보낼 자료에대한 설명
- `git push` : 자료 전송
- `git push --origin-upstream` : 최초의 상태에서 자료를 본내는 경우 (브랜치를 생성하더라도 동일)
- `git pull` : 자료 추가로 받아오기
- `git branch -a` : branch 목록 받아오기(현재 디렉토리 뿐아니라, 서버의 자료까지 받아오는 것)
- `git checkout [브랜치명]` : 해당 브랜치로 이동
- `git checkout -b [브랜치명]` :현재 디렉토리에는 없으나 서버에 존재하는 자료를 받아오게 처리
- `git merge [브랜치명]` : 해당 branch를 병합 처리
- `git branch -d [브랜치명]` : 선택된 브랜치는 삭제 (local)
- `git push origin --delete [브랜치명]` : git 사이트에 존재하는 branch를 삭제
- `git reset HEAD~n` : git 현재내용을 이전 `n`단계만큼 이전상태로 이동 처리
- `git revert HEAD~n` : git reset과 유사하지만, `n`단계만큼 이전상태의 내용을 현재로 복사하여 가져오는 기능

---

## 프로젝트 구성

---

#### HTML 이름 구성

      1. body내부 첫 영역을 잡는 요소에 `#wrap`

      2. `id`설정 : `camelCase` `#wrapBox`

      3. `class`설정 : `snake_case(under_score)` `.box_area`

      4. `name` 설정 : id이름과 동일하지만 구분형식(double\_\_Under\_\_Score)으로 `_`를 두개 연속삽입

      5. naming 방식 : BEM(block_element_modifier)- 형태-의미-수식어 
         - **element level 구성**: `Box` > `_area` > `_inner` > `_part` > `_content` > `_detail`
         - **상태 처리(class 첨부)**: `JS`에서 DOM 선택자 사용시 , 상태메세지 
           - 마우스 올린상태 : `over`
           - 선택(체크)된 상태 : `select`
           - focus처리 상태 : `focus`
           - 자료가 나타나있는 상태 :  `on`
           - Error 표시 : `err`
           - Success 표시 : `suc`
           - Warning 표시 : `warn`
           - 기타 상태 체크(대표예시) : `act`,`run`, `pause`

---

#### JS에서 변수 이름 설정

1. element 선택자 : 변수명 앞에 `el`첨부 -> `elDiv`
2. element 생성  : 변수명 앞에 `mk`첨부 -> `mkUl`
3. function 생성 : 변수명 앞에 `fn`을 첨부 -> `fnFunction`
4. 지역변수 생성/선택 : 변수명 앞에 `_`를 첨부 -> `_div` 
5. 생성자 함수 :  변수명을 `PascalCase`방식 -> `FnData`
6. 정해진 조건의 일부를 판단 : 변수명앞에 `ck`첨부 -> `ckIndex`
7. string형태의 변수 : 변수명을 대문자로 -> `OPTION_STRING`

8. 이외 단순한 형태(반복문용 변수 등) : 변수명을 1~3글자이내의 형태 -> `i, j, l, n, ...`

---

#### Directory 구성(개발용) :

> 📂 아이콘은 폴더를 의미하며, 첨부된 형태는 폴더명이며 고정이름
>
> 💼 아이콘은 폴더를 의미하며, 사용이름 또는 한글이름의 폴더는 임의로 변경가능 
>
> 📙 아이콘은 파일을 의미하며, 일부 아이콘 없이 이름으로 처리한 형태도 존재
>
> 📜 아이콘은 파일을 의미하며, 사용자가 임의로 변경가능
>
> 파일명 앞에 '_' 붙은 형태는 암묵적파일의 의미로 해석

---

- 최초의 인식하는 파일은 : index.html



package.json : nodejs를 이용하여 웹을 구성하기 위해 처리하는 설정용 파일

nodejs란? js를 기반으로 웹페이지를 구현할 수 있도록 다양한 기술을 처리가능하도록 만들어주는 직/간접 수단 기능

---











