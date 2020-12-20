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

<iframe src="https://wttr.in" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Internal Reference

### Internal Reference : Outside Folder

Content of the up folder (`[Markdown](../development/blog-markdown.md)`)
- [Markdown](../development/blog-markdown.md) : working on jekyll-rtd, gitbook, fail on gatsby
- [Blog](../blog/readme.md) : working on jekyll-rtd, fail on gitbook, fail on gatsby

Content of the up folder (`[Markdown](../development/blog-markdown)`)
- [Markdown](../development/blog-markdown)  : working on jekyll-rtd, fail on gitbook, fail on gatsby
- [Blog](../blog/readme) : fail on jekyll-rtd, fail gitbook, fail on gatsby

Content of the up folder (`[Markdown](../development/blog-markdown/)`)
- [Markdown](../development/blog-markdown/) : working on jekyll-rtd, fail on gitbook, fail on gatsby
- [Blog](../blog/readme/) : fail on jekyll-rtd, fail on gitbook, fail on gatsby

Content of the up folder (`[Markdown](.../development/blog-markdown/)`)
- [Markdown](.../development/blog-markdown/)
- [Blog](.../blog/readme/)
- [Markdown](.../development/blog-markdown)
- [Blog](.../blog/readme)
- [Markdown](.../development/blog-markdown.md)
- [Blog](.../blog/readme.md)

- Gatsby understands only link under its folder

### Internal Reference : Inside Folder
- [My Workflow](my-workflow.md) `[My Workflow](my-workflow.md)` : working on gitbook, jekyll-rtd
- [My Workflow](my-workflow) `[My Workflow](my-workflow)` : working on jekyll-rtd
- [My Workflow](my-workflow/) `[My Workflow](my-workflow/)`
- [My Workflow](./my-workflow/) `[My Workflow](./my-workflow/)`
- [My Workflow](./my-workflow) `[My Workflow](./my-workflow)`
- [My Workflow](../my-workflow/) `[My Workflow](../my-workflow/)` : working on gatsby
- [My Workflow](../my-workflow) `[My Workflow](../my-workflow)` : working on gatsby 

## Image Hosting in Github

![QR Code Image-small](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1608464780_20201220183102525_18817.png)