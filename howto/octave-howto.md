---
layout: default
author: irosyadi
title:  Octave How To
date: 2020-12-20 21:28:08
category: howto
tags: ["octave"]
draft: false
---

# Octave How To

## Draw pole, zero, grid, sgrid
```octave
sys=tf([1 1],[1 2])
pzmap(sys)
grid on
sgrid on
```
