## GlueMobile CLI Design
ionic cli likely
```
gluem or gluemobile ~~~
gluem or gluemobile cordova ~~~
```
## [cli-prototype](https://github.com/bird79/cli-prototype.git)
- local : /bgs/data/node-project/cli-prototype
## advanced work (when necessary optional)
```
cd /usr/local/lib
sudo chown poscoict node_modules
```

## prototype install
```
npm i -g https://github.com/bird79/cli-prototype.git
gluem
```

## prototype uninstall
```
cd /usr/local/bin
rm gluem
cd /usr/local/lib/node_modules
rm -R cli-prototype
```

## react
### create-react-app
[github](https://github.com/facebookincubator/create-react-app)
```
$ cd ~/bgs/data/node-project
$ npx create-react-app my-react-app
```
### create-component-app
[github](https://github.com/CVarisco/create-component-app)
```
$ npm i -g create-component-app
$ cd ~/bgs/data/node-project/my-react-app
$ create-component-app
```

### react-cli-tool
[npm](https://www.npmjs.com/package/react-cli-tool)
```
$ npm i -g react-cli-tool
$ react-cli -c Button
```
### new-component
[github](https://github.com/joshwcomeau/new-component)
```
$ npm i -g new-component
$ new-component Button
```

## Angular
### angular-cli
[github](https://github.com/angular/angular-cli)
```
$ ng new my-angular-app
$ cd my-angular-app
$ ng serve
$ ng g component button
  create src/app/button/button.component.css (0 bytes)
  create src/app/button/button.component.html (25 bytes)
  create src/app/button/button.component.spec.ts (628 bytes)
  create src/app/button/button.component.ts (269 bytes)
  update src/app/app.module.ts (398 bytes)
```

## Glue Mobile CLI
gluem은 가칭
router는 어떻게 하지?
삭제는 option으로 밖에 안되나?
종합적?으로 만드는데 module이 맞나?
1. gluem new [project name] or gluem create [project name]
```
$ gluem new my-gluem-app
$ cd my-gluem-app
```
2. gluem module [module name]
- option
```
-m, --model (default) | -c, --collection
-r, --remove
```
- example
```
$ gluem module login
update js/app.js
update js/controllers/GlueController.js
create js/views/LoginView.js
create js/models/LoginModel.js | js/collections/LoginCollection.js
create /template/login.html
```

3. gluem view [view name]
option뒤에 argument가 없으면 기본 view name으로 만들고 있다면 argument 값으로 만든다.
- option
```
-m, --model [model name] | -c, --collection [collection name]
-t, --template [template name]
-r, --remove
```
- example
```
$ gluem view login -m -t loginPublic
update js/app.js
update js/controllers/GlueController.js
create js/views/LoginView.js
create js/models/LoginModel.js
create /template/loginPublic.html
```

4. gluem model [model name] | collection [collection name]
- option
```
-r, --remove
```
- example
```
$ gluem model login
update js/app.js
create js/models/LoginModel.js

$ gluem collection login
update js/app.js
create js/collections/LoginCollection.js
```