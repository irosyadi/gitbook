---
layout: default
author: irosyadi
title:  JS for the Blog
date: 2020-12-12 15:25:37
category: development
tags: ["js"]
draft: false
---

# JS for the Blog

<script type="module" src="https://js.withorbit.com/orbit-web-component.js"></script>

<div>
<orbit-reviewarea color="pink">
      <orbit-prompt
        question="What's the working name for Andy's experimental mnemonic medium platform?"
        answer="Orbit"
      ></orbit-prompt>
      <orbit-prompt
        question="What's the new-ish web technology used to embed Orbit prompts into web pages?"
        answer="Web components"
      ></orbit-prompt>
      <orbit-prompt
        question="Given a right triangle with legs of length $a$ and $b$, what is the length of hypotenuse $c$?"
        answer="$$c = \sqrt{a^2 + b^2}$$"
      ></orbit-prompt>
</orbit-reviewarea>
</div>

<script src="https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.4/source/jsCalendar.min.js" integrity="sha384-0LaRLH/U5g8eCAwewLGQRyC/O+g0kXh8P+5pWpzijxwYczD3nKETIqUyhuA8B/UB" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.4/source/jsCalendar.min.css" integrity="sha384-44GnAqZy9yUojzFPjdcUpP822DGm1ebORKY8pe6TkHuqJ038FANyfBYBpRvw8O9w" crossorigin="anonymous">

<div class="auto-jsCalendar"></div>