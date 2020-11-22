---
layout: default
author: irosyadi
title:  My Workflow
date: 2020-11-22 16:49:22
path: /workflow
category: workflow
tags: workflow
draft: false
---

# My Workflow

## Writing
I'm writing the notes using [VNote](https://tamlok.gitee.io/vnote/en_us/). After comparing some notetaking apps (Obsidian, Zettlr, etc.), I choose it for some reasons:
- markdown-it support
- markdown with Mathjax plug-in
- it can be hosted in Github Pages easily with [Viki](https://tamlok.gitee.io/viki/).

## Hosting
My personal wiki is available in three static host:
- [at Netlify](https://irosyadi.netlify.app/) using [Gatsby Starter Bee](https://github.com/JaeYeopHan/gatsby-starter-bee), because:
    - it supports markdown files and folder structures
    - it is integrated with Github
    - it is fast
- [at Gitbook Site](https://irosyadi.gitbook.io/) using Gitbook, because:
    - it supports markdown files and folder structures
    - it is integrated with Github
    - it supports full text search
- [at Github Pages](https://irosyadi.github.io/) using Viki, because:
    - it supports markdown files and folder structures
    - it is integrated with Github
    - it supports VNote structure

## Syncing
So, I need to sync the notes to Gitbook and Netlify repository, and I use [SyncFolder](https://www.microsoft.com/en-us/p/syncfolder/9nc73mjwhsww) for Windows 10.

## Workflow
So, here are my workflow:
- Write markdown notes using VNote
- Sync all the files and folders with SyncFolder
- Push to Github
- ...
- Profit

## Problem with Workflow
- Ensure to make consistent format between Gitbook and Gatsby Starter Bee
- index.md in Viki will be displayed as the first page, but it will displayed as the last page in Gitbook
- readme.md will be displayed as the first page of Gitbook
- No first line texxt in Gitbook. We should started with Header to make Gitbook display the correct Header.
- In Gitbook, you cannot have two Header 1's or more.