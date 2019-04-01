### 初始化项目

npm install

### git 上传文件

1. 添加文件
   git add \*

2. 提交文件
   git commit -m '提交信息'

3. 上传文件
   git push

### pre-commit

1. 用 eslint 对 js 进行检查, 报错时不能 commit
2. 用 stylelint 对 css 进行检查, 报错时不能 commit

### pre-push

1. 单元测试正确性检查, 报错时不能 push
2. 单元测试覆盖率检查

### 根据提示提交文件

npm run commit

### 参考文章

用 husky 和 lint-staged 构建超溜的代码检查工作流
https://segmentfault.com/a/1190000009546913

GitHub 官方出品的 Lint 工具列表
https://github.com/collections/clean-code-linters
