import comp from "E:/my-blog/docs/.vuepress/.temp/pages/article/wlvxlymi/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/wlvxlymi/\",\"title\":\"載入 Vencord 自定義插件教學\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"載入 Vencord 自定義插件教學\",\"tags\":[\"Discord\",\"插件\",\"Vencord\",\"自定義插件\"],\"createTime\":\"2025/04/18 12:03:02\",\"permalink\":\"/article/wlvxlymi/\"},\"headers\":[],\"readingTime\":{\"minutes\":1.07,\"words\":320},\"filePathRelative\":\"程式筆記/discord_inject_custom_plugin.md\",\"categoryList\":[{\"id\":\"a92962\",\"sort\":10000,\"name\":\"程式筆記\"}]}")
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
