const fs = require('fs');
const logger = require('../logger.js');
const indexTemplate = require('../templates/web/indexTemplate.js');
const jsTemplate = require('../templates/web/jsTemplate.js');
const cssTemplate = require('../templates/web/cssTemplate.js');

module.exports = (projectName, projectType) => {
  if (!fs.existsSync(projectName)) {
    fs.mkdirSync(projectName);
    if(projectType == 'web') {
      fs.mkdirSync(`${projectName}/js`);
      fs.mkdirSync(`${projectName}/css`);
      fs.writeFileSync(`${projectName}/index.html`, indexTemplate(projectName), 'utf8');
      fs.writeFileSync(`${projectName}/js/${projectName}.js`, jsTemplate(projectName), 'utf8');
      fs.writeFileSync(`${projectName}/css/${projectName}.css`, cssTemplate(projectName), 'utf8');
    } else if(projectType == 'mobile') {
      logger.warn(`This feature is in preparation.`);
    }
    logger.log(`Project <${projectName}> initialized successfuly.`);
  } else {
    logger.error(`Project <${projectName}> already exist.`);
  }
};