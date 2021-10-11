---
title: "Creating snapshots"
excerpt: "Creating snapshots with git commit"
coverImage: "/git-masters/images/git-cover.jpeg"
releaseDate: "2021-10-11T18:15:00"
author: "Ali Heydari"
name: ""
ogImage:
url: "/git-masters/images/git-cover.jpeg"
tags: [lecture]
---

## Git workflow

![Storing data as changes to a base version of each file](https://git-scm.com/book/en/v2/images/deltas.png "Storing data as changes to a base version of each file")

<figcaption>Storing data as changes to a base version of each file</figcaption>
</figure>

<figure style="text-align:center">

![Storing data as snapshots of the project over time](https://git-scm.com/book/en/v2/images/snapshots.png "Storing data as snapshots of the project over time")

<figcaption>Storing data as snapshots of the project over time</figcaption>
</figure>

<figure style="text-align:center">

![The lifecycle of the status of your files](https://git-scm.com/book/en/v2/images/lifecycle.png "The lifecycle of the status of your files")

<figcaption>The lifecycle of the status of your files</figcaption>
</figure>

## Staging files

### `git add`

1. `git add file1.js file2.js`: adding multiple file with oneline command
2. `git add package*`: adding files with wildcard
3. `git add -f index.js`: allow adding otherwise ignored files
4. `git add .`: add all file in current and subdirectory recursivly.

## Committing changes

1. `git commit`
2. `git commit -m "Initial commit"`

## Committing best practices

links: [5 Git Best Practices For Git Commit](https://www.perforce.com/blog/vcs/git-best-practices-git-commit),
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Skipping the staging area

`git commit -a`

## Removing files

1. `rm` vs `git rm`

using `rm`:

```bash
$ rm pankod-icon.svg
$ git status
On branch main
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    pankod-icon.svg

no changes added to commit (use "git add" and/or "git commit -a")
$ git add pankod-icon.svg
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    pankod-icon.svg


```

using `git rm`:

```bash
$ git rm  pankod-icon.svg
rm 'public/icons/pankod-icon.svg'

$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    pankod-icon.svg


```

2. `git rm packages/*`
3. `git rm --cached`: only remove from the index
4. `git ls-files`

## Renaming or moving files

1. `mv` vs `git mv`
2. `git mv index.js index.ts`

## Ignoring files

add gitignore file <gitignore.io>

```
$ git add .gitignore
```

> How can I make Git "forget" about a file that was tracked, but is now in .gitignore?
>
> > run command: `git rm --catched <file_or_directory_or_pattern>`

## Short status

`git status -s`

left column in output represents the staging aria
right column in output represents the working directory

## Viewing staged and unstaged changes

### `git diff --staged`

meanig of git diff output

## Visual diff tools

use VSCode add default diff tool:

```
$ git config --global diff.tool vscode
$ git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"
```

see git config settings:

`git config --global -e`

## Viewing history

### `git log`

`git log --oneline`

`git log --oneline --reverse`

## Viewing a commit

### `git show`

1. `git show COMMIT_SHA`
2. `git show HEAD`
3. `git show HEAD^^`
4. `git show HEAD~2`
5. `git show HEAD~2:.gitignore`
6. `git show HEAD~2:src/index.ts`
7. `git ls-tree HEAD~3`

### Git objects

1. commits
2. blobs (files)
3. trees (directories)
4. tags

## Unstaging files

`git reset --hard`

`git restore`

`git restore --staged index.js`

## Discarding local changes

`git restore .`

`git clean`

`git clean -fd`

## Restoring a file to an earlier version

`git restore --source=HEAD~1 index.js`

---

Attachments:
[session video 📺](\\\\192.168.100.14\Training Courses\git)
