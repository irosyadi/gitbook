---
layout: default
author: irosyadi
title:  CSS for the Blog
date: 2020-12-12 15:25:37
path: /development
category: development
tags: css cheatsheet
draft: false
---


## Alert and Warning

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/alert.min.css">
```

```html
<div class="alert alert-success"><strong>🎯 SUCCESS!</strong> <br> Success text. </div>  
<div class="alert alert-info"><strong>📌 INFO</strong> <br> Info text. </div>  
<div class="alert alert-warning"><strong>⚠️ WARNING!</strong> <br> Warning text. </div>  
<div class="alert alert-danger"><strong>⛔ DANGER!</strong> <br> Success text. </div>  
```

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/alert.min.css">

<div class="alert alert-success"><strong>🎯 SUCCESS!</strong> <br> Success text. </div>  
<div class="alert alert-info"><strong>📌 INFO</strong> <br> Info text. </div>  
<div class="alert alert-warning"><strong>⚠️ WARNING!</strong> <br> Warning text. </div>  
<div class="alert alert-danger"><strong>⛔ DANGER!</strong> <br> Success text. </div>  


## Inline Reference

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/inline.min.css">
```

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/inline.css">  
This paper<details><summary>1</summary> Lowry, O. H., Rosebrough, et al. Biol. Chem. 193, 265–275 (1951).</details> describing an assay to determine the amount of protein in a solution.  
The sun is molten gold<details><summary>2</summary> it is not, actually</details> and a star.

- The moon is a silver planet<details><summary>3</summary> according to nobody</details> and a star slave.
```

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/inline.min.css">  

This paper<details><summary>1</summary> Lowry, O. H., Rosebrough, et al. Biol. Chem. 193, 265–275 (1951).</details> describing an assay to determine the amount of protein in a solution.  
The sun is molten gold<details><summary>2</summary> it is not, actually</details> and a star.

- The moon is a silver planet<details><summary>3</summary> according to nobody</details> and a star slave.

## Hover CSS
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/hover-im.min.css">  
```

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/irosyadi/irosyadi@master/hover-im.min.css">  

### Text Transitions

```html
<a href="#" class="hvr-grow">Grow</a>  
<a href="#" class="hvr-shrink">Shrink</a>  
<a href="#" class="hvr-pulse">Pulse</a>  
<a href="#" class="hvr-pulse-grow">Pulse Grow</a>  
<a href="#" class="hvr-pulse-shrink">Pulse Shrink</a>  
<a href="#" class="hvr-push">Push</a>  
<a href="#" class="hvr-pop">Pop</a>  
<a href="#" class="hvr-bounce-in">Bounce In</a>  
<a href="#" class="hvr-bounce-out">Bounce Out</a>  
<a href="#" class="hvr-rotate">Rotate</a>  
<a href="#" class="hvr-grow-rotate">Grow Rotate</a>  
<a href="#" class="hvr-float">Float</a>  
<a href="#" class="hvr-sink">Sink</a>  
<a href="#" class="hvr-bob">Bob</a>  
<a href="#" class="hvr-hang">Hang</a>  
<a href="#" class="hvr-skew">Skew</a>  
<a href="#" class="hvr-skew-forward">Skew Forward</a>  
<a href="#" class="hvr-skew-backward">Skew Backward</a>  
<a href="#" class="hvr-wobble-horizontal">Wobble Horizontal</a>  
<a href="#" class="hvr-wobble-vertical">Wobble Vertical</a>  
<a href="#" class="hvr-wobble-to-bottom-right">Wobble To Bottom Right</a>  
<a href="#" class="hvr-wobble-to-top-right">Wobble To Top Right</a>  
<a href="#" class="hvr-wobble-top">Wobble Top</a>  
<a href="#" class="hvr-wobble-bottom">Wobble Bottom</a>  
<a href="#" class="hvr-wobble-skew">Wobble Skew</a>  
<a href="#" class="hvr-buzz">Buzz</a>  
<a href="#" class="hvr-buzz-out">Buzz Out</a>  
<a href="#" class="hvr-forward">Forward</a>  
<a href="#" class="hvr-backward">Backward</a>  
```

<a href="#" class="hvr-grow">Grow</a>  
<a href="#" class="hvr-shrink">Shrink</a>  
<a href="#" class="hvr-pulse">Pulse</a>  
<a href="#" class="hvr-pulse-grow">Pulse Grow</a>  
<a href="#" class="hvr-pulse-shrink">Pulse Shrink</a>  
<a href="#" class="hvr-push">Push</a>  
<a href="#" class="hvr-pop">Pop</a>  
<a href="#" class="hvr-bounce-in">Bounce In</a>  
<a href="#" class="hvr-bounce-out">Bounce Out</a>  
<a href="#" class="hvr-rotate">Rotate</a>  
<a href="#" class="hvr-grow-rotate">Grow Rotate</a>  
<a href="#" class="hvr-float">Float</a>  
<a href="#" class="hvr-sink">Sink</a>  
<a href="#" class="hvr-bob">Bob</a>  
<a href="#" class="hvr-hang">Hang</a>  
<a href="#" class="hvr-skew">Skew</a>  
<a href="#" class="hvr-skew-forward">Skew Forward</a>  
<a href="#" class="hvr-skew-backward">Skew Backward</a>  
<a href="#" class="hvr-wobble-horizontal">Wobble Horizontal</a>  
<a href="#" class="hvr-wobble-vertical">Wobble Vertical</a>  
<a href="#" class="hvr-wobble-to-bottom-right">Wobble To Bottom Right</a>  
<a href="#" class="hvr-wobble-to-top-right">Wobble To Top Right</a>  
<a href="#" class="hvr-wobble-top">Wobble Top</a>  
<a href="#" class="hvr-wobble-bottom">Wobble Bottom</a>  
<a href="#" class="hvr-wobble-skew">Wobble Skew</a>  
<a href="#" class="hvr-buzz">Buzz</a>  
<a href="#" class="hvr-buzz-out">Buzz Out</a>  
<a href="#" class="hvr-forward">Forward</a>  
<a href="#" class="hvr-backward">Backward</a>  

### Background Transitions
```html
<a href="#" class="hvr-fade">Fade</a>  
<a href="#" class="hvr-back-pulse">Back Pulse</a>  
<a href="#" class="hvr-sweep-to-right">Sweep To Right</a>  
<a href="#" class="hvr-sweep-to-left">Sweep To Left</a>  
<a href="#" class="hvr-sweep-to-bottom">Sweep To Bottom</a>  
<a href="#" class="hvr-sweep-to-top">Sweep To Top</a>  
<a href="#" class="hvr-bounce-to-right">Bounce To Right</a>  
<a href="#" class="hvr-bounce-to-left">Bounce To Left</a>  
<a href="#" class="hvr-bounce-to-bottom">Bounce To Bottom</a>  
<a href="#" class="hvr-bounce-to-top">Bounce To Top</a>  
<a href="#" class="hvr-radial-out">Radial Out</a>  
<a href="#" class="hvr-radial-in">Radial In</a>  
<a href="#" class="hvr-rectangle-in">Rectangle In</a>  
<a href="#" class="hvr-rectangle-out">Rectangle Out</a>  
<a href="#" class="hvr-shutter-in-horizontal">Shutter In Horizontal</a>  
<a href="#" class="hvr-shutter-out-horizontal">Shutter Out Horizontal</a>  
<a href="#" class="hvr-shutter-in-vertical">Shutter In Vertical</a>  
<a href="#" class="hvr-shutter-out-vertical">Shutter Out Vertical</a>  
```

<a href="#" class="hvr-fade">Fade</a>  
<a href="#" class="hvr-back-pulse">Back Pulse</a>  
<a href="#" class="hvr-sweep-to-right">Sweep To Right</a>  
<a href="#" class="hvr-sweep-to-left">Sweep To Left</a>  
<a href="#" class="hvr-sweep-to-bottom">Sweep To Bottom</a>  
<a href="#" class="hvr-sweep-to-top">Sweep To Top</a>  
<a href="#" class="hvr-bounce-to-right">Bounce To Right</a>  
<a href="#" class="hvr-bounce-to-left">Bounce To Left</a>  
<a href="#" class="hvr-bounce-to-bottom">Bounce To Bottom</a>  
<a href="#" class="hvr-bounce-to-top">Bounce To Top</a>  
<a href="#" class="hvr-radial-out">Radial Out</a>  
<a href="#" class="hvr-radial-in">Radial In</a>  
<a href="#" class="hvr-rectangle-in">Rectangle In</a>  
<a href="#" class="hvr-rectangle-out">Rectangle Out</a>  
<a href="#" class="hvr-shutter-in-horizontal">Shutter In Horizontal</a>  
<a href="#" class="hvr-shutter-out-horizontal">Shutter Out Horizontal</a>  
<a href="#" class="hvr-shutter-in-vertical">Shutter In Vertical</a>  
<a href="#" class="hvr-shutter-out-vertical">Shutter Out Vertical</a>  

### Border Transitions

```html
<a href="#" class="hvr-underline-from-left">Underline From Left</a>  
<a href="#" class="hvr-underline-from-center">Underline From Center</a>  
<a href="#" class="hvr-underline-from-right">Underline From Right</a>  
<a href="#" class="hvr-reveal">Reveal</a>  
<a href="#" class="hvr-underline-reveal">Underline Reveal</a>  
<a href="#" class="hvr-overline-reveal">Overline Reveal</a>  
<a href="#" class="hvr-overline-from-left">Overline From Left</a>  
<a href="#" class="hvr-overline-from-center">Overline From Center</a>  
<a href="#" class="hvr-overline-from-right">Overline From Right</a>  
```

<a href="#" class="hvr-underline-from-left">Underline From Left</a>  
<a href="#" class="hvr-underline-from-center">Underline From Center</a>  
<a href="#" class="hvr-underline-from-right">Underline From Right</a>  
<a href="#" class="hvr-reveal">Reveal</a>  
<a href="#" class="hvr-underline-reveal">Underline Reveal</a>  
<a href="#" class="hvr-overline-reveal">Overline Reveal</a>  
<a href="#" class="hvr-overline-from-left">Overline From Left</a>  
<a href="#" class="hvr-overline-from-center">Overline From Center</a>  
<a href="#" class="hvr-overline-from-right">Overline From Right</a>  

### Border Transitions (better with `button` class)

```html
<a href="#" class="button hvr-border-fade">Border Fade</a>  
<a href="#" class="button hvr-hollow">Hollow</a>  
<a href="#" class="button hvr-trim">Trim</a>  
<a href="#" class="button hvr-ripple-out">Ripple Out</a>  
<a href="#" class="button hvr-ripple-in">Ripple In</a>  
<a href="#" class="button hvr-outline-out">Outline Out</a>  
<a href="#" class="button hvr-outline-in">Outline In</a>  
<a href="#" class="button hvr-round-corners">Round Corners</a>  
```

<a href="#" class="button hvr-border-fade">Border Fade</a>  
<a href="#" class="button hvr-hollow">Hollow</a>  
<a href="#" class="button hvr-trim">Trim</a>  
<a href="#" class="button hvr-ripple-out">Ripple Out</a>  
<a href="#" class="button hvr-ripple-in">Ripple In</a>  
<a href="#" class="button hvr-outline-out">Outline Out</a>  
<a href="#" class="button hvr-outline-in">Outline In</a>  
<a href="#" class="button hvr-round-corners">Round Corners</a>  

### Shadow and Glow Transitions (better with `button` class)

```html
<a href="#" class="button hvr-shadow">Shadow</a>  
<a href="#" class="button hvr-grow-shadow">Grow Shadow</a>  
<a href="#" class="button hvr-float-shadow">Float Shadow</a>  
<a href="#" class="button hvr-glow">Glow</a>  
<a href="#" class="button hvr-shadow-radial">Shadow Radial</a>  
<a href="#" class="button hvr-box-shadow-outset">Box Shadow Outset</a>  
<a href="#" class="button hvr-box-shadow-inset">Box Shadow Inset</a>  
```

<a href="#" class="button hvr-shadow">Shadow</a>  
<a href="#" class="button hvr-grow-shadow">Grow Shadow</a>  
<a href="#" class="button hvr-float-shadow">Float Shadow</a>  
<a href="#" class="button hvr-glow">Glow</a>  
<a href="#" class="button hvr-shadow-radial">Shadow Radial</a>  
<a href="#" class="button hvr-box-shadow-outset">Box Shadow Outset</a>  
<a href="#" class="button hvr-box-shadow-inset">Box Shadow Inset</a>  

### Speech Bubbles (better with `button` class)

```html
<a href="#" class="button hvr-bubble-top">Bubble Top</a>  
<a href="#" class="button hvr-bubble-right">Bubble Right</a>  
<a href="#" class="button hvr-bubble-bottom">Bubble Bottom</a>  
<a href="#" class="button hvr-bubble-left">Bubble Left</a>  
<a href="#" class="button hvr-bubble-float-top">Bubble Float Top</a>  
<a href="#" class="button hvr-bubble-float-right">Bubble Float Right</a>  
<a href="#" class="button hvr-bubble-float-bottom">Bubble Float Bottom</a>  
<a href="#" class="button hvr-bubble-float-left">Bubble Float Left</a>  
```

<a href="#" class="button hvr-bubble-top">Bubble Top</a>  
<a href="#" class="button hvr-bubble-right">Bubble Right</a>  
<a href="#" class="button hvr-bubble-bottom">Bubble Bottom</a>  
<a href="#" class="button hvr-bubble-left">Bubble Left</a>  
<a href="#" class="button hvr-bubble-float-top">Bubble Float Top</a>  
<a href="#" class="button hvr-bubble-float-right">Bubble Float Right</a>  
<a href="#" class="button hvr-bubble-float-bottom">Bubble Float Bottom</a>  
<a href="#" class="button hvr-bubble-float-left">Bubble Float Left</a>  

### Curls (better with `button` class)

```html
<a href="#" class="button hvr-curl-top-left">Curl Top Left</a>  
<a href="#" class="button hvr-curl-top-right">Curl Top Right</a>  
<a href="#" class="button hvr-curl-bottom-right">Curl Bottom Right</a>  
<a href="#" class="button hvr-curl-bottom-left">Curl Bottom Left</a>  
```

<a href="#" class="button hvr-curl-top-left">Curl Top Left</a>  
<a href="#" class="button hvr-curl-top-right">Curl Top Right</a>  
<a href="#" class="button hvr-curl-bottom-right">Curl Bottom Right</a>  
<a href="#" class="button hvr-curl-bottom-left">Curl Bottom Left</a>  