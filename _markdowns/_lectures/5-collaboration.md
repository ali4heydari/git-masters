---
title: "Collaboration"
excerpt: "Collaboration with team in git"
coverImage: "/git-masters/images/managed-team-1.png"
releaseDate: "2021-11-01T16:00:00"
author: "Ali Heydari"
ogImage: "/git-masters/images/managed-team-1.png"
tags: [lecture]
---

## cloning a repository

1. `git clone <repository_url>`
2. `git clone --branch=develop <repository_url>`

## get repository remotes

`git remote -v`

## fetching

1. `git fetch origin master`
2. `git fetch origin`
3. `git fetch`
4. `git fetch --all`
5. `git fetch --write-commit-graph`

## pulling

1. pull = fetch + merge: `git pull origin master`
2. pull = fetch + rebase: `git pull --rebase` ⚠⚠⚠

## switching to remote branch

`git switch origin/develop`

## pushing

1. `git push origin master`
2. `git branch -vv`
3. `git branch -r`
4. `git push -u origin master`
5. `git push -d origin ali/feat/sentry`
6. `git push -f ali/test/signup` ⚠⚠⚠
7. `git remote prune origin` ⚠

## sharing tags

1. `git push origin v1.0.0`
2. `git push origin --delete v1.0.0`
3. `git tag -d v1.0.0`

## working with remotes

1. `git remote add upstream`
2. `git remote get-url upstream`
3. `git remote set-url upstream <new_repository_url>`
4. `git remote rename upstream base`
5. `git remote remove base`
