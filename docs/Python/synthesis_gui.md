---
title: Nuitka 打包 PySide6 GUI 的資源路徑解決方案
tags:
  - Python
  - Nuitka
  - 打包技巧
createTime: 2025/04/06 22:50:54
permalink: /article/3r5mbtgi/
---
# 解決 Nuitka 打包資源路徑問題

> 本頁記錄解決 Nuitka 打包問題的完整流程

## 問題現象

在使用 Nuitka 打包 Python 程序后，發現程序中的圖片資源（包括左上角圖標和工具欄圖標）無法正常顯示，而開發環境下運行卻一切正常。

![](/path/to/demo-image.png)

## 原因分析

通過排查發現，當使用 Nuitka 打包時：
1. 單文件打包模式會創建臨時解壓目錄 `_NUITKA_ONEFILE_TEMP`
2. 二進制打包模式會使用 `_NuitkaBinaryDir` 屬性
3. 原有的資源路徑處理未能兼容 Nuitka 的特殊目錄結構

## 解決方案

### 修改資源路徑處理函數

將原本的條件判斷式代碼：

```python title="main.py"
def resource_path(relative_path):
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    elif hasattr(sys, '_NuitkaBinaryDir'):
        return os.path.join(sys._NuitkaBinaryDir, relative_path)
    elif hasattr(sys, '_NUITKA_ONEFILE_TEMP'):
        return os.path.join(sys._NUITKA_ONEFILE_TEMP, relative_path)
    return os.path.join(os.path.abspath("."), relative_path)
```

優化為更通用的版本：

```python title="main.py"
def resource_path(relative_path):
    """ 處理打包后的資源路徑問題 """
    base_path = getattr(sys, '_MEIPASS', 
                      getattr(sys, '_Nuitka_onefile_temp_dir', 
                            os.path.dirname(os.path.abspath(__file__))))
    return os.path.join(base_path, relative_path)
```

## 代碼解析

|優化點           |	說明                                                                            |
|-----------------|---------------------------------------------------------------------------------|
|屬性檢測順序優化 |	優先檢測 PyInstaller 的 `_MEIPASS`，再檢測 Nuitka 的 `_Nuitka_onefile_temp_dir` |
|簡化條件判斷結構	| 使用 `getattr()` 三級級聯替代多重 if-elif 結構                                  |
|增加默認路徑	    | 最後回退到當前腳本所在目錄，確保開發環境直接運行時的可用性                      |
|兼容多種打包方式	| 同時支持 PyInstaller 和 Nuitka 的打包方式                                       |

## 使用示例

在程序中調用資源時：

```python title="main.py"
# 圖標資源加載示例
icon_path = resource_path("resources/icon.ico")
self.setWindowIcon(QIcon(icon_path))

# 圖片資源加載示例
image_label = QLabel()
pixmap = QPixmap(resource_path("resources/header.jpg"))
image_label.setPixmap(pixmap)
```

## 注意事項

1. 打包時需要使用 `--include-data-dir` 參數包含資源目錄：

```BASH:no-line-numbers
nuitka3 --onefile --include-data-dir=resources=resources main.py
```

2. 開發環境保持原有目錄結構：

::: file-tree

- main.py
- resource
  - icon.ico
  - header.jpg
  
:::