export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-TW\",\"title\":\"Felix Blog\",\"description\":\"\",\"head\":[[\"link\",{\"id\":\"favicon\",\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"/logo-light.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
