### 初始化项目

- npm install

### 采用自己编写的 cz-jira 库提交 git 日志

- npm run commit
- npm run commit -- --retry

### git 上传文件

- git add \*
- git commit -m '提交信息'
- git push

### git 创建并切出分支

- git checkout -b feature/FIJI-2000

### git 合并分支, 合并 feature/FIJI-2000 分支到 master 分支

- git checkout master
- git merge feature/FIJI-2000

### commitizen + cz-jira

- commitizen 是生成 git 日志(文本)的工具
- cz-jira 是 commitizen 的 git 日志(文本)适配器(change log)
- 需要在本项目的根目录添加.czrc 文件
- 需要在本项目的根目录添加.cz-jira.js 文件

### husky 之 pre-commit

- pre-commit 是 git commit 前的钩子, 对改动的文件做语法校验
- 用 eslint 对 js 进行检查, 报错时不能 commit
- 用 stylelint 对 css 进行检查, 报错时不能 commit

### husky 之 commit-msg

- 使用自己编写的 validate-commit-msg.js 校验 commitizen 生成的 git 日志(文本)
- feat(FIJI-1000): [SUMMARY] DESCRIPTION

### husky 之 pre-push

- pre-push 是 git push 前的钩子, 必须全跑, 担心改动会影响其它地方
- 单元测试正确性检查, 报错时不能 push
- 单元测试覆盖率检查

### lint-staged 说明

- 只做 git staged 中的文件做校验
- lint-staged 是一个可执行脚本, 可以用 npx lint-staged 或者 npm run lint:staged 查看结果

### 注意

- 需要添加.eslintrc.json 才能启用 eslint
- 需要添加.stylelint.json 才能启用 stylelint
- 需要添加.czrc 文件 才能启用 commitizen
- 需要添加.cz-jira.js 文件 才能启用 cz-jira

### 参考文章

[commitizen/cz-cli](https://github.com/commitizen/cz-cli)
[adntin/cz-jira](https://github.com/adntin/cz-jira)

[typicode/husky](https://github.com/typicode/husky)
[okonet/lint-staged](https://github.com/okonet/lint-staged)

[GitHub 官方出品的 Lint 工具列表](https://github.com/collections/clean-code-linters)

[用 husky 和 lint-staged 构建超溜的代码检查工作流](https://segmentfault.com/a/1190000009546913)
[lint-staged 和 husky 在 pre-commit 阶段做代码检查](https://dsb123dsb.github.io/2018/05/26/lint-staged%E5%92%8Chusky%E5%9C%A8pre-commit%E9%98%B6%E6%AE%B5%E5%81%9A%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/)
