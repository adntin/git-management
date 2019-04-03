const chalk = require("chalk");
const fs = require("fs");

const husky_git_params = process.env.HUSKY_GIT_PARAMS; // '.git/COMMIT_EDITMSG'

const msg = fs.readFileSync(husky_git_params, "utf-8").trim(); // read the git commit message
// feat(FIJI-1000): [commit-msg] 添加validate-commit-msg.js文件
const regCommit = /^(feat|fix|docs|style|refactor|test|chore|revert)\(FIJI-\d+\):\s\[.+\]\s.+/;
// Merge branch 'feature/FIJI-3955' into 'develop'
const regMerge = /^(Merge (.*?) into (.*?)|(Merge branch (.*?))(?:\r?\n)*$)/;

// 注意: 确保所有git提交都来自于 JIRA Issue
if (!regCommit.test(msg) && !regMerge.test(msg)) {
  const { bgRed, red, green, yellow } = chalk;
  const errors = [
    `\n${bgRed.dim(" ERROR ")} ${red(`invalid git commit message.`)}`,
    `${yellow("Make sure all commit message come from Jira issue.")}\n`,
    `${red("Current commit message:")}`,
    `${red(msg)}\n`,
    `${green(`The correct commit message format:`)}`,
    `${green(`feat(FIJI-XXXX): [SUMMARY] DESCRIPTION`)}\n`
  ];
  console.error(errors.join("\n"));
  process.exit(1);
}
