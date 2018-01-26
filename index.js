#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
//const server = require('lite-server');
const { version } = require('./package.json');
const init = require('./actions/init.js');
const initStatic = require('./actions/init-static.js');
const serve = require('./actions/serve.js');

const question = [{
  name: 'projectType',
  message: 'Select project type',
  type: 'list',
  choices: ['web', 'mobile']
}];

program
  .name('gmobile')
  .version(version)
  .description('GMobile CLI')
  .usage('<command> [argument]');

program
  .command('init <projectName>')
  .description('Initializes a GMobile project')
  .option('-w, --web', 'Initializes web template')
  .option('-m, --mobile', 'Initializes mobile template')
  .action((projectName, options) => {
    let projectType = null;

    if(options.web) projectType = 'web';
    else if(options.mobile) projectType = 'mobile';

    if(projectType == null) {
      inquirer.prompt(question)
      .then(answers => {
        projectType = answers.projectType;
        //init(projectName, projectType);
        initStatic(projectName, projectType);
      });
    } else {
      //init(projectName, projectType);
      initStatic(projectName, projectType);
    }
  });

program
  .command('serve')
  .description('Easily test your web locally while developing.')
  .action(() => {
    serve();
  });

  program.parse(process.argv);