module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: '/vue-twemoji-picker/',
  title: 'Vue Twemoji Picker',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'My Portfolio', link: 'https://kevinfaveri.now.sh/' },
      { text: 'Github Repo', link: 'https://github.com/kevinfaguiar/vue-twemoji-picker' }
    ],
    sidebar: {
      '/docs/': getSidebar('Docs'),
    }
  },
  plugins: ['vuepress-plugin-smooth-scroll', 'vuepress-plugin-nprogress', '@vuepress/back-to-top'],
}

function getSidebar(groupName) {
  return [
    {
      title: groupName,
      collapsable: false,
      children: [
        '',
        'getting-started/',
        'twemoji-picker-api/',
        'twemoji-textarea-api/',
        'emoji-datasets/',
        'localization/',
        'services/',
        'changelog/',
      ]
    }
  ]
}

// TODO: API SIDEBAR