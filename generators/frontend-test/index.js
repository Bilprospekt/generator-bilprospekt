'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var s = require('underscore.string');
var _ = require('underscore');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ace ' + chalk.red('Bilprospekt') + ' generator! \nLet\'s create that test file you wanted.'
    ));

    var prompts = [
    {
        type : 'list',
        choices : ['Component', 'Store'],
        default : 'Component',
        name : 'type',
        message : 'What will we be testing?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the file you want tested?'
    },
    ];

    this.prompt(prompts, function (props) {
      props.name = s(props.name).underscored().value().replace(/.js$/, '');
      props.capitalName = s(props.name).camelize().capitalize().value();
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },
  writing: function () {
    var optionalProps = {
        testValues : false,
        route : ''
    };
    var path = null;
  
    if (this.props.type === 'Component') {
      path = 'component_test.js';
    } else if (this.props.type === 'Store') {
      path = 'store_test.js';

      var capitalMainName = this.props.capitalName.replace(/_?store/i, '');
      var mainName = this.props.name.replace(/_?store/i, '');
      _(this.props).extend({
        capitalMainName: capitalMainName,
        mainName: mainName
      });
    }

    if(!path) return;
    this.fs.copyTpl(
      this.templatePath(path),
      this.destinationPath(this.props.name + '.test.js'),
      this.props
    );
  }
});
