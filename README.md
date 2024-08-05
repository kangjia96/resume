# Resume

我的在线简历 v3.0~

## 如何更新简历

1. 修改 Notion 里的 Resume 源码，分别导出为 HTML、PDF、Markdown 三种格式，分别改名为：`index.html`、`resume.md`、`resume.pdf`
2. 使用新的 `resume.md` 与 `resume.pdf` 替换 `file` 目录下的同名旧文件
3. 使用新的 `index.html` 替换 `resume` 目录下的同名 `index.html`，并将以下代码复制到 `index.html` 的 `head` 标签
   ```html
   <link rel="stylesheet" href="assets/index.css">
   <script src="assets/index.js"></script>
   ```

4. 最后在 `resume` 目录下打开 Git Bash ，依次执行以下命令提交更改到 GitHub 即可。

   ```bash
   git add .
   git commit -m "更新简历"
   git push -u origin main
   ```


## 你如何搞到同样份在线简历
1. 你需要有个 Notion 账号、GitHub 账号
2. 将 [我的简历模板](https://ikangjia.notion.site/b3929c5e213943958a92d1a39c6ca041) 复制到你那里一份，改成你自己的简历
3. 将项目 Fock 到你的仓库，弄到你的本地
4. 参考上文 <a href="#如何更新简历">如何更新简历</span>