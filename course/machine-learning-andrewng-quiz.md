---
layout: default
author: irosyadi
title:  Machine Learning Andrew Ng Quizes
date: 2021-01-06 03:57:09
category: course
tags: ["machine learning"]
draft: false
---

# Machine Learning Andrew Ng Quizzes

## Week 1

### Introduction

1. A computer program is said to learn from experience E with respect to some task T and some performance measure P if its performance on T, as measured by P, improves with experience E. Suppose we feed a learning algorithm a lot of historical weather data, and have it learn to predict weather. **What would be a reasonable choice for P?** 
    - 🗹 The probability of it correctly predicting a future date’s weather.
    - ☐ The weather prediction task.
    - ☐ The process of the algorithm examining a large amount of historical weather data.
    - ☐ None of these.
2. A computer program is said to learn from experience E with respect to some task T and some performance measure P if its performance on T, as measured by P, improves with experience E. Suppose we feed a learning algorithm a lot of historical weather data, and have it learn to predict weather. In this setting, **what is T?**
    - 🗹 The weather prediction task.
    - ☐ None of these.
    - ☐ The probability of it correctly predicting a future date’s weather.
    - ☐ The process of the algorithm examining a large amount of historical weather data.
3. Suppose you are working on weather prediction, and use a learning algorithm to predict tomorrow’s temperature (in degrees Centigrade/Fahrenheit).  
    Would you treat this as a classification or a regression problem?
    - 🗹 Regression
    - ☐ Classification
4. Suppose you are working on weather prediction, and your weather station makes one of three predictions for each day’s weather: **Sunny, Cloudy or Rainy**. You’d like to use a learning algorithm to predict tomorrow’s weather.  
    Would you treat this as a classification or a regression problem?
    - ☐ Regression
    - 🗹 Classification
5. Suppose you are working on stock market prediction, and you would like to predict the **price of a particular stock tomorrow (measured in dollars)**. You want to use a learning algorithm for this.  
    Would you treat this as a classification or a regression problem?
    - 🗹 Regression
    - ☐ Classification
6. Suppose you are working on stock market prediction. You would like to predict **whether or not a certain company will declare bankruptcy within the next 7 days** (by training on data of similar companies that had previously been at risk of bankruptcy).  
    Would you treat this as a classification or a regression problem?
    -  Regression
    - 🗹 Classification
7. Suppose you are working on stock market prediction, Typically tens of millions of shares of Microsoft stock are traded (i.e., bought/sold) each day. You would like to predict the number of Microsoft shares that will be traded tomorrow.  
    Would you treat this as a classification or a regression problem?
    - 🗹 Regression
    -  Classification
8. Some of the problems below are best addressed using a supervised learning algorithm, and the others with an unsupervised learning algorithm. Which of the following would you apply supervised learning to? (Select all that apply.) In each case, assume some appropriate dataset is available for your algorithm to learn from.  
    - 🗹 Given historical data of children’s ages and heights, predict children’s height as a function of their age.
    - 🗹 Given 50 articles written by male authors, and 50 articles written by female authors, learn to predict the gender of a new manuscript’s author (when the identity of this author is unknown).
    -  Take a collection of 1000 essays written on the US Economy, and find a way to automatically group these essays into a small number of groups of essays that are somehow “similar” or “related”.
    -  Examine a large collection of emails that are known to be spam email, to discover if there are sub-types of spam mail.
9. Some of the problems below are best addressed using a supervised learning algorithm, and the others with an unsupervised learning algorithm. Which of the following would you apply supervised learning to? (Select all that apply.) In each case, assume some appropriate dataset is available for your algorithm to learn from.  
    - ☐ Given data on how 1000 medical patients respond to an experimental drug (such as effectiveness of the treatment, side effects, etc.), discover whether there are different categories or “types” of patients in terms of how they respond to the drug, and if so what these categories are.
    - ☐ Given a large dataset of medical records from patients suffering from heart disease, try to learn whether there might be different clusters of such patients for which we might tailor separate treatments.
    - 🗹 Have a computer examine an audio clip of a piece of music, and classify whether or not there are vocals (i.e., a human voice singing) in that audio clip, or if it is a clip of only musical instruments (and no vocals).
    - 🗹 Given genetic (DNA) data from a person, predict the odds of him/her developing diabetes over the next 10 years.
10. Some of the problems below are best addressed using a supervised learning algorithm, and the others with an unsupervised learning algorithm. Which of the following would you apply supervised learning to? (Select all that apply.) In each case, assume some appropriate dataset is available for your algorithm to learn from.
    - ☐ Take a collection of 1000 essays written on the US Economy, and find a way to automatically group these essays into a small number of groups of essays that are somehow “similar” or “related”.
    - 🗹 Given genetic (DNA) data from a person, predict the odds of him/her developing diabetes over the next 10 years.
    - ☐ Examine a large collection of emails that are known to be spam email, to discover if there are sub-types of spam mail.
    - 🗹  Examine the statistics of two football teams, and predict which team will win tomorrow’s match (given historical data of teams’ wins/losses to learn from).
11. Which of these is a reasonable definition of machine learning?  
    - ☐ Machine learning is the science of programming computers.
    - ☐ Machine learning learns from labeled data.
    - ☐ Machine learning is the field of allowing robots to act intelligently.
    - 🗹 Machine learning is the field of study that gives computers the ability to learn without being explicitly programmed.

### Linear Regression with One Variable :

1. Consider the problem of predicting how well a student does in her second year of college/university, given how well she did in her first year. Specifically, let x be equal to the number of “A” grades (including A-. A and A+ grades) that a student receives in their first year of college (freshmen year). We would like to predict the value of y, which we define as the number of “A” grades they get in their second year (sophomore year).  
    Here each row is one training example. Recall that in linear regression, our hypothesis is $h_\theta(x)=\theta_0+\theta_1x$ to denote the number of training examples.  
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253270_20210106042809097_6366.png)  
    For the training set given above (note that this training set may also be referenced in other questions in this $m$)? In the box below, please enter your answer (which should be a number between 0 and 10).  
    
    ```
    4 
    ```
2. Many substances that can burn (such as gasoline and alcohol) have a chemical structure based on carbon atoms; for this reason they are called hydrocarbons. A chemist wants to understand how the number of carbon atoms in a molecule affects how much energy is released when that molecule combusts (meaning that it is burned). The chemist obtains the dataset below. In the column on the right, “kJ/mol” is the unit measuring the amount of energy released.  
      
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253268_20210106042807663_5970.png)  
      
     You would like to use linear regression $h_\theta(x) = \theta_0 + \theta_1x$ to estimate the amount of energy released (y) as a function of the number of carbon atoms (x). Which of the following do you think will be the values you obtain for $\theta_0$ and $\theta_1$ ? You should be able to select the right answer without actually implementing linear regression.  

    - ☐ $\theta_0$ = −569.6, $\theta_1$ = 530.9
    - ☐ $\theta_0$ = −1780.0, $\theta_1$ = −530.9
    - 🗹 $\theta_0$ = −569.6, $\theta_1$ = −530.9
    - ☐ $\theta_0$ = −1780.0, $\theta_1$ = 530.9

2. For this question, assume that we are using the training set from Q1.  
    Recall our definition of the cost function was $J(\theta_0, \theta_1 ) = \frac{1}{2m} \sum_{i=1}^{m} (h (x^{(i)} ) - y^{(i)})^2$  
    What is $J(0,1)$? In the box below,  
    please enter your answer (Simplify fractions to decimals when entering answer, and ‘.’ as the decimal delimiter e.g., 1.5).  
    ```
    0.5
    ```
3. Suppose we set $\theta_0 = 0, \theta_1 = 1.5$ in the linear regression hypothesis from Q1. What is $h_\theta(2)$ ?  
    ```
    3
    ```
3. Suppose we set $\theta_0 = -2, \theta_1 = 0.5$ in the linear regression hypothesis from Q1. What is $h_\theta(6)$?  
    ```
    1
    ```
5. Let $f$ be some function so that $f(\theta_0 , \theta_1 )$ outputs a number. For this problem, f is some arbitrary/unknown smooth function (not necessarily the cost function of linear regression, so f may have local optima).
Suppose we use gradient descent to try to minimize $f(\theta_0 , \theta_1 )$ as a function of $\theta_0$ and $\theta_1$.
Which of the following statements are true? (Check all that apply.)
    - 🗹 If $\theta_0$ and $\theta_1$ are initialized at the global minimum, then one iteration will not change their values.
    - ☐ Setting the learning rate $\alpha$ to be very small is not harmful, and can only speed up the convergence of gradient descent.
    - ☐ No matter how $\theta_0$ and $\theta_1$ are initialized, so long as $\alpha$ is sufficiently small, we can safely expect gradient descent to converge to the same solution.
    - 🗹  If the first few iterations of gradient descent cause $f(\theta_0 , \theta_1)$ to increase rather than decrease, then the most likely cause is that we have set the learning rate $\alpha$ to too large a value.
5. In the given figure, the cost function $J(\theta_0, \theta_1)$ has been plotted against $\theta_0$ and $\theta_1$, as shown in ‘Plot 2’. The contour plot for the same cost function is given in ‘Plot 1’. Based on the figure, choose the correct options (check all that apply).
![Plots for Cost Function](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253271_20210106045949479_13558.png)
    - ☐ If we start from point B, gradient descent with a well-chosen learning rate will eventually help us reach at or near point A, as the value of cost function $J(\theta_0, \theta_1)$ is maximum at point A.
    - ☐ If we start from point B, gradient descent with a well-chosen learning rate will eventually help us reach at or near point C, as the value of cost function $J(\theta_0, \theta_1)$ is minimum at point C.
    - 🗹 Point P (the global minimum of plot 2) corresponds to point A of Plot 1.
    - 🗹 If we start from point B, gradient descent with a well-chosen learning rate will eventually help us reach at or near point A, as the value of cost function $J(\theta_0, \theta_1)$ is minimum at A.
    - ☐ Point P (The global minimum of plot 2) corresponds to point C of Plot 1.
6. Suppose that for some linear regression problem (say, predicting housing prices as in the lecture), we have some training set, and for our training set we managed to find some $\theta_0, \theta_1$, such that $J(\theta_0 , \theta_1) = 0$.
Which of the statements below must then be true? (Check all that apply.)
    - ☐ Gradient descent is likely to get stuck at a local minimum and fail to find the global minimum.
    - ☐ For this to be true, we must have $\theta_0 = 0$ and $\theta_1 = 0$
so that $h_{\theta}(x) = 0$
    - ☐ For this to be true, we must have $y^{(i)} = 0$ for every value of $i = 1, 2,…,m$.
    - 🗹 Our training set can be fit perfectly by a straight line, i.e., all of our training examples lie perfectly on some straight line.

## Week 4
### Logistic Regression :
1. Suppose that you have trained a logistic regression classifier, and it outputs on a new example a prediction $h_\theta(x) = 0.2$. This means (check all that apply):
    - ☐ Our estimate for P(y = 1|x; θ) is 0.8.
    - 🗹 Our estimate for P(y = 0|x; θ) is 0.8.
    - 🗹 Our estimate for P(y = 1|x; θ) is 0.2.
    - ☐ Our estimate for P(y = 0|x; θ) is 0.2.
2. Suppose you have the following training set, and fit a logistic regression classifier $h_\theta(x) = g(\theta_0 + \theta_1x_1 + \theta_2x_2)$.
Which of the following are true? Check all that apply.
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253274_20210106083228677_5192.png)
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253275_20210106083244202_2232.png)
    - 🗹 Adding polynomial features (e.g., instead using $h_\theta(x) = g(\theta_0 + \theta_1 x_1 + \theta_2 x_2 + \theta_3 x_1^2 + \theta_4 x_1 x_2 + \theta_5 x_2^2 ))$ could increase how well we can fit the training data.
    - 🗹 At the optimal value of θ (e.g., found by fminunc), we will have $J(θ) ≥ 0$.
    - ☐ Adding polynomial features (e.g., instead using $h_\theta(x) = g(\theta_0 + \theta_1 x_1 + \theta_2 x_2 + \theta_3 x_1^2 + \theta_4 x_1 x_2 + \theta_5 x_2^2 ))$ would increase $J(θ)$ because we are now summing over more terms.
    - ☐ If we train gradient descent for enough iterations, for some examples $x^{(i)}$ in the training set it is possible to obtain $h_\theta(x^{(i)} ) > 1$.
3. For logistic regression, the gradient is given by $\frac{\partial }{\partial \theta_j } J(\theta) = \frac{1}{m} \sum_{i=1}^{m}(h_\theta(x^{(i)})-y^{i})x^{(i)}_j$. Which of these is a correct gradient descent update for logistic regression with a learning rate of $\alpha$ ? Check all that apply.
    - 🗹 $\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^m (h_\theta(x^{(i)-y^i}) x^{(i)}_j$ (simultaneously update for all j).
    - ☐ $\theta := \theta - \alpha \frac{1}{m} \sum_{i=1}^m (\theta^Tx-y^{(i)}) x^{(i)}$.
    - 🗹 $\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^m \left(\frac{1}{1+e^{-\theta^Tx^{(i)}}}-y^{(i)}\right) x^{(i)}_j$ (simultaneously update for all j).
    - ☐ $\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^m (h_\theta(x^{(i)-y^i}) x^{(i)}$ (simultaneously update for all j).
4. Which of the following statements are true? Check all that apply.
    - 🗹 The one-vs-all technique allows you to use logistic regression for problems in which each $y^{(i)}$ comes from a fixed, discrete set of values.
    - ☐ For logistic regression, sometimes gradient descent will converge to a local minimum (and fail to find the global minimum). This is the reason we prefer more advanced optimization algorithms such as fminunc (conjugate gradient/BFGS/L-BFGS/etc).
    - 🗹 The cost function $J(\theta)$ for logistic regression trained with $m \geq 1$ examples is always greater than or equal to zero.
    - ☐ Since we train one classifier when there are two classes, we train two classifiers when there are three classes (and we do one-vs-all classification).
5. Suppose you train a logistic classifier $h_\theta(x) = g(\theta_0 + \theta_1x_1 + \theta_2x_2)$. Suppose $\theta_0 = 6$, $\theta_1 = -1$, $\theta_2 = 0$. Which of the following figures represents the decision boundary found by your classifier?
    - 🗹  Figure:
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253276_20210106084140048_15600.png)
    - ☐  Figure:
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253277_20210106084157413_13022.png)
    - ☐  Figure:
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253279_20210106084209408_957.png)
    - ☐  Figure:
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253280_20210106084222258_31191.png)

### Regularization
1. You are training a classification model with logistic regression. Which of the following statements are true? Check all that apply.
    - ☐ Introducing regularization to the model always results in equal or better performance on the training set.
    - ☐ Introducing regularization to the model always results in equal or better performance on examples not in the training set.
    - 🗹 Adding a new feature to the model always results in equal or better performance on the training set.
    - ☐ Adding many new features to the model helps prevent overfitting on the training set.
2. Suppose you ran logistic regression twice, once with $\lambda = 0$, and once with $\lambda = 1$. One of the times, you got parameters $\theta = \begin{bmatrix} 74.81\\ 45.05 \end{bmatrix}$, and the other time you got $\theta = \begin{bmatrix} 1.37\\ 0.51 \end{bmatrix}$. However, you forgot which value of $\lambda$ corresponds to which value of $\theta$. Which one do you think corresponds to $\lambda = 1$?
    - 🗹 $\theta = \begin{bmatrix} 1.37\\ 0.51 \end{bmatrix}$
    - ☐ $\theta = \begin{bmatrix} 74.81\\ 45.05 \end{bmatrix}$
3. Which of the following statements about regularization are true? Check all that apply.
    - ☐ Using a very large value of $\lambda$ hurt the performance of your hypothesis; the only reason we do not set $\lambda$ to be too large is to avoid numerical problems.
    - ☐ Because logistic regression outputs values $0 \leq h_\theta(x) \leq 1$, its range of output values can only be “shrunk” slightly by regularization anyway, so regularization is generally not helpful for it.
    - 🗹 Consider a classification problem. Adding regularization may cause your classifier to incorrectly classify some training examples (which it had correctly classified when not using regularization, i.e. when $\lambda = 0$).
    - ☐ Using too large a value of $\lambda$ can cause your hypothesis to overfit the data; this can be avoided by reducing $\lambda$.
4. Which of the following statements about regularization are true? Check all that apply.
    - ☐ Using a very large value of $\lambda$ hurt the performance of your hypothesis; the only reason we do not set $\lambda$ to be too large is to avoid numerical problems.
    - ☐ Because logistic regression outputs values $0 \leq h_\theta(x) \leq 1$, its range of output values can only be “shrunk” slightly by regularization anyway, so regularization is generally not helpful for it.
    - ☐ Because regularization causes $J(\theta)$ to no longer be convex, gradient descent may not always converge to the global minimum (when $\lambda > 0$, and when using an appropriate learning rate $\alpha$).
    - 🗹 Using too large a value of $\lambda$ can cause your hypothesis to underfit the data; this can be avoided by reducing $\lambda$.
4. In which one of the following figures do you think the hypothesis has **overfit** the training set?
    - 🗹 Figure:  
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253285_20210106085327397_3544.png)
    - ☐ Figure:  
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253284_20210106085326883_11633.png)
    - ☐ Figure:  
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253283_20210106085326168_15899.png)
    - ☐ Figure:  
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253281_20210106085325553_12712.png)
5. In which one of the following figures do you think the hypothesis has **underfit** the training set?
    - 🗹 Figure:  
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253290_20210106085459252_8922.png)
    - ☐ Figure:  
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253288_20210106085458644_4792.png)
    - ☐ Figure:  
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253287_20210106085457929_4685.png)
    - ☐ Figure:  
    ![enter image description here](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253286_20210106085457521_31575.png)

## Week 5
### Neural Networks - Representation :
1. Which of the following statements are true? Check all that apply.
    - 🗹 Any logical function over binary-valued (0 or 1) inputs $x_1$ and $x_2$ can be (approximately) represented using some neural network.
    - ☐ Suppose you have a multi-class classification problem with three classes, trained with a 3 layer network. Let $a^{(3)}_1 = (h_\theta(x))_1$ be the activation of the first output unit, and similarly $a^{(3)}_2 = (h_\theta(x))_2$ and $a^{(3)}_3 = (h_\theta(x))_3$. Then for any input x, it must be the case that $a^{(3)}_1 + a^{(3)}_2 + a^{(3)}_3 = 1$.
    - ☐ A two layer (one input layer, one output layer; no hidden layer) neural network can represent the XOR function.
   - 🗹 The activation values of the hidden units in a neural network, with the sigmoid activation function applied at every layer, are always in the range (0, 1).
2. Consider the following neural network which takes two binary-valued inputs 
$x_1,x_2 \ \epsilon \ \{0,1\}$ and outputs $h_\theta(x)$. Which of the following logical functions does it (approximately) compute?
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253291_20210106090915082_15939.png)
    - 🗹 AND
    - ☐ NAND (meaning “NOT AND”)
    - ☐ OR
    - ☐ XOR (exclusive OR)
3. Consider the following neural network which takes two binary-valued inputs
$x_1,x_2 \ \epsilon \ \{0,1\}$ and outputs $h_\theta(x)$. Which of the following logical functions does it (approximately) compute?
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253292_20210106091216256_21503.png)
    - ☐ AND
    - ☐ NAND (meaning “NOT AND”)
    - 🗹 OR
    - ☐ XOR (exclusive OR)
4. Consider the neural network given below. Which of the following equations correctly computes the activation $a_1^{(3)}$? Note: $g(z)$ is the sigmoid activation function.
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253294_20210106091606930_29779.png)
    - 🗹 $a_1^{(3)} = g(\theta_{1,0}^{(2)}a_0^{(2)}+\theta_{1,1}^{(2)}a_1^{(2)}+\theta_{1,2}^{(2)}a_2^{(2)})$
    - ☐ $a_1^{(3)} = g(\theta_{1,0}^{(2)}a_0^{(1)}+\theta_{1,1}^{(2)}a_1^{(1)}+\theta_{1,2}^{(2)}a_2^{(1)})$
    - ☐ $a_1^{(3)} = g(\theta_{1,0}^{(1)}a_0^{(2)}+\theta_{1,1}^{(1)}a_1^{(2)}+\theta_{1,2}^{(1)}a_2^{(2)})$
    - ☐ $a_1^{(3)} = g(\theta_{2,0}^{(2)}a_0^{(2)}+\theta_{2,1}^{(2)}a_1^{(2)}+\theta_{2,2}^{(2)}a_2^{(2)})$
5. You have the following neural network:
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253296_20210106092659353_25197.png)
You’d like to compute the activations of the hidden layer $a^{(2)} \ \epsilon \ R^3$. One way to do
so is the following Octave code:
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253297_20210106092714486_4049.png)
You want to have a vectorized implementation of this (i.e., one that does not use for loops). Which of the following implementations correctly compute ? Check all
that apply.
    - 🗹 `z = Theta1 * x; a2 = sigmoid (z);`
    - ☐ `a2 = sigmoid (x * Theta1);`
    - ☐ `a2 = sigmoid (Theta2 * x);`
    - ☐ `z = sigmoid(x); a2 = sigmoid (Theta1 * z);`
6. You are using the neural network pictured below and have learned the parameters $\theta^{(1)} = \begin{bmatrix} 1 & 1 & 2.4\\ 1 & 1.7 & 3.2 \end{bmatrix}$ (used to compute $a^{(2)}$) and $\theta^{(2)} = \begin{bmatrix} 1 & 0.3 & -1.2 \end{bmatrix}$ (used to compute $a^{(3)}$ as a function of $a^{(2)}$). Suppose you swap the parameters for the first hidden layer between its two units so $\theta^{(1)} = \begin{bmatrix} 1 & 1.7 & 3.2 \\ 1 & 1 & 2.4 \end{bmatrix}$ and also swap the output layer so $\theta^{(2)} = \begin{bmatrix} 1 & -1.2 & 0.3 \end{bmatrix}$. How will this change the value of the output $h_\theta(x)$?
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253299_20210106100117145_12734.png)
    - 🗹 It will stay the same.
    - ☐ It will increase.
    - ☐ It will decrease
    - ☐ Insufficient information to tell: it may increase or decrease.

### Neural Networks: Learning :

1. You are training a three layer neural network and would like to use backpropagation to compute the gradient of the cost function. In the backpropagation algorithm, one of the steps is to update $\Delta_{ij}^{(2)} := \Delta_{ij}^{(2)} + \delta_i^{(3)} * (a^{(2)})_j$
for every i,j. Which of the following is a correct vectorization of this step?
     - ☐ $\Delta^{(2)} := \Delta^{(2)} + \delta^{(2)} * (a^{(3)})^T$

    - ☐ $\Delta^{(2)} := \Delta^{(2)} + (a^{(2)})^T * \delta^{(3)}$

   - ☐ $\Delta^{(2)} := \Delta^{(2)} + (a^{(2)})^T * \delta^{(2)}$

   - 🗹 $\Delta^{(2)} := \Delta^{(2)} + \delta^{(3)} * (a^{(2)})^T$
2. Suppose Theta1 is a 5x3 matrix, and Theta2 is a 4x6 matrix. You set thetaVec = [Theta1( : ), Theta2( : )]. Which of the following correctly recovers ?
    - 🗹 reshape(thetaVec(16 : 39), 4, 6)
    - ☐ reshape(thetaVec(15 : 38), 4, 6)
    - ☐ reshape(thetaVec(16 : 24), 4, 6)
    - ☐ reshape(thetaVec(15 : 39), 4, 6)
    - ☐ reshape(thetaVec(16 : 39), 6, 4)
3. Let $J(\theta) = 2\theta^3 + 2$. Let $\theta = 1$, and $\epsilon = 0.01$. Use the formula $\frac{J{(\theta + \epsilon)}-J{(\theta - \epsilon)}}{2\epsilon}$ to numerically compute an approximation to the derivative at $\theta = 1$. What value do you get? (When $\theta = 1$, the true/exact derivative is $\frac{\mathrm{d} J(\theta)}{\mathrm{d} \theta} = 6$.)
    - ☐ 8
    - 🗹 6.0002
    - ☐ 6
    - ☐ 5.9998
4. Which of the following statements are true? Check all that apply.
    - 🗹 For computational efficiency, after we have performed gradient checking to verify that our backpropagation code is correct, we usually disable gradient checking before using backpropagation to train the network.
    - ☐ Computing the gradient of the cost function in a neural network has the same efficiency when we use backpropagation or when we numerically compute it using the method of gradient checking.
    - 🗹 Using gradient checking can help verify if one’s implementation of backpropagation is bug-free.
    - ☐ Gradient checking is useful if we are using one of the advanced optimization methods (such as in fminunc) as our optimization algorithm. However, it serves little purpose if we are using gradient descent.
5. Which of the following statements are true? Check all that apply.
    - 🗹 If we are training a neural network using gradient descent, one reasonable “debugging” step to make sure it is working is to plot $J(\theta)$ as a function of the number of iterations, and make sure it is decreasing (or at least non-increasing) after each iteration.
    - ☐ Suppose you have a three layer network with parameters $\theta^{(1)}$ (controlling the function mapping from the inputs to the hidden units) and $\theta^{(2)}$ (controlling the mapping from the hidden units to the outputs). If we set all the elements of $\theta^{(1)}$ to be 0, and all the elements of $\theta^{(2)}$ to be 1, then this suffices for symmetry breaking, since the neurons are no longer all computing the same function of the input.
    - 🗹 Suppose you are training a neural network using gradient descent. Depending on your random initialization, your algorithm may converge to different local optima (i.e., if you run the algorithm twice with different random initializations, gradient descent may converge to two different solutions).
    - ☐ If we initialize all the parameters of a neural network to ones instead of zeros, this will suffice for the purpose of “symmetry breaking” because the parameters are no longer symmetrically equal to zero.

## Week 6
### Advice for Applying Machine Learning :
1. You train a learning algorithm, and find that it has unacceptably high error on the test set. You plot the learning curve, and obtain the figure below. Is the algorithm suffering from high bias, high variance, or neither?
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253301_20210106114811822_23068.png)
    - ☐ High variance
    - ☐ Neither
    - 🗹 High bias
2. You train a learning algorithm, and find that it has unacceptably high error on the test set. You plot the learning curve, and obtain the figure below. Is the algorithm suffering from high bias, high variance, or neither?
![](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1610253302_20210106115114688_20798.png)
    - 🗹 High variance
    - ☐ Neither
    - ☐ High bias
3. Suppose you have implemented regularized logistic regression to classify what object is in an image (i.e., to do object recognition). However, when you test your hypothesis on a new set of images, you find that it makes unacceptably large errors with its predictions on the new images. However, your hypothesis performs well (has low error) on the training set. Which of the following are promising steps to take? Check all that apply.
NOTE: Since the hypothesis performs well (has low error) on the training set, it is suffering from high variance (overfitting)
    - ☐ Try adding polynomial features.
    - ☐ Use fewer training examples.
    - 🗹  Try using a smaller set of features.
    - 🗹 Get more training examples.
    - ☐ Try evaluating the hypothesis on a cross validation set rather than the test set.
    - ☐ Try decreasing the regularization parameter λ.
    - 🗹 Try increasing the regularization parameter λ.
4. Suppose you have implemented regularized logistic regression to predict what items customers will purchase on a web shopping site. However, when you test your hypothesis on a new set of customers, you find that it makes unacceptably large errors in its predictions. Furthermore, the hypothesis performs poorly on the training set. Which of the following might be promising steps to take? Check all that apply.
NOTE: Since the hypothesis performs poorly on the training set, it is suffering from high bias (underfitting)
    - ☐ Try increasing the regularization parameter λ.
    - 🗹 Try decreasing the regularization parameter λ.
    - ☐ Try evaluating the hypothesis on a cross validation set rather than the test set.
    - ☐ Use fewer training examples.
    - 🗹 Try adding polynomial features.
    - ☐ Try using a smaller set of features.
    - 🗹 Try to obtain and use additional features.
5. Which of the following statements are true? Check all that apply.
    - ☐ Suppose you are training a regularized linear regression model. The recommended way to choose what value of regularization parameter to use is to choose the value of which gives the lowest test set error.
    - ☐ Suppose you are training a regularized linear regression model.The recommended way to choose what value of regularization parameter to use is to choose the value of which gives the lowest training set error.
    - 🗹 The performance of a learning algorithm on the training set will typically be better than its performance on the test set.
    - 🗹 Suppose you are training a regularized linear regression model. The recommended way to choose what value of regularization parameter to use is to choose the value of which gives the lowest cross validation error.
    - 🗹 A typical split of a dataset into training, validation and test sets might be 60% training set, 20% validation set, and 20% test set.
    - ☐ Suppose you are training a logistic regression classifier using polynomial features and want to select what degree polynomial (denoted in the lecture videos) to use. After training the classifier on the entire training set, you decide to use a subset of the training examples as a validation set. This will work just as well as having a validation set that is separate (disjoint) from the training set.
    - ☐ It is okay to use data from the test set to choose the regularization parameter λ, but not the model parameters (θ).
    - 🗹 Suppose you are using linear regression to predict housing prices, and your dataset comes sorted in order of increasing sizes of houses. It is then important to randomly shuffle the dataset before splitting it into training, validation and test sets, so that we don’t have all the smallest houses going into the training set, and all the largest houses going into the test set.
6. Which of the following statements are true? Check all that apply.
    - 🗹 A model with more parameters is more prone to overfitting and typically has higher variance.
    - ☐ If the training and test errors are about the same, adding more features will not help improve the results.
    - 🗹 If a learning algorithm is suffering from high bias, only adding more training examples may not improve the test error significantly.
    - 🗹 If a learning algorithm is suffering from high variance, adding more training examples is likely to improve the test error.
    - 🗹 When debugging learning algorithms, it is useful to plot a learning curve to understand if there is a high bias or high variance problem.
    - ☐ If a neural network has much lower training error than test error, then adding more layers will help bring the test error down because we can fit the test set better.









## Links
* [Coursera-Machine-Learning/Week1Quiz.md at master · LiMengyang990726/Coursera-Machine-Learning](https://github.com/LiMengyang990726/Coursera-Machine-Learning/blob/master/Machine-Learning/Week1Quiz.md)
* [atinesh-s/Coursera-Machine-Learning-Stanford: Machine learning-Stanford University](https://github.com/atinesh-s/Coursera-Machine-Learning-Stanford)
* [Coursera-Machine Learning - Andrew NG - All weeks solutions of assignments and quiz - codemummy |online technical computer science platform.](https://www.codemummy.com/p/coursera-machine-learning-andrew-ng-all.html)
* [datasciencecoursera/Stanford_Machine_Learning at master · mGalarnyk/datasciencecoursera](https://github.com/mGalarnyk/datasciencecoursera/tree/master/Stanford_Machine_Learning)
* [APDaga DumpBox : The Thirst for Learning...: Machine Learning](https://www.apdaga.com/search/label/Machine%20Learning?updated-max=2019-11-14T15:01:00%2B05:30&max-results=20&start=20&by-date=false)