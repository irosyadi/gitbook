---
layout: default
author: irosyadi
title:  Experimental Markdown
date: 2020-11-26 21:10:40
path: /development
category: development
tags: experimental markdown
draft: false
---

#  Experimental Markdown

Experimental markdown to check markdown parser compatibility between VNote+Viki, Gatsby-starter-bee, and Gitbook.


## Alert

### Alert in Markdown

::: alert-primary
alert-primary didn't work in Gatsby and Gitbook
:::

::: alert-warning
alert-warning
:::

### Alert in HTML with jquery

<div class="alert-warning">
<p><em>alert-warning</em></p>
</div>

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>alert-info</strong>
</div>

<div class="alert alert-warning">
  <i class="fas fa-warning-circle"></i> <strong>alert-warning</strong>
</div>



### Alert in HTML with Complex CSS

<div class=NOTE></div>

> **NOTE**: This blockquote will be styled using the CSS NOTE class defined below.
> I found the technique [here](https://developer.run/17).

<div class=DANGER></div>

> Slippery when wet

<style>
.NOTE+blockquote {
padding: 8px 35px 8px 14px;
margin-bottom: 20px;
border-radius: 4px;
background-color: #d9edf7;
border: 1px solid #bce8f1;
}
.NOTE+blockquote p {
color: #31708f;
}
.DANGER+blockquote {
padding: 8px 35px 8px 14px;
margin-bottom: 20px;
text-shadow: 0 1px 0 rgba(255,255,255,0.5);
background-color: rgba(232,76,61,0.1);
border-radius: 4px;
border: 1px solid rgba(232,76,61,0.1);
}
.DANGER+blockquote p {
color: #d82a1a;
}
.DANGER+blockquote p:before {
content: "⚠ ";
font-weight: bold;
font-size: larger;
display: inline;
}
</style>



### Alert with Quote

> ⚠️ **If you are using mobile browser**: Be very careful here!

> **WARNING**: Be careful, or else!


> **⚠️ WARNING: Aliens are coming.**
> > A description of the colour, smell and dangerous behaviour of the aliens.

### Alert with Table

| WARNING: be careful! |
| -------------------- |

| ❗️  This is very important |
| ------------------------- |

| ⚡️        Ignore at your own risk! |
| ---------------------------------- |

| 📝        | Take note of this       |
|---------------|:------------------------|

| ☝️  | Remember to not forget! |
| --- | :---------------------- |

| ⚠️ WARNING            |
| :-------------------- |
| I should warn you ... |

| 💥 DANGER                  |
| :------------------------- |
| Will explode when clicked! |


## Alert Symbol List

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
⁉️ question  
✔️☑️ check mark  
❌ cross  
ℹ️ info  
📧 email  
🌐 web  
▶▷ triangle

## 14. Horizontal Rules

***markdown***
```md

***

but only didn't work for Gitbook
```

***display***

***

but only didn't work for Gitbook


## Warning Gitbook Style

{% hint style="info" %}
Hello world
{% endhint %}