import comp from "E:/my-blog/docs/.vuepress/.temp/pages/demo/98hy9z26/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/98hy9z26/\",\"title\":\"bar\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"bar\",\"createTime\":\"2025/03/21 03:59:41\",\"permalink\":\"/demo/98hy9z26/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/demo/bar.md\"}")
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
