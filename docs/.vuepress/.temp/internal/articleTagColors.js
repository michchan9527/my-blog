import './articleTagColors.css'
export const articleTagColors = {"预览":"8x35","组件":"nrup","markdown":"3c28","Schedule I":"2zev","合成配方":"n1xb","藥物製作":"9n11","成品樹":"vlt4","遊戲筆記":"nrup"}

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
