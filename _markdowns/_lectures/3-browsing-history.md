---
title: "Browsing history"
excerpt: "Browsing history in git"
coverImage: "/git-masters/images/git-log-output.png"
releaseDate: "2021-10-18T16:00:00"
author: "Ali Heydari"
ogImage: "/git-masters/images/git-log-output.png"
tags: [lecture]
---

## getting a repository

clone the website repo

## viewing the history

### `git log`

navigaion with space, up and down arrow keys, and `q` for quit

1. `git log`
2. `git log --oneline`
3. `git log --stat`
4. `git log --oneline --stat`
5. `git log --patch` or `git log -p`

## filtering the history

filter by author:

`git log --oneline --author="Ali Heydari"`

filter by specific date:

1. `git log --after 2021-09-11`
2. `git log --before 2021-09-11`
3. `git log --after 2021-09-11 --before 2021-09-30`

filter by releative date:

`git log --after "one week ago" --before "yesterday"`

filter by commit message:

`git log --oneline --grep="feat"` (note that grep is case sensitive)

filter by content:

1. `git log --oneline -S"React.FC = (props)"`
2. `git log --oneline -S"React.FC = (props)" --patch`

filter by paticular range:

`git log --oneline 7bdaa1d..a7608d6`

filter all commits that modified paticular file:

1. `git log --oneline _app.tsx`
2. `git log --oneline -- _app.tsx`
3. `git log --oneline --patch _app.tsx`

## formatting the log output

1. `git log --pretty=format:"%an commited %h on %cd"`
2. `git log --pretty=format:"%Cgreen%an%Creset commited %Cred%h%Creset on %cd"`

## aliases

1. `git config --global alias.lg "log --pretty=format:'%Cgreen%an%Creset commited %Cred%h%Creset on %cd'"`
2. `git config --global alias.unstage "restore --staged ."`

## viewing a commit

1. `git show HEAD~20`
2. `git show HEAD~20:pages/_app.tsx`
3. `git show HEAD~20 --name-only`
4. `git show HEAD~20 --name-status`

## viewing the changes across commits

1. `git diff HEAD~2 HEAD`
2. `git diff HEAD~2 HEAD --name-only`
3. `git diff HEAD~2 HEAD --name-status`

## checking out a commit

`git checkout SHA1`

## finding bugs using bisect

```bash
git bisect start
git bisect bad
git bisect good SHA1
git log --oneline --all
# ...
git bisect reset
```

## finding contributors using shortlog

1. `git shortlog`
2. `git shortlog -h`
3. `git shortlog -n`
4. `git shortlog -e`
5. `git shortlog -n -s -e --before="2021-09-11" --after="2021-09-30"`

## viewing the history of a file

1. `git log --oneline .github/workflows/deploy.yml`
2. `git log --oneline --stat .github/workflows/deploy.yml`
3. `git log --oneline --patch .github/workflows/deploy.yml`

## restoring a deleting file

```bash
git log --oneline -- DELETED_FILE
git checkout SHA1 DELETED_FILE
```

## finding the author of line using blame

1. `git blame package.json`
2. `git blame -e package.json`
3. `git blame -e -L 1,10 package.json`

## tagging

1. `git tag v0.0.2`
2. `git tag SHA v0.0.1`
3. `git tag -a v0.0.1-alpha -m "open alpha version"`
4. `git tag -d v0.0.1-alpha`

---

Attachments:
[session video 📺](\\\\192.168.100.14\Training Courses\git)
