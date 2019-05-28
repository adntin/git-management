const chalk = require('chalk');
const { execSync } = require('child_process');

try {
  execSync('yarn check').toString();
} catch (error) {
  const { red, underline, dim, cyan, yellow } = chalk;
  const result = [
    red(
      `  This project uses ${underline.bold(
        'yarn',
      )} to install all dependencies.`,
    ),
    red(
      "  Please don't modify the dependencies manually in package.json nor use npm install [package-name] to update them.",
    ),
    dim('    To install any new dependency, please run:'),
    cyan('    $ yarn add [package-name]'),
    dim('    or to upgrade a dependency to a specific version:'),
    cyan('    $ yarn upgrade [package@version]'),
    yellow('    If you got this error, please execute yarn and try again.'),
    `${dim('    Check out ')}${chalk.underline.blue(
      'https://yarnpkg.com/en/docs/cli/',
    )}${dim(' for more information.')}`,
  ];

  console.log(result.join('\n'));
  process.exit(1);
}
