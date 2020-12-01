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
alert-primary
:::

::: alert-secondary
alert-secondary
:::

::: alert-success
alert-success
:::

::: alert-info
**alert-info**
:::

::: alert-warning
alert-warning
:::

::: alert-danger
alert-danger
:::

::: alert-light
alert-light
:::

::: alert-dark
alert-dark
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

### Alert in HTML without jquery

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
✔️ check mark
❌ cross
ℹ️ info
📧 email
🌐 web

## HTML Playground

### Drop Down List

<details>
  <summary>List</summary>
  <p>
    <ul>
      <li>irosyadi: https://irosyadi.netlify.app</li>
      <li>irosyadi: https://irosyadi.gitbook.io</li>
      <li>irosyadi: https://irosyadi.github.io</li>
    </ul>
  </p>
</details>


### Abbreviation

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.


### Definition

<dl>
<dt>First Term</dt>
<dd>This is the definition of the first term.</dd>
<dt>Second Term</dt>
<dd>This is one definition of the second term. </dd>
<dd>This is another definition of the second term.</dd>
</dl>

### Summary

<details>
  <summary>Term</summary>
  <p>Term is explanation of something</p>
</details>

### Text Manipulation

<font color=red>red color</font>
<mark>highlight</mark>
<del>strikethrough</del> 
<ins>underline</ins>
<small>smaller text</small>
H<sub>2</sub>O
x<sup>2</sup>+y<sup>2</sup>=0
Variable of triangle area: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.

### Button

<button type="button" onclick="alert('Hello world!')">Click Me!</button>

### Dialog

<dialog open>
  <p> <strong>⚠️ WARNING:</strong> Aliens are coming. <br> Be Careful </p>
</dialog>
