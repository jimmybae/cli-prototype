const express = require('express');
const fs = require('fs');
const open = require('open');

const app = express();  
const staticRoot = process.cwd() + '/';

module.exports = () => {
  app.set('port', (process.env.PORT || 3000));
  app.use(express.static(staticRoot));
  app.use(function(req, res, next){
    fs.createReadStream(staticRoot + 'index.html').pipe(res);
  });

  app.listen(app.get('port'), function() {  
    console.log(`Server running at http://localhost:${app.get('port')}`);
    open(`http://localhost:${app.get('port')}`);
  });
};