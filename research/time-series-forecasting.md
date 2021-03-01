---
layout: default
author: irosyadi
title:  Time Series Forecasting
date: 2021-02-26 13:10:49
category: research
tags: ["time series", "forecasting"]
draft: false
---

# Time Series Forecasting

## LSTM for Time Series Forecasting
- Univariate LSTM Models : one observation time-series data, predict the next value in the sequence
- Multivariate LSTM Models : two or more observation time-series data, predict the next value in the sequence
    - Multiple Input Series : two or more parallel input time series and an output time series that is dependent on the input time series
    - Multiple Parallel Series : multiple parallel time series and a value must be predicted for each
- Univariate Multi-Step LSTM Models : one observation time-series data, predict the multi step value in the sequence prediction.
- Multivariate Multi-Step LSTM Models :  two or more observation time-series data, predict the multi step value in the sequence prediction.
    - Multiple Input Multi-Step Output.
    - Multiple Parallel Input and Multi-Step Output.

## Multivariate Input
References for Multivariate Input: 
[How to Develop LSTM Models for Time Series Forecasting](https://machinelearningmastery.com/how-to-develop-lstm-models-for-time-series-forecasting/)
[Multi-Step LSTM Time Series Forecasting Models for Power Usage](https://machinelearningmastery.com/how-to-develop-lstm-models-for-multi-step-time-series-forecasting-of-household-power-consumption/), [dhamvi01/Multivariate-Time-Series-Using-LSTM](https://github.com/dhamvi01/Multivariate-Time-Series-Using-LSTM), [ManishPrajapat/Household-Energy-MultiVariate-LSTM-: Data - Multivariate time series data of a house is provided](https://github.com/ManishPrajapat/Household-Energy-MultiVariate-LSTM-)
[Multivariate Time Series Forecasting with LSTMs in Keras](https://machinelearningmastery.com/multivariate-time-series-forecasting-lstms-keras/), [dhairya0904/Multivariate-time-series-prediction: Multivariate time series prediction using LSTM in keras](https://github.com/dhairya0904/Multivariate-time-series-prediction), [rubel007cse/Multivariate-Time-Series-Forecasting: Multivariate Time Series Forecasting with LSTMs in Keras](https://github.com/rubel007cse/Multivariate-Time-Series-Forecasting)
[vb100/multivariate-lstm](https://github.com/vb100/multivariate-lstm)
[Multivariate Time Series Forecasting with a Bidirectional LSTM: Building a Model Geared to Multiple Input Series | by Pierre Beaujuge | Medium](https://medium.com/@pierre.beaujuge/multivariate-time-series-forecasting-with-a-bidirectional-lstm-building-a-model-geared-to-4f020a160636)
[umbertogriffo/Predictive-Maintenance-using-LSTM: Example of Multiple Multivariate Time Series Prediction with LSTM Recurrent Neural Networks in Python with Keras.](https://github.com/umbertogriffo/Predictive-Maintenance-using-LSTM)
[Time series forecasting  |  TensorFlow Core](https://www.tensorflow.org/tutorials/structured_data/time_series) : MPI-MSO
[shrey920/MultivariateTimeSeriesForecasting: This project is an implementation of the paper Modeling Long- and Short-Term Temporal Patterns with Deep Neural Networks. The model LSTNet consists of CNN, LSTM and RNN-skip layers](https://github.com/shrey920/MultivariateTimeSeriesForecasting)
[Shiv-Kumar-Yadav9/Stock-Price-Prediction-by-Multivariate-Multistep-LSTM](https://github.com/Shiv-Kumar-Yadav9/Stock-Price-Prediction-by-Multivariate-Multistep-LSTM)
[How to Develop Multivariate Multi-Step Time Series Forecasting Models for Air Pollution](https://machinelearningmastery.com/how-to-develop-machine-learning-models-for-multivariate-multi-step-air-pollution-time-series-forecasting/)

## Statistical Method for Multivariate
- [Multivariate Time Series | Vector Auto Regression (VAR)](https://www.analyticsvidhya.com/blog/2018/09/multivariate-time-series-guide-forecasting-modeling-python-codes/)
- [Vector Autoregression (VAR) - Comprehensive Guide with Examples in Python - ML+](https://www.machinelearningplus.com/time-series/vector-autoregression-examples-python/)
- [shraddha-an/time-series-gsr: Multivariate Time-Series Forecasting of Gas Sensor Array Readings. Accompanying Medium article below.](https://github.com/shraddha-an/time-series-gsr)
- [AnoML/multivariate-timeseries-forecasting: A set of algorithms using for Multivariate Time-Series Forecasting](https://github.com/AnoML/multivariate-timeseries-forecasting)
- [ZahraNabilaIzdihar/Backpropagation-Neural-Network-for-Multivariate-Time-Series-Forecasting: Backpropagation Neural Network for Multivariate Time Series Forecasting (multi input single output: 2 inputs and 1 output)](https://github.com/ZahraNabilaIzdihar/Backpropagation-Neural-Network-for-Multivariate-Time-Series-Forecasting)
- [TDS-1](https://towardsdatascience.com/vector-autoregressive-for-forecasting-time-series-a60e6f168c70)
- [TDS-2](https://towardsdatascience.com/multivariate-time-series-forecasting-456ace675971)


## Univariate Input
[Time Series Forecasting with the Long Short-Term Memory Network in Python](https://machinelearningmastery.com/time-series-forecasting-long-short-term-memory-network-python/)
[Time Series Forecasting — ARIMA, LSTM, Prophet with Python | by Caner Dabakoglu | Medium](https://medium.com/@cdabakoglu/time-series-forecasting-arima-lstm-prophet-with-python-e73a750a9887)


## Note on LSTM
[On the Suitability of Long Short-Term Memory Networks for Time Series Forecasting](https://machinelearningmastery.com/suitability-long-short-term-memory-networks-time-series-forecasting/)
[A Comparative Study between Univariate and Multivariate Linear Stationary Time Series Models](http://article.sapub.org/10.5923.j.ajms.20160605.02.html)

## Multivariate on Debutanizer
- [Comparison for Debutanizer Column](http://www.vincentgaspersz.com/wp-content/uploads/2018/07/K%20Siddharth%20A%20Pathak%20AK%20Pani%20-%20Real-time%20quality%20monitoring%20in%20debutanizer%20column%20with%20regression%20tree%20and%20ANFIS.pdf)

## Forecasting Modelling
- [Alro10/deep-learning-time-series: List of papers, code and experiments using deep learning for time series forecasting](https://github.com/Alro10/deep-learning-time-series) Collection
- [dafrie/lstm-load-forecasting: Electricity load forecasting with LSTM (Recurrent Neural Network)](https://github.com/dafrie/lstm-load-forecasting)  Dataset : Electricity Load ENTSO, Model : LSTM, Type: Multivariate
- [pyaf/load_forecasting: Load forcasting on Delhi area electric power load using ARIMA, RNN, LSTM and GRU models](https://github.com/pyaf/load_forecasting) Dataset: Electricity, Model: Feed forward Neural Network FFNN, Simple Moving Average SMA, Weighted Moving Average WMA, 
Simple Exponential Smoothing SES, Holts Winters HW, Autoregressive Integrated Moving Average ARIMA, Recurrent Neural Networks RNN, Long Short Term Memory cells LSTM, Gated Recurrent Unit cells GRU, Type: Univariate
- [AIStream-Peelout/flow-forecast: Deep learning PyTorch library for time series forecasting, classification, and anomaly detection (originally for flood forecasting).](https://github.com/AIStream-Peelout/flow-forecast), Dataset: river flow [FlowDB Dataset - Flow Forecast - Flow Forecast](https://flow-forecast.atlassian.net/wiki/spaces/FF/pages/33456135/FlowDB+Dataset), flood severity, Model: LSTM, Transformer, Simple Multi-Head Attention, Transformer with a linear decoder, DA-RNN, Transformer XL, Informer, DeepAR
- [jiegzhan/time-series-forecasting-rnn-tensorflow: Time series forecasting](https://github.com/jiegzhan/time-series-forecasting-rnn-tensorflow) Dataset: Daily Temperature, Model: LSTM
- [zhangxu0307/time_series_forecasting_pytorch: time series forecasting using pytorch，including ANN,RNN,LSTM,GRU and TSR-RNN，experimental code](https://github.com/zhangxu0307/time_series_forecasting_pytorch) Dataset: Pollution, Solar Energy, Traffic data etec.
 Model MLP,RNN,LSTM,GRU, ARIMA, SVR, RF and TSR-RNN
 - [rishikksh20/LSTM-Time-Series-Analysis: Using LSTM network for time series forecasting](https://github.com/rishikksh20/LSTM-Time-Series-Analysis) Dataset: Sunspot Zurich, Model: LSTM
 - [rakshita95/DeepLearning-time-series: LSTM for time series forecasting](https://github.com/rakshita95/DeepLearning-time-series) Dataset: ?? Model: ARIMA, VAR, LSTM
 - [sagarmk/Forecasting-on-Air-pollution-with-RNN-LSTM: Time Series Forecasting using LSTM in Keras.](https://github.com/sagarmk/Forecasting-on-Air-pollution-with-RNN-LSTM) Dataset: Air Pollution, Model: LSTM
 - [pushpendughosh/Stock-market-forecasting: Forecasting directional movements of stock prices for intraday trading using LSTM and random forest](https://github.com/pushpendughosh/Stock-market-forecasting) Dataset: Stock Market, Model: LSTM, RF
 - [deshpandenu/Time-Series-Forecasting-of-Amazon-Stock-Prices-using-Neural-Networks-LSTM-and-GAN-: Project analyzes Amazon Stock data using Python. Feature Extraction is performed and ARIMA and Fourier series models are made. LSTM is used with multiple features to predict stock prices and then sentimental analysis is performed using news and reddit sentiments. GANs are used to predict stock data too where Amazon data is taken from an API as Generator and CNNs are used as discriminator.](https://github.com/deshpandenu/Time-Series-Forecasting-of-Amazon-Stock-Prices-using-Neural-Networks-LSTM-and-GAN-) Dataset: Amazon Stock Model: LSTM with addition
 - [demmojo/lstm-electric-load-forecast: Electric load forecast using Long-Short-Term-Memory (LSTM) recurrent neural network](https://github.com/demmojo/lstm-electric-load-forecast) Dataset: Electric Consumption Model: LSTM
 - [mborysiak/Time-Series-Forecasting-with-ARIMA-and-LSTM](https://github.com/mborysiak/Time-Series-Forecasting-with-ARIMA-and-LSTM) Dataset: Olypic, LeBron, Zika, Model: ARIMA dan LSTM
 - [Yifeng-He/Electric-Power-Hourly-Load-Forecasting-using-Recurrent-Neural-Networks: This project aims to predict the hourly electricity load in Toronto based on the loads of previous 23 hours using LSTM recurrent neural network.](https://github.com/Yifeng-He/Electric-Power-Hourly-Load-Forecasting-using-Recurrent-Neural-Networks)  Dataset: Electricity Consumption Model: LSTM
 - [Yongyao/enso-forcasting: Improving the forecasting accuracy of ENSO through deep learning](https://github.com/Yongyao/enso-forcasting) Dataset: ENSO El Nino, Model: LSTM
 - [EsmeYi/time-series-forcasting: Using K-NN, SVM, Bayes, LSTM, and multi-variable LSTM models on time series forecasting](https://github.com/EsmeYi/time-series-forcasting) Dataset: Sensor, Model: LSTM
 - [CynthiaKoopman/Forecasting-Solar-Energy: Forecasting Solar Power: Analysis of using a LSTM Neural Network](https://github.com/CynthiaKoopman/Forecasting-Solar-Energy) Dataset: Solar power, Model: LSTM
 - [stxupengyu/load-forecasting-algorithms: 使用多种算法（线性回归、随机森林、支持向量机、BP神经网络、GRU、LSTM）进行电力系统负荷预测/电力预测。通过一个简单的例子。A variety of algorithms (linear regression, random forest, support vector machine, BP neural network, GRU, LSTM) are used for power system load forecasting / power forecasting.](https://github.com/stxupengyu/load-forecasting-algorithms) Dataset: Power usage, Model: linear regression, random forest, support vector machine, BP neural network, GRU, LSTM
 - [Abhishekmamidi123/Time-Series-Forecasting: Rainfall analysis of Maharashtra - Season/Month wise forecasting. Different methods have been used. The main goal of this project is to increase the performance of forecasted results during rainy seasons.](https://github.com/Abhishekmamidi123/Time-Series-Forecasting) Dataset: precipitation, Model: ARIMA, LSTM, FNN(Feed forward Neural Networks), TLNN(Time lagged Neural Networks), SANN(Seasonal Artificial Neural Networks
 - [3springs/attentive-neural-processes: implementing "recurrent attentive neural processes" to forecast power usage (w. LSTM baseline, MCDropout)](https://github.com/3springs/attentive-neural-processes) Dataset: English power consumption, Model: ANP-RNN "Recurrent Attentive Neural Process for Sequential Data", ANP: Attentive Neural Processes, NP: Neural Processes, LSTM
 - [Housiadas/forecasting-energy-consumption-LSTM: Development of a machine learning application for IoT platform to predict electric energy consumption in smart building environment in real time.](https://github.com/Housiadas/forecasting-energy-consumption-LSTM), Dataset: Kaggle energy consuption, MOdel: LSTM, Seq2Seq