#!/usr/bin/env sh

set -e

npm run docs:build '/awesome-javascript-code-implementation/'

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy vuepress docs gh-pages'

git push -f git@github.com:Rain120/awesome-javascript-code-implementation.git master:gh-pages

cd -
