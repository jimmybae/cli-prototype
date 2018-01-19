const chalk = require('chalk');

module.exports = {
  log(...msg) {
    return console.log(chalk.green('[info]'), ...msg)
  },
  error(...msg) {
    return console.error(chalk.bold.red('[error]'), ...msg)
  },
  warn(...msg) {
    return console.warn(chalk.yellow('[warn]'), ...msg)
  },
  debug(...msg) {
    return console.warn(chalk.blue('[debug]'), ...msg)
  }
};