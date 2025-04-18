import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    // app.component('CustomComponent', CustomComponent)
  },
  setup() {
    const setFavicon = (isDark: boolean) => {
      const favicon = document.getElementById('favicon') as HTMLLinkElement
      if (favicon) {
        favicon.href = isDark ? '/logo-light.png' : '/logo-dark.png'
      } else {
        // fallback：沒找到 favicon，就創一個
        const link = document.createElement('link')
        link.id = 'favicon'
        link.rel = 'icon'
        link.type = 'image/png'
        link.href = isDark ? '/logo-light.png' : '/logo-dark.png'
        document.head.appendChild(link)
      }
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    setFavicon(media.matches)
    media.addEventListener('change', e => setFavicon(e.matches))
  },
})
