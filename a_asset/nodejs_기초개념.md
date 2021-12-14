과거의 순위 : html, css, javascript

현재의순위 : javascript, html, css

nodejs => express, TDD, react, es6(esNext)-babel,

---

package.json

```shell
$ npm init -y
$ npm install --global nodemon
```

```json
"script": {
    "start" : console.log('h1'),
    "test" : console.log('test'),
    "build" : console.log('build 처리')
}

// $ npm start
// $ npm test

 // $ npm run build
```

```md
<!-- .gitignore -->
**/node_modules/
node_modules/
```

---

**nodejs** : javascript를 웹내부가아닌 외부에서 사용가능하도록 처리하는 기술

**npm** :

- nodejs기술을 이용하여 해당하는 기능을 압축하여 하나의 형태로 만들어놓은 앱 스토어
  
- 해당 기능을 수행하도록 하는 명령어
  
- 또 다른 수행 명령어로는 `npx`
  

**package.json** : nodejs 기반의 기술을 사용하기 위해, 여러기술을 모아서 사용할 수 있는 설정이 필요한데 그 설정파일

package.json내부 명령어 :

- **script** : nodejs에 존재하는 것들 중 설치(세팅)되어 있는 기능을 수행하라는 명령어/ 모음
  
- **devDependencies** : npm 에서 설치한 기능으로 개발자용으로 구분되어진 목록
  
- **dependencies** : npm 에서 설치한 기능으로 사용자으로 구분되어진 목록
  
- npm install 로 인해 생긴 **node_modules** : 모듈의 모음으로 설치된 node기능들의 내용이 담긴 것으로 향후 package.json만 존재할 경우 `npm install` 명령어로 설치됨

**babel.config.js** : javascript를 사용할 수 있도록 변환하는 기능을 세팅

---

