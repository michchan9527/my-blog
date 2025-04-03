import './articleTagColors.css'
export const articleTagColors = {"预览":"cv2l","组件":"4wpo","markdown":"it2e","Schedule I":"0cn1","藥物合成配方":"2qzt","遊戲筆記":"4wpo"}

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
