## GMobile CLI integration
- web [GMobile init web](gluemobile-cli-design.md)
- mobile [gluemobile-template](custom-plugins-cordova-build-contain.md)
- cordova [cordova-android-ios](cordova-ios-android-combine.md)  
integration

## Table of Contents
- [simulation](#simulation)

### simulation
#### 1. installation
```sh
$ npm install -g cordova https://github.com/jimmybae/gmobile-cli.git
$ cordova -v
8.0.0
$ gmobile -V
0.0.1
```

#### 2. cordova project create & platforms add
```sh
$ cd /Users/jimmyict/bgs/data/cordova
$ cordova create gmobile-project1 com.jimmyict.gmobile.project1 GMobileProject1
Creating a new cordova project.
$ cd gmobile-project1
$ cordova platforms add ios
$ cordova platforms add android
```

#### 3. gmobile init
- gmobile init web template는 플러그인 샘플을 넣으면 좋겠는데, 문제는 기본 플러그인(device, dialog) 샘플들이 있는데 어떻게 해줘야 하나?
- custom 플러그인과 같이 고르게 해줘? 그런데 샘플을 실행하려면 플러그인이 다 있긴 있어야해. 없으면 샘플에서 에러가 날거거든.
- 그렇다고 기본 플러그인을 고를 수 있게 해줬다고 해봐 그럼 템플릿으로 가지고 있어야하는데 플러그인이 업데이트 되면 그때는 어떻게 할거야? 또 업데이트해서 배포해야 하나?
- 그럼
- 웹 템플릿을 고르고 플러그인을 고르면 선택된 플러그인의 샘플만 나오도록 하는거지.
- 그렇다고 해도 업데이트, 배포는 피할 수 없네
- 그럼 적어도 기본플러그인을 선택하면 cordova plugins add 명령으로 다운을 받는다? (오래걸리지 않을까?, 방법은 있을거 같은데)

```sh
$ gmobile init
? Select a web template to apply. (Use arrow keys)
❯ Apache Cordova (Current)
  Plugins sample made with jQuery Mobile
  Plugins sample made with Bootstrap

? Choose the costom plugins to apply. (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ cordova-plugin-device
 ◉ cordova-plugin-dialogs
 ◯ ......
 ◯ ......
 ◉ com.jimmyict.mobile.gcm
 ◉ com.jimmyict.mobile.nfc
 ◉ com.jimmyict.mobile.location
 ◉ com.jimmyict.mobile.scan
 ◉ com.jimmyict.mobile.stt

[info] Project <GMobileProject1> initialized successfuly.
```

### 4. gmobile fixed
```sh
$ gmobile init
# web template는 추후 작업하는 ES6 + Backbone.js 로 대체
# 우선 선택없이 package.json과 하나의 dummy file을 www폴더에 넣는것으로 한다.
# 기존 폴더가 지워진다는 경고가 나타나고 '예'선택 시에 적용
? Select a web template to apply. (Use arrow keys)
❯ Apache Cordova (Current)
  Plugins sample made with jQuery Mobile
  Plugins sample made with Bootstrap

# 모바일은 platform에 android가 포함되어 있는지 확인하고
# 있다면 아래 선택이 나타나고 ios만 있으면 어떻게 처리하는가?
# 선택 적용하면 plugins에 복사한다.
? Choose the costom plugins to apply. (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ gcm (android for only)
 ◯ nfc (android for only)
 ◯ scan (android for only)
 ◯ stt (android for only)

[info] Project <GMobileProject1> initialized successfuly.
```