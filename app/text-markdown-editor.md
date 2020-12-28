---
layout: default
author: irosyadi
title:  Text and Markdown Editor
date: 2020-12-20 21:43:32
category: app
tags: ["text", "markdown", "editor"]
draft: false
---

# Text and Markdown Editor

## Web based text editor
- [Texteditor](https://texteditor.co/) : open from local and cloud, write, save, donwload to local and cloud, no grammar
- [Browserpad](https://browserpad.org/#) : read write local file, no grammar
- [Editpad](https://www.editpad.org/) : only write to local file, no import, grammar support
- [Textarea](https://textarea.online/) or [Mytextarea at Outpan](https://www.outpan.com/app/e7d5b37405/mytextarea): in mytextarea read write local but .txt only, grammar support
- [Trix Editor](https://trix-editor.org/), grammar support
- [Zen](https://zen.unit.ms/): write, save, download, grammar support
- [Note Rosyadi.com](http://file.rosyadi.com/note.html)
- `data:text/html, <body contenteditable style="font: 2rem/1.5 monospace;max-width:60rem;margin:0 auto;padding:4rem;">` : work for LanguageTools
- `data:text/html, <body contenteditable style="font-size:2rem;line-height:1.4;max-width:60rem;margin:0 auto;padding:4rem;>`
- `data:text/html;charset=utf-8, <title>TextEditor</title><body contenteditable style="font-size:2rem;font-family:monaco;line-height:1.4;max-width:60rem;margin:0 auto;padding:4rem;" spellcheck="false">`
- `data:text/html,<html contentEditable>` : work for Grammarly
- `data:text/html;charset=utf-8, <html contenteditable></code>`
- `data:text/html, <textarea style="font-size: 1.5em; width: 100%; height: 100%; border: none; outline: none" autofocus>`
- `data:text/html,<button onClick="SaveTextArea()">Save</button> <script language="javascript" type="text/javascript"> function SaveTextArea() { window.location = "data:application/octet-stream," + escape(txtBody.value); } </script> <textarea id="txtBody" style="font-size: 1.5em; width: 100%; height: 100%; boarder: none; outline: none" autofocus> </textarea>`: with save button
- `data:text/html,<pre onkeyup="(function(d,t){d[t]('iframe')[0].contentDocument.body.innerHTML = d[t]('pre')[0].textContent;})(document,'getElementsByTagName')" style="width:100%;height:48%;white-space:pre-wrap;overflow:auto;" contenteditable></pre><iframe style="width:100%;height:48%">` : with live preview

## In Browser Markdown Editor: Progressive Web App
- [MD Nico](https://md.nico.dev/) : with local access, Chrome only
- [Marcdown](https://liyasthomas.github.io/marcdown/), [Github](https://github.com/liyasthomas/marcdown) : Import Export, LT supported
- [BestMarkdownEditor](https://www.bestmarkdowneditor.com/) : Export, LT Supported
- [Stackedit](https://stackedit.io/app#) Import, Export, LT Supported

## Web based markdown editor
- [Stackedit](https://stackedit.io/)
- [Logseq](https://logseq.com/), note taking web based local only and GitHub-hosted

## WASM markdown editor
- [Markdown Editor](https://rsms.me/markdown-wasm/), [Github Repo](https://github.com/rsms/markdown-wasm)

## Native markdown editor
- [Typora](https://typora.io/), a nicely polished Markdown editor – has the best support for math input I've seen
- [Obsidian](https://obsidian.md/features), a split-pane Markdown editor focused on bidirectional linking
- [Zettlr](https://www.zettlr.com/) a Markdown editor focused on publishing / academics
- VNote

## Markdown Converter
- [Medium to Markdown Converter](https://medium-to-markdown.com/)
- [Online Markup Converter](https://markup.rocks/) between markdown, RST, asciidoc, html etc.