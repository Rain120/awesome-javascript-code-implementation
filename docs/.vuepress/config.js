const path = require('path');
const plugins = require('./utils/plugins');
const { sidebarHelper } = require('./utils/sidebarHelper');
const nav = require('./utils/nav');

module.exports = {
  // base: '/awesome-javascript-code-implementation/',
  base: '',
  title: '非常棒的JavaScript源码实现',
  description: '🤟🎮欢迎来到 JavaScript 源码实现 🎮🤟',
  port: 9527,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.join(__dirname, '../../'),
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
  // markdown
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true,
    },
    toc: {
      includeLevel: [1, 2],
    },
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require('markdown-it-katex'));
      md.use(require('markdown-it-task-lists'));
      md.use(require('markdown-it-imsize'), { autofill: true });
    }
  },
  themeConfig: {
    theme: 'vue',
    repo: 'https://github.com/Rain120/awesome-javascript-code-implementation',
    repoLabel: 'Repo',

    displayAllHeaders: true,
    sidebar: sidebarHelper(),
    nav,

    // polyfill IE
    evergreen: true,

    // gittalk
    comment: {
      clientID: '58efa883d352424befd3',
      clientSecret: 'faf0e2d7ff9355b3692d605d698f7abcbbd43388',
      repo: 'https://github.com/Rain120/awesome-javascript-code-implementation',
      owner: 'rain120',
      admin: ['rain120'],
      perPage: 20,
      distractionFreeMode: false  // Facebook-like distraction free mode
    },
      
    // search
    search: true,
    searchMaxSuggestions: 10,
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },

    // PWA
    serviceWorker: true,

    displayAllHeaders: true,

    smoothScroll: true,

    // footer
    date_format: 'yyyy-MM-dd',
    lastUpdated: 'Last Updated',
    repoLabel: '查看源码',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  },
  plugins
};
