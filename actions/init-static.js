const fs = require('fs');
const path = require('path');
const logger = require('../logger.js');
const projectNameSubfix = '';

const createPackageJson = (projectName, newProjectPath) => {
  const packageJson = {
    name: projectName,
    version: '0.0.1',
    description: 'GMobile Project',
    author: '',
    license: '',
    main: '',
    scripts: {
      test: 'echo \"Error: no test specified\" && exit 1'
    },
    dependencies: {},
    devDependencies: {}
  };
  const packageJsonFile = `${newProjectPath}/package.json`;
  fs.writeFileSync(
    packageJsonFile,
    JSON.stringify(packageJson, null, 2)
  );
};

const createDirectoryContents = (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;
    // get stats about the current file
    const stats = fs.statSync(origFilePath);
    if (stats.isFile()) {
      const writePath = `${newProjectPath}/${file}`;
      fs.copyFileSync(origFilePath, writePath);
      /* jimmy 그냥 copy하면 되는데 read, write를 한다는건
       * 아마도 파일 내용을 변경하기 위해서 그런듯
       * 추후에 좀더 파악 필요함.
      if(file.indexOf('png') > -1) {
        fs.copyFileSync(origFilePath, writePath);
      } else {
        const contents = fs.readFileSync(origFilePath, 'utf8');
        fs.writeFileSync(writePath, contents, 'utf8');
      }
      */
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${newProjectPath}/${file}`);
      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  });
};

module.exports = (projectName, projectType) => {
  const templatePath = `${__dirname}/../templates-static/${projectType}`;
  const newProjectPath = `${projectName}${projectNameSubfix}`;
  
  if (!fs.existsSync(newProjectPath)) {
    fs.mkdirSync(newProjectPath);
    createPackageJson(projectName, newProjectPath);
    createDirectoryContents(templatePath, newProjectPath);
    logger.log(`Project <${projectName}${projectNameSubfix}> initialized successfuly.`);
  } else {
    logger.error(`Project <${projectName}${projectNameSubfix}> already exist.`);
  }
};