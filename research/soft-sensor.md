---
layout: default
author: irosyadi
title:  Soft Sensor
date: 2021-02-26 13:01:49
category: research
tags: ["soft sensor"]
draft: false
---

# Soft Sensor

## What is Soft Sensors
Soft-sensors: predictive models for sensor characteristic are called soft sensors
Soft-sensors: software+sensor

## Soft-sensor Categories
- model-driven
    - First Principle Models (FPM)
    - extended Kalman Filter
- data-driven 
    - Principle Component Analysis + regression model, Partial Least Squares 
    - Artificial Neural Networks 
    - Neuro-Fuzzy Systems 
    - Support Vector Machines 

## Soft-sensor Application
- on-line prediction
    - prediction of process variables which can be determined either at low sampling rates 
    - prediction of process variables which can be determined through off-line analysis only
    - (statistical or soft computing supervised learning approaches)
- process monitoring 
    - detection of the state of the process, usually by human
    - observation and interpretation of the process state (based on univariate statistics) and experience of the operator 
- process fault detection
    - detection of the state of the process


## FPM
- First Principle Models describe the physical and chemical background of the process. 
- These models are developed primarily for the planning and design of the processing plants, and therefore usually focus on the description of the ideal steady-states of the processes
- based on established laws of physics
- does not make assumptions such as empirical model and fitting parameters
- using experimental data


Data-driven
data-driven models are based on the data measured within the processing plants, and thus describe the real process conditions, they are, compared to the model-driven Soft Sensors, more reality related and describe the true conditions of the process in a better way. Nevertheless


The most commonly applied multivariate analysis tools are principal component analysis (PCA) for fault detection and projection of latent structures (PLS) for the prediction of key quality parameters at end of batch.

First-principle models may be the answer, using experimental data instead of statistical methods to estimate model parameters. They are not as quick and easy to build, but they have many advantages. In terms of simulation, first-principle models provide extrapolation in addition to the interpolation provided by data-driven models. But they also can be used for monitoring, control and optimization.


## Soft-Sensor Modelling
- [vigorfif/Soft-Sensor-Modelling: Soft sensor modelling using multiple machine learning algorithms](https://github.com/vigorfif/Soft-Sensor-Modelling) Dataset: SRU from Fortuna, Model: NN-BP, LSTM, RNN
- [hkaneko1985/adaptive_soft_sensors: Adaptive Soft Sensors](https://github.com/hkaneko1985/adaptive_soft_sensors) Dataset: Debutanizer from Fortuna, Model: MWPLSm MWSVR, JITPLS, JITSVR and LWPLS
    - [hkaneko1985/lwpls: Locally-Weighted Partial Least Squares (LWPLS)](https://github.com/hkaneko1985/lwpls) Dataset: Debutanizer from Fortuna, Model: LWPLS 

## Others
- [rogeredc/soft_sensor: soft_sensor_for_chemical_process](https://github.com/rogeredc/soft_sensor) LSTM
- [alexalex222/Batch-Process-Soft-Sensor: Gaussian process regression algorithms for nonlinear system state prediciton](https://github.com/alexalex222/Batch-Process-Soft-Sensor) Matlab, Model: GPR, NN, SVR
- [yaole0720/VTR-based-Soft-Sensor: Variable Time Reconstruction based modeling framework for soft sensor development](https://github.com/yaole0720/VTR-based-Soft-Sensor) Matlab, Model: VTR
- [chahat99/Soft-Sensor-with-ANN: Soft sensor using Artificial Neural Networks](https://github.com/chahat99/Soft-Sensor-with-ANN) Matlab, NN
- [aysunrhn/Adaptive-Soft-Sensor-Design at 4a1d72787e3d08ccb93af11ca24cfda76a9d0f96](https://github.com/aysunrhn/Adaptive-Soft-Sensor-Design/tree/4a1d72787e3d08ccb93af11ca24cfda76a9d0f96) Matlab

## Dataset
- [Rui Araújo – Datasets](https://home.isr.uc.pt/~rui/publications/datasets.html)
- [585 UCI Datasets](https://archive.ics.uci.edu/ml/datasets.php)

## Reference
- [Soft Sensor Modeling Method by Maximizing Output-Related Variable Characteristics Based on a Stacked Autoencoder and Maximal Information Coefficients | Atlantis Press](https://www.atlantis-press.com/journals/ijcis/125917186/view)
- [Soft sensing of product quality in the debutanizer column with principal component analysis and feed-forward artificial neural network - ScienceDirect](https://www.sciencedirect.com/science/article/pii/S1110016816000697)

## Ebook
- [curiousily/Deep-Learning-For-Hackers: Machine Learning tutorials with TensorFlow 2 and Keras in Python (Jupyter notebooks included) - (LSTMs, Hyperameter tuning, Data preprocessing, Bias-variance tradeoff, Anomaly Detection, Autoencoders, Time Series Forecasting, Object Detection, Sentiment Analysis, Intent Recognition with BERT)](https://github.com/curiousily/Deep-Learning-For-Hackers)

