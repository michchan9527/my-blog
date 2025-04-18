<template><div><blockquote>
<p>本篇將教你如何從 GitHub 下載 <a href="https://github.com/Vencord/Vencord" target="_blank" rel="noopener noreferrer">Vencord</a> 原始碼，並注入你自製的插件。</p>
</blockquote>
<h2 id="📦-安裝前準備" tabindex="-1"><a class="header-anchor" href="#📦-安裝前準備"><span>📦 安裝前準備</span></a></h2>
<h3 id="✅-需要安裝的工具" tabindex="-1"><a class="header-anchor" href="#✅-需要安裝的工具"><span>✅ 需要安裝的工具</span></a></h3>
<ul>
<li><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a> (推薦 LTS 版本）</li>
<li><a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Git</a></li>
</ul>
<p>安裝完 Node.js 後，直接執行以下指令安裝 pnpm：</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pnpm</span></span></code></pre>
</div><h2 id="🛠️-步驟一-clone-vencord-原始碼" tabindex="-1"><a class="header-anchor" href="#🛠️-步驟一-clone-vencord-原始碼"><span>🛠️ 步驟一：Clone Vencord 原始碼</span></a></h2>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/Vencord/Vencord.git</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Vencord</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span></code></pre>
</div><h2 id="🧩-步驟二-載入他人製作的自定義插件" tabindex="-1"><a class="header-anchor" href="#🧩-步驟二-載入他人製作的自定義插件"><span>🧩 步驟二：載入他人製作的自定義插件</span></a></h2>
<p>假設你找到一個自定義插件的 GitHub，例如：</p>
<p><code v-pre>https://github.com/Its3rr0rsWRLD/fileShare</code></p>
<p>請依下列步驟操作：</p>
<ol>
<li>前往 src/ 目錄，如果沒有 userplugins 資料夾，請手動建立:</li>
</ol>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> src</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> userplugins</span></span></code></pre>
</div><ol start="2">
<li>將插件 Clone 到 userplugins 裡面:</li>
</ol>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> userplugins</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/Its3rr0rsWRLD/fileShare.git</span></span></code></pre>
</div><p>確認目錄結構如下：</p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">Vencord</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-src"></VPIcon><span class="name">src</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">userplugins</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">bigFileUpload</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-reactts"></VPIcon><span class="name">index.tsx</span></span></FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</div><h2 id="⚙️-步驟三-注入到-discord" tabindex="-1"><a class="header-anchor" href="#⚙️-步驟三-注入到-discord"><span>⚙️ 步驟三：注入到 Discord</span></a></h2>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> inject</span></span></code></pre>
</div><h2 id="✅-成功載入後" tabindex="-1"><a class="header-anchor" href="#✅-成功載入後"><span>✅ 成功載入後</span></a></h2>
<p>重新啟動 Discord，進入 Vencord 的 Plugins 頁面，應該就可以看到你新增的插件了！</p>
<h2 id="📝-備註" tabindex="-1"><a class="header-anchor" href="#📝-備註"><span>📝 備註</span></a></h2>
<ul>
<li>注入前先關閉 Discord</li>
<li>插件若有語法錯誤，注入後不會出現，請檢查 Terminal 輸出錯誤。</li>
</ul>
<h2 id="📚-參考資料" tabindex="-1"><a class="header-anchor" href="#📚-參考資料"><span>📚 參考資料</span></a></h2>
<ul>
<li><a href="https://github.com/Vencord/Vencord" target="_blank" rel="noopener noreferrer">Vencord GitHub</a></li>
</ul>
</div></template>


