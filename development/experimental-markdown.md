---
layout: default
author: irosyadi
title:  Experimental Markdown
date: 2020-11-26 21:10:40
category: development
tags: ["markdown"]
draft: false
---

#  Experimental Markdown

Experimental markdown to check Markdown parser compatibility between VNote+Viki, Gatsby-starter-bee, and Gitbook.

## Internal Link Reference
### Type 1
[About Me](/blog/about-me)
In VNote App `/blog/about-me` refer to `C://blog/about-me`
In github.io and netlify, it successfully goes to about-me page. It was fail in gitbook.

- [Interactive and Explorable Sites](/app/interactive-explorable-web)
- [Machine Learning Interactive Visualization](/research/ml-visualization)
- [Interactive Books](/book/interactive-book)
- [Data Visualization](/note/data-visualization)

Success in Netlify. Success in Github. Fail in Gitbook.

### Type 2
- [Interactive and Explorable Sites](../app/interactive-explorable-web.md)
- [Machine Learning Interactive Visualization](../research/ml-visualization.md)
- [Interactive Books](../book/interactive-book.md)
- [Data Visualization](../note/data-visualization.md)

Fail in Netlify. Success in Github. Success in Gitbook.

### Type 3
- [Interactive and Explorable Sites](/app/interactive-explorable-web.md)
- [Machine Learning Interactive Visualization](/research/ml-visualization.md)
- [Interactive Books](/book/interactive-book.md)
- [Data Visualization](/note/data-visualization.md)

Fail in Netlify. Fail in Github. Success in Gitbook.

### Type 4
- [Interactive and Explorable Sites](../app/interactive-explorable-web)
- [Machine Learning Interactive Visualization](../research/ml-visualization)
- [Interactive Books](../book/interactive-book)
- [Data Visualization](../note/data-visualization)

Netlify. Github. Gitbook.

## Number and Bullet

1. One
2. Two
- Three
    - Three.a
    - Three.b

4. Four
5. Five


- List A
2. List B
- List C

## Keyboard
<kbd>imron</kbd>

## Comment
`<!-- Write your comments here -->`

Here is the comment:  
<!-- Write your comments here -->

## Symbol List

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

## Iframe
```
<iframe src="https://wttr.in" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
```

<div>
<iframe src="https://wttr.in" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

<div>
<iframe src="https://eth0.me/" frameborder="0" width="100" height="50"</iframe>
</div>

## Image Hosting in Github

![QR Code Image-small](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1608464780_20201220183102525_18817.png)

## Tittle YAML
- Cannot use `:` in tittle

## Content
- Cannot use `% {` in github.io
- Cannot use `|` in github.io


## SVG
github.io and gitbook.io cannot render svg

![crocodile](https://snapsvg.io/assets/images/crocodile.svg)
