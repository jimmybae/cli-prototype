#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const { version } = require('./package.json');
const init = require('./actions/init.js');

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
      });
    } else {
      init(projectName, projectType);
    }
  });

program
  .command('exec <cmd>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action((cmd, options) => {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  }).on('--help', function() {
    console.log();
    console.log();
    console.log('  Examples:');
    console.log();
    console.log('    $ deploy exec sequential');
    console.log('    $ deploy exec async');
    console.log();
  });

  program.parse(process.argv);