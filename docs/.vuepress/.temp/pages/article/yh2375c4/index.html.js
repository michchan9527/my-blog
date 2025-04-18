import comp from "E:/my-blog/docs/.vuepress/.temp/pages/article/yh2375c4/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/yh2375c4/\",\"title\":\"test\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"test\",\"createTime\":\"2025/04/11 14:20:11\",\"permalink\":\"/article/yh2375c4/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"程式筆記/test.md\",\"categoryList\":[{\"id\":\"a92962\",\"sort\":10001,\"name\":\"程式筆記\"}]}")
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
