初始化项目

```
npm install
```

运行测试

```
npm test
```

添加文件

```
git add *
```

提交文件

```
git commit -m '提交信息'
```

上传文件

```
git push -u origin master
```

### pre-commit

1. 对 javascript 进行 lint 检查, 报错时不能 commit
2. 对 css 进行 lint 检查, 报错时不能 commit

### pre-push

1. 单元测试正确性检查, 报错时不能 push
2. 单元测试覆盖率检查
