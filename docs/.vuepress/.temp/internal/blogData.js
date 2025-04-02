export const blogPostData = [{"path":"/article/lrypvr3h/","title":"Death Puke 產品","categoryList":[{"id":"c80c46","sort":10001,"name":"遊戲"},{"id":"b0693a","sort":10002,"name":"Schedule I"}],"tags":["Schedule I","合成配方","藥物製作","成品樹","遊戲筆記"],"createTime":"2025/04/02 21:34:35","lang":"zh-TW","excerpt":"","cover":"/Schedule I/Death Puke.png","coverStyle":{"layout":"right","width":300,"compact":true}}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
