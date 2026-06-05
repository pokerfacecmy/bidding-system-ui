# 招投标全流程 AI 辅助系统 · 原型

纯静态 HTML 原型，可直接通过 **GitHub Pages** 远程访问。

## 在线访问地址

部署完成后访问：

```
https://<你的GitHub用户名>.github.io/bidding-system-ui/
```

## 部署步骤（GitHub Pages）

### 1. 在 GitHub 创建仓库

1. 打开 [github.com/new](https://github.com/new)
2. 仓库名填写：`bidding-system-ui`（或与本地文件夹同名）
3. 选择 **Public**（免费 Pages 需公开仓库，或 GitHub Pro 私有仓库也可用）
4. **不要**勾选「Add a README」（本地已有文件）
5. 点击 Create repository

### 2. 推送本地代码

在项目目录执行（将 `<你的GitHub用户名>` 替换为实际用户名）：

```powershell
cd C:\Users\mengy\Projects\bidding-system-ui
git init
git add .
git commit -m "发布招投标系统 UI 原型"
git branch -M main
git remote add origin https://github.com/<你的GitHub用户名>/bidding-system-ui.git
git push -u origin main
```

### 3. 开启 GitHub Pages

1. 进入仓库 → **Settings** → **Pages**
2. **Source** 选择 **Deploy from a branch**
3. **Branch** 选 `main`，文件夹选 **`/ (root)`**
4. 点击 **Save**

约 1～2 分钟后，页面会发布到上述 URL。

### 4. 更新页面

修改 `index.html` 后：

```powershell
git add .
git commit -m "更新原型"
git push
```

推送后 GitHub Pages 会自动重新部署。

## 本地预览

直接双击 `index.html`，或在项目目录运行：

```powershell
python -m http.server 8080
```

然后访问 http://localhost:8080

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 主页面（含样式与脚本，自包含） |
| `app.js` / `styles.css` | 预留拆分文件（当前未引用） |
