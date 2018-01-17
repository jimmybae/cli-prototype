#!/usr/bin/env node
var commander = require('commander');
var inquirer = require('inquirer');
var writeFile = require('write');
var clear = require('clear');
var chalk = require('chalk');
var figlet = require('figlet');

var questionsModule = [{
  name: 'module',
  message: 'What is module name',
  validate: function(input) {
    var done = this.async();
    if (input === '') {
      // Pass the return value in the done callback
      done('Module name is required.');
      return;
    }
    // Pass the return value in the done callback
    done(null, true);
  }
}, {
  name: 'create',
  message: 'Let\'s select',
  type: 'checkbox',
  choices: [
    { value: 'r', name: 'add configuration router' },
    { value: 'f', name: 'add controller function' },
    { value: 'v', name: 'create view' },
    { value: 'm', name: 'create model' },
    { value: 'c', name: 'create collection' },
    { value: 't', name: 'create template' }
  ],
  validate: function(input) {
    var done = this.async();
    if (input.length === 0) {
      // Pass the return value in the done callback
      done('Please select at least one.');
      return;
    }
    // Pass the return value in the done callback
    done(null, true);
  }
}, {
  name: 'router_name',
  message: 'What is router name',
  when: function(answers) {
    return answers.create.indexOf('r') > -1;
  },
  default: function(answers) {
    return answers.module;
  }
}, {
  name: 'controller_function_name',
  message: 'What is controller function name',
  when: function(answers) {
    return answers.create.indexOf('f') > -1;
  },
  default: function(answers) {
    return 'fn_' + answers.module;
  }
}, {
  name: 'view_name',
  message: 'What is view name',
  when: function(answers) {
    return answers.create.indexOf('v') > -1;
  },
  default: function(answers) {
    return answers.module.charAt(0).toUpperCase() + answers.module.slice(1) + 'View';
  }
}, {
  name: 'model_name',
  message: 'What is model name',
  when: function(answers) {
    return answers.create.indexOf('m') > -1;
  },
  default: function(answers) {
    return answers.module.charAt(0).toUpperCase() + answers.module.slice(1) + 'Model';
  }
}, {
  name: 'collection_name',
  message: 'What is collection name',
  when: function(answers) {
    return answers.create.indexOf('c') > -1;
  },
  default: function(answers) {
    return answers.module.charAt(0).toUpperCase() + answers.module.slice(1) + 'Collection';
  }
}, {
  name: 'template_name',
  message: 'What is template name',
  when: function(answers) {
    return answers.create.indexOf('t') > -1;
  },
  default: function(answers) {
    return answers.module.charAt(0).toUpperCase() + answers.module.slice(1) + 'Template';
  }
}];

var questionsPerson = [{
    name: 'firstName',
    message: 'What is your first name?'
  }, {
    name: 'operatingSystem',
    message: 'What is your operating System?',
    default: 'MacOS'
  }, {
    name: 'favoriteColor',
    message: 'What is your favorite rainbow Color?',
    type: 'list',
    choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
    filter: function (str){
      return str.toLowerCase();
    }
  }
];
var questionsFood = [{
  name: 'pizzaOrTaco',
  message: 'You want to eat pizza or taco?',
  type: 'list',
  choices: ['Pizza', 'Taco']
}, {
  type: 'rawlist',
  name: 'size',
  message: 'What size do you need',
  choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
  when: function(answers){
    return answers.pizzaOrTaco === 'Pizza';
  },
  filter: function(val) {
    return val.toLowerCase();
  }
}, {
  name: 'pizzaIngredients',
  message: 'OK, so what goes on your pizza?',
  type: 'checkbox',
  choices: ['peperonni', 'extra cheese', 'sausage', 'mushroom', 'sugar cubes'],
  when: function(answers){
    return answers.pizzaOrTaco === 'Pizza';
  }
}, {
  name: 'tacoIngredients',
  message: 'Pick out the things that go in your taco.',
  type: 'checkbox',
  choices: ['chicken', 'rice', 'beef', 'pico', 'hawt sauce', 'zazzle'],
  when: function(answers){
    return answers.pizzaOrTaco === 'Taco';
  }
}, {
  name: 'orderCount',
  message: 'Before order count',
  type: 'expand',
  choices: [{
    key: 'o',
    name: 'One',
    value: 'one'
  }, {
    key: 'w',
    name: 'Two',
    value: 'two'
  }, {
    key: 'r',
    name: 'Three',
    value: 'three'
  }, new inquirer.Separator(), {
    key: 't',
    name: 'Ten Over',
    value: 'tenOver'
  }]
}, {
  name: 'delivery',
  message: 'Is this for delivery?',
  type: 'confirm'
}];
var questions;
commander
  .version('Glue Mobile CLI: 1.0.0')
  .description('Application simple description')
  .arguments('<question>')
  .option('-v, --ver', 'Show version')
  .option('-f, --filename <filnename>', 'Write filename')
  .action(function(question, filename) {
    if(question == 'person') {
      questions = questionsPerson;
    } else if (question == 'food') {
      questions = questionsFood;
    } else if (question == 'module') {
      questions = questionsModule;
    }
}).parse(process.argv);

if (commander.ver) {
  //clear();
  console.log(
    chalk.blue(
      figlet.textSync('GlueMobile CLI', { horizontalLayout: 'default', font: 'standard' })
    )
  );
  console.log('Glue Mobile CLI: 0.0.1');
  console.log('Node: 9.4.0');
  console.log('Glue Mobile: 2.0.0');
  
  process.exit(1);
}

if (typeof questions === 'undefined') {
  console.error('arguments is either person or food');
  // throw new Error('require type');
  process.exit(1);
}

clear();
console.log(
  chalk.blue(
    figlet.textSync('GlueMobile CLI', { horizontalLayout: 'default', font: 'standard' })
  )
);
inquirer.prompt(questions).then(answers => {
  console.log(answers);
  console.log('-----------------------------------------');
  if(answers.router_name) console.log(chalk.yellow('update ') + 'js/app.js \'' + answers.router_name + '\' add');
  if(answers.controller_function_name) console.log(chalk.yellow('update ') + 'js/controllers/GlueController.js \'' + answers.controller_function_name + '\' function add');
  if(answers.view_name) console.log(chalk.green('create ') + 'js/views/' + answers.view_name + '.js');
  if(answers.model_name) console.log(chalk.green('create ') + 'js/models/' + answers.model_name + '.js');
  if(answers.collection_name) console.log(chalk.green('create ') + 'js/collections/' + answers.collection_name + '.js');
  if(answers.template_name) console.log(chalk.green('create ') + 'template/' + answers.template_name + '.html');

  if(commander.filename) {
    writeFile(commander.filename, JSON.stringify(answers, null, '  '))
    .then(function() {
      console.log(commander.filename + ' writed.');
    });
  }
});