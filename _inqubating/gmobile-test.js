#!/usr/bin/env node

var program = require('commander');
const logger = require('../logger.js');

program
  .name('test')
  .usage('<testName> [option]')
  .description('Test a GMobile project')
  .option('-d, --debug', 'Debug mode')
  .parse(process.argv);

  var pkgs = program.args;

  if (!pkgs.length) {
    logger('fail', `Test name required.`);
    program.help();
    process.exit(1);
  }



pkgs.forEach((pkg) => {
  logger('success', 'testing: ' + pkg);
  if (program.xtest) logger('success', 'debug mode: true');
});