/*
 * @Author: Rainy
 * @Date: 2019-12-01 14:25:59
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-05 20:38:59
 */

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

function integrateGitalk(router) {
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
    const gitalk = new Gitalk({
      clientID: '58efa883d352424befd3',
      clientSecret: 'faf0e2d7ff9355b3692d605d698f7abcbbd43388',
      repo: 'https://github.com/Rain120/awesome-javascript-code-implementation',
      owner: 'rain120',
      admin: ['rain120'],
      id: window.location.pathname || fullPath || 'comment',
      distractionFreeMode: false,
      language: 'zh-CN'
    });
    gitalk.render('gitalk-container');
  }
}

export default ({ Vue, options, router }) => {
  try {
    document && integrateGitalk(router);
  } catch (e) {
    console.error(e.message);
  }
};
