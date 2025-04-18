import comp from "E:/my-blog/docs/.vuepress/.temp/pages/程式筆記/blender_newbie.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%A8%8B%E5%BC%8F%E7%AD%86%E8%A8%98/blender_newbie.html\",\"title\":\"\",\"lang\":\"zh-TW\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"程式筆記/blender_newbie.md\",\"categoryList\":[{\"id\":\"a92962\",\"sort\":10005,\"name\":\"程式筆記\"}]}")
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
