import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首頁', link: '/' },
  { text: '部落格', link: '/blog/' },
  { text: '標籤', link: '/blog/tags/' },
  { text: '歷史文章', link: '/blog/archives/' },
  // {
    // text: '笔记',
    // items: [{ text: '示例', link: '/notes/demo/README.md' }]
  // },
])
