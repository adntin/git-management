const chalk = require("chalk");
const fs = require("fs");

const husky_git_params = process.env.HUSKY_GIT_PARAMS; // '.git/COMMIT_EDITMSG'

const msg = fs.readFileSync(husky_git_params, "utf-8").trim(); // read the git commit message
// feat(FIJI-1000): add user
const regCommit = /^(feat|fix|docs|style|refactor|test|chore|revert)\(FIJI-\d+\):\s\[.+\]\s.+/;
// Merge branch 'feature/FIJI-3955' into 'develop'
const regMerge = /^(Merge (.*?) into (.*?)|(Merge branch (.*?))(?:\r?\n)*$)/;

if (!regCommit.test(msg) && !regMerge.test(msg)) {
  const { bgRed, red, green, yellow } = chalk;
  const errors = [
    `${bgRed.dim(" ERROR ")} ${red(`invalid git commit message.`)}`,
    `${red(`You should commit the following format message:`)}`,
    `${green(`feat(your scope): [summary] 'add comments'`)}`,
    `${yellow('You can use "npm run commit" to commit message.')}`
  ];
  console.error(errors.join("\n\n"));
  process.exit(1);
}
