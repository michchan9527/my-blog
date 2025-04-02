import comp from "E:/my-blog/docs/.vuepress/.temp/pages/blog/tags/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/tags/\",\"title\":\"標籤\",\"lang\":\"zh-TW\",\"frontmatter\":{\"lang\":\"zh-TW\",\"title\":\"標籤\",\"draft\":true},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"type\":\"blog-tags\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
