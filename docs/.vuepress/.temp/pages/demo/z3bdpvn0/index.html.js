import comp from "E:/my-blog/docs/.vuepress/.temp/pages/demo/z3bdpvn0/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/z3bdpvn0/\",\"title\":\"foo\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2025/03/21 03:59:41\",\"permalink\":\"/demo/z3bdpvn0/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/demo/foo.md\"}")
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
