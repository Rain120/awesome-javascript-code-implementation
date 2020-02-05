const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../zh');
const ignore = ['images', '.vuepress', '.DS_Store'];
const README_REG = /README/;
const { alias } = require('./alias');

const mapper = code => {
  return alias[code];
}

const isFile = ({ dir = filePath, fPath }) =>
  fs.statSync(path.join(dir, fPath)).isFile();

function syncDirPath(file = filePath) {
  return fs.readdirSync(file) || [];
}

function helper({ dir, fPath }) {
  const prefixPath = dir.split('docs')[1];
  const currentPath = path.join(dir, fPath);

  const children = syncDirPath(currentPath)
    .filter(fPath => !ignore.includes(fPath))
    .map((sub, index) => {
    const fsStats = fs.statSync(path.join(currentPath, sub));

    if (fsStats.isDirectory()) {
      return helper({ dir: currentPath, fPath: sub });
    } else if (fsStats.isFile() && !README_REG.test(sub)) {
      const name = sub.replace('\.md', '');
      return {
        title: mapper(name) || `${name}`,
        path: `${prefixPath}/${fPath}/${name}`,
      }
    }
  }).filter(Boolean);

  return {
    title: mapper(fPath) || `${fPath}`,
    path: `${prefixPath}/${fPath}/`,
    collapsable: true,
    children: Array.isArray(children) ? children : [children],
  }
}

function sidebarHelper(dir = filePath) {
  return syncDirPath(dir)
    .filter(fPath => !isFile({ fPath }) && !ignore.includes(fPath))
    .map((fPath, dirIndex) => {
      return helper({ dir, fPath }) || [];
    });
}

module.exports = {
  sidebarHelper
};
