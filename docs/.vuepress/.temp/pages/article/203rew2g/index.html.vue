<template><div><nav class="table-of-contents"><ul><li><router-link to="#基本操作">基本操作</router-link><ul><li><router-link to="#視圖控制">視圖控制</router-link></li><li><router-link to="#通用快捷鍵">通用快捷鍵</router-link></li></ul></li><li><router-link to="#建模基礎">建模基礎</router-link><ul><li><router-link to="#添加物件-shift-a">添加物件 (Shift+A)</router-link></li><li><router-link to="#變形面板-n">變形面板 (N)</router-link></li></ul></li><li><router-link to="#編輯模式-tab">編輯模式 (Tab)</router-link><ul><li><router-link to="#模式切換">模式切換</router-link></li><li><router-link to="#編輯操作">編輯操作</router-link></li><li><router-link to="#擠出詳細步驟">擠出詳細步驟</router-link></li></ul></li></ul></nav>
<h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作"><span>基本操作</span></a></h2>
<h3 id="視圖控制" tabindex="-1"><a class="header-anchor" href="#視圖控制"><span>視圖控制</span></a></h3>
<table>
<thead>
<tr>
<th>快捷鍵</th>
<th>功能說明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>鼠標中鍵</code></td>
<td>旋轉視圖</td>
</tr>
<tr>
<td><code v-pre>Shift + 中鍵</code></td>
<td>平移視圖</td>
</tr>
<tr>
<td><code v-pre>滾動中鍵</code></td>
<td>縮放視圖</td>
</tr>
<tr>
<td><code v-pre>Num1</code></td>
<td>前視圖</td>
</tr>
<tr>
<td><code v-pre>Num3</code></td>
<td>側視圖</td>
</tr>
<tr>
<td><code v-pre>Num7</code></td>
<td>頂視圖</td>
</tr>
<tr>
<td><code v-pre>Num5</code></td>
<td>切換正交/透視</td>
</tr>
</tbody>
</table>
<h3 id="通用快捷鍵" tabindex="-1"><a class="header-anchor" href="#通用快捷鍵"><span>通用快捷鍵</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">核心快捷鍵</p>
<p>這些是你最常使用的快捷鍵</p>
</div>
<div class="language-blender" data-highlighter="shiki" data-ext="blender" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>G - 移動 (Grab)</span></span>
<span class="line"><span>R - 旋轉 (Rotate)</span></span>
<span class="line"><span>S - 縮放 (Scale)</span></span>
<span class="line"><span>Space - 搜索命令</span></span></code></pre>
</div><h2 id="建模基礎" tabindex="-1"><a class="header-anchor" href="#建模基礎"><span>建模基礎</span></a></h2>
<h3 id="添加物件-shift-a" tabindex="-1"><a class="header-anchor" href="#添加物件-shift-a"><span>添加物件 (<code v-pre>Shift+A</code>)</span></a></h3>
<div class="language-blender" data-highlighter="shiki" data-ext="blender" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>Shift+A → Mesh → </span></span>
<span class="line"><span>  ├─ Cube        # 立方體</span></span>
<span class="line"><span>  ├─ UV Sphere   # UV球體</span></span>
<span class="line"><span>  ├─ Cylinder    # 圓柱體</span></span>
<span class="line"><span>  └─ Monkey      # 蘇珊猴</span></span></code></pre>
</div><h3 id="變形面板-n" tabindex="-1"><a class="header-anchor" href="#變形面板-n"><span>變形面板 (<code v-pre>N</code>)</span></a></h3>
<p>當你按下 <code v-pre>N</code> 時會顯示的屬性面板：</p>
<div class="language-blender" data-highlighter="shiki" data-ext="blender" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>[Transform]</span></span>
<span class="line"><span>├─ Location: (X: 0.00, Y: 0.00, Z: 0.00)</span></span>
<span class="line"><span>├─ Rotation: (X: 0°, Y: 0°, Z: 0°)</span></span>
<span class="line"><span>├─ Scale:    (X: 1.00, Y: 1.00, Z: 1.00)</span></span>
<span class="line"><span>└─ Dimensions: (X: 2.00, Y: 2.00, Z: 2.00)</span></span></code></pre>
</div><h2 id="編輯模式-tab" tabindex="-1"><a class="header-anchor" href="#編輯模式-tab"><span>編輯模式 (<code v-pre>Tab</code>)</span></a></h2>
<h3 id="模式切換" tabindex="-1"><a class="header-anchor" href="#模式切換"><span>模式切換</span></a></h3>
<ol>
<li>點擊左上角模式選擇器</li>
<li>或使用 <code v-pre>Tab</code> 鍵切換</li>
</ol>
<div class="language-blender" data-highlighter="shiki" data-ext="blender" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>[Object Mode] ↔ [Edit Mode]</span></span></code></pre>
</div><h3 id="編輯操作" tabindex="-1"><a class="header-anchor" href="#編輯操作"><span>編輯操作</span></a></h3>
<table>
<thead>
<tr>
<th>快捷鍵</th>
<th>功能說明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>E</code></td>
<td>擠出 (Extrude)</td>
</tr>
<tr>
<td><code v-pre>M</code></td>
<td>合併 (Merge)</td>
</tr>
<tr>
<td><code v-pre>Ctrl+R</code></td>
<td>環切 (Loop Cut)</td>
</tr>
<tr>
<td><code v-pre>F</code></td>
<td>創建面 (Fill)</td>
</tr>
</tbody>
</table>
<h3 id="擠出詳細步驟" tabindex="-1"><a class="header-anchor" href="#擠出詳細步驟"><span>擠出詳細步驟</span></a></h3>
<div class="language-blender" data-highlighter="shiki" data-ext="blender" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>1. 進入編輯模式 (Tab)</span></span>
<span class="line"><span>2. 選擇頂點/邊/面</span></span>
<span class="line"><span>3. 按 E 開始擠出</span></span>
<span class="line"><span>4. 移動鼠標調整位置</span></span>
<span class="line"><span>5. 左鍵確認或右鍵取消</span></span></code></pre>
</div></div></template>


