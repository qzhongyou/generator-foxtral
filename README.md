# generator-foxtral [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> 基于yeoman的foxtral脚手架

## Installation

First, install [Yeoman](http://yeoman.io) and generator-foxtral using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-foxtral
```

Then generate your new project:

```bash
yo foxtral
```
or
```bash
yo foxtral projectName
```

## Project Structure
```
.
├── app/
│   ├── lib/
│   │   └── lib.js
│   ├── router/
│   │   └── index.js
│   ├── webroot/
│   │   ├──layout
│   │   │   └──index.html
│   │   ├── page/
│   │   │   └── index.html
│   │   └── widget/
│   │       └── list 
│   │            ├── list.html
│   │            └── list.less 
│   └── app.js  
│         
├── .editorconfig 
├── package.json
├── README.md
└── .gitignore

```

* lib/ - 插件,外部API资源目录
* router/ - 服务器端路由配置目录
* webroot/ - 模板文件目录
* app.js - 启动文件


## License

MIT © [玉面](https://github.com/qzhongyou)


[npm-image]: https://badge.fury.io/js/generator-foxtral.svg
[npm-url]: https://npmjs.org/package/generator-foxtral
[travis-image]: https://travis-ci.org/qzhongyou/generator-foxtral.svg?branch=master
[travis-url]: https://travis-ci.org/qzhongyou/generator-foxtral
[daviddm-image]: https://david-dm.org/qzhongyou/generator-foxtral.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/qzhongyou/generator-foxtral
[coveralls-image]: https://coveralls.io/repos/qzhongyou/generator-foxtral/badge.svg
[coveralls-url]: https://coveralls.io/r/qzhongyou/generator-foxtral
