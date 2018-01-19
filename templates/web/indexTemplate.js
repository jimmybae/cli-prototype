// Generate index.html Template

/**
 * @param  {String} name
 */
module.exports = (name) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
    <meta http-equiv="Content-Security-Policy" content="default-src * gap: ws: https://ssl.gstatic.com;style-src * 'unsafe-inline' 'self' data: blob:;script-src * 'unsafe-inline' 'unsafe-eval' data: blob:;img-src * data: 'unsafe-inline' 'self'"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="css/${name}.css"/>
    <script type="text/javascript" src="js/${name}.js"></script>
  </head>
  <body>
    Hello GMobile!
    <br />
    ${name} Project
  </body>
</html>`;
};