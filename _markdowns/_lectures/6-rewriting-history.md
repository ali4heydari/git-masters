---
title: "Rewriting history"
excerpt: "Getting familiar with commands that rewrites the git history"
coverImage: "/git-masters/images/rebase.png"
releaseDate: "2021-11-22T16:00:00"
author: "Ali Heydari"
ogImage: "/git-masters/images/rebase.png"
tags: [lecture]
---

## Squash merging

1. `git merge --squash bugfix/signup`
2. `git commit -m "[meaningfull message that represent all changes in bugfix/signup]"`
3. `git merge --no-merged`
4. `git branch -D bugfix/signup`

## Cherry-picking

1. `git cherry-pick <commit-sha>`
2. `git restore --source=ali/feat/dark-theme -- src/_app.ts`

## Rebasing

1. in target branch run: `git rebase other-branch`
2. in case of conflict use: `git rebase --continue|--skip|--abort`

## Why rewrite history

> Why we need history?
>
> Because we need to know **WHAT** was changed, **WHY** and **WHEN**.

### Bad history:

- Poor commit messages
- Large commits
- Small commits

### Tools:

- Squash small, related commits
- Split large commits
- Reword commit messages
- Drop unwanted commits
- Modify commits

## The golden rule of rewriting history

> Don't rewrite **PUBLIC** history!
>
> If you need to rewrite history, you should be rewriting your **PRIVATE** history.

## Undoing commits

`git reset --hard HEAD~1`

## Reverting commits

`git revert HEAD|<COMMIT_SHA>`

## Recovering lost commits

1. `git reflog`

## Amending the last commit

1. `git commit --amend`
2. `git commit --amend --no-edit`

## Amending an earlier commit

1. `git rebase -i <COMMIT_SHA>|<BRANCH_NAME>`
   - choose the commit you want to amend
   - edit the commit
2. `git add .`
3. `git commit --amend`
4. `git rebase --continue`
5. `git rebase --skip`
6. `git rebase --abort`

## Dropping commits

1. `git rebase -i`
2. write `drop` in front of the commit you want to drop or remove the commit line

## Rewording commit messages

1. `git rebase -i`
2. write `reword` in front of the commit you want to reword

## Reordering commits

1. `git rebase -i`
2. reorder commits

## Squashing commits

1. `git rebase -i`
2. write `squash` in front of the commit you want to squash

## Splitting a commit

1. `git rebase -i`
2. write `edit` in front of the commit you want to split
3. make changes
4. add changes that you want to keep
5. commit
6. make other changes
7. add other changes to staging area
8. commit
