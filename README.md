### 初始化项目

- npm install

### 采用自己编写的 cz-jira 库提交 git 日志

- npm run commit
- npm run commit -- --retry

### 升级 npm 具体包

- npm update cz-jira

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
- commitizen 库需要在本项目的根目录添加.czrc 文件
- cz-jira 库需要在本项目的根目录添加.cz-jira.js 文件

### husky 之 pre-commit

- pre-commit 是 git commit 前的钩子, 对改动的文件做语法校验
- 用 eslint 对 js 进行检查, 报错时不能 commit
- 用 stylelint 对 css 进行检查, 报错时不能 commit

### husky 之 commit-msg

- 使用自己编写的 validate-commit-msg.js 校验 commitizen 生成的 git 日志(文本)
- feat(FIJI-1000): [SUMMARY] DESCRIPTION
- 主要是防止直接用 git 命令提交, 比如: git commit -m 'feat(SOFT-123): [git 和 jira 集成] 修改 issue 的前缀'

### husky 之 pre-push

- pre-push 是 git push 前的钩子, 必须全跑, 担心改动会影响其它地方
- 单元测试正确性检查, 报错时不能 push
- 单元测试覆盖率检查

### lint-staged 说明

- 只做 git staged 中的文件做校验
- lint-staged 是一个可执行脚本, 可以用 npx lint-staged 或者 npm run lint:staged 查看结果

### 配置文件说明

- .cz-jira.js 是 commitizen change log 自定义库 cz-jira 的配置文件
- .czrc 是 commitizen 库的配置文件
- .editorconfig 是为了保证所有 IDE 具有相同的编码风格, 需要 IDE 安装各自的插件, 比如 vscode 需要安装 EditorConfig for VS Code
- .eslintrc.json 是为了启用 eslint 代码检查
- .gitignore 是忽略 git 的跟踪
- .prettierrc 是 prettier 的配置文件, 帮我们格式化真实代码风格
- .stylelintrc 是为了启用 stylelint 代码检查
- jira.config.json 是 jira 帐号配置

### 参考文章

[commitizen/cz-cli](https://github.com/commitizen/cz-cli)
[adntin/cz-jira](https://github.com/adntin/cz-jira)

[typicode/husky](https://github.com/typicode/husky)
[okonet/lint-staged](https://github.com/okonet/lint-staged)

[GitHub 官方出品的 Lint 工具列表](https://github.com/collections/clean-code-linters)

[用 husky 和 lint-staged 构建超溜的代码检查工作流](https://segmentfault.com/a/1190000009546913)
[lint-staged 和 husky 在 pre-commit 阶段做代码检查](https://dsb123dsb.github.io/2018/05/26/lint-staged%E5%92%8Chusky%E5%9C%A8pre-commit%E9%98%B6%E6%AE%B5%E5%81%9A%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/)

### git 开发流程

##### 业务功能开发

1. 本地创建分支

- git checkout -b feature/SOFT-2244

2. 添加代码

- git add .

3. 提交代码

- npm run commit 或者 git commit -m feat(SOFT-2244): [SUMMARY] DESCRIPTION

4. 推送代码(日常提交)

- git push

5. 开发完成后, 把 master 分支合并到当前分支(feature/SOFT-2244), 解决冲突, 确保当前分支是最新的代码

- git merge master

6. 推送合并后的代码

- git push

##### 把功能分支合并到 master 分支, 不允许在 master 分支提交(commit)代码

1. 切换分支

- git checkout master

2. 把 feature/SOFT-2244 分支合并到 master 分支

- git merge feature/SOFT-2244

3. 推送代码

- git push
