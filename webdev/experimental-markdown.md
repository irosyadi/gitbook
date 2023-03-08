---
aliases: [Experimental Markdown]
title: Experimental Markdown
tags: ["markdown"]
date: 2020-11-26 21:10:40
draft: false
---

## Experimental Markdown

Experimental markdown to check markdown parser compatibility between Gatsby, Jekyll, Gitbook, and Hugo.

### Internal Link Reference

#### Type 1

- [/book/interactive-book](/book/interactive-book)
- [/note/emoji](/note/emoji)

Success in Gatsby. Success in Jekyll. Fail in Gitbook. Fail in Hugo. Success in Obsidian.

#### Type 2 (Obsidian relative path to file)

- [../book/interactive-book.md](../book/interactive-book.md)
- [../note/emoji.md](../note/emoji.md)

Fail in Gatsby. Success in Jekyll. Success in Gitbook. Fail in Hugo. Success in Obsidian.

#### Type 3 (Obsidian absolute path in vault)

- [/book/interactive-book.md](/book/interactive-book.md)
- [/note/emoji.md](/note/emoji.md)

Fail in Gatsby. Fail in Jekyll. Success in Gitbook. Fail in Hugo. Success in Obsidian.

#### Type 4

- [../book/interactive-book](../book/interactive-book)
- [../note/emoji](../note/emoji)

Fail in Gatsby. Success in Jekyll. Fail in Gitbook. Fail in Hugo. Success in Obsidian.

#### Obsidian Internal Link

- [../note/emoji.md](../note/emoji.md) Relative path to file
- [emoji.md](emoji.md) Shortes path possible
- [note/emoji.md](note/emoji.md) Absolute path in vault
- [Emoji](note/emoji.md)

### Number and Bullet

1. One
2. Two
- Three
    - Three.a
    - Three.b

1. Four
2. Five

- List A
1. List B
- List C

### Keyboard

<kbd>imron</kbd>

### Comment

`<!-- Write your comments here -->`

Here is the comment:  

<!-- Write your comments here -->

### Symbol List

💬 speech  
🌏️ globe  
⭐️ star  
🚀 rocket  
👣 footprints  
⚓️ anchor  
🔥 fire  
🎯 target  
📌 pin  
⛔ stop  
‼️ double warning  
❗️ warning  
⁉️ question  
✔️☑️ check mark  
❌ cross  
ℹ️ info  
📧 email  
🌐 web  
▶▷ triangle  
⚠️ warning  
💥 danger  
📝 note  
☝️ remember  
⚡️ flash

### Image Hosting in Github

![QR Code Image-small](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1608464780_20201220183102525_18817.png)

### Tittle YAML

- Cannot use `:` in tittle

### Content

- Cannot use `% {` in github.io
- Cannot use `|` in github.io

### SVG

github.io and gitbook.io cannot render svg

![crocodile](https://snapsvg.io/assets/images/crocodile.svg)
