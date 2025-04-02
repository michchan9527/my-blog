import comp from "E:/my-blog/docs/.vuepress/.temp/pages/blog/archives/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/archives/\",\"title\":\"歷史文章\",\"lang\":\"zh-TW\",\"frontmatter\":{\"lang\":\"zh-TW\",\"title\":\"歷史文章\",\"draft\":true},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"type\":\"blog-archives\"}")
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
