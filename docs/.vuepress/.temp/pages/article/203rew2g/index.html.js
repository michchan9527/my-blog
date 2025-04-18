import comp from "E:/my-blog/docs/.vuepress/.temp/pages/article/203rew2g/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/203rew2g/\",\"title\":\"Blender 學習筆記\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"Blender 學習筆記\",\"tags\":[\"3D建模\",\"快捷鍵整理\",\"Blender筆記\"],\"createTime\":\"2025/04/08 03:06:31\",\"permalink\":\"/article/203rew2g/\"},\"headers\":[],\"readingTime\":{\"minutes\":1.11,\"words\":333},\"filePathRelative\":\"程式筆記/blender_newbie.md\",\"categoryList\":[{\"id\":\"a92962\",\"sort\":10000,\"name\":\"程式筆記\"}]}")
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
