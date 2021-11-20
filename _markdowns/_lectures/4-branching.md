---
title: "Branching"
excerpt: "Isolate feature development with git branch"
coverImage: "/git-masters/images/lr-branches-2.png"
releaseDate: "2021-10-25T16:00:00"
author: "Ali Heydari"
ogImage: "/git-masters/images/lr-branches-2.png"
tags: [lecture]
---

## what are branches

branching allows us to diverge from the main of the work and work on something else in isolation. consepullay you can think about the branch like a separate isolated workspace.

## getting a repository

## working with branches

1. create a branch: `git branch bugfix`
2. create a branch and switch: `git switch -C bugfix` or `git checkout -b bugfix`
3. switch between branches: `git switch master` or `git checkout master`
4. rename branch: `git branch -m bugfix/signp bugfix/signup`
5. delete branch: `git branch -d bugfix/signup`
6. force delete branch: `git branch -D bugfix/signup`

## comparing branches

1. show all commit from `bugfix` branch that is not in `master`: `git log master..bugfix`
2. `git diff master..bugfix`
3. `git diff --name-only master..bugfix`
4. `git diff --name-status master..bugfix`

## stashing

1. `git stash push -m "new envs"`
2. `git stash list`
3. `git stash show stash@{1}` or `git stash show 1`
4. `git stash apply 1`
5. `git stash drop 0`
6. `git stash clear`

## merging

1. fast-forward merge (if branches have not diverged)
2. 3-way merge (if branches have diverged)

## fast-forward and 3-way merges

no fast-forward merging: `git merge --no-ff develop`
no fast-forward for all repo: `git config --global ff no`

- pros:
  - True reflection of history
  - allow reverting a feature
- cons:
  - pollutes the history

## viewing merged and unmerged branches

1. `git branch --merged`
2. `git branch --no-merged`

## merge conflicts

1. change1, change2
2. change, delete
3. add1, add2

## graphical merge tools

1. p4merge
2. kdiff
3. winmerge (windows only)
4. meld
5. vs code

```bash
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd "code --wait $MERGED"
git config --global diff.tool vscode
git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"
```

## aborting a merge

`git merge --abort`

## undoing a faulty merge

1. `git reset --hard HEAD~1`
2. `git revert HEAD`
3. `git revert -m 1 HEAD`
