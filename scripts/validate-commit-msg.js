/*
 * @Author: linbin@leedarson.com
 * @Date: 2019-04-26 09:05:33
 * Copyright © Leedarson. All rights reserved.
 */

const chalk = require('chalk');
const fs = require('fs');
const jiraConfig = require('../.cz-jira.js');

const { prefix, types } = jiraConfig;
const huskyGitParams = process.env.HUSKY_GIT_PARAMS; // '.git/COMMIT_EDITMSG'

const msg = fs.readFileSync(huskyGitParams, 'utf-8').trim(); // read the git commit message
const t = types.map(type => type.value).join('|'); // feat|fix|docs|style|refactor|test|chore|revert
const regCommit = new RegExp(`^(${t})\\(${prefix}-\\d+\\):\\s\\[.+\\]\\s.+`); // feat(FIJI-XXXX): [SUMMARY] DESCRIPTION
const regMerge = /^(Merge (.*?) into (.*?)|(Merge branch (.*?))(?:\r?\n)*$)/; // Merge branch 'feature/FIJI-3955' into 'develop'

// 注意: 确保所有git提交都来自于 JIRA Issue
if (!regCommit.test(msg) && !regMerge.test(msg)) {
  const { bgRed, red, green, yellow } = chalk;
  const errors = [
    `\n${bgRed.dim(' commit msg error ')}`,
    `${yellow('Make sure all commit message come from Jira issue.')}\n`,
    `${red('Current commit message:')}`,
    `${red(msg)}\n`,
    `${green('The correct commit message format:')}`,
    `${green(`feat(${prefix}-XXXX): [SUMMARY] DESCRIPTION`)}\n`,
  ];
  console.error(errors.join('\n'));
  process.exit(1);
}
