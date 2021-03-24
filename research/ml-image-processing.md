---
layout: default
author: irosyadi
title:  Machine Learning for Image Processing
date: 2020-12-20 22:25:13
category: research
tags: ["machine learning", "image processing"]
draft: false
---

# Machine Learning for Image Processing

## Image to Art
- Art Line : [https://github.com/vijishmadhavan/ArtLine](https://github.com/vijishmadhavan/ArtLine)
    - Self-Attention ([https://arxiv.org/abs/1805.08318](https://arxiv.org/abs/1805.08318)). Generator is pre trained UNET with spectral normalization and self-attention. Something that I got from Jason Antic's DeOldify([https://github.com/jantic/DeOldify](https://github.com/jantic/DeOldify)), this made a huge difference, all of a sudden I started getting proper details around the facial features.
    - Progressive Resizing ([https://arxiv.org/abs/1710.10196),(https://arxiv.org/pdf/1707.02921.pdf](https://arxiv.org/abs/1710.10196),([https://arxiv.org/pdf/1707.02921.pdf](https://arxiv.org/pdf/1707.02921.pdf))). Progressive resizing takes this idea of gradually increasing the image size. In this project, the image size was gradually increased and learning rates were adjusted. Thanks to fast.ai for introducing me to Progressive resizing, this helps the model to generalize better as it sees many more different images.
    - Generator Loss : Perceptual Loss/Feature Loss based on VGG16. ([https://arxiv.org/pdf/1603.08155.pdf](https://arxiv.org/pdf/1603.08155.pdf)).
- [Stylized Neural Painters](https://jiupinjia.github.io/neuralpainter/) : simulated paint process for a photo, [Github repo](https://github.com/jiupinjia/stylized-neural-painting), [Colab](https://colab.research.google.com/drive/1XwZ4VI12CX2v9561-WD5EJwoSTJPFBbr?usp=sharing)
- [Toonify](https://toonify.justinpinkney.com/) convert photo to 3d cartoon

## Image Reconstruction and Upscaler
- [DeOldify](https://github.com/jantic/DeOldify): A Deep Learning based project for colorizing and restoring old images (and video!)
- [Github PifuHD](https://shunsukesaito.github.io/PIFuHD/): 3D Human Reconstruction
- [Image Super Resolution](https://blog.paperspace.com/image-super-resolution/)
- [Waifu](https://github.com/AaronFeng753/Waifu2x-Extension-GUI) : Image, GIF and Video enlarger/upscaler(super-resolution) achieved with Waifu2x, SRMD, RealSR, Anime4K and ACNet. 
- [Reconstructing 3D from Photos](https://nerf-w.github.io/)

## Image Cloaking
- [Fawkes](https://sandlab.cs.uchicago.edu/fawkes/) :  Prevent AI for identifying photo

## Computer Vision Data Manipulation
- [cvdata](https://github.com/monocongo/cvdata) (MIT)  : Tools for creating and manipulating computer vision datasets: resize images, rename files, annotation format conversion, image format conversion, Split dataset into training, validation, and test subsets and much more.

## Image and Photo Generator
- [Artbreeder](https://artbreeder.com/)
- [This Person Does Not Exist](https://thispersondoesnotexist.com/)
- [Photo Generation for profile pics](https://generated.photos/anonymizer)
- [This Person Does Not Exist](https://thispersondoesnotexist.com/)

## ML-based Image Processor
- [Hotpot AI](https://hotpot.ai/) ;  Design Assistant, starting from image processing, device mockups, to social media posts


