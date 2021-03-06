# ๐๏ธ Package ๋ฐ config

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
    "target": "es6", // ์ด๋ค ๋ฒ์ ์ผ๋ก ์ปดํ์ผ
    "allowSyntheticDefaultImports": true, // default export๊ฐ ์๋ ๋ชจ๋์์ default imports๋ฅผ ํ์ฉ
    "experimentalDecorators": true, // decorator ์คํ์  ํ์ฉ
    "emitDecoratorMetadata": true, // ๋ฐ์ฝ๋ ์ดํฐ๊ฐ ์๋ ์ ์ธ์ ๋ํด ํน์  ํ์์ ๋ฉํ ๋ฐ์ดํฐ๋ฅผ ๋ด๋ณด๋ด๋ ์คํ์ ์ธ ์ง์
    "skipLibCheck": true, // ์ ์ ํ์ผ ํ์ ์ฒดํฌ ์ฌ๋ถ
    "moduleResolution": "node", // commonJS -> node ์์ ๋์
    "module": "commonjs", // import ๋ฌธ๋ฒ
    "strict": true, // ํ์ ๊ฒ์ฌ ์๊ฒฉํ๊ฒ 
    "pretty": true, // error ๋ฉ์์ง ์์๊ฒ
    "sourceMap": true, // ์์ค๋งต ํ์ผ ์์ฑ -> .ts๊ฐ .js ํ์ผ๋ก ํธ๋์ค ์ .js.map ์์ฑ
    "outDir": "./dist", // ํธ๋์ค ํ์ผ (.js) ์ ์ฅ ๊ฒฝ๋ก
    "allowJs": true, // js ํ์ผ ts์์ import ํ์ฉ
    "noImplicitAny": true, // any ์ฐ๋ฉด ์์ 
    "noFallthroughCasesInSwitch": true, // switch๋ฌธ์์ break๋์ง ์๊ณ  ํต๊ณผ๋๋ ๊ฒ ๋ฐฉ์ง
    "esModuleInterop": true, // ES6 ๋ชจ๋ ์ฌ์์ ์ค์ํ์ฌ CommonJS ๋ชจ๋์ ๊ฐ์ ธ์ฌ ์ ์๊ฒ ํ์ฉ
    "forceConsistentCasingInFileNames": true, //  ํ์ผ ์ฐธ์กฐ์ ๋์๋ฌธ์ ๊ตฌ๋ถ ์๊ฒฉ
    "noUnusedLocals": true,                     // ์์ฐ๋ ๋ก์ปฌ ๋ณ์ ์ฒดํฌ
    "noUnusedParameters": true,                 // ํจ์ ํ๋ผ๋ฏธํฐ ์ค ์์ฐ๋ ๊ฒ ์ฒดํฌ
    "typeRoots": [
      "./src/types/express.d.ts", // ํ์(*.d.ts)ํ์ผ์ ๊ฐ์ ธ์ฌ ๋๋ ํ ๋ฆฌ ์ค์ 
      "./node_modules/@types" // ์ค์  ์ํ ์ ๊ธฐ๋ณธ์ ์ผ๋ก ./node_modules/@types
    ]
  },
  "include": [
    "./src/**/*" // build ์ ํฌํจ
  ],
  "exclude": [
    "node_modules", // build ์ ์ ์ธ
    "tests"
  ]
}
```

# ๐ Lint ์ค์ 

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
    // 0: off 1: warn 2: error ๋ก ํ๊ธฐ ๊ฐ๋ฅ
    "indent": ["error", 2], // ๋ค์ฌ์ฐ๊ธฐ ๋ช ์นธ?
    "quotes": ["error", "double"], // ์๋ฐ์ดํ๊ฐ ์๋ ํ๋ฐ์ดํ๋ฅผ ์ฌ์ฉ
    "semi": ["error", "always"], // semi colon์ ๊ฐ์ ํจ
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "comma-dangle": ["error", "always-multiline"], // ๋ ์ค ์ด์์ ๊ฒฝ์ฐ์๋ ํํ ์ผํ๋ฅผ ํญ์ ์ฌ์ฉ, ํ ๊ฐ ์ผ ๋๋ ์ฌ์ฉํ์ง ์์
    "object-curly-spacing": ["error", "always"], // ๊ฐ์ฒด ๊ดํธ ์ ๋ค ๊ณต๋ฐฑ ์ถ๊ฐ
    "space-in-parens": ["error", "never"], // ์ผ๋ฐ ๊ดํธ ์ ๋ค ๊ณต๋ฐฑ ์ถ๊ฐ
    "computed-property-spacing": ["error", "never"], // ๋๊ดํธ ์ ๋ค ๊ณต๋ฐฑ ์ถ๊ฐํ์ง ์์
    "comma-spacing": ["error", { "before": false, "after": true }], // ๋ฐ์  ์ ๋ค ๊ณต๋ฐฑ: ์์๋ ์๊ณ , ๋ค์๋ ์๊ฒ
    "eol-last": ["error", "always"], // line์ ๊ฐ์ฅ ๋ง์ง๋ง ์ค์๋ ๊ฐํ ๋ฃ๊ธฐ
    "no-tabs": ["error", { "allowIndentationTabs": true }], // \t์ ์ฌ์ฉ์ ๊ธ์งํ๊ณ  tabํค์ ์ฌ์ฉ์ ํ์ฉ
    "object-shorthand": "error", // ๊ฐ์ฒด์ ๊ฐํธ ์ฌ์ฉ(es6)์ ๊ฐ์ ํ  ๊ฒ์ธ๊ฐ? -> https://eslint.org/docs/rules/object-shorthand
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
    ],
    // prev : ์ด์ ์ ๋ฌด์์ด ์์๋ blankLine์ ๋ฃ์๊ฒ์ธ๊ฐ? // const,let,var, case
    // next : ๋ค์์ ๋ฌด์์ด ์์๋ blankLine์ ๋ฃ์ ๊ฒ์ธ๊ฐ?  // return
    // ํ์๋ค๊ณผ ๊ตฌ์ฒด์ ์ผ๋ก ์์ํ๊ธฐ - ๊ทผ๋ฐ ์ด๊ฑฐ ๋๋ฌด ์ ๊ฒฝ์ฐ์ง ์๊ณ  recommend ์ฌ์ฉํด๋ ๋  ๋ฏ!

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // // eslint-plugin-import์ static analysis
    // "import/named": 2,                              // export/import ์ด๋ฆ์ ์ ํํ๊ฒ ์ฌ์ฉํ๊ณ  ์๋์ง๋ฅผ ํ์ธ
    // "import/namespace": 2,                          // ์ด๋ฏธ ์กด์ฌํ๋ ์ด๋ฆ๋ง ๊ฐ์ ธ์ค๋๋ก ํจ
    // "import/export": 2,                             // ์ด๋ฆ์ด๋ ๊ธฐ๋ณธ๊ฐ์ ๋ฐ๋ณต์ ์ธ ๋ด๋ณด๋ด๊ธฐ์ ๊ฐ์ ๋ด๋ณด๋ด๊ธฐ์ ๊ด๋ จ๋ ๊ฒ์ ์ฒดํฌ
    // "import/no-absolute-path": 2,                   // ์ ๋๊ฒฝ๋ก๋ก ํ์ผ ๋ถ๋ฌ์ค๊ธฐ ๊ธ์ง
    // "import/no-relative-packages": 2,               // ์๋๊ฒฝ๋ก๋ก ํจํค์ง ๋ถ๋ฌ์ค๊ธฐ ๊ธ์ง
    
    // eslint-plugin-import์ helpful warnings
    // "import/default": 2,                            // default๋ก export๋ ์์ด๋ค์ ์ฐพ์์ ๊ฐ์ ธ์ด
    "import/no-named-as-default": 0, // default๋ก ์ ์๋์ง ์์ ์์ด๋ค์ ๋ถ๋ฌ์์์ ์๋ ค์ค
    // "import/no-named-as-default-member": 2,         // default export์ ์์ฑ์ผ๋ก exported name์ ์ฌ์ฉ์ ๋ณด๊ณ 
    // // eslint-plugin-import์ style guide
    // "import/no-duplicates": 2                       // ๊ฐ์ ๋ชจ๋์์ ๋ค๋ฅธ ์ด๋ฆ์ผ๋ก ๋ถ๋ฌ์ค๋ ๊ฒ์ ๋ง๊ธฐ ์ํจ (from mod.js์ from mod)
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
โ ๏ธ anyScript ์ง์ง ๊ทนํํ์ง๋ง, ๋ชจ๋ฅด๊ฒ ์ผ๋ฉด ์ผ๋จ `**any**`๋ฅผ ๊ฐ๊น๋๋ค.
ํน์ js๋ฅผ ์ฌ์ฉํ  ์ ์๋๋ก ํ์ฉํ์ต๋๋ค.

๋์ , ํ์์์ `**any**`์กฐ์ฐจ ์ง์ ํ์ง ์์ผ๋ฉด ์๋ฌ๊ฐ ๋ฉ๋๋ค.
์ผ๋จ ์ฝ๋๋ฅผ ๊ฐ๊ธฐ๊ณ  ๋์ค์ `**any**`๋ฅผ ๊ฒ์ํด์ ์ฐพ์ ๊ณ ์น๋ ๋ฐฉ์์ผ๋ก ์งํํฉ๋๋ค.

**์ผ๋จ ๋ง๋ ๋ค โ ์์ ์ฑ๊ณต์ ๋ง๋ณธ๋ค โ ๋ ์ข์ ์ฝ๋๋ก ๋ฐ๊พผ๋ค.**
```

# ๐จ๏ธ ์ปจ๋ฒค์

> ๐ก **๋๋ฃ๋ค๊ณผ ๋งํฌ๋ฅผ ํต์ผํ๊ธฐ ์ํด ์ปจ๋ฒค์์ ์ง์ ํฉ๋๋ค.**
์คํฉ์ง์กธ์ ์ฝ๋๊ฐ ์๋, **ํ ์ฌ๋์ด ์ง  ๊ฒ๊ฐ์ ์ฝ๋**๋ฅผ ์์ฑํ๋ ๊ฒ์ด ์ถํ ์ ์ง๋ณด์๋ ํ์์์ ๋์์ด ๋ฉ๋๋ค. ๋ด๊ฐ ์ฝ๋๋ฅผ ์๊ฐํ๋ฉด์ ์งค ์ ์๋๋ก ํด์ฃผ๋ ๋ฃฐ์ด๋ผ๊ณ  ์๊ฐํด๋ ์ข์ต๋๋ค!

[โจ ์ปค๋ฐ ๊ท์น](https://www.notion.so/3e7a8dfc5af44b849f788db762e22a0f)

init: ๋ฌด์จ๋ฌด์จ ํจํค์ง ์ถ๊ฐ

feat: ์ ์  ์ปจํธ๋กค๋ฌ ๋ง๋ค์๋น

style: ๋ณ์๋ช ๋ณ๊ฒฝ, ์ฝ๋ ์์ ๋ณ๊ฒฝ

## ๊ฐ์ข ์ด๋ฆ์ง๊ธฐ

> ๐ **์ข์ ์ด๋ฆ์ด ์ข์ ์ฝ๋๋ฅผ ๋ง๋ ๋ค!** ์ฝ๋๊ฐ ๊ธ์ ์ฝ๋ ๋ฏํ ๋๋์ผ ์ ์๊ธธ!
์์ ์ด๋ฆ์ ์ง๋ ๋๋์ผ๋ก ๋ณ์ ํ๋ํ๋์ ์ ์ฑ์ ๊ทธ๋ํ๊ฒ.. **<3**

|  | ๋ช๋ช๋ฒ | ๊ธฐํ ์ค๋ช |
| --- | --- | --- |
| DB์ด๋ฆ | ์นด๋ฉ์ผ์ด์ค | 8์ ์ด๋ด |
| ํ์ด๋ธ | ์๋ฌธ์ | 3๋จ์ด, 26์ ์ด๋ด |
| ์ปฌ๋ผ | snake ํ๊ธฐ๋ฒ | ์ ๋ฏธ์ฌ๋ก ์ปฌ๋ผ ์ฑ์ง์ ๋ํ๋ |
| ํ์ผ๋ช | ์นด๋ฉ์ผ์ด์ค |  |
| ํจ์๋ช | ์นด๋ฉ์ผ์ด์ค | ๋์ฌ๋ก ์์ |
| ๋ณ์๋ช | ์นด๋ฉ์ผ์ด์ค | ์์์ ๊ฒฝ์ฐ ๋๋ฌธ์+_ |
| ํ์ | ํ์ค์นผ์ผ์ด์ค | interface ์ด๋ฆ์ I๋ฅผ ๋ถ์ด์ง ์๊ธฐ |

## ์ฐ๋ฆฌ๋ค์ ๋ณ์๋ช ์ฌ์ 

| ํ๊ตญ์ด | ์์ด | ์ถ์ฝ์ด |
| --- | --- | --- |
| ๊ตฌ๋งค, ์ฃผ๋ฌธ | order |  |
| ์ ์  | user |  |
| ~์ธ์ง ์๋์ง | is~ |  |
| ์๋จ | method |  |
| ๋ฌธ์ | inquiry |  |
| ๋ด์ฉ | content |  |
| ๋ฐฐ์ด์ ๋ด์ ๊ฒฝ์ฐ | ~s (๋ณต์ํ) |  |
| ์ง๋ถ | pay |  |

## ๋ธ๋์น ์ ๋ต

<aside>
โ ๏ธ ๋ณต์กํ ๊น๋ธ๋์น ์ ๋ต์ ํ์์ ๋ง์น  ์๋ ์์ผ๋ ๊ฐ์ฅ ํ์ํ ๋ธ๋์น๋ง ์ด์ํด์!

</aside>

main: ๋ฐฐํฌ๋ฅผ ์ํ ๋ธ๋์น (`์ต์ต์ต์ต์ข๋ณธ`)

develop: ๊ธฐ๋ฅ ๊ฐ๋ฐ์ด ์๋ฃ๋ ์ฝ๋๋ค์ด ๋ชจ์ด๋ ๊ณณ(`๊ฒ์ฆ๋ ๊ณณ์ด์ ๊ฒ์ฆํ  ๊ณณ`)

feature: ๊ธฐ๋ฅ ๊ฐ๋ฐ์ ์ํ ๋ธ๋์น (`feature/์๊ธฐ์ด๋ฆ/๊ธฐ๋ฅ๋ช`)

# ๐ ๋ช์ธ์

## ๋ชฝ๊ณ ๋ก๋ชฝ๋ชฝ๊ณ  ์คํค๋งs

[User ์คํค๋ง](https://www.notion.so/4c03cf3209684bf2b15e02e314cceb3a)

[Order ์คํค๋ง](https://www.notion.so/618a3f006d0d4b909321c8dfcbd828b8)

[Inquiry ์คํค๋ง](https://www.notion.so/c7cc76fc5b504c1590897af452dd5ae9)

## API ๋ช์ธ์

[๋ธ์์์ ๋ณด๊ธฐ](https://www.notion.so/406d372e32d046f29aa4765ea104daba)
