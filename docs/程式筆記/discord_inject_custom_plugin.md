---
title: 載入 Vencord 自定義插件教學
tags:
  - Discord
  - 插件
  - Vencord
  - 自定義插件
createTime: 2025/04/18 12:03:02
permalink: /article/wlvxlymi/
---

# 🚀 載入 Vencord 自定義插件教學

> 本篇將教你如何從 GitHub 下載 [Vencord](https://github.com/Vencord/Vencord) 原始碼，並注入你自製的插件。

## 📦 安裝前準備

### ✅ 需要安裝的工具

- [Node.js](https://nodejs.org) (推薦 LTS 版本）
- [Git](https://git-scm.com/downloads)

安裝完 Node.js 後，直接執行以下指令安裝 pnpm：

```bash:no-line-numbers
npm i -g pnpm
```

## 🛠️ 步驟一：Clone Vencord 原始碼

```bash:no-line-numbers
git clone https://github.com/Vencord/Vencord.git
cd Vencord
pnpm install
```

## 🧩 步驟二：載入他人製作的自定義插件

假設你找到一個自定義插件的 GitHub，例如：

``` https://github.com/Its3rr0rsWRLD/fileShare ```

請依下列步驟操作：

1. 前往 src/ 目錄，如果沒有 userplugins 資料夾，請手動建立:

```bash:no-line-numbers
cd src 
mkdir userplugins
```

2. 將插件 Clone 到 userplugins 裡面:

```bash:no-line-numbers 
cd userplugins
git clone https://github.com/Its3rr0rsWRLD/fileShare.git
```

確認目錄結構如下：

::: file-tree

- Vencord
  - src
    - userplugins
      - bigFileUpload
        - index.tsx

:::

## ⚙️ 步驟三：注入到 Discord

```bash:no-line-numbers
pnpm build
pnpm inject
```

## ✅ 成功載入後

重新啟動 Discord，進入 Vencord 的 Plugins 頁面，應該就可以看到你新增的插件了！

## 📝 備註

- 注入前先關閉 Discord
- 插件若有語法錯誤，注入後不會出現，請檢查 Terminal 輸出錯誤。

## 📚 參考資料

- [Vencord GitHub](https://github.com/Vencord/Vencord)