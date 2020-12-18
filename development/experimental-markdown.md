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
<iframe src="https://www.google.com" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
```

<iframe src="https://www.google.com" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Internal Reference

Content of the up folder (`[Hello](../development/hello.md)`) : (working on jekyll-rtd and gitbook)
- [Hello](../development/hello.md)
- [Blog](../blog/readme.md)

Content of the up folder (`[Hello](../development/hello)`) : check
- [Hello](../development/hello)
- [Blog](../blog/readme)

Content of the up folder (`[Hello](../development/hello/)`) : check
- [Hello](../development/hello/)
- [Blog](../blog/readme/)