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

```
⚠️ anyScript 진짜 극혐하지만, 모르겠으면 일단 `**any**`를 갈깁니다.
혹은 js를 사용할 수 있도록 허용했습니다.

대신, 타입에서 `**any**`조차 지정하지 않으면 에러가 납니다.
일단 코드를 갈기고 나중에 `**any**`를 검색해서 찾아 고치는 방식으로 진행합니다.

**일단 만든다 → 작은 성공을 맛본다 → 더 좋은 코드로 바꾼다.**
```

# 🗨️ 컨벤션

> 💡 **동료들과 말투를 통일하기 위해 컨벤션을 지정합니다.**
오합지졸의 코드가 아닌, **한 사람이 짠 것같은 코드**를 작성하는 것이 추후 유지보수나 협업에서 도움이 됩니다. 내가 코드를 생각하면서 짤 수 있도록 해주는 룰이라고 생각해도 좋습니다!

[✨ 커밋 규칙](https://www.notion.so/3e7a8dfc5af44b849f788db762e22a0f)

init: 무슨무슨 패키지 추가

feat: 유저 컨트롤러 만들었당

style: 변수명 변경, 코드 순서 변경

## 각종 이름짓기

> 📝 **좋은 이름이 좋은 코드를 만든다!** 코드가 글을 읽는 듯한 느낌일 수 있길!
자식 이름을 짓는 느낌으로 변수 하나하나에 정성을 그득하게.. **<3**

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

[노션에서 보기](https://www.notion.so/406d372e32d046f29aa4765ea104daba)
