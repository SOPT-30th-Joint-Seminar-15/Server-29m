# Server-29m
29cm 말고 우리는 29m짜리 서버개발자들&lt;3 뜰람뜰


# 🗃️ Package 및 config

## package.json

```json
{
  "name": "server-29m",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist",
    "lint": "yarn run lint-prettier && yarn run lint-eslint",
    "lint-eslint": "eslint --ignore-path .gitignore src/**/*ts --fix",
    "lint-prettier": "prettier --write \"src/**/*.(ts|tsx)\""
  },
  "lint-staged": {
    "src/**/*.(ts|tsx)": [
      "yarn lint"
    ]
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.13",
    "@types/jsonwebtoken": "^8.5.8",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^17.0.25",
    "eslint": "^8.16.0",
    "nodemon": "^2.0.15",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3"
  },
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^5.9.0",
    "@typescript-eslint/parser": "^5.9.0",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "express": "^4.17.3",
    "express-validator": "^6.14.0",
    "jsonwebtoken": "^8.5.1",
    "lint-staged": "^12.1.5",
    "mongoose": "^6.3.1",
    "prettier": "^2.5.1"
  }
}
```

## nodemon.json

```json
{
    "watch": [
        "src",
        ".env"
    ],
    "ext": "js,ts,json",
    "ignore": [
        "src/**/*.spec.ts"
    ],
    "exec": "ts-node  --transpile-only ./src/index.ts"
}
```

## tsconfig.json

[TS config의 컴파일러 옵션 일부를 소개합니다.](https://medium.com/gomidev/ts-config%EC%9D%98-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC-%EC%98%B5%EC%85%98-%EC%9D%BC%EB%B6%80%EB%A5%BC-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-eeb19016efe2)

```json
{
  "compilerOptions": {
    "target": "es6", // 어떤 버전으로 컴파일
    "allowSyntheticDefaultImports": true, // default export가 없는 모듈에서 default imports를 허용
    "experimentalDecorators": true, // decorator 실험적 허용
    "emitDecoratorMetadata": true, // 데코레이터가 있는 선언에 대해 특정 타입의 메타 데이터를 내보내는 실험적인 지원
    "skipLibCheck": true, // 정의 파일 타입 체크 여부
    "moduleResolution": "node", // commonJS -> node 에서 동작
    "module": "commonjs", // import 문법
    "strict": true, // 타입 검사 엄격하게 
    "pretty": true, // error 메시지 예쁘게
    "sourceMap": true, // 소스맵 파일 생성 -> .ts가 .js 파일로 트랜스 시 .js.map 생성
    "outDir": "./dist", // 트랜스 파일 (.js) 저장 경로
    "allowJs": true, // js 파일 ts에서 import 허용
    "noImplicitAny": true, // any 쓰면 손절
    "noFallthroughCasesInSwitch": true, // switch문에서 break되지 않고 통과되는 것 방지
    "esModuleInterop": true, // ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져올 수 있게 허용
    "forceConsistentCasingInFileNames": true, //  파일 참조시 대소문자 구분 엄격
    "noUnusedLocals": true,                     // 안쓰는 로컬 변수 체크
    "noUnusedParameters": true,                 // 함수 파라미터 중 안쓰는 것 체크
    "typeRoots": [
      "./src/types/express.d.ts", // 타입(*.d.ts)파일을 가져올 디렉토리 설정
      "./node_modules/@types" // 설정 안할시 기본적으로 ./node_modules/@types
    ]
  },
  "include": [
    "./src/**/*" // build 시 포함
  ],
  "exclude": [
    "node_modules", // build 시 제외
    "tests"
  ]
}
```

# 👕 Lint 설정

## .prettierrc

```json
{
    "semi": true,
    "tabWidth": 2,
    "printWidth": 120,
    "trailingComma": "all",
    "bracketSameLine": true,
    "endOfLine": "auto"
}
```

## .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["simple-import-sort", "prettier", "import", "@typescript-eslint/eslint-plugin"],
  "rules": {
    // 0: off 1: warn 2: error 로 표기 가능
    "indent": ["error", 2], // 들여쓰기 몇 칸?
    "quotes": ["error", "double"], // 쌍따옴표가 아닌 홑따옴표를 사용
    "semi": ["error", "always"], // semi colon을 강제함
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "comma-dangle": ["error", "always-multiline"], // 두 줄 이상의 경우에는 후행 쉼표를 항상 사용, 한 개 일 때는 사용하지 않음
    "object-curly-spacing": ["error", "always"], // 객체 괄호 앞 뒤 공백 추가
    "space-in-parens": ["error", "never"], // 일반 괄호 앞 뒤 공백 추가
    "computed-property-spacing": ["error", "never"], // 대괄호 앞 뒤 공백 추가하지 않음
    "comma-spacing": ["error", { "before": false, "after": true }], // 반점 앞 뒤 공백: 앞에는 없고, 뒤에는 있게
    "eol-last": ["error", "always"], // line의 가장 마지막 줄에는 개행 넣기
    "no-tabs": ["error", { "allowIndentationTabs": true }], // \t의 사용을 금지하고 tab키의 사용은 허용
    "object-shorthand": "error", // 객체의 간편 사용(es6)을 강제할 것인가? -> https://eslint.org/docs/rules/object-shorthand
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
    ],
    // prev : 이전에 무엇이 왔을때 blankLine을 넣을것인가? // const,let,var, case
    // next : 다음에 무엇이 왔을때 blankLine을 넣을 것인가?  // return
    // 팀원들과 구체적으로 상의하기 - 근데 이거 너무 신경쓰지 않고 recommend 사용해도 될 듯!

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // // eslint-plugin-import의 static analysis
    // "import/named": 2,                              // export/import 이름을 정확하게 사용하고 있는지를 확인
    // "import/namespace": 2,                          // 이미 존재하는 이름만 가져오도록 함
    // "import/export": 2,                             // 이름이나 기본값의 반복적인 내보내기와 같은 내보내기와 관련된 것을 체크
    // "import/no-absolute-path": 2,                   // 절대경로로 파일 불러오기 금지
    // "import/no-relative-packages": 2,               // 상대경로로 패키지 불러오기 금지
    
    // eslint-plugin-import의 helpful warnings
    // "import/default": 2,                            // default로 export된 아이들을 찾아서 가져옴
    "import/no-named-as-default": 0, // default로 정의되지 않은 아이들을 불러왔음을 알려줌
    // "import/no-named-as-default-member": 2,         // default export의 속성으로 exported name의 사용을 보고
    // // eslint-plugin-import의 style guide
    // "import/no-duplicates": 2                       // 같은 모듈에서 다른 이름으로 불러오는 것을 막기 위함 (from mod.js와 from mod)
    "@typescript-eslint/no-var-requires": "warn"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts"]
      }
    }
  }
}
```

<aside>
⚠️ anyScript 진짜 극혐하지만, 모르겠으면 일단 `**any**`를 갈깁니다.
혹은 js를 사용할 수 있도록 허용했습니다.

대신, 타입에서 `**any**`조차 지정하지 않으면 에러가 납니다.
일단 코드를 갈기고 나중에 `**any**`를 검색해서 찾아 고치는 방식으로 진행합니다.

**일단 만든다 → 작은 성공을 맛본다 → 더 좋은 코드로 바꾼다.**

</aside>

- **3 NO를 실천해봅시다!**
    
    **No any, No as, No <casting>**
    
    **[광고] 타입 지정에 어려움을 겪는 다면 제네릭을 사용해보세요!**
    
    [에릭말고 제네릭](https://velog.io/@soryeongk/genericsTS)
    

# 🗨️ 컨벤션

<aside>
💡 **동료들과 말투를 통일하기 위해 컨벤션을 지정합니다.**
오합지졸의 코드가 아닌, **한 사람이 짠 것같은 코드**를 작성하는 것이 추후 유지보수나 협업에서 도움이 됩니다. 내가 코드를 생각하면서 짤 수 있도록 해주는 룰이라고 생각해도 좋습니다!

</aside>

- **FE 기준이긴 하지만 참고하면 좋은 컨벤션!** 이번 합세에서는 어려울 것 같지만 앱잼때라도 적용해보길! 개인적으로 매우 좋아함!
    
    [코딩컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
    

[✨ 커밋 규칙](https://www.notion.so/3e7a8dfc5af44b849f788db762e22a0f)

init: 무슨무슨 패키지 추가

feat: 유저 컨트롤러 만들었당

style: 변수명 변경, 코드 순서 변경

## 각종 이름짓기

<aside>
📝 **좋은 이름이 좋은 코드를 만든다!** 코드가 글을 읽는 듯한 느낌일 수 있길!
자식 이름을 짓는 느낌으로 변수 하나하나에 정성을 그득하게.. **<3**

</aside>

|  | 명명법 | 기타 설명 |
| --- | --- | --- |
| DB이름 | 카멜케이스 | 8자 이내 |
| 테이블 | 소문자 | 3단어, 26자 이내 |
| 컬럼 | snake 표기법 | 접미사로 컬럼 성질을 나타냄 |
| 파일명 | 카멜케이스 |  |
| 함수명 | 카멜케이스 | 동사로 시작 |
| 변수명 | 카멜케이스 | 상수의 경우 대문자+_ |
| 타입 | 파스칼케이스 | interface 이름에 I를 붙이지 않기 |

## 우리들의 변수명 사전

| 한국어 | 영어 | 축약어 |
| --- | --- | --- |
| 구매, 주문 | order |  |
| 유저 | user |  |
| ~인지 아닌지 | is~ |  |
| 수단 | method |  |
| 문의 | inquiry |  |
| 내용 | content |  |
| 배열을 담은 경우 | ~s (복수형) |  |
| 지불 | pay |  |

## 브랜치 전략

<aside>
⚠️ 복잡한 깃브랜치 전략은 협업을 망칠 수도 있으니 가장 필요한 브랜치만 운영해요!

</aside>

main: 배포를 위한 브랜치 (`최최최최종본`)

develop: 기능 개발이 완료된 코드들이 모이는 곳(`검증된 곳이자 검증할 곳`)

feature: 기능 개발을 위한 브랜치 (`feature/자기이름/기능명`)

# 📋 명세서

## 몽고로몽몽고 스키마s

[User 스키마](https://www.notion.so/4c03cf3209684bf2b15e02e314cceb3a)

[Order 스키마](https://www.notion.so/618a3f006d0d4b909321c8dfcbd828b8)

[Inquiry 스키마](https://www.notion.so/c7cc76fc5b504c1590897af452dd5ae9)

## API 명세서

<aside>
⚠️ **<API 설계>**

1. 서버 파트원 한 명당 **최소 2개의 endpoint**
2. 최소 한 개의 **GET**과 **POST**
3. 각각의 endpoint에 예상되는 **request** / **response** 형식
</aside>

[Base URL: blah](https://www.notion.so/406d372e32d046f29aa4765ea104daba)

[29cm_API_COLLECTION](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8dda7636-07d0-4682-91a7-f895d9433b40/29cm_API_COLLECTION.txt)

# 😾 git 두려워하지말긔!

<aside>
⚠️ 모르면 무조건 무적권 물어보세요! ㅁㅁㅁㅁ

</aside>

[[GitHub] GitHub로 협업하는 방법[1] - Feature Branch Workflow - Heee's Development Blog](https://gmlwjd9405.github.io/2017/10/27/how-to-collaborate-on-GitHub-1.html)

- 깃 톺아보기 by 령
    
    <aside>
    🌸 - 나의 현재 상태가 어떤지 자주 확인할 것
    - 컴퓨터가 하는 말에 귀기울이기(특히 빨강이들)
    - 나의 로컬 컴퓨터에서 작업한 것을 origin main으로 바로 push하지말기!! **그냥 하지마..**
    
    </aside>
    
    <aside>
    ➡️ **맨 처음 딱 한 번 필요한 명령어 모음**
    
    1. 클론으로 저장소 코드 받아오기
    **git clone https://github.com/blah**
    
    2. 원격 저장소 상태로 로컬 저장소 최신화
    **git fetch**
    
    3. 브랜치 생성 및 이동
    **git checkout -b "브랜치 이름"**
    
    4. 로컬 코드를 develop 브랜치 코드로 최신화하기
    **git pull origin develop**
    
    5. 프로젝트 패키지 설치
    **yarn**
    
    </aside>
    
    <aside>
    ➡️ **작업하면서 계속 필요한 명령어 모음**
    
    1. 작업하면서 변경된 파일 내용 확인하는 명령어
    **git status**
    
    2. 변경된 파일 전체 선택
    **git add .**
    2-1. 파일을 따로 설정하고 싶다면?
    **git add {filename}**
    
    3. 선택한 파일 커밋 
    **git commit -m "commit 규칙 참고"**
    혹시 걱정된다면 **yarn lint** 를 입력하고 커밋하시면 더욱 안전!
    
    4. 본인의 브랜치로 커밋 올리기
    **git push origin "브랜치 이름"**
    브랜치 이름은 feat/자기 이름/기능명으로 작성해주세요!
    
    5. repository 접속한 후 본인의 브랜치에서 develop 브랜치로 pull request 생성하기
    **github pull request 생성**
    
    6. 팀원 코드 확인 후 develop 브랜치로 코드 합치기
    **팀원 확인 후 merge**
    
    7. 로컬 코드를 develop 브랜치 코드로 최신화하기
    **git pull origin develop**
    
    8. 다시 작업 시작한 후 마치면 다시 1로 돌아가기
    
    </aside>
    
    - 간단? 정리! by. 령
        1. `$ git branch`  : 현재 내가 어느 브랜치에 있는지 확인할 수 있다. 브랜치 목록을 보여주고 현재 있는 브랜치는 초록색으로(또는 *로 표기 또는 둘 다) 되어있다.
        2. `$ git branch {branch name}` : {branch name}으로 branch를 새로 생성한다. 브랜치명은 대부분 기능별로 이름을 따로 지정하는데, 팀마다 프로젝트마다 상이할 수 있다. 이번 웹파트 과제에서는 으팟장 말대로 assignmentN-뭐시기 로 정하면 된다.
        3. `$ git branch` : branch가 잘 만들어졌는지 확인하기! 잘 만들어졌으면 목록에 추가되어 있을 것이다.
        4. `$ git checkout {branch name}` : 브랜치를 만들었으니 이제 이동한다.
        5. `$ git branch` : branch가 잘 이동되었는지 확인하기! {branch name}에 표시가 되어있으면 된다.
        6. 열심히 코드를 짠다. 개인적으로 커밋하는 기준은 아주 작더라도 유의미한 결과물을 만들어냈거나, 무의미하지만 다음 스텝과는 무관한 결과물이 있다면 커밋을 한다. 한 번에 모든 파일을 다 올리는 것은 지양하기! 팀원들이 나중에 코드를 참고하기 어려워진다.
        7. `yarn lint`를 한 번 해주면 lint 설정이 모두 적용된 상태가 되어서 conflict이 날 확률이 훨씬 적어집니다!
        8. `$ git status` : 현재 내 파일들의 상태를 확인한다. 작업 후에 확인하면 파일들이 빨간색으로 주루룩 나올텐데 modified 즉, 수정된 결과물을 보여주는 것뿐이다. 기분 나쁜 빨강이지만 걱정 노노.
        9. `$ git add {file name}` : 빨간색으로 나온 내용들 중에서 커밋할 파일을 add 한다. 이게 뭔지 설명하려면 1박 2일 하고도 3시간 정도 더 걸릴 수도 있으니까 커밋을 하기 위한 준비단계 또는 임시 저장 정도로 생각하긔! 모르겠으면 나말고 다른 똑똑OB에게 물어보기!
        10. `$ git status` : 다시 내 파일들의 상태를 확인한다. 내가 add 한 파일들은 초록색으로 변해있을 것이다. 여전히 빨강이라면 위에서 무언가 오류가 난 것은 아닌지 확인하고 다시 add해주면 된다.
        11. `$ git commit -m '커밋메시지'` : 이제 진짜 커밋커밋~ 내가 지금 수정한 내용이 무엇인지 한 번에 알기 쉽게 한 문장으로 적어두기! "최최최종" 이런식으로만 적으면 안됨! 커밋메시지 작성법도 팀별로 프로젝트별로 상이할 수 있음
        12. `$ git status` : 다시 내 파일들의 상태를 확인한다. 커밋 후에 확인해보면 목록들이 사라진 것을 볼 수 있는데, **컴퓨터가 하는 말을 읽어보면** `nothing to commit, working tree clean` 즉, 커밋할 거 없다고 말한다. 커밋을 함으로써 내가 수정한 내용이 로컬에 복구 가능한 형태로 저장이 되었고, 아직 추가로 수정된 것이 없다는 말이다. 아주 좋은 메시지 :)
        13. 작업 마무으리
        14. `$ git push origin {branch name}` : 커밋한 내용들을 이제 깃헙에 반영한다. {branch name}에 바로 main을 적을 수 있는 깡을 가진 사람은 많지 않다. 깃을 잘 모른다면 그냥 `push origin main`은 쓰면 안된다고만 알자..
        15. 이제 자기 깃헙에 들어가서 `pull request`를 날려주면 된다!
        16. `$ git status` 는 별 기능 아닌 것같지만 깃을 잘 모른다면 자주 상태를 확인하면서 커밋 하나하나를 조심스럽게 해보는 것이 개인적으로 가장 좋은 공부라고 생각해서 계속 적었당! 컴퓨터가 하는 말에도 익숙해질겸!
        
        꿑!
        
    - gitflow
        
        [우린 Git-flow를 사용하고 있어요 | 우아한형제들 기술블로그](https://techblog.woowahan.com/2553/)
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/475e766d-28b1-466a-9bb3-43c872dd7790/Untitled.png)
        
        브랜치 생성과 동시에 이동하기: `git checkout -b 'feature/페이지명/기능명'`
        

---

- [x]  폴더 구조
- [x]  커밋 컨벤션
- [ ]  리드미 작성 - 마지막에
- [x]  린트 설정
- [x]  코드 컨벤션
- [x]  api 명세서
- [x]  git branch 전략
- [x]  이외의 규칙

---

# 여기저기에서 쇽샥해온 레퍼런스들

- 👕 ~~린트 설정~~
    
    # .prettierrc
    
    ```json
    {
        "semi": true,
        "tabWidth": 2,
        "printWidth": 120,
        "trailingComma": "all",
        "bracketSameLine": true,
        "endOfLine": "auto"
    }
    ```
    
    # .eslintrc.json
    
    ```json
    {
        "env": {
            "browser": true,
            "es2021": true
        },
        "extends": [
            "eslint:recommended",
            "plugin:react/recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:import/recommended",
            "plugin:import/typescript"
        ],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "ecmaFeatures": {
                "jsx": true
            },
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "plugins": [
            "react",
            "react-hooks",
            "simple-import-sort",
            "prettier",
            "jsx-a11y",
            "import",
            "@typescript-eslint/eslint-plugin"
        ],
        "rules": {                                          // 0: off 1: warn 2: error 로 표기 가능
            "indent": ["error", 2],                         // 들여쓰기 몇 칸?
            "quotes": ["error", "double"],                  // 쌍따옴표가 아닌 홑따옴표를 사용
            "semi": ["error", "always"],                    // semi colon을 강제함
            "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
            "comma-dangle": ["error", "always-multiline"],  // 두 줄 이상의 경우에는 후행 쉼표를 항상 사용, 한 개 일 때는 사용하지 않음
            "object-curly-spacing": ["error", "always"],    // 객체 괄호 앞 뒤 공백 추가
            "space-in-parens": ["error", "never"],          // 일반 괄호 앞 뒤 공백 추가
            "computed-property-spacing": ["error", "never"],    // 대괄호 앞 뒤 공백 추가하지 않음
            "comma-spacing": ["error", { "before": false, "after": true }], // 반점 앞 뒤 공백: 앞에는 없고, 뒤에는 있게
            "eol-last": ["error", "always"],                // line의 가장 마지막 줄에는 개행 넣기
            "no-tabs": ["error", { "allowIndentationTabs": true }], // \t의 사용을 금지하고 tab키의 사용은 허용
            "object-shorthand": "error",                    // 객체의 간편 사용(es6)을 강제할 것인가? -> https://eslint.org/docs/rules/object-shorthand
            "padding-line-between-statements": [
                "error",
                { "blankLine": "always", "prev": "*", "next": "return" },
                { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
                { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
              ],
            // prev : 이전에 무엇이 왔을때 blankLine을 넣을것인가? // const,let,var, case
            // next : 다음에 무엇이 왔을때 blankLine을 넣을 것인가?  // return
            // 팀원들과 구체적으로 상의하기 - 근데 이거 너무 신경쓰지 않고 recommend 사용해도 될 듯!
            "react-hooks/rules-of-hooks": "error",          // Checks rules of Hooks
    		"react-hooks/exhaustive-deps": "warn",          // Checks effect dependencies
            "react/react-in-jsx-scope": "off",              // import React from "react"가 필수였던 시기에 필요한 규칙
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            // // eslint-plugin-import의 static analysis
            // "import/named": 2,                              // export/import 이름을 정확하게 사용하고 있는지를 확인
            // "import/namespace": 2,                          // 이미 존재하는 이름만 가져오도록 함
            // "import/export": 2,                             // 이름이나 기본값의 반복적인 내보내기와 같은 내보내기와 관련된 것을 체크
            // "import/no-absolute-path": 2,                   // 절대경로로 파일 불러오기 금지
            // "import/no-relative-packages": 2,               // 상대경로로 패키지 불러오기 금지
            // // eslint-plugin-import의 helpful warnings
            // "import/default": 2,                            // default로 export된 아이들을 찾아서 가져옴
            "import/no-named-as-default": 0                    // default로 정의되지 않은 아이들을 불러왔음을 알려줌
            // "import/no-named-as-default-member": 2,         // default export의 속성으로 exported name의 사용을 보고
            // // eslint-plugin-import의 style guide
            // "import/no-duplicates": 2                       // 같은 모듈에서 다른 이름으로 불러오는 것을 막기 위함 (from mod.js와 from mod)
        },
        "settings": {
            "import/resolver": {
              "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
              }
            }
          }
    }
    ```
    
- ⚖️ ~~js 컨벤션~~
    
    [코딩컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
    
    FE 기준으로 작성되긴 했지만, 자스 컨벤션으로 나쁘지 않고 린트설정도 공부할 수 있어서 좋아합니다 :))
    
- 📩 ~~커밋 컨벤션~~
- 📁 ~~폴더 구조~~
    
    서팟장님의 폴더 구조 - 기능별로 모아둠
    
    ```jsx
    📦 config                    // port, mongoURI 등 설정
     ┗ 📜 index.ts
    
    📦 controllers               // service에서 처리된 로직들을 전달 받아 클라이언트로 뿌려줌
     ┣ 📜 index.ts
     ┗ 📜 BlahController.ts
    
    📦 interfaces                // type interface 모아두기 - 폴더로 분기하지 않고 한 파일별로 해도 될 듯?!
     ┗ 📂 common
     ┃ ┣ 📜 PostBaseResponseDto.ts
     ┃ ┣ 📜 JwtPayloadInfo.ts
     ┃ ┗ 📜 index.ts
     ┗ 📂 user
       ┣ 📜 UserInfo.ts
       ┣ 📜 UserCreateDto.ts
       ┗ 📜 index.ts
    
    📦 loaders                   // db loader를 정의
     ┗ 📜 db.ts
    
    📦 middlewares               // middleware가 필요하다면 이곳에 추가
     ┗ 📜 auth.ts                // auth 검사 등이 들어갈 수 있음
    
    📦 models                    // mongoose.Schema를 모아두는 곳
     ┣ 📜 User.ts
     ┣ 📜 Movie.ts
     ┗ 📜 index.ts
    
    📦 modules                   // statusCode, message, handler 등 전역적으로 필요한 각종 utils들을 모아두기
     ┣ 📜 jwtHandler.ts
     ┗ 📜 utils.ts
    
    📦 routes                    // endpoint 정의
     ┣ 📜 UserRouter.ts
     ┗ 📜 index.ts
    
    📦 services                  // 클라이언트의 요청을 처리할 곳 -> controller로 전달 됨
     ┣ 📜 UserService.ts
     ┗ 📜 index.ts
    ```
    
- 🍽️ ~~서팟장님의 보일러 플레이트 쇽샥하기~~
    
    [GitHub - 30th-THE-SOPT-Server-Part/node-typescript-init: node.js, typescript, mongoDB(mongoose) boiler-plate](https://github.com/30th-THE-SOPT-Server-Part/node-typescript-init)
    
    # package.json
    
    ```json
    {
      "name": "node-typescript-init",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "dev": "nodemon",
        "build": "tsc && node dist"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@types/bcryptjs": "^2.4.2",
        "@types/express": "^4.17.13",
        "@types/jsonwebtoken": "^8.5.8",
        "@types/mongoose": "^5.11.97",
        "@types/node": "^17.0.25",
        "nodemon": "^2.0.15",
        "ts-node": "^10.7.0",
        "typescript": "^4.6.3"
      },
      "dependencies": {
        "bcryptjs": "^2.4.3",
        "dotenv": "^16.0.0",
        "express": "^4.17.3",
        "express-validator": "^6.14.0",
        "jsonwebtoken": "^8.5.1",
        "mongoose": "^6.3.1"
      }
    }
    ```
    
    # nodemon.json
    
    ```json
    {
        "watch": [
            "src",
            ".env"
        ],
        "ext": "js,ts,json",
        "ignore": [
            "src/**/*.spec.ts"
        ],
        "exec": "ts-node  --transpile-only ./src/index.ts"
    }
    ```
    
    # tsconfig.json
    
    [TS config의 컴파일러 옵션 일부를 소개합니다.](https://medium.com/gomidev/ts-config%EC%9D%98-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC-%EC%98%B5%EC%85%98-%EC%9D%BC%EB%B6%80%EB%A5%BC-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-eeb19016efe2)
    
    ```json
    {
      "compilerOptions": {
        "target": "es6", // 어떤 버전으로 컴파일
        "allowSyntheticDefaultImports": true, // default export가 없는 모듈에서 default imports를 허용
        "experimentalDecorators": true, // decorator 실험적 허용
        "emitDecoratorMetadata": true, // 데코레이터가 있는 선언에 대해 특정 타입의 메타 데이터를 내보내는 실험적인 지원
        "skipLibCheck": true, // 정의 파일 타입 체크 여부
        "moduleResolution": "node", // commonJS -> node 에서 동작
        "module": "commonjs", // import 문법
        "strict": true, // 타입 검사 엄격하게 
        "pretty": true, // error 메시지 예쁘게
        "sourceMap": true, // 소스맵 파일 생성 -> .ts가 .js 파일로 트랜스 시 .js.map 생성
        "outDir": "./dist", // 트랜스 파일 (.js) 저장 경로
        "allowJs": true, // js 파일 ts에서 import 허용
        "noImplicitAny": true, // any 쓰면 손절
        "noFallthroughCasesInSwitch": true, // switch문에서 break되지 않고 통과되는 것 방지
        "esModuleInterop": true, // ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져올 수 있게 허용
        "forceConsistentCasingInFileNames": true, //  파일 참조시 대소문자 구분 엄격
        "noUnusedLocals": true,                     // 안쓰는 로컬 변수 체크
        "noUnusedParameters": true,                 // 함수 파라미터 중 안쓰는 것 체크
        "typeRoots": [
          "./src/types/express.d.ts", // 타입(*.d.ts)파일을 가져올 디렉토리 설정
          "./node_modules/@types" // 설정 안할시 기본적으로 ./node_modules/@types
        ]
      },
      "include": [
        "./src/**/*" // build 시 포함
      ],
      "exclude": [
        "node_modules", // build 시 제외
        "tests"
      ]
    }
    ```
    
- 📋 스키마 명세서
- 북테즈 동룡장의 api 명세서
    
    # [요청방식] ~/auth/email?email=
    
    ```json
    /auth/email?email=booktez@naver.com
    ```
    
    ## Request
    
    ```json
    Content-Type: application/json
    ```
    
    ---
    
    ## Response
    
    ### Response Body
    
    ✅ 성공시 - Status Code 200
    
    - 사용할 수 있는 이메일인 경우
    
    ```json
    {
        "status": 200,
        "success": true,
        "message": "사용할 수 있는 이메일입니다.",
        "data": {
            "isValid": true
        }
    }
    ```
    
    - 사용할 수 없는 이메일인 경우 (형식이 올바르지 않을 때)
    
    ```json
    {
        "status": 200,
        "success": true,
        "message": "올바른 형식이 아닙니다.",
        "data": {
            "isValid": false
        }
    }
    ```
    
    - 사용할 수 없는 이메일인 경우 (쿼리스트링이 `email`이 아닌경우)
    
    ```json
    {
        "status": 200,
        "success": true,
        "message": "잘못된 요청 값이 들어왔습니다.",
        "data": {
            "isValid": false
        }
    }
    ```
    
    - 사용할 수 없는 이메일인 경우 (중복 이메일일 때)
    
    ```json
    {
        "status": 200,
        "success": true,
        "message": "이미 사용 중인 이메일입니다.",
        "data": {
            "isValid": false
        }
    }
    ```
    
    ❌ 실패시 - Status Code 400
    
    - 이메일이 제공되지 않았을 경우
    
    ```json
    {
        "status": 400,
        "success": false,
        "message": "필요한 값이 없습니다."
    }
    ```
