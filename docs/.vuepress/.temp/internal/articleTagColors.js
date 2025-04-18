import './articleTagColors.css'
export const articleTagColors = {"3D建模":"o8t7","快捷鍵整理":"xyjb","Blender筆記":"cooi","Discord":"pgn9","插件":"1gvn","Vencord":"1vz7","自定義插件":"1hev","Python":"ji6v","Nuitka":"nnfb","打包技巧":"va11","Schedule I":"o8t7","藥物合成配方":"ji6v","遊戲筆記":"cooi","GTA V":"cooi","每週更新":"ji6v","CS2":"1gvn","設定檔":"1hev"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
