const path = require('path');
const plugins = require('./utils/plugins');
const { sidebarHelper, sortSidebar } = require('./utils/sidebarHelper');
const nav = require('./utils/nav');

/**
 * sortSidebar 根据 alias 设置顺序，默认顺序为 文件夹名字的顺序
 */

const sidebar = sortSidebar(sidebarHelper());

// git pages base project name -> /awesome-javascript-code-implementation/, netlify base: ''
// deploy https://rain120.github.io/awesome-javascript-code-implementation build has argv
// more info go to deploy.sh
const ARGV = (process.argv || []).slice(-1)[0];
const base = ARGV !== 'docs' ? ARGV : '';

module.exports = {
  // base: '/awesome-javascript-code-implementation/',
  base,
  title: '非常棒的JavaScript源码实现',
  description: '🤟🎮欢迎来到 JavaScript 源码实现 🎮🤟',
  port: 9527,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.join(__dirname, '../..'),
      }
    }
  },
  // chainWebpack:(config,isServer) =>{
  //   config.resolve.alias.set('@images',path.resolve(__dirname, '../../'))
  // },
  // locales: {
  //   '/zh': {
  //     lang: 'zh-CN', 
  //   },
  //   '/en': {
  //     lang: 'en-US', 
  //   }
  // },
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
    sidebar,
    nav,

    // polyfill IE
    evergreen: true,

    // gittalk
    // comment: {
    //   clientID: '58efa883d352424befd3',
    //   clientSecret: 'faf0e2d7ff9355b3692d605d698f7abcbbd43388',
    //   repo: 'awesome-javascript-code-implementation',
    //   owner: 'rain120',
    //   admin: ['rain120'],
    //   perPage: 20,
    //   distractionFreeMode: false  // Facebook-like distraction free mode
    // },
      
    // search
    search: true,
    searchMaxSuggestions: 10,
    // algolia: {
    //   apiKey: '',
    //   indexName: ''
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
