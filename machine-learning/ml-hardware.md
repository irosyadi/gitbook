---
aliases: [Hardware for Machine Learning]
title: Hardware for Machine Learning
tags: ["machine learning", "hardware"]
date: 2021-12-21 11:30:28
draft: false
---

# Hardware for Machine Learning

## Hardware for Deep Learning

* [Hardware for Deep Learning. Part 1: Introduction - by Grigory Sapunov - Intento](https://blog.inten.to/hardware-for-deep-learning-current-state-and-trends-51c01ebbb6dc)
* [Hardware for Deep Learning. Part 2: CPU - by Grigory Sapunov - Intento](https://blog.inten.to/cpu-hardware-for-deep-learning-b91f53cb18af)
* [Hardware for Deep Learning. Part 3: GPU - by Grigory Sapunov - Intento](https://blog.inten.to/hardware-for-deep-learning-part-3-gpu-8906c1644664)
* [Hardware for Deep Learning. Part 4: ASIC - by Grigory Sapunov - Jan, 2021 - Intento](https://blog.inten.to/hardware-for-deep-learning-part-4-asic-96a542fe6a81)

## TPU - GPU

* Turning TPU into GPU (mean: it compiles Pytorch to work on a TPU). [PyTorchXLA](https://github.com/pytorch/xla) converts the TPUv3-8 hardware into a GPU so you can use it with PyTorch as a normal GPU. TPUv3-8 which is part of free access from Google Colab can give a computation power that is equivalent to 8 V100 Tesla GPU and possibly 6 3090RTX GPU. [info is here](https://venturebeat.com/2020/09/29/googles-cloud-tpus-now-better-support-pytorch-via-pytorch-xla/). TPUs are ~5x as expensive as GPUs ($1.46/hr for a Nvidia Tesla P100 GPU vs $8.00/hr for a Google TPU v3 vs $4.50/hr for the TPUv2 with “on-demand” access on GCP).
* We recommend CPUs for their versatility and for their large memory capacity. GPUs are a great alternative to CPUs when you want to speed up a variety of data science workflows, and TPUs are best when you specifically want to train a machine learning model as fast as you possibly can. In Google Colab, CPU types vary according to variability (Intel Xeon, Intel Skylake, Intel Broadwell, or Intel Haswell CPUs). GPUs were NVIDIA P100 with Intel Xeon 2GHz (2 core) CPU and 13GB RAM. TPUs were TPUv3 (8 core) with Intel Xeon 2GHz (4 core) CPU and 16GB RAM).

## Free TPU

* [TensorFlow Research Cloud](https://www.tensorflow.org/tfrc) - Free TPU : Accelerate your cutting-edge machine learning research with free Cloud TPUs.

## AI/ML Cloud Computing

* [Types of Cloud Computing—an Extensive Guide on Cloud Solutions and Technologies in 2021](https://kinsta.com/blog/types-of-cloud-computing/)
* [What are the Benefits of Machine Learning in the Cloud? - Cloud Academy](https://cloudacademy.com/blog/what-are-the-benefits-of-machine-learning-in-the-cloud/)
* [Cloud Platform Comparison](https://blog.paperspace.com/google-cloud-platform-notebooks/)

## AI Platform

* [Cloud-CV/EvalAI: Evaluating state of the art in AI](https://github.com/Cloud-CV/EvalAI#platform-comparison)

