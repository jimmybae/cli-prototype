const fs = require('fs');
const logger = require('../logger.js');
const CURR_DIR = process.cwd();

const createDirectoryContents = (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;
    // get stats about the current file
    const stats = fs.statSync(origFilePath);
    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      
      const writePath = `${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${newProjectPath}/${file}`);
      
      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  });
};

module.exports = (projectName, projectType) => {
  const templatePath = `templates-static/${projectType}`;
  const newProjectPath = `${projectName}-static`;
  if (!fs.existsSync(newProjectPath)) {
    fs.mkdirSync(newProjectPath);
    createDirectoryContents(templatePath, newProjectPath);
    logger.log(`Project <${projectName}-static> initialized successfuly.`);
  } else {
    logger.error(`Project <${projectName}-static> already exist.`);
  }
};