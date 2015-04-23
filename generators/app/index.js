'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ace ' + chalk.red('Bilprospekt') + ' generator!'
    ));

    var prompts = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
        default: this.appname
    },
    {
        type : 'input',
        name : 'userName',
        message : 'What is your name?',
        store :true
    },
    {
      type: 'confirm',
      name: 'stores',
      message: 'Do you need stores and constants?',
      default: true
    }];

    this.prompt(prompts, function (props) {
        props.capitalName = s(props.name).camelize().capitalize().value();
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_main.js'),
        this.destinationPath('main.js'),
        this.props
      );
    },
    components : function() {
        this.mkdir('components');
        this.mkdir('components/__tests__');
        this.fs.copyTpl(
            this.templatePath('_component.js'),
            this.destinationPath('components/' + this.props.name + '_component.js'),
            this.props
        );
    },
    stores : function() {
        if(this.props.stores === true) {
            this.mkdir('stores');
            this.mkdir('stores/__tests__');
            this.fs.copyTpl(
                this.templatePath('_store.js'),
                this.destinationPath('stores/' + this.props.name + '_store.js'),
                this.props
            );
            this.mkdir('constants');
            this.fs.copyTpl(
                this.templatePath('_constants.js'),
                this.destinationPath('constants/' + this.props.name + '_constants.js'),
                this.props
            );
        }

    }
  }
});
