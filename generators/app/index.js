'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const extend = _.merge;
const path = require('path');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    // 项目名称
    this.argument('name', { type: String, required: false });

    // 项目名称
    this.option('name', {
      type: String,
      required: false,
      desc: 'Project name'
    });
  }

  // 初始化
  initializing() {
    this.props = {
      root: this.options.projectRoot
    };
  }

  // 私有方法
  _askFor() {
    var next = this.async();
    const prompts = [
      {
        name: 'name',
        message: 'Project name',
        when: !this.props.name
      },
      {
        name: 'description',
        message: 'Description',
        when: !this.props.description
      },
      {
        name: 'homepage',
        message: 'Project homepage url',
        when: !this.props.homepage
      },
      {
        name: 'authorName',
        message: "Author's Name",
        when: !this.props.authorName,
        default: this.user.git.name(),
        store: true
      },
      {
        name: 'authorEmail',
        message: "Author's Email",
        when: !this.props.authorEmail,
        default: this.user.git.email(),
        store: true
      },
      {
        name: 'authorUrl',
        message: "Author's Homepage",
        when: !this.props.authorUrl,
        store: true
      },
      {
        name: 'projectMain',
        message: 'Main file (app.js):',
        default: 'app.js'
      },
      {
        name: 'keywords',
        message: 'Package keywords (comma to split)',
        when: !this.props.keywords,
        filter(words) {
          return words.split(/\s*,\s*/g);
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = extend(this.props, props);
      next();
    });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the grand ' + chalk.red('generator-foxtral') + ' generator!')
    );
    return this._askFor.bind(this)();
  }

  defaults() {
    if (this.props.name !== path.basename(this.destinationRoot())) {
      this.log(`Your generator is ${this.props.projectName} \n`);

      // 名称不同是修改目录创建文件夹
      this.destinationRoot(this.destinationPath(this.props.name));
    }
  }

  writing() {
    var pkg = this.fs.readJSON(this.templatePath('package.json'), {});

    pkg = extend(pkg, {
      name: this.props.name,
      version: '0.0.0',
      description: this.props.description,
      homepage: this.props.homepage,
      author: {
        name: this.props.authorName,
        email: this.props.authorEmail,
        url: this.props.authorUrl
      },
      main: this.props.projectMain,
      keywords: this.props.keywords
    });

    // 创建package
    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    // 创建.gitgnore
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitgnore'));

    // ReadMe 赋值
    var readmeTpl = _.template(this.fs.read(this.templatePath('README.md')));
    this.fs.write(
      this.destinationPath('README.md'),
      readmeTpl({
        generatorName: this.props.name
      })
    );

    // 创建文件目录
    this.fs.copyTpl(this.templatePath('app'), this.destinationPath('app'), this.props);
  }

  install() {
    // This.npmInstall();
    this.installDependencies({ skipInstall: this.options['skip-install'], bower: false });
  }

  end() {
    this.log(
      yosay('Thanks for using generator\n' + chalk.green('generator successfully !'))
    );
  }
};
