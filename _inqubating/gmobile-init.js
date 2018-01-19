#!/usr/bin/env node

var program = require('commander');
var inquirer = require('inquirer');
const init = require('../actions/init.js');
const logger = require('../logger.js');

const question = [{
  name: 'projectType',
  message: 'Select project type',
  type: 'list',
  choices: ['web', 'mobile']
}];

let projectType = null;
program
  .name('init')
  .usage('<projectName> [option]')
  .option('-w, --web', 'Initializes web template')
  .option('-m, --mobile', 'Initializes mobile template')
  .parse(process.argv);

var pkgs = program.args;

if (!pkgs.length) {
  logger('fail', `Project name required.`);
  program.help();
  process.exit(1);
}

pkgs.forEach(pkg => {
  projectName = pkg;
  if(program.web) projectType = 'web';
  else if(program.mobile) projectType = 'mobile';

  if(projectType == null) {
    inquirer.prompt(question)
    .then(answers => {
      projectType = answers.projectType;
      init(projectName, projectType);
    });
  } else {
    init(projectName, projectType);
  }
});