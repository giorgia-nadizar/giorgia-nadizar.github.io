#!/usr/bin/env sh
# abort on errors
set -e
# set node env variable
export NODE_OPTIONS=--openssl-legacy-provider
# update
node update.js
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'Deploy.'
git push -f git@github.com:giorgia-nadizar/academic-website.git master:gh-pages
cd -
git add .
git commit -m 'Update.'
git push
