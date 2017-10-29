/**
 * @authors       qzhongyou
 * @date          2017-10-29 14:02:54
 */
/*
 beforeEach - 每一个describe之前执行beforeEach函数传参
 withOptions - 对应主文件中option参数
 withArguments - 对应主文件中argument参数
 withPrompts - 对应主文件中prompts
 run - 执行主文件
 inDir - 生成项目目录
 assert.file - 文件断言
 assert.fileContent - 文件内容断言
 */

'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-foxtral:app', () => {
  const answers = {
    name: 'test'
  };

  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions(answers)
      .inDir(path.join(__dirname, '../../' + answers.name))
      .toPromise();
  });

  describe('running on new project', () => {
    it('creates project', () => {
      assert.file([
        'app/lib/lib.js',
        'app/router/index.js',
        'app/app.js',
        'app/webroot/layout/index.html',
        '.editorconfig',
        '.gitgnore',
        'README.md'
      ]);
      assert.fileContent('README.md', answers.name);
    });
  });
});
