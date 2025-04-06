export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/g1p0hc4m/\",\"/preview/markdown.html\":\"/article/o431c8um/\",\"/Python/synthesis_gui.html\":\"/article/3r5mbtgi/\",\"/notes/demo/bar.html\":\"/demo/98hy9z26/\",\"/notes/demo/foo.html\":\"/demo/z3bdpvn0/\",\"/notes/demo/\":\"/demo/\",\"/%E9%81%8A%E6%88%B2/GTA%20V/2025-04-03--09.html\":\"/article/ct0zq997/\",\"/%E9%81%8A%E6%88%B2/Schedule%20I/recipes.html\":\"/article/lrypvr3h/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/g1p0hc4m/", { loader: () => import(/* webpackChunkName: "article_g1p0hc4m_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/article/g1p0hc4m/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/o431c8um/", { loader: () => import(/* webpackChunkName: "article_o431c8um_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/article/o431c8um/index.html.js"), meta: {"title":"Markdown"} }],
  ["/article/3r5mbtgi/", { loader: () => import(/* webpackChunkName: "article_3r5mbtgi_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/article/3r5mbtgi/index.html.js"), meta: {"title":"Nuitka 打包 PySide6 GUI 的資源路徑解決方案"} }],
  ["/demo/98hy9z26/", { loader: () => import(/* webpackChunkName: "demo_98hy9z26_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/demo/98hy9z26/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/z3bdpvn0/", { loader: () => import(/* webpackChunkName: "demo_z3bdpvn0_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/demo/z3bdpvn0/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/article/ct0zq997/", { loader: () => import(/* webpackChunkName: "article_ct0zq997_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/article/ct0zq997/index.html.js"), meta: {"title":"GTA Online 每週更新：2025/04/03～04/09"} }],
  ["/article/lrypvr3h/", { loader: () => import(/* webpackChunkName: "article_lrypvr3h_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/article/lrypvr3h/index.html.js"), meta: {"title":"Death Puke 產品"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/my-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"部落格"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"標籤"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"歷史文章"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"E:/my-blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分類"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
