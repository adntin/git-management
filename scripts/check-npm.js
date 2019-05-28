const execPath = process.env.npm_execpath;
const isNpm = execPath && execPath.indexOf('npm') > -1;

if (!isNpm) {
  console.log('please use npm to install all dependencies');
  console.log();
  console.log('To install dependencies:');
  console.log('$ npm i');
  console.log();
  console.log('For more help, see https://docs.npmjs.com/.');
  process.exit(1);
}
