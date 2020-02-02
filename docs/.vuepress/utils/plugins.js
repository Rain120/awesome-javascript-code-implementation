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
  ['@vuepress/pwa',
    {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: {
        '/': {
          message: "New content is available.",
          buttonText: "Refresh"
        },
        '/zh/': {
          message: "发现新内容可用",
          buttonText: "刷新"
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
