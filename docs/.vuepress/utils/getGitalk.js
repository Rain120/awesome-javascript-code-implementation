/*
 * @Author: Rainy
 * @Date: 2020-02-07 11:06:08
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-02-07 12:49:22
 */

// export default ({ pages }) => {
//   const path = window.location.pathname || 'comment';
//   // 获取当前页面信息
//   const dist = pages.filter(item => {
//     return item.path === path;
//   })[0];

//   //只有在isNoPage是false的时候才会显示评论
//   if (!dist.frontmatter || !dist.frontmatter.isNoPage) {
//     const page = document.querySelector('.page');

//     const linkGitalk = document.createElement('link');
//     linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
//     linkGitalk.rel = 'stylesheet';
//     document.body.appendChild(linkGitalk);

//     const scriptGitalk = document.createElement('script');
//     scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
//     document.body.appendChild(scriptGitalk);

//     scriptGitalk.onload = () => {
//       let gitalk = document.createElement('div');
//       gitalk.id = 'gitalk-container';
//       page.appendChild(gitalk);
//       var _gitalk = new Gitalk({
//         clientID: '58efa883d352424befd3',
//         clientSecret: 'faf0e2d7ff9355b3692d605d698f7abcbbd43388',
//         repo: 'https://github.com/Rain120/awesome-javascript-code-implementation',
//         owner: 'rain120',
//         admin: ['rain120'],
//         // id: window.location.pathname || fullPath || 'comment',
//         distractionFreeMode: false,
//         language: 'zh-CN',
//         id: decodeURI(path) // 每个页面根据url生成对应的issue，保证页面之间的评论都是独立的
//       });
//       _gitalk.render('gitalk-container');
//     };
//   }
// };


function tryRun (fn, times = 3) {
  let execCount = 1;
  fn(next);
  function next(delay) {
    if (execCount >= times) {
      return;
    }
    setTimeout(() => {
    execCount += 1
    fn(next)
    }, delay);
  }
}

export default ({ router }) => {
  const linkGitalk = document.createElement('link');
  linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
  linkGitalk.rel = 'stylesheet';
  document.body.appendChild(linkGitalk);

  const scriptGitalk = document.createElement('script');
  scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
  document.body.appendChild(scriptGitalk);

  router.afterEach((to, from) => {
    if (scriptGitalk.onload) {
      loadGitalk(to);
    } else {
      scriptGitalk.onload = () => {
        loadGitalk(to);
      };
    }
  });

  function loadGitalk(to) {
    let commentsContainer = document.getElementById('gitalk-container');
    if (!commentsContainer) {
      commentsContainer = document.createElement('div');
      commentsContainer.id = 'gitalk-container';
      commentsContainer.classList.add('content');
    }
    const $page = document.querySelector('.page');
    if ($page) {
      $page.appendChild(commentsContainer);
      if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
        renderGitalk(to.fullPath);
      }
    }
  }

  function renderGitalk(fullPath) {
    const path = window.location.pathname || fullPath || 'comment';

    const gitalk = new Gitalk({
      clientID: '58efa883d352424befd3',
      clientSecret: 'faf0e2d7ff9355b3692d605d698f7abcbbd43388',
      repo: 'https://github.com/Rain120/awesome-javascript-code-implementation',
      owner: 'rain120',
      admin: ['rain120'],
      distractionFreeMode: false,
      language: 'zh-CN',
      id: decodeURI(path), // 每个页面根据url生成对应的issue，保证页面之间的评论都是独立的
    });
    gitalk.render('gitalk-container');
  }
}

