import comp from "E:/my-blog/docs/.vuepress/.temp/pages/article/g1p0hc4m/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/g1p0hc4m/\",\"title\":\"自定义组件\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"自定义组件\",\"tags\":[\"预览\",\"组件\"],\"createTime\":\"2025/03/21 03:59:41\",\"permalink\":\"/article/g1p0hc4m/\",\"draft\":true},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"preview/custom-component.example.md\",\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10000,\"name\":\"preview\"}]}")
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
