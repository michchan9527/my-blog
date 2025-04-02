export const themeData = {"locales":{"/":{"selectLanguageName":"繁體中文","selectLanguageText":"選擇語言","appearanceText":"外觀","lightModeSwitchTitle":"切換為淺色主題","darkModeSwitchTitle":"切換為深色主題","outlineLabel":"此頁內容","returnToTopLabel":"返回頂部","editLinkText":"編輯此頁","contributorsText":"貢獻者","prevPageLabel":"上一頁","nextPageLabel":"下一頁","lastUpdatedText":"最後更新於","changelogText":"變更歷史","changelogOnText":"於","changelogButtonText":"查看全部變更歷史","copyrightText":"版權所有","copyrightAuthorText":"版權歸屬：","copyrightCreationOriginalText":"本文連結：","copyrightCreationTranslateText":"本文翻譯自：","copyrightCreationReprintText":"本文轉載自：","copyrightLicenseText":"許可證：","notFound":{"code":"404","title":"頁面未找到","quote":"但是，如果你不改變方向，並且一直尋找，最終可能會到達你要去的地方。","linkText":"返回首頁"},"homeText":"首頁","blogText":"博客","tagText":"標籤","archiveText":"歷史文章","categoryText":"分類","archiveTotalText":"{count} 篇","encryptButtonText":"確認","encryptPlaceholder":"請輸入密碼","encryptGlobalText":"本站只允許密碼訪問","encryptPageText":"本頁面只允許密碼訪問","footer":false,"logo":"/Logo.png","social":[{"icon":"discord","link":"https://discord.com/users/320267626863394817"},{"icon":"youtube","link":"https://www.youtube.com/@Uooip"}],"navbarSocialInclude":["youtube"],"profile":{"name":"Felix","description":"專注記錄每一款喜歡的遊戲攻略","avatar":"/icon2.gif","location":"香港","organization":"遊戲愛好者","circle":true,"layout":"right"},"navbar":[{"text":"首頁","link":"/"},{"text":"部落格","link":"/blog/"},{"text":"標籤","link":"/blog/tags/"},{"text":"歷史文章","link":"/blog/archives/"}]}},"appearance":true,"blog":{"pagination":15,"postList":true,"tags":true,"archives":true,"categories":true,"link":"/blog/","tagsLink":"/blog/tags/","archivesLink":"/blog/archives/","categoriesLink":"/blog/categories/"},"navbarSocialInclude":["youtube"],"aside":true,"outline":[2,3],"externalLinkIcon":true,"editLink":true,"prevPage":true,"nextPage":true,"footer":false,"logo":"/Logo.png","social":[{"icon":"discord","link":"https://discord.com/users/320267626863394817"},{"icon":"youtube","link":"https://www.youtube.com/@Uooip"}],"profile":{"name":"Felix","description":"專注記錄每一款喜歡的遊戲攻略","avatar":"/icon2.gif","location":"香港","organization":"遊戲愛好者","circle":true,"layout":"right"},"contributors":true,"changelog":false}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
