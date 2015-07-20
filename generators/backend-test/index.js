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
        choices : ['Model', 'Router'],
        default : 'Model',
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
  dbPrompting : function() {
      var done = this.async();
      var props = this.props;
      this.prompt([
        {
          type: 'confirm',
          name: 'mysql',
          message: 'Will you use MySQL?',
          default: true
        },
        {
          type: 'confirm',
          name: 'mongo',
          message: 'Will you use MongoDB?',
          default: true
        },
        {
          type: 'confirm',
          name: 'elastic',
          message: 'Will you use ElasticSearch?',
          default: true,
        }
      ], function(values) {
        this.props = _(this.props).extend(values);
        done();
      }.bind(this));
  },
  routePrompting : function() {
    var done = this.async();
    if(this.props.type === 'Router') {
        this.prompt([
            {
                type : 'input',
                name : 'route',
                message : 'What is the name of the route you\'ll use?'
            }
        ], function(values) {
            values.capitalRoute = s(values.route).camelize().capitalize().value();
            this.props = _(this.props).extend(values);
            done();
        }.bind(this));
    } else {
        done();
    }
  },
  testValuesPrompting : function() {
      var done = this.async();
      var props = this.props;
      if((props.type === 'Model' && (props.mongo || props.mysql || props.elastic)) || props.type === 'Router') {
        this.prompt({
          type : 'confirm',
          name : 'testValues',
          message : 'Should I add some testValues that you can use?',
          default : true
        }, function(values) {
            this.props = _(this.props).extend(values);
            done();
        }.bind(this))
      } else {
        done();
      }
  },
  writing: function () {
    var path = (this.props.type === 'Model') ? 'model_test.js' : 'router_test.js';
    var optionalProps = {
      testValues: false,
      route: '',
    };
    this.props = _(optionalProps).extend(this.props);
    this.fs.copyTpl(
      this.templatePath(path),
      this.destinationPath(this.props.name + '.test.js'),
      this.props
    );
  }
});
