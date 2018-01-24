#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const { version } = require('./package.json');
const init = require('./actions/init.js');
const initStatic = require('./actions/init-static.js');

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

    if(options.webProject) projectType = 'web';
    else if(options.mobileProject) projectType = 'mobile';

    if(projectType == null) {
      inquirer.prompt(question)
      .then(answers => {
        projectType = answers.projectType;
        init(projectName, projectType);
        initStatic(projectName, projectType);
      });
    } else {
      init(projectName, projectType);
      initStatic(projectName, projectType);
    }
  });
/*
program
  .command('temp <cmd>')
  .alias('tm')
  .description('temporary the given remote cmd')
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action((cmd, options) => {
    console.log('temp "%s" using %s mode', cmd, options.exec_mode);
  }).on('--help', function() {
    console.log();
    console.log();
    console.log('  Examples:');
    console.log();
    console.log('    $ temp sequential');
    console.log('    $ temp async');
    console.log();
  });
*/
  program.parse(process.argv);