import { defineThemeConfig } from 'vuepress-theme-plume'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/Logo.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'discord', link: 'https://discord.com/users/320267626863394817' },
    { icon: 'youtube', link: 'https://www.youtube.com/@Uooip' },
  ],
  navbarSocialInclude: ['youtube'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
	footer: false,
  // footer: {
    // message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    // copyright: '',
  // },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    name: 'Felix',
    description: '專注記錄每一款喜歡的遊戲攻略',
    avatar: '/icon2.gif',
    location: '香港',
    organization: '遊戲愛好者',
    circle: true,
    layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
  },

  locales: {
    // 非内置语言的语言代码
    '/': { 
      archiveText: '歷史文章',
    },
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
