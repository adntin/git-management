### git 上传文件

- git add .
- git commit -m 'MESSAGE'
- git push

### 创建并切出分支

- git checkout -b feature/FIJI-2000

### 把 feature/FIJI-2000 分支合并到 master 分支

- git checkout master
- git merge feature/FIJI-2000

---

### 查看远程仓库(别名), 可能存在多个远程仓库(github, gitee 等)

- git remote -v

### 添加远程仓库

- git remote add gitee git@gitee.com:adntin/repo-name.git

---

### 查看本地分支

- git branch

### 查看远程分支

- git branch -a

### 删除本地分支

- git branch -d feature/SOFT-123

### 删除远程分支

- git push origin :feature/SOFT-123

### 只是删除远程分支的跟踪, 并不会删除远程分支

- git branch -r -d origin/feature/FIJI-2000
- Deleted remote-tracking branch origin/feature/FIJI-2000 (was 8f4a0f9).

---

### git 开发流程

##### 新功能开发

1. 创建本地分支, 并切换成当前分支

- git checkout -b feature/SOFT-2244

2. 添加代码

- git add .

3. 提交代码

- npm run commit 或者 git commit -m feat(SOFT-2244): [SUMMARY] DESCRIPTION

4. 推送代码

- git push

##### 开发完成后, 必须拉取 master 分支, 确保当前分支没有冲突, 并且是最新代码

1. 切换分支

- git checkout feature/SOFT-2244

2. 把 master 分支合并到 feature/SOFT-2244 分支 (解决冲突)

- git merge master

6. 推送代码

- git push

##### 把功能分支合并到 master 分支, 注意: 不允许在 master 分支提交(commit)代码

1. 切换分支

- git checkout master

2. 把 feature/SOFT-2244 分支合并到 master 分支

- git merge feature/SOFT-2244

3. 推送代码

- git push
