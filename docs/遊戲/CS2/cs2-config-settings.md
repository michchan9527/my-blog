---
title: CS2 個人設定紀錄
tags:
  - CS2
  - 設定檔
createTime: 2025/04/18 12:43:17
permalink: /article/iaygmnnp/
---

# CS2 個人設定紀錄

> 本頁記錄整理個人常用的 CS2 控制台設定與快捷鍵綁定，便於日後備份與查閱。

## 顯示與 HUD 設定

```cs
cl_teamid_overhead_mode 2        // 顯示隊友頭上 ID（2 為箭頭、名稱和生命值）
cl_hud_color 9                   // HUD 顏色（9 為綠色）
r_player_visibility_mode 0
con_enable 1                     // 啟用控制台
fps_max 300                      // 限制最大 FPS
```

## 準星設定

```cs
cl_crosshairalpha 255
cl_crosshaircolor 5              // 自訂顏色
cl_crosshaircolor_r 0
cl_crosshaircolor_g 255
cl_crosshaircolor_b 0
cl_crosshair_friendly_warning 0
cl_crosshairgap -2.4
cl_crosshairgap_useweaponvalue 0
cl_crosshair_recoil 0
cl_crosshairsize 2.5
cl_crosshairstyle 4
cl_crosshairthickness 1
cl_crosshairdot 0
cl_crosshair_drawoutline 0
```

## 視角與槍模 (Viewmodel)

```cs
viewmodel_presetpos 0
viewmodel_fov 63
viewmodel_offset_x 1.5
viewmodel_offset_y 2
viewmodel_offset_z -2
```

## 滑鼠靈敏度

```cs
sensitivity 2.00
```

## 音效設定

```cs
volume 0.49
snd_headphone_eq 1                  // 1 = Crisp 清晰
```

## 雷達與 HUD 額外資訊

```cs
cl_allow_animated_avatars 0
cl_radar_always_centered 0
cl_radar_scale 0.4
cl_hud_telemetry_frametime_show 3
r_show_build_info false
cl_predict_kill_ragdolls false
```

## 快捷鍵綁定

```cs
bind "n" "slot10"
bind "x" "use weapon_healthshot"
bind "mwheelup" "+jump"
bind "v" "switchhands"
bind "mouse5" "+voicerecord"
unbind "mouse4"
unbind "h"
```

## 儲存配置

```cs
host_writeconfig
```

## 📚 下載資料

[下載設定檔](/downloads/autoexec.txt) (需自行改副檔名)

::: warning
請下載後將副檔名由 .txt 改為 .cfg，以套用至遊戲內。
:::