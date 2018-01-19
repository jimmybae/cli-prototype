var colors = require('colors');

colors.setTheme({
    info: 'green',
    white: 'white',
    help: 'cyan',
    warn: 'yellow',
    error: 'red',
    bgRed: 'bgRed',
    bgGreen: 'bgGreen'
});

/**
 * @param  {String} type
 * @param  {String} msg
 */
module.exports = (type, msg) => {

  if (type === 'success') {
      console.log(' success '.bgGreen.white + ' ' + msg.info);
  } else if (type === 'fail') {
      console.log(' error '.bgRed.white + ' ' + msg.error);
  } else {
      console.log(msg);
  }
};