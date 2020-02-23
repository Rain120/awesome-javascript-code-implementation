const moment = require('moment');

module.exports = [
  ['@vuepress/back-to-top'],
  [
    '@vuepress/google-analytics',
    {
      ga: 'UA-153944249-1'
    }
  ],
  [
    '@vuepress/medium-zoom',
    {
      // selector: 'img.zoom-custom-imgs',
      options: {
        margin: 16
      }
    }
  ],
  [
    'vuepress-plugin-awesome-gitalk',
    {
      home: false,
      gitalk: {
        clientID: '58efa883d352424befd3',
        clientSecret: 'faf0e2d7ff9355b3692d605d698f7abcbbd43388',
        repo: 'awesome-javascript-code-implementation',
        owner: 'Rain120',
        admin: ['Rain120'],
        ignorePaths: [],
        distractionFreeMode: true,
        language: 'zh-CN',
      }
    }
  ],
  ['@vuepress/pwa',
    {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: {
        '/': {
          message: "官人, 人家又有新货了, 快来玩呀",
          buttonText: "我来啦"
        },
        '/zh/': {
          message: "官人, 人家又有新货了, 快来玩呀",
          buttonText: "我来啦"
        }
      }
    }
  ],
  ['@vuepress/blog'],
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    }
  ]
];
