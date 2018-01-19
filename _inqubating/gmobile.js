#!/usr/bin/env node
const program = require('commander');
var chalk = require('chalk');
var figlet = require('figlet');

const { version } = require('../package.json');

program
	.name('gmobile')
	.version(version)
	.description('GMobile CLI')
	.usage('<command> [argument]')
	.command('init <projectName>', 'Initializes a GMobile project')//.alias('i')
	.command('test <testName>', 'Test a GMobile project')//.alias('t')
	.option('-v, --ver', 'output the version & information')
	.parse(process.argv);

	if (program.ver) {
		console.log(1);
		//clear();
		console.log(
			chalk.blue(
				figlet.textSync('GMobile CLI', { horizontalLayout: 'default', font: 'standard' })
			)
		);
		console.log('GMobile CLI: 0.0.1');
		console.log('Node: 9.4.0');
		console.log('GMobile: 2.0.0');
		
		process.exit(1);
	}