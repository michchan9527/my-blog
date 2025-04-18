---
title: Blender 學習筆記
tags:
  - 3D建模
  - 快捷鍵整理
  - Blender筆記
createTime: 2025/04/08 03:06:31
permalink: /article/203rew2g/
---

[[toc]]

## 基本操作

### 視圖控制

| 快捷鍵         | 功能說明      |
|----------------|---------------|
| `鼠標中鍵`     | 旋轉視圖      |
| `Shift + 中鍵` | 平移視圖      |
| `滾動中鍵`     | 縮放視圖      |
| `Num1`         | 前視圖        |
| `Num3`         | 側視圖        |
| `Num7`         | 頂視圖        |
| `Num5`         | 切換正交/透視 |

### 通用快捷鍵

::: tip 核心快捷鍵
這些是你最常使用的快捷鍵
:::

```blender:no-line-numbers
G - 移動 (Grab)
R - 旋轉 (Rotate)
S - 縮放 (Scale)
Space - 搜索命令
```

## 建模基礎

### 添加物件 (`Shift+A`)

```blender:no-line-numbers
Shift+A → Mesh → 
  ├─ Cube        # 立方體
  ├─ UV Sphere   # UV球體
  ├─ Cylinder    # 圓柱體
  └─ Monkey      # 蘇珊猴
```

### 變形面板 (`N`)

當你按下 `N` 時會顯示的屬性面板：

```blender:no-line-numbers
[Transform]
├─ Location: (X: 0.00, Y: 0.00, Z: 0.00)
├─ Rotation: (X: 0°, Y: 0°, Z: 0°)
├─ Scale:    (X: 1.00, Y: 1.00, Z: 1.00)
└─ Dimensions: (X: 2.00, Y: 2.00, Z: 2.00)
```

## 編輯模式 (`Tab`)

### 模式切換

1. 點擊左上角模式選擇器
2. 或使用 `Tab` 鍵切換

```blender:no-line-numbers
[Object Mode] ↔ [Edit Mode]
```

### 編輯操作

|快捷鍵  |功能說明       |
|--------|---------------|
|`E`     |擠出 (Extrude) |
|`M`     |合併 (Merge)   |
|`Ctrl+R`|環切 (Loop Cut)|
|`F`     |創建面 (Fill)  |

### 擠出詳細步驟

```blender:no-line-numbers
1. 進入編輯模式 (Tab)
2. 選擇頂點/邊/面
3. 按 E 開始擠出
4. 移動鼠標調整位置
5. 左鍵確認或右鍵取消
```

