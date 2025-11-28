---
title: "Git tools"
excerpt: "Some git related tools that improves your productivity"
coverImage: ""
releaseDate: "2021-11-29T16:00:00"
author: "Ali Heydari"
ogImage: ""
tags: [lecture]
---

## [Git-Flow](https://github.com/petervanderdoes/gitflow-avh)

git flow is a set of tools that helps you to manage your git workflow.

- To initialize a new repo with the basic branch structure, use:

```shell
    git flow init [-d]
```

The `-d` flag will accept all defaults.

This will then interactively prompt you with some questions on which branches
you would like to use as development and production branches, and how you
would like your prefixes be named. You may simply press Return on any of
those questions to accept the (sane) default suggestions.

![Screencast git flow init](http://i.imgur.com/lFQbY5V.gif)

- To list/start/finish/delete feature branches, use:

```shell
git flow feature
git flow feature start <name> [<base>]
git flow feature finish <name>
git flow feature delete <name>
```

For feature branches, the `<base>` arg must be a branch, when omitted it defaults to the develop branch.

- To push/pull a feature branch to the remote repository, use:

```shell
git flow feature publish <name>
git flow feature track <name>
```

- To list/start/finish/delete release branches, use:

```shell
git flow release
git flow release start <release> [<base>]
git flow release finish <release>
git flow release delete <release>
```

For release branches, the `<base>` arg must be a branch, when omitted it defaults to the develop branch.

- To list/start/finish/delete hotfix branches, use:

```shell
git flow hotfix
git flow hotfix start <release> [<base>]
git flow hotfix finish <release>
git flow hotfix delete <release>
```

For hotfix branches, the `<base>` arg must be a branch, when omitted it defaults to the production branch.

- To list/start support branches, use:

```shell
git flow support
git flow support start <release> <base>
```

For support branches, the `<base>` arg must be a branch, when omitted it defaults to the production branch.

### Share features with others

You can easily publish a feature you are working on. The reason can be to allow other programmers to work on it or to access it from another machine. The publish/track feature of gitflow simplify the creation of a remote branch and its tracking.

When you want to publish a feature just use:

```shell
git flow feature publish <name>
```

or, if you already are into the `feature/<name>` branch, just issue:

```shell
git flow feature publish
```

Now if you execute `git branch -avv` you will see that your branch `feature/<name>` tracks `[origin/feature/<name>]`. To track the same remote branch in another clone of the same repository use:

```shell
git flow feature track <name>
```

This will create a local feature `feature/<name>` that tracks the same remote branch as the original one, that is `origin/feature/<name>`.

When one developer (depending on your work flow) finishes working on the feature he or she can issue `git flow feature finish <name>` and this will automatically delete the remote branch. All other developers shall then run:

```shell
    git flow feature delete <name>
```

to get rid of the local feature that tracks a remote branch that no more exist.

### Share hotfixes with others

You can publish an hotfix you are working on. The reason can be to allow other programmers to work on it or validate it or to access it from another machine.

When you want to publish an hotfix just use (as you did for features):

```shell
git flow hotfix publish <name>
```

or, if you already are into the `hotfix/<name>` branch, just issue:

```shell
git flow hotfix publish
```

Other developers can now update their repositories and checkout the hotfix:

```shell
git pull
git checkout hotfix/<name>
```

and eventually finish it:

```shell
git flow hotfix finish
```

## [Delta](https://github.com/dandavison/delta)

A syntax-highlighting pager for git and diff output

You can download an executable for your system:
[releases](https://github.com/dandavison/delta/releases)

<table>
  <tr>
    <td>
      <img width=800px src="https://user-images.githubusercontent.com/52205/87230973-412eb900-c381-11ea-8aec-cc200290bd1b.png" alt="image" />
      <br>
      <sub>delta with <code>side-by-side</code> and <code>line-numbers</code> activated</sub>
    </td>
  </tr>
</table>

<sub>

```gitconfig
[core]
    pager = delta
[interactive]
    diffFilter = delta --color-only --features=interactive
[delta]
    features = decorations
[delta "interactive"]
    keep-plus-minus-markers = false
[delta "decorations"]
    commit-decoration-style = blue ol
    commit-style = raw
    file-style = omit
    hunk-header-decoration-style = blue box
    hunk-header-file-style = red
    hunk-header-line-number-style = "#067a00"
    hunk-header-style = file line-number syntax
```

</sub>

## [Meld](https://meldmerge.org/)

A GUI for git merges.
Meld is a visual diff and merge tool targeted at developers. Meld helps you compare files, directories, and version controlled projects. It provides two- and three-way comparison of both files and directories, and has support for many popular version control systems.

## [Commitizen CLI](https://github.com/commitizen/cz-cli)

The commitizen command line utility.

### Installing the command line tool

Commitizen is currently tested against Node.js 12, 14, & 16, although it may work in
older versions of Node.js. You should also have npm 6 or greater.

Installation is as simple as running the following command (if you see `EACCES` error, reading [fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) may help):

```sh
npm install -g commitizen
```

[Making your repo Commitizen friendly](https://github.com/commitizen/cz-cli/blob/master/README.md#making-your-repo-commitizen-friendly)

## Commit lint

Lint commit messages

## [Husky](https://github.com/typicode/husky)

Git hooks made easy.

A git hook to prettify staged files:

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pretty-quick --staged
```

## [Lefthook](https://github.com/evilmartians/lefthook)

Fast and powerful Git hooks manager for any type of projects.

## [Lint staged](https://github.com/okonet/lint-staged)

Run linters against staged git files

```shell
npx mrm@2 lint-staged
```

## [Git jump](https://github.com/mykolaharmash/git-jump)

Improved navigation between Git branches.

```shell
npm install -g git-jump
```

```shell
git jump <branch name>
```

Switches to a branch. `<branch name>` can be just part of the name, `git jump` will look for the best matching branch.

<br />

```shell
git jump [--list | -l]
```

Shows a plain list of branches without interactive UI but with sorting.

<br />

```shell
git jump <any native switch arguments>
```

You can use `git jump` as a drop-in replacement for [native `git switch`](https://git-scm.com/docs/git-switch). `git jump` will proxy all the argument to the native command, so you don't have to think to use one or the other.

For example `git jump my-branch --discard-changes` works just fine.

<br />

```shell
git jump new <branch name>
```

Creates a new branch and switches into it. Supports all native parameters of `git switch`, for example `git jump new <branch name> --track origin/main`.

<br />

```shell
git jump rename <branch name> <new branch name>
```

Renames a branch.

<br />

```shell
git jump delete <branch name> [<branch name>, ...]
```

Deletes one or multiple branches. No fuzzy matching here, of course 🙂.

## [MergeStat](https://github.com/mergestat/mergestat)

Query git repositories with SQL. Generate reports, perform status checks, analyze codebases. 🔍 📊

`mergestat` is a command-line tool for running SQL queries on git repositories and related data sources.
It's meant for ad-hoc querying of source-code on disk through a common interface (SQL), as an alternative to patching together various shell commands.
It can execute queries that look like:

```sql
-- how many commits have been authored by user@email.com?
SELECT count(*) FROM commits WHERE author_email = 'user@email.com'
```

You can try queries on public git repositories without installing anything at [try.askgit.com](https://try.askgit.com/), in our `Public` workspace.

## [Gitomatic](https://github.com/muesli/gitomatic)

Monitor a repository for changes and automatically pull & push changes:

```
gitomatic <path>
2019/08/03 00:16:48 Checking repository: /tmp/gitomatic-test/
2019/08/03 00:16:48 Pulling changes...
2019/08/03 00:16:49 New file detected: hello_world.txt
2019/08/03 00:16:49 Adding file to work-tree: hello_world.txt
2019/08/03 00:16:49 Creating commit: Add hello_world.txt.
2019/08/03 00:16:49 Pushing changes...
2019/08/03 00:16:53 Sleeping until next check in 10s...
2019/08/03 00:17:03 Checking repository: /tmp/gitomatic-test/
2019/08/03 00:17:03 Pulling changes...
2019/08/03 00:17:07 Deleted file detected: hello_world.txt
2019/08/03 00:17:07 Removing file from work-tree: hello_world.txt
2019/08/03 00:17:07 Creating commit: Remove hello_world.txt.
2019/08/03 00:17:07 Pushing changes...
```

Auth methods:

```
gitomatic -privkey ~/.ssh/id_rsa <path>
gitomatic -username "someone" -password "mypass" <path>
```

If you want to pull new changes but don't create commits (or vice versa):

```
gitomatic -pull=true -push=false <path>
```

You can control how often gitomatic checks for changes:

```
gitomatic -interval 30m <path>
```

Change the commit author's name and email:

```
gitomatic -author "John Doe" -email "some@mail.tld" <path>
```

## [Gitmoji](https://gitmoji.dev/)

An emoji guide for your commit messages

```shell
npm i -g gitmoji-cli
```

---

Attachments:
[session video 📺](\\\\192.168.100.14\Training Courses\git)
