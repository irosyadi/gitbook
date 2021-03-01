---
layout: default
author: irosyadi
title:  Machine Learning Metrics
date: 2020-12-15 14:08:52
category: research
tags: ["machine learning"]
draft: false
---

# Machine Learning Metrics

## Accuracy and Loss
- Loss (not in %) can be seen as a distance between the true values of the problem and the values predicted by the model. Greater the loss is, more huge is the errors you made on the data.
- Loss is often used in the training process to find the "best" parameter values for your model (e.g. weights in neural network). It is what you try to optimize in the training by updating weights.
- Accuracy (in %) can be seen as the number of error you made on the data.
- Accuracy is more from an applied perspective. Once you find the optimized parameters above, you use this metrics to evaluate how accurate your model's prediction is compared to the true data.
- That means :
    - a low accuracy and huge loss means you made huge errors on a lot of data
    - a low accuracy but low loss means you made little errors on a lot of data
    - a great accuracy with low loss means you made low errors on a few data (best case)

## Prediction
- Condition Positive (P) : the number of real positive cases in the data
- Condition Negative (N) : the number of real negative cases in the data
- True Positive or Hit
- True Negative or  Correct Rejection
- False Positive or False Alarm or Type I error
- False Negative or Miss or Type II error

![Confusion Matrix](https://miro.medium.com/max/485/1*NKaQgX-bDP0wogSE1wRSsw.png)

![TP TN FP FN](https://miro.medium.com/max/462/1*7EYylA6XlXSGBCF77j_rOA.png)

![TP TN FP FN](https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Precisionrecall.svg/350px-Precisionrecall.svg.png)


## Accuracy
- Accuracy (ACC) = (Σ True positive + Σ True negative)/Σ Total population
- Accuracy = (TP + TN)/(TP + TN + FP + FN)
- Accuracy is sensitive to class imbalance

## Precision or Positive Predictive Value (PPV)
- Precision measures how accurate is the predictions.
- Precision is the percentage of the predictions are correct.
- Precision measures the "false positive rate" or the ratio of true object detections to the total number of objects that the classifier predicted.
- Precision: how many selected items are relevant.
- Precision, a.k.a. positive predicted value, is given as the ratio of true positive (TP) and the total number of predicted positives.
- Precision = Σ True positive/Σ Predicted condition positive
![Precision](https://miro.medium.com/max/159/1*jiqAWT_Yzi_1LRD74dz-9Q.png)

## Recall or Sensitivity or True Positive Rate or Probablity of Detection
- Recall measures how good the algorithm find all the positives.
- Recall measures the "false negative rate" or the ratio of true object detections to the total number of objects in the data set.
- Recall: how many relevant items are selected.
- Recall : the ratio of TP and total of ground truth positives.
- Recall = Σ True positive/Σ Condition positive
![Recall](https://miro.medium.com/max/185/1*ikwX1H72KPj1fUBppUWrpA.png)

## F1 Score
- Harmonic mean of Precision and Recall
- Because it is difficult to compare two models with low precision and high recall or vice versa. 
- So to make them comparable, F-Score is used.
- F1 score = 2 · (Precision · Recall)/(Precision + Recall)
![Precision-Recall-F1 Formula](https://miro.medium.com/max/534/1*EXa-_699fntpUoRjZeqAFQ.jpeg)


## Matthews Correlation Coefficient (MCC) or Phi Coefficient
- MCC is used in machine learning as a measure of the quality of binary (two-class) classifications
- MCC takes into account all four values in the confusion matrix, and a high value (close to 1) means that both classes are predicted well, even if one class is disproportionately under- (or over-) represented.
![MCC](https://miro.medium.com/max/1221/1*8E2rPn_ccOqGuPYj1gBTAg.png)

## Intersection over Union (IoU)
- IoU is used for detection algorithm
- The IoU is given by the ratio of the area of intersection and area of union of the predicted bounding box and ground truth bounding box.
    - an IoU of 0 means that there is no overlap between the boxes
    - an IoU of 1 means that the union of the boxes is the same as their overlap indicating that they are completely overlapping
- The IoU would be used to determine if a predicted bounding box (BB) is TP, FP or FN. The TN is not evaluated as each image is assumed to have an object in it.
![IoU](https://miro.medium.com/max/600/0*mWSuiTMa6WyZUmyq.png)
- Traditionally, we define a prediction to be a TP if the IoU is > 0.5, then:
    - True Positive (if IoU > 0.5)
    - False Positive (if IoU < 0.5 or Duplicated Bounding Box)
    - False Negative, when our object detection model missed the target (if there is no detection at all or when the predicted BB has an IoU > 0.5 but has the wrong classification)

- **mean Average Precision** (mAP) score is calculated by taking the mean AP over all classes and/or over all IoU thresholds. Mean average precision (mAP) is used to determine the accuracy of a set of object detections from a model when compared to ground-truth object annotations of a dataset.



## Reference
- [Precision and Recall](https://en.wikipedia.org/wiki/Precision_and_recall)
- [Metrics for Object Detection and Segmentation](https://kharshit.github.io/blog/2019/09/20/evaluation-metrics-for-object-detection-and-segmentation)
- [Introduction of Metrics for Object Detection](https://blog.zenggyu.com/en/post/2018-12-16/an-introduction-to-evaluation-metrics-for-object-detection/)
- [Object Detection Metrics](https://github.com/rafaelpadilla/Object-Detection-Metrics)
- [Popular ML Evaluation Metrics](https://rubikscode.net/2020/10/19/14-popular-machine-learning-evaluation-metrics/), [ML Metrics](https://machinelearningmastery.com/metrics-evaluate-machine-learning-algorithms-python/), other [Metrics](https://medium.com/analytics-vidhya/complete-guide-to-machine-learning-evaluation-metrics-615c2864d916), [other metrics](https://www.analyticsvidhya.com/blog/2019/08/11-important-model-evaluation-error-metrics/)
- [IoU for Object Detection](https://www.pyimagesearch.com/2016/11/07/intersection-over-union-iou-for-object-detection/)
- [Breaking Down MaP](https://towardsdatascience.com/breaking-down-mean-average-precision-map-ae462f623a52)
- [MaP for Object Detection](https://jonathan-hui.medium.com/map-mean-average-precision-for-object-detection-45c121a31173)
- [Mathews Correlation COefficent](https://towardsdatascience.com/the-best-classification-metric-youve-never-heard-of-the-matthews-correlation-coefficient-3bf50a2f3e9a)
- [IoU better detection](https://towardsdatascience.com/iou-a-better-detection-evaluation-metric-45a511185be1)

Multiclass Metrics
- [Multi-Class Metrics Made Simple, Part I: Precision and Recall | by Boaz Shmueli | Towards Data Science](https://towardsdatascience.com/multi-class-metrics-made-simple-part-i-precision-and-recall-9250280bddc2)
- [Beyond Accuracy: Precision and Recall | by Will Koehrsen | Towards Data Science](https://towardsdatascience.com/beyond-accuracy-precision-and-recall-3da06bea9f6c)
- [How to Calculate Precision, Recall, and F-Measure for Imbalanced Classification](https://machinelearningmastery.com/precision-recall-and-f-measure-for-imbalanced-classification/)
- [Metrics to Evaluate your Machine Learning Algorithm | by Aditya Mishra | Towards Data Science](https://towardsdatascience.com/metrics-to-evaluate-your-machine-learning-algorithm-f10ba6e38234)