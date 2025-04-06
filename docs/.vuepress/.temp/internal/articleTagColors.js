import './articleTagColors.css'
export const articleTagColors = {"预览":"nz9d","组件":"oj35","markdown":"9lt0","Python":"ku2v","Nuitka":"ky8q","打包技巧":"2oh4","GTA V":"oj35","每週更新":"ku2v","Schedule I":"bcmc","藥物合成配方":"ku2v","遊戲筆記":"oj35"}

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
