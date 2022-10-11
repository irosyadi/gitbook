---
layout: default
author: irosyadi
title: Generative Color Colorization
date: 2022-09-30 13:12:41
category: research
tags: ["generative", "color"]
draft: false
---

# Generative Color Colorization

## Colorization
- Pix2pix vs CycleGAN
    - Cycle-GAN can work in an 'unpaired' manner and various architectural differences. Unpaired image translation is much harder, as you demand the model to learn objects of different shapes, size, angle, texture, location in different scenes and settings on top of the actual task (coloring in this case). Requires more data and you don't have fine control on the learning. Formulating the coloring problem as a paired task makes more sense as you simply decrease the complexity of the problem without increasing data collection/annotation work.
    - The whole point about using CycleGAN is that it can learn in unpaired situations. And it works well in the context of style transfer tasks where the changes are really bold and less nuanced. But, in the context of image colorization, the changes are really subtle and also there are way more options to choose colors than changing a horse to zebra. The other thing is that learning to change a colored image to black and white is much easier for the model than learning to colorize it which can lead to a bad learning procedure.
    - The most prominent differences is that CycleGAN helps when you have unpaired images and you want to go from one class to the other (Horse to Zebra for example) but in the Pix2Pix paper, the images that you get after the inference, are the input images but with some new features (black&white to colorized or day time to night time of a scene). In pix2pix, a conditional GAN (one generator and one discriminator) is used with some supervision from L1 loss. In CycleGAN, you need two generators and two discriminators to do the task: one pair for going from class A to B and one pair for going from class B to A. Also you need Cycle Consistency Loss to make sure that the models learn to undo the changes they make.
- pix2pixhd is pix2pix in higher resolution
- pix2pix tutorial and example:
    - [Github](https://github.com/moein-shariatnia/Deep-Learning/tree/main/Image%20Colorization%20Tutorial)
    - [Tutorial](https://towardsdatascience.com/colorizing-black-white-images-with-u-net-and-conditional-gan-a-tutorial-81b2df111cd8?source=friends_link&sk=e9d275985a6e00ada31e48ddc903fc9d) 
    - [Jupyter in Colab](https://colab.research.google.com/github/moein-shariatnia/Deep-Learning/blob/main/Image%20Colorization%20Tutorial/Image%20Colorization%20with%20U-Net%20and%20GAN%20Tutorial.ipynb)