This page is a curated collection of Jupyter/IPython notebooks that are notable.  Feel free to add new content here, but please try to only include links to notebooks that include interesting visual or technical content; this should *not* simply be a dump of a Google search on every ipynb file out there.

**Important contribution instructions:** If you add new content, please ensure that for any notebook you link to, the link is to the rendered version using [nbviewer](http://nbviewer.ipython.org), rather than the raw file.  Simply paste the notebook URL in the nbviewer box and copy the resulting URL of the rendered version.  This will make it much easier for visitors to be able to immediately access the new content.

Note that [Matt Davis](https://github.com/jiffyclub) has conveniently written a set of [bookmarklets and extensions](https://github.com/jiffyclub/open-in-nbviewer) to make it a one-click affair to load a Notebook URL into your browser of choice, directly opening into nbviewer.

# Awesome Jupyter Notebooks
## Table of Contents

1. [Entire books or other large collections of notebooks on a topic](#entire-books-or-other-large-collections-of-notebooks-on-a-topic)
    * [Introductory Tutorials](#introductory-tutorials)
    * [Programming and Computer Science](#programming-and-computer-science)
    * [Statistics, Machine Learning and Data Science](#statistics-machine-learning-and-data-science)
    * [Mathematics, Physics, Chemistry, Biology](#mathematics-physics-chemistry-biology)
    * [Earth Science and Geo-Spatial data](#earth-science-and-geo-spatial-data)
    * [Linguistics and Text Mining](#linguistics-and-text-mining)
    * [Signal Processing](#signal-processing)
    * [Engineering Education](#engineering-education)
1. [Scientific computing and data analysis with the SciPy Stack](#scientific-computing-and-data-analysis-with-the-scipy-stack)
    * [General topics in scientific computing](#general-topics-in-scientific-computing)
    * [Social data](#social-data)
    * [Psychology and Neuroscience](#psychology-and-neuroscience)
    * [Machine Learning, Statistics and Probability](#machine-learning-statistics-and-probability)
    * [Physics, Chemistry and Biology](#physics-chemistry-and-biology)
    * [Economics and Finance](#economics-and-finance)
    * [Earth science and geo-spatial data](#earth-science-and-geo-spatial-data)
    * [Data visualization and plotting](#data-visualization-and-plotting)
    * [Mathematics](#mathematics)
    * [Signal, Sound and Image Processing](#signal-and-sound-processing)
    * [Natural Language Processing](#natural-language-processing)
    * [Pandas for data analysis](#pandas-for-data-analysis)
1. [General Python Programming](#general-python-programming)
1. [Notebooks in languages other than Python](#notebooks-in-languages-other-than-python)
    * [Julia](#julia)
    * [Haskell](#haskell)
    * [Ruby](#ruby)
    * [Perl](#perl)
    * [F#](#f)
    * [C#](#c)
    * [Javascript](#javascript)
1. [Miscellaneous topics about doing various things *with* the Notebook itself](#miscellaneous-topics-about-doing-various-things-with-the-notebook-itself)
1. [Reproducible academic publications](#reproducible-academic-publications)
1. [Other publications using the Notebook](#other-publications-and-conference-abstracts-that-explicitly-use-the-notebook)
1. [Data-driven journalism](#data-driven-journalism)
1. [Whimsical notebooks](#whimsical-notebooks)
1. [Videos of IPython being used in the wild](#videos-of-ipython-being-used-in-the-wild)
1. [Accessing an IBM quantum computer via notebooks](#accessing-an-ibm-quantum-computer-via-notebooks)
1. [Software Architecture](#software-architecture)

## Entire books or other large collections of notebooks on a topic

### Introductory Tutorials

* First things first, how to [run code in the notebook](https://nbviewer.jupyter.org/github/jupyter/notebook/blob/master/docs/source/examples/Notebook/Running%20Code.ipynb). There is also a general [collection of notebooks](https://nbviewer.jupyter.org/github/ipython/ipython/blob/master/examples/IPython%20Kernel/Index.ipynb) from IPython.  Another useful one from this collection is an explanation of our [rich display system](https://nbviewer.jupyter.org/github/ipython/ipython/blob/master/examples/IPython%20Kernel/Custom%20Display%20Logic.ipynb).

* A [great matplotlib tutorial](http://nbviewer.ipython.org/github/jrjohansson/scientific-python-lectures/blob/master/Lecture-4-Matplotlib.ipynb), part of the fantastic [Lectures on Scientific Computing with Python](http://nbviewer.ipython.org/github/jrjohansson/scientific-python-lectures/tree/master) by [J.R. Johansson](https://github.com/jrjohansson).

* The code of the [IPython mini-book](https://github.com/rossant/ipython-minibook) by C. Rossant, introducing IPython, NumPy, SciPy, Pandas and matplotlib for interactive computing and data visualization.

* [Python Tutorial](https://github.com/rajathkmp/Python-Lectures) by [Rajath Kumar M P](https://github.com/rajathkmp/) 

* [Growing Neat Software Architecture from Jupyter Notebooks](https://www.youtube.com/watch?v=K4QN27IKr0g), a primer by [Guillaume Chevalier](https://github.com/guillaume-chevalier) on how to build clean software using notebooks.

### Programming and Computer Science

* [Automata and Computability using Jupyter](http://nbviewer.jupyter.org/github/ganeshutah/Jove/blob/master/notebooks/driver/Drive_Jove_Gallery_Examples.ipynb), an entire course, based on forthcoming book published by Taylor and Francis; book title: "Automata and Computability: Programmer's Perspective", by Ganesh Gopalakrishnan, Professor, School of Computing, University of Utah, Salt Lake City. [in English, has Youtube videos]

* [Introduction to Programming (using Python)](http://nbviewer.ipython.org/github/ehmatthes/intro_programming/blob/master/notebooks/index.ipynb), an entire introductory Python course written by [Eric Matthes](http://peak5390.wordpress.com/about). [This post](http://peak5390.wordpress.com/2013/09/22/how-ipython-notebook-and-github-have-changed-the-way-i-teach-python/) explains the educational context in an Alaskan high school where Eric is a teacher.

* [Numeric Computing is Fun](https://github.com/mikkokotila/jupyter4kids) A series of notebooks created to help educate aspiring computer programmers and data scientists of all ages with no previous programming experience.

* [Python for Developers](http://ricardoduarte.github.io/python-for-developers), a complete book on Python programming by [Ricardo Duarte](https://github.com/ricardoduarte). Note the book also exists [in Portuguese](http://ricardoduarte.github.io/python-para-desenvolvedores), [website translated into English](http://translate.google.com/translate?hl=&sl=pt&tl=en&u=http%3A%2F%2Fricardoduarte.github.io%2Fpython-para-desenvolvedores%2F)

* [CS1001.py - Extended Introduction to Computer Science](https://github.com/yoavram/CS1001.py). Recitations from Tel-Aviv University introductory course to computer science, assembled as IPython notebooks by [Yoav Ram](http://www.yoavram.com/).

* [Exploratory Computing with Python](http://mbakker7.github.io/exploratory_computing_with_python/), a set of 15 Notebooks that cover exploratory computing, data analysis, and visualization. No prior programming knowledge required. Each Notebook includes a number of exercises (with answers) that should take less than 4 hours to complete. Developed by Mark Bakker for undergraduate engineering students at the Delft University of Technology.

* [Understanding evolutionary strategies and covariance matrix adaptation](http://nbviewer.ipython.org/github/lmarti/evolutionary-computation-course/blob/master/AEC.04%20-%20Evolutionary%20Strategies%20and%20Covariance%20Matrix%20Adaptation.ipynb), from the [Advanced Evolutionary Computation: Theory and Practice](http://nbviewer.ipython.org/github/lmarti/evolutionary-computation-course/tree/master/) course by [Luis Martí](http://lmarti.com).

* [Code Katas in Python](https://github.com/gudnm/codekatas), a collection of algorithmic and data structure exercises covering search and sorting algorithms, stacks, queues, linked lists, graphs, backtracking and greedy problems.

* [Jupyter notebook activities for Part IA of the computing course (Michaelmas Term) in the Engineering Tripos at University of Cambridge](https://notebooks.azure.com/library/CUED-IA-Computing-Michaelmas), by [Garth Wells](http://www3.eng.cam.ac.uk/~gnw20/).

* [Introduction to Python for Computational Science and Engineering](https://github.com/fangohr/introduction-to-python-for-computational-science-and-engineering/blob/master/Readme.md) ([Hans Fangohr](https://fangohr.github.io)): Textbook for beginners, broken into one Jupyter Notebook per chapter. Can be [executed and interacted with online](https://mybinder.org/v2/gh/fangohr/introduction-to-python-for-computational-science-and-engineering/master?filepath=index.ipynb) using Binder.

### Statistics, Machine Learning, and Data Science

* [Predicting PewDiePie's daily subscribers using Linear Regression](https://github.com/Tanu-N-Prabhu/Python/blob/master/Predicting_PewDiePie's_daily_subscribers_using_Machine_Learning_.ipynb), a notebook which explains the implementation of Linear Regression from scratch, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu/Python), author and editor at [Towards data science](https://medium.com/@tanunprabhu95). 

* [Top Python Libraries Used In Data Science](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Top_Python_Libraries_Used_In_Data%C2%A0Science.ipynb), this notebook explain the important library used in data science, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu/Python), author and editor at [Towards data science](https://medium.com/@tanunprabhu95).

* [Web scraping using Python with BeautifulSoup and Requests libraries](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Web_scraping_Rate_My_Professor.ipynb), a notebook which explains scraping the data from the internet from scratch, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu/Python), author and editor at [Towards data science](https://medium.com/@tanunprabhu95).

* [Exploratory data analysis in Python](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Exploratory_data_Analysis.ipynb), a notebook which explains the steps to perform Exploratory data Analysis in python from the scratch, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu/Python), author and editor at [Towards data science](https://medium.com/@tanunprabhu95).

* [An introductory notebook on uncertainty quantification and sensitivity analysis](http://nbviewer.jupyter.org/github/lrhgit/uqsa_tutorials/blob/master/index.ipynb) developed for the [Workshop On Uncertainty Quantification And Sensitivity Analysis For
Cardiovascular Modeling](http://sathercenter.berkeley.edu/peder-sather-grant/2016-grantees/)
by [Leif Rune Hellevik](https://github.com/lrhgit), Vinzenz Eck and Jacob T. Sturdy.

* [Python Data Science Handbook Supplemental Materials](https://github.com/jakevdp/PythonDataScienceHandbook), a collection of notebooks by [Jake VanderPlas](http://vanderplas.com) to accompany the book.

* [Data Cleaning using Python with Pandas Library](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Data_Cleaning/Data_Cleaning_using_Python_with_Pandas_Library.ipynb), a Date Science notebook which clearly explains Data Cleaning using Python with Pandas Library at a beginner level, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu).

* [Social Network Analysis: From Graph Theory to Applications with Python](https://github.com/dimgold/pycon_social_networkx). A tutorial on network creation, analysis, information flow and influence maximization with [Networkx](https://networkx.github.io/) by [Dima Goldenberg](https://github.com/dimgold).

* ["ISP": Introduction to Statistics with Python](https://github.com/thomas-haslwanter/statsintro_python), a collection of notebooks accompanying the [book of the same name](http://www.springer.com/us/book/9783319283159), by [Thomas Haslwanter](http://work.thaslwanter.at).

* [Notebooks for the exercises in Andrew Ng's online ML course, Spark and TensorFlow](https://github.com/jdwittenauer/ipython-notebooks), as well as extra material on other tools from the scipy stack, by [John Wittenauer](https://github.com/jdwittenauer).

* [AM207: Monte Carlo Methods, Stochastic Optimization](http://am207.github.io/2016/): a complete course by Verena Kaynig-Fittkau and Pavlos Protopapas from Harvard, with all lecture materials and homework sets as notebooks.

* [An introduction to Bayesian inference](http://nbviewer.jupyter.org/github/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers/blob/master/Chapter1_Introduction/Ch1_Introduction_PyMC3.ipynb), this is just chapter 1 in an ongoing book titled [Probabilistic Programming and Bayesian Methods for Hackers Using Python and PyMC](http://camdavidsonpilon.github.io/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers), by [Cameron Davidson-Pilon](http://camdp.com/).

* [Doing Bayesian Data Analysis](https://github.com/JWarmenhoven/DBDA-python): Python/PyMC3 code for a selection of models and figures from the book _'Doing Bayesian Data Analysis: A Tutorial with R, JAGS, and Stan'_, Second Edition, by John Kruschke (2015).  

* [Learn Data Science](http://learnds.com), an entire self-directed course by [Nitin Borwankar](https://github.com/nborwankar).

* [IPython Cookbook](http://ipython-books.github.io/cookbook/) by [Cyrille Rossant](http://cyrille.rossant.net/), a comprehensive guide to Python for Data Science. The code of the 100 recipes is available on [the GitHub repository](https://github.com/ipython-books/cookbook-code).

* [An introduction to machine learning with Python and scikit-learn](http://nbviewer.ipython.org/github/temporaer/tutorial_ml_gkbionics/blob/master/2%20-%20KMeans.ipynb) ([repo and overview](https://github.com/amueller/tutorial_ml_gkbionics)) by [Hannes Schulz](https://github.com/temporaer) and [Andreas Mueller](https://github.com/amueller).

* [A progressive collection notebooks of the Machine Learning course by the University of Turin (with exercises)](https://github.com/rugantio/MachineLearningCourse).

* [Clustering and Regression](http://nbviewer.ipython.org/github/amplab/datascience-sp14/blob/master/hw2/HW2.ipynb), part of the UC Berkeley 2014 [Introduction to Data Science](http://amplab.github.io/datascience-sp14/) course taught by [Michael Franklin](http://www.cs.berkeley.edu/~franklin/).

* [Neural Networks](http://nbviewer.ipython.org/github/masinoa/machine_learning/blob/master/04_Neural_Networks.ipynb), part of a collection on [machine learning](https://github.com/masinoa/machine_learning) by [Aaron Masino](https://github.com/masinoa).

* [An introduction to Pandas](http://nbviewer.ipython.org/urls/bitbucket.org/hrojas/learn-pandas/raw/master/lessons/01%20-%20Lesson.ipynb), part of an [11-lesson tutorial on Pandas](https://bitbucket.org/hrojas/learn-pandas), by [Hernán Rojas](https://bitbucket.org/hrojas).

* [Data Science and Big Data with Python](https://github.com/phelps-sg/python-bigdata/blob/master/README.md) by [Steve Phelps](http://sphelps.net).

* [Big Data for beginners](https://github.com/groda/big_data/blob/master/README.md) A collections of notebooks on Hadoop, MapReduce, Spark.

* The [Statsmodels Project](http://statsmodels.sourceforge.net) has two excellent collections of examples: [in their official documentation](http://statsmodels.sourceforge.net/devel/examples/index.html) and [extra ones in their wiki](https://github.com/statsmodels/statsmodels/wiki/Examples#user-contributed-examples). Too many there to directly duplicate here, but they provide great learning materials on statistical modeling with Python.

* [Machine Learning with the Shogun Toolbox](http://cloud.shogun-toolbox.org). This is a complete *service* that includes a ready-to-run IPython instance with a collection of notebooks illustrating the use of the [Shogun Toolbox](http://shogun-toolbox.org).  Just log in and start running the examples.

* [Python for Data Analysis](https://github.com/ResearchComputing/Meetup-Fall-2013), an introductory collection from the [CU Boulder Research Computing Group](http://researchcomputing.github.io/).

* [The Kaggle bulldozers competition example](http://danielfrg.github.io/blog/2013/03/07/kaggle-bulldozers-basic-cleaning), one of a set on tutorials on exploratory data analysis with the [copper toolkit](https://github.com/danielfrg/copper#copper) by [Daniel Rodríguez](http://danielfrg.github.io)/

* [Understanding model reliability](http://nbviewer.ipython.org/github/mwaskom/Psych216/blob/master/week6_tutorial.ipynb), part of a complete [course on statistics and data analysis for psychologists](https://github.com/mwaskom/Psych216) by [Michael Waskom](https://github.com/mwaskom).

* [Graphical Representations of Linear Models](http://nbviewer.ipython.org/github/mwaskom/seaborn/blob/master/examples/linear_models.ipynb), an illustration of the [Seaborn statistical visualization library](https://github.com/mwaskom/seaborn), that also includes [Visualizing distributions of data](http://nbviewer.ipython.org/github/mwaskom/seaborn/blob/master/examples/plotting_distributions.ipynb) and [Representing variability in timeseries plots](http://nbviewer.ipython.org/github/mwaskom/seaborn/blob/master/examples/timeseries_plots.ipynb). By [Michael Waskom](https://github.com/mwaskom).

* [Desperately Seeking Silver](http://nbviewer.ipython.org/github/cs109/content/blob/master/HW2.ipynb), one of the homework sets for Harvard's [CS 109 Data Science course](http://cs109.org).

* The classic ['An Introduction to Statistical Learning with Applications in R'](http://www-bcf.usc.edu/~gareth/ISL) by James, Witten, Hastie, Tibshirani (2013), has not one but *two* collections of notebooks to accompany the book with Python (instead of the book's default R examples). One by [Jordi Warmenhoven](https://github.com/JWarmenhoven/ISLR-python) and one by [Matt Caudill](https://github.com/mscaudill/IntroStatLearn).

* [Python Notebooks for StatLearning Exercises](https://github.com/sujitpal/statlearning-notebooks), Python implementations of the R labs for the [StatLearning: Statistical Learning](https://class.stanford.edu/courses/HumanitiesScience/StatLearning/Winter2014/about) online course from Stanford University taught by Profs Trevor Hastie and Rob Tibshirani.

* [Applied Predictive Modeling with Python](http://nbviewer.ipython.org/github/leig/Applied-Predictive-Modeling-with-Python/tree/master/notebooks/), Python implementations of the examples (originally written in R) from a famous introductory book, [Applied Predictive Modeling](http://appliedpredictivemodeling.com), by Max Kuhn and Kjell Johnson.

* A collection of [four courses in foundations of data science, algorithms and databases](http://nbviewer.ipython.org/github/ledeprogram/courses/tree/master) from multiple faculty at [Columbia University's Lede Program](http://www.journalism.columbia.edu/page/1058-the-lede-program-an-introduction-to-data-practices/906). 

* [SciPy and OpenCV as an interactive computing environment for computer vision](http://nbviewer.ipython.org/github/thsant/scipy4cv) by [Thiago Santos](http://ttsantos.net), a tutorial presented at [SIBGRAPI 2014](http://emap.fgv.br/sibgrapi-2014/tutorials.html).

* [Kalman and Bayesian Filters in Python](http://nbviewer.ipython.org/github/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/table_of_contents.ipynb), by [Roger Labbe](https://github.com/rlabbe).

* [Adaboost for digit classification](https://nbviewer.jupyter.org/github/riddhishb/ipython-notebooks/blob/master/Adaboost/Adaboost_Final%20note.ipynb
), by [Shashwat Shukla](https://github.com/ShashShukla). A complete implementation of Adaboost in Python, with code for digit recognition. 

* [An example machine learning notebook](http://nbviewer.jupyter.org/github/rhiever/Data-Analysis-and-Machine-Learning-Projects/blob/master/example-data-science-notebook/Example%20Machine%20Learning%20Notebook.ipynb), by [Randal. S. Olson](http://www.randalolson.com/), part of a [collection in Data Analysis and Machine Learning](http://nbviewer.jupyter.org/github/rhiever/Data-Analysis-and-Machine-Learning-Projects).

* [Pandas .head() to .tail()](https://github.com/TomAugspurger/PyDataSeattle), an in-depth tutorial on Pandas by [Tom Augspurger](https://github.com/TomAugspurger).

* [Apache SINGA tutorial](http://nbviewer.jupyter.org/github/apache/incubator-singa/blob/master/doc/en/docs/notebook/index.ipynb). A Python tutorial for deep learning with SINGA.

* [Data Science Notebooks](https://github.com/donnemartin/data-science-ipython-notebooks/blob/master/README.md), a frequently updated collection of notebooks on statistical inference, data analysis, visualization and machine learning, by [Donne Martin](https://github.com/donnemartin).

* [ETL with Python](https://github.com/dimgold/ETL_with_Python/blob/master/README.md), a tutorial for ETL (Extract, Transfer and Load) using python [petl package](https://petl.readthedocs.io/en/latest/), loading to MySQL and working with csv files by [Dima Goldenberg](https://github.com/dimgold).

* [the-elements-of-statistical-learning](https://github.com/maitbayev/the-elements-of-statistical-learning), a collection of notebooks implementing the algorithms, reproducing the graphics found in the book "The Elements of Statistical Learning" by Trevor Hastie, Robert Tibshirani and Jerome Friedman and summary of the textbook.

* [Classification on raw time series in TensorFlow with a LSTM RNN](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition), by [Guillaume Chevalier](https://github.com/guillaume-chevalier).

* [Signal forecasting with a Sequence-to-Sequence (seq2seq) Recurrent Neural Network (RNN) model in TensorFlow](https://github.com/guillaume-chevalier/seq2seq-signal-prediction), by [Guillaume Chevalier](https://github.com/guillaume-chevalier).

* A Coding Kata using Notebooks in Google Colab: Achieve [Clean Machine Learning From Dirty Code](https://github.com/Neuraxio/Kata-Clean-Machine-Learning-From-Dirty-Code).

* [Interactive Machine Learning Experiments](https://github.com/trekhleb/machine-learning-experiments) - collection of notebooks that use convolutional neural networks (CNNs), recurrent neural networks (RNNs) and multilayer perceptrons (MLPs) to solve basic machine learning tasks like objects detection and classification, sequence-to-sequence predictions etc.

### Mathematics, Physics, Chemistry, Biology

* A [single-atom laser model](http://nbviewer.ipython.org/github/jrjohansson/qutip-lectures/blob/master/Lecture-2B-Single-Atom-Lasing.ipynb). This is one of a complete set of [lectures on quantum mechanics and quantum optics using QuTiP](http://nbviewer.ipython.org/github/jrjohansson/qutip-lectures) by [J.R. Johansson](https://github.com/jrjohansson).

* [2-d rigid-body transformations](http://nbviewer.ipython.org/github/demotu/BMC/blob/master/notebooks/Transformation2D.ipynb). This is part of [Scientific Computing in Biomechanics and Motor Control](https://github.com/demotu/BMC), a complete collection of notebooks by [Marcos Duarte](https://github.com/demotu).

* Astrophysical simulations and analysis with [yt](http://yt-project.org): a collection of example notebooks on using various codes that yt interfaces with: [Enzo](http://nbviewer.ipython.org/url/hub.yt-project.org/notebooks/ac275ee8a462425c93b36e330e243705.ipynb), [Gadget](http://nbviewer.ipython.org/url/hub.yt-project.org/notebooks/e209c55b6aaa4a9ab12c55422bb3afdc.ipynb), [RAMSES](http://nbviewer.ipython.org/url/hub.yt-project.org/notebooks/9fe5b4bc68ce48d5aa665edbc4ec3aa3.ipynb), [PKDGrav](http://nbviewer.ipython.org/url/hub.yt-project.org/notebooks/9fe5b4bc68ce48d5aa665edbc4ec3aa3.ipynb) and [Gasoline](http://nbviewer.ipython.org/url/hub.yt-project.org/notebooks/9fe5b4bc68ce48d5aa665edbc4ec3aa3.ipynb). *Note:* the yt site currently throws an SSL warning, they seem to have an outdated or self-signed certificate.

* [Working with Reactions](http://nbviewer.ipython.org/gist/4316430), part of a set of tutorials on [cheminformatics and machine learning with the rdkit project](http://code.google.com/p/rdkit/wiki/UGM2012Tutorials), by Greg Landrum.

* [CFD Python: 12 steps to Navier-Stokes](http://lorenabarba.com/blog/cfd-python-12-steps-to-navier-stokes). A complete set of lectures on Computational Fluid Dynamics, from 1-d linear waves to full 2-d Navier-Stokes, by [Lorena Barba](http://lorenabarba.com).

* [Pytherm - Applied Thermodynamics](http://nbviewer.jupyter.org/github/iurisegtovich/PyTherm-applied-thermodynamics/blob/master/index.ipynb). Lectures on applied thermodynamics using Python and the SciPy ecosystem, by [ATOMS](http://atoms.peq.coppe.ufrj.br/).

* [AeroPython: Aerodynamics-Hydrodynamics with Python](https://github.com/barbagroup/AeroPython), a complete course taught at George Washington University by [Lorena Barba](http://lorenabarba.com).

* [Practical Numerical Methods with Python](https://github.com/numerical-mooc/numerical-mooc), a collection of learning modules (each consisting of several IPython Notebooks) for a course in numerical differential equations  taught  at George Washington University by [Lorena Barba](http://lorenabarba.com). Also offered as a "massive, open online course" (MOOC) on the [GW SEAS Open edX](http://openedx.seas.gwu.edu/) platform.

* [Get Data Off the Ground with Python](https://github.com/engineersCode/EngComp1_offtheground) by [Lorena Barba](http://lorenabarba.com): Learn to interact with Python and handle data with Python; assumes no coding experience and creates a foundation in programming applied to technical contexts. With an accompanying [online course](http://go.gwu.edu/engcomp1).

* [Take Off with Stats in Python](https://github.com/engineersCode/EngComp2_takeoff) by [Lorena Barba](http://lorenabarba.com): Hands-on data analysis using a computational approach and real-life applications. With an accompanying [online course](http://go.gwu.edu/engcomp2).

* [Tour the dynamics of change and motion](https://github.com/engineersCode/EngComp3_tourdynamics) by [Lorena Barba](http://lorenabarba.com): Tour of the dynamics of change and motion using computational thinking with Python. With an accompanying [online course](http://go.gwu.edu/engcomp3).

* [pyuvvis: tools for explorative spectroscopy](https://github.com/hugadams/pyuvvis), spectroscopy library built for integration ipython notebooks, matplotlib and pandas.

* [HyperPython: a practical introduction to the solution of hyperbolic conservation laws](http://nbviewer.ipython.org/github/ketch/HyperPython/tree/master/), a course by [David Ketcheson](http://davidketcheson.info).

* [An Introduction to Applied Bioinformatics](http://readiab.org/): Interactive lessons in bioinformatics, by [Greg Caporaso](http://caporasolab.us).

* Colour science computations with [colour](https://github.com/colour-science/colour), a Python package implementing a comprehensive number of colour theory transformations and algorithms supported by a [dedicated collection of IPython Notebooks](http://nbviewer.ipython.org/github/colour-science/colour-ipython/blob/master/notebooks/colour.ipynb). More colour science related [IPython Notebooks](http://nbviewer.ipython.org/github/colour-science/colour-website/tree/master/ipython/) are available on [colour-science.org](http://colour-science.org/).

* The [notebooks](https://github.com/tiagoantao/bioinf-python/blob/master/notebooks/Welcome.ipynb) from the Book [Bioinformatics with Python Cookbook](http://www.amazon.com/Bioinformatics-Python-Cookbook-Tiago-Antao/dp/1782175113), covering several fields like Next-Generation Sequencing, Population Genetics, Phylogenetics, Genomics, Proteomics and Geo-referenced information.

* [Learning Population Genetics in an RNA world](http://nbviewer.jupyter.org/github/gocarli/RNA-Popgen-Notebook/blob/master/Population_Genetics.ipynb) is an interactive notebook that explains basic population genetics tools and techniques by building an in silico evolutionary model of RNA molecules.

* [An open RNA-Seq data analysis pipeline tutorial with an example of reprocessing data from a recent Zika virus study](http://nbviewer.jupyter.org/github/maayanlab/Zika-RNAseq-Pipeline/blob/master/Zika.ipynb). This notebook fully reproduces the research published in [this paper](https://f1000research.com/articles/5-1574/v1). The notebook uses mostly python but includes some bash and R as well and is relevant for researchers in bioinformatics and public health.  

* [Lung Cancer Post-Translational Modification and Gene Expression Regulation](http://nbviewer.jupyter.org/github/MaayanLab/CST_Lung_Cancer_Viz/blob/master/notebooks/CST_Data_Viz.ipynb?flush_cache=true). This Python notebook uses the Jupyter-widget [Clustergrammer-Widget](http://clustergrammer.readthedocs.io/clustergrammer_widget.html) to visualize hierarchical clustering of gene expression and post-translational modification data from 37 lung cancer cell lines as an interactive heatmap. The notebook is part of the research project from this [paper](https://www.nature.com/articles/sdata2017151).

* [Materials Science in Python using pymatgen](http://matgenb.materialsvirtuallab.org/).  A series of python notebooks using the [pymatgen](http://pymatgen.org/) package and [materials project](http://materialsproject.org) API for materials science.

* [Applied Elasticity](https://github.com/jeevanjyoti4/elasticity): A collection of notebooks used to determine solutions to some classical 2D elasticity problems. These were mostly live coded during class hours by [Jeevanjyoti Chakraborty](http://www.facweb.iitkgp.ac.in/~jeevanjyoti) as part of the course "Applied Elasticity" in the Mechanical Engineering Department of the [Indian Institute of Technology Kharagpur](http://www.iitkgp.ac.in/). 

### Earth Science and Geo-Spatial data

* [EarthPy](http://earthpy.org), a collection of IPython notebooks with a focus on Earth Sciences, from [whale tracks](http://earthpy.org/analyzing-whale-tracks.html) to the [flow of the Amazon](http://earthpy.org/earthpy-basemap-amazon.html).

* [Python for Geosciences](https://github.com/koldunovn/python_for_geosciences), a tutorial series aimed at the Earth Sciences community, by [Nikolay Koldunov](http://earthpy.org/author/nikolay-koldunov.html).

* [Find graffiti close to NY subway entrances](http://nbviewer.ipython.org/github/invisibleroads/crosscompute-tutorials/blob/master/computational-analysis/300%20Count%20graffiti%20sightings%20within%20100%20feet%20of%20a%20subway%20entrance.ipynb), one of a rich [collection of notebooks on large-scale data analysis](https://github.com/invisibleroads/crosscompute-tutorials), by [Roy Hyunjin Han](https://github.com/invisibleroads).

* [Logistic models of well switching in Bangladesh](http://nbviewer.ipython.org/github/carljv/Will_it_Python/blob/master/ARM/ch5/arsenic_wells_switching.ipynb), part of the ["Will it Python"](http://slendrmeans.wordpress.com/will-it-python) blog series ([repo](https://github.com/carljv/Will_it_Python)) on Machine Learning and data analysis in Python.  By Carl Vogel.

* [Estimated likelihood of observing a large earthquake on a continental low‐angle normal fault and implications for low‐angle normal fault activity](http://nbviewer.ipython.org/github/cossatot/lanf_earthquake_likelihood/blob/master/notebooks/lanf_manuscript_notebook.ipynb), an executable version of a paper by Richard Styron and Eric Hetland published in *Geophysical Research Letters*, on earthquake probabilities.

* [python4oceanographers](https://ocefpaf.github.io/python4oceanographers/), a blog demonstrating analyses in physical oceanography from [resource-demanding numerical computations with functions in compiled languages](https://ocefpaf.github.io/python4oceanographers/blog/2015/10/05/isosurfaces/) to specialized [tidal analysis](https://ocefpaf.github.io/python4oceanographers/blog/2015/02/16/utide/) to [visualization of various geo data using fancy things like interactive maps](https://ocefpaf.github.io/python4oceanographers/blog/2015/07/13/interactive_geo/).

* [Machinalis](http://www.machinalis.com/) has a [public repo](https://github.com/machinalis/satimg) with material support for geospatial-data processing related blog posts. It includes notebooks about [Object Based Image Analysis](http://nbviewer.jupyter.org/github/machinalis/satimg/blob/master/object_based_image_analysis.ipynb) and [irrigation circles detection](http://nbviewer.jupyter.org/github/machinalis/satimg/blob/master/Searching%20for%20aliens.ipynb).

* [seismo-live](http://seismo-live.org/) is a collection of live Jupyter notebooks for seismology. It includes a fairly large number of notebooks on how to solve the acoustic and elastic wave equation with various different numerical methods. Additionally it contains notebooks with an extensive introduction to data handling and signal processing in seismology, and notebooks tackling ambient seismic noise, rotational and glacial seismology, and more.

* [Geo-Python](https://geo-python.github.io/) is an introduction to programming in Python for Bachelors and Masters students in geo-fields (geology, geophysics, geography) taught by members of the [Department of Geosciences and Geography at University of Helsinki, Finland](https://www.helsinki.fi/en/faculty-of-science/faculty/geosciences-and-geography). Course lessons and exercises are based on Jupyter notebooks and open for use by any interested person.


### Linguistics and Text Mining

* [Workshop on text analysis](http://nbviewer.ipython.org/github/nealcaren/workshop_2014/tree/master/notebooks/) by [Neal Caren](http://nealcaren.web.unc.edu).

* [Detecting Algorithmically Generated Domains](http://nbviewer.ipython.org/github/ClickSecurity/data_hacking/blob/master/dga_detection/DGA_Domain_Detection.ipynb), part of the [Data Hacking](http://clicksecurity.github.io/data_hacking) collection on security-oriented data analysis with IPython & friends.

* [Mining the Social Web (3rd Edition)](https://github.com/mikhailklassen/Mining-the-Social-Web-3rd-Edition). A complete collection of notebooks accompanying [Matthew Russell and Mikhail Klassen's book](http://shop.oreilly.com/product/0636920056751.do) by O'Reilly.

### Signal Processing

* [Sound Analysis with the Fourier Transform](https://github.com/calebmadrigal/FourierTalkOSCON). A set of IPython Notebooks by [Caleb Madrigal](http://calebmadrigal.com) to explain what the Fourier Transform is and how to use it for basic audio processing applications.

* [An introduction to Compressed Sensing](http://nbviewer.ipython.org/github/unpingco/Python-for-Signal-Processing/blob/master/Compressive_Sampling.ipynb), part of [Python for Signal Processing](http://nbviewer.ipython.org/github/unpingco/Python-for-Signal-Processing): an entire book (and [blog](http://python-for-signal-processing.blogspot.com)) on the subject by Jose Unpingco.
`ádasd`
* [Kalman and Bayesian Filters in Python](http://nbviewer.ipython.org/github/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/table_of_contents.ipynb). A textbook and accompanying filtering library on the topic of Kalman filtering and other related Bayesian filtering techniques.

* [Classify human movements using Dynamic Time Warping & K Nearest Neighbors:](http://nbviewer.ipython.org/github/markdregan/K-Nearest-Neighbors-with-Dynamic-Time-Warping/blob/master/K_Nearest_Neighbor_Dynamic_Time_Warping.ipynb) Signals from a smart phone gyroscope and accelerometer are used to classify if the person is running, walking, sitting standing etc. This IPython notebook contains a python implementation of DTW and KNN algorithms along with explanations and a practical application.

* [Digital Signal Processing](https://github.com/spatialaudio/digital-signal-processing-lecture) A collection of notebooks that accompanies a masters course on the topic.

* [An introduction to openCV](https://github.com/handee/opencv-gettingstarted) An introduction course into using openCV for computer vision in python

* [Signal: Filtering, STFT, and Laplace Transform](https://github.com/guillaume-chevalier/filtering-stft-and-laplace-transform) Filtering signal with a butterworth low-pass filter and plotting the STFT of it with a Hanning window and then plotting the Laplace transform.

### Engineering Education

* [Introduction to Chemical Engineering Analysis](http://jckantor.github.io/CBE20255/) by [Jeff Kantor](http://jckantor.github.io/). A collection of IPython notebooks illustrating topics in introductory chemical engineering analysis, including stoichiometry, generation-consumption analysis, mass and energy balances.
* [Sensors and Actuators](https://github.com/agmarrugo/sensors-actuators) by [Andres Marrugo](http://andresmarrugo.net). A collection of Jupyter notebooks in the form of lecture notes and engineering calculations for the course IMTR 1713 Sensors and Actuators taught at the [Universidad Tecnológica de Bolívar](http://www.unitecnologica.edu.co/).

## Scientific computing and data analysis with the SciPy Stack
### General topics in scientific computing

* [Algorithms in IPython notebooks](https://github.com/rasbt/algorithms_in_ipython_notebooks), by [Sebastian Raschka](https://github.com/rasbt)

* [Comparing the performance of Python compilers - Cython vs. Numba vs. Parakeet](http://nbviewer.jupyter.org/github/rasbt/One-Python-benchmark-per-day/blob/master/ipython_nbs/day4_2_cython_numba_parakeet.ipynb), by [Sebastian Raschka](https://github.com/rasbt)

* [A Crash Course in Python for Scientists](http://nbviewer.ipython.org/gist/5920182), by Sandia's [Rick Muller](http://www.cs.sandia.gov/~rmuller).

* [A gentle introduction to scientific programming in Python, biased towards biologists](http://nbviewer.ipython.org/url/atwallab.cshl.edu/teaching/QBbootcamp3.ipynb), by [Mickey Atwal, Cold Spring Harbor Laboratory](http://atwallab.cshl.edu).

* [Python for Data Science](http://nbviewer.ipython.org/github/gumption/Python_for_Data_Science/blob/master/Python_for_Data_Science_all.ipynb), a self-contained mini-course with exercises, by [
Joe McCarthy](http://interrelativity.com/joe).

* [First few lectures of the UW/Coursera course on Data Analysis](http://nbviewer.ipython.org/github/fonnesbeck/ComputationalMethodsCourse/blob/master/Lecture%201.ipynb). ([Repo](https://github.com/fonnesbeck/ComputationalMethodsCourse)) by Chris Fonnesbeck.

* [CythonGSL: a Cython interface for the GNU Scientific Library (GSL)](http://nbviewer.ipython.org/github/twiecki/CythonGSL/blob/master/examples/cython_gsl_ipythonnb.ipynb) ([Project repo](https://github.com/twiecki/CythonGSL), by Thomas Wiecki.

* [Introduction to numerical computing with numpy](http://nbviewer.jupyter.org/github/phelps-sg/python-bigdata/blob/master/src/main/ipynb/numerical-slides.ipynb) by [Steve Phelps](http://sphelps.net).

* [Using Numba to speed up numerical codes](http://nbviewer.ipython.org/gist/3914904).  And another Numba example: [self-organizing maps](http://nbviewer.ipython.org/gist/3407544).

* [Numpy performance tricks](http://nbviewer.ipython.org/gist/4645217), and [blog post](http://cyrille.rossant.net/numpy-performance-tricks/), by [Cyrille Rossant](http://cyrille.rossant.net/).

* [IPython Parallel Push/Execute/Pull Demo](http://nbviewer.ipython.org/gist/3866987) by Justin Riley.

* [Understanding the design of the R "formula" objects](http://nbviewer.ipython.org/url/perrin.dynevor.org/exploring_r_formula.ipynb) by Matthew Brett.

* [Comparing different approaches to evolutionary simulations](http://nbviewer.ipython.org/url/www.slideviper.oquanta.info/test/simulation%20frameworks.ipynb). Also available [here](http://slideviewer.herokuapp.com/urls/github.com/yoavram/ipython-notebooks/raw/master/simulation%20frameworks.ipynb) to better visualization. The notebook was converted to a HTML presentation using an old nbconvert with the first developing implementation of `reveal` converter. By Yoav Ram.

* [The Traveling Salesperson Problem](http://nbviewer.jupyter.org/url/norvig.com/ipython/TSP.ipynb) by [Peter Norvig](http://norvig.com).

* [A git tutorial targeted at scientists](http://nbviewer.ipython.org/github/fperez/reprosw/blob/master/Version%20Control.ipynb) by Fernando Perez.

* [Running MATLAB in an IPython Notebook](http://nbviewer.ipython.org/github/plotly/IPython-plotly/blob/master/See%20more/MATLAB_Wrapper_Examples.ipynb), using [pymatbridge](https://pypi.python.org/pypi/pymatbridge).

* [Interactive Curve-Fitting](http://nbviewer.ipython.org/gist/danielballan/1c2db3d4f2f7780cf52f) The `lmfit` package provides a widget-based interface to the curve-fitting algorithms in SciPy.

* [A visual guide to the Python Spark API for distributed computing](http://nbviewer.ipython.org/github/jkthompson/pyspark-pictures/blob/master/pyspark-pictures.ipynb) by Jeff Thompson

* [A tutorial on Map-Reduce programming with Apache Spark and Python](http://nbviewer.jupyter.org/github/phelps-sg/python-bigdata/blob/master/src/main/ipynb/spark-mapreduce.ipynb) by [Steve Phelps](http://sphelps.net).

* [CodeCombat gridmancer solver](http://nbviewer.jupyter.org/github/Arn-O/py-gridmancer/blob/master/gridmancer.ipynb) by [Arn-O](https://github.com/Arn-O). This notebook explains how to improve a recursive tree search with an heuristic function and to find the minimum solution to the gridmancer.

### Social data

* [Survival Analysis](http://nbviewer.ipython.org/github/CamDavidsonPilon/lifelines/blob/master/docs/Survival%20Analysis%20intro.ipynb), an illustration of the [lifelines library](https://github.com/CamDavidsonPilon/lifelines), by [Cam Davidson Pilon](https://github.com/CamDavidsonPilon).

* A reconstruction of [Nate Silver's 538 model for the 2012 US Presidential Election](http://nbviewer.ipython.org/github/jseabold/538model/blob/master/silver_model.ipynb), by Skipper Seabold (complete [repo](https://github.com/jseabold/538model)).

* [Data about the Sandy Hook massacre in Newtown, Conneticut](http://nbviewer.ipython.org/url/www.brianckeegan.com/data/Shootings/Shootings.ipynb), which accompanies a more detailed [blog post on the subject](http://www.brianckeegan.com/2012/12/sandy-hook-school-massacre/). Here are the [notebook and accompanying data](http://www.brianckeegan.com/data/Shootings/Shootings.ipynb).  By Brian Keegan.

* More on [gun violence analysis with Wikipedia data](http://nbviewer.ipython.org/gist/4358066).

* [An analysis of the Gaza-Israel 2012 crisis](http://nbviewer.ipython.org/gist/4121857).

* [Ranking NFL Teams](http://nbviewer.ipython.org/github/seanjtaylor/NFLRanking/blob/master/NFL%20Rankings.ipynb). The [full repo](https://github.com/seanjtaylor/NFLRanking) also includes an explanatory slideshow. By Sean Taylor.

* [Automated processing of news media and generation of associated imagery](http://nbviewer.ipython.org/url/mhermans.net/files/tmp/demo_rdf_HLN.ipynb). 

* [An analysis of national school standardized test data in Colombia using Pandas](http://nbviewer.ipython.org/url/finiterank.com/saber/saber.ipynb) (in Spanish). By [Javier Moreno](http://finiterank.com).

* [Getting started with GDELT](http://nbviewer.ipython.org/github/dmasad/GDELT_Intro/blob/master/Getting_Started_with_GDELT.ipynb), by [David Masad](https://github.com/dmasad). [GDELT](http://eventdata.psu.edu/data.dir/GDELT.html) is a dataset containing more than 200-million geolocated events with global coverage for 1979 to the present.  Another GDELT example from David, that nicely [integrates mapping visualizations](http://nbviewer.ipython.org/github/dmasad/GDELT_Intro/blob/master/GDELT_Mapping.ipynb).

* [Titanic passengers, coal mining disasters, and vessel speed changes](http://nbviewer.ipython.org/gist/fonnesbeck/8495259), by [Christopher Fonnesbeck](http://biostat.mc.vanderbilt.edu/wiki/Main/ChrisFonnesbeck)

* A geographic analysis of [Indonesian conflicts in 2012](http://nbviewer.ipython.org/github/herrfz/gdelt/blob/master/indn_connection.ipynb) with GDELT, by [herrfz](https://github.com/herrfz).

* [Bioinformatic Approaches to the Computation of Poetic Meter](http://nbviewer.ipython.org/github/asp49/meter/blob/graph/Shared%20Horizons%20Presentation.ipynb), by [A. Sean Pue](https://github.com/asp49), [C. Titus Brown](https://github.com/ctb) and [Tracy Teal](https://github.com/tracyteal).

* Analyzing the [Vélib dataset from Paris](http://nbviewer.ipython.org/gist/5520933), by [Cyrille Rossant](https://github.com/rossant) (Vélib is Paris' [bicycle-sharing program](http://en.wikipedia.org/wiki/V%C3%A9lib')).

* [Using Python to see how the Times writes about men and women](http://nbviewer.ipython.org/gist/5105037), by [Neal Caren](https://twitter.com/HaphazardSoc).

* [Exploring graph properties of the Twitter stream with twython and NetworkX](http://nbviewer.ipython.org/gist/5681541/TwitterGraphs.ipynb), by [F. Perez](http://fperez.org) (complete [gist repo with utilities here](https://gist.github.com/fperez/5681541).)

* [Kaggle Competition: Titanic Machine Learning from Disaster](http://nbviewer.ipython.org/github/agconti/kaggle-titanic/blob/master/Titanic.ipynb). By [Andrew Conti](https://github.com/agconti).

* [How clean are San Francisco's restaurants?](http://nbviewer.ipython.org/github/Jay-Oh-eN/happy-healthy-hungry/blob/master/h3.ipynb), a data science tutorial that accompanies a [blog post](http://blog.zipfianacademy.com/post/57158627293/how-to-data-science-mapping-sf-restaurant-inspection) from [Zipfian Academy](http://zipfianacademy.com/).

* [NYT gender wage gap and US crime by state](http://nbviewer.ipython.org/github/plotly/IPython-plotly/blob/master/Bubble%20Chart%20Explorer.ipynb).

* [Predicting usage of the subway system in NYC](http://nbviewer.ipython.org/url/www.asimihsan.com/articles/Intro%20to%20Data%20Science%20-%20Final%20Project.ipynb), a [final project](http://blog.udacity.com/2014/05/intro-to-data-science-tools-to-ask.html) for the Udacity Intro to Data Science Course, by [Asim Ihsan](http://www.asimihsan.com).

* [An exploratory statistical analysis of the 2014 World Cup Final](http://nbviewer.ipython.org/github/rjtavares/football-crunching/blob/master/notebooks/an%20exploratory%20data%20analysis%20of%20the%20world%20cup%20final.ipynb), by [Ricardo Tavares](https://github.com/rjtavares).  Part of a [notebook collection on football (aka soccer) analysis](http://nbviewer.ipython.org/github/rjtavares/football-crunching/tree/master/).

* [San Francisco's Drug Geography](http://nbviewer.ipython.org/github/lmart999/GIS/blob/master/SF_GIS_Crime.ipynb), a GIS analysis of public crime data in SF, by [Lance Martin](https://github.com/lmart999).

* [Geographic Data Science](http://darribas.org/gds17/) is an entire course by [Dani Arribas-Bel](http://darribas.org) to learn to access, munge, and analyse spatial data on social phenomena.

* [Analysis and visualization of a public OKCupid profile dataset using Python and Pandas](http://nbviewer.jupyter.org/github/lalelale/profiles_analysis/blob/master/profiles.ipynb) by [Alessandro Giusti](http://www.idsia.ch/~giusti) includes many colorful data visualizations.

### Psychology and Neuroscience
* [Cue Combination with Neural Populations](http://nbviewer.ipython.org/github/wtadler/cue-combination-with-neurons/blob/master/neural_cue_combination.ipynb) by [Will Adler](http://www.wtadler.com). Intuition and simulation for the theory (Ma *et al.*, 2006) that through probabilistic population codes, neurons can perform optimal cue combination with simple linear operations. Demonstrates that variance in cortical activity, rather than impairing sensory systems, is an adaptive mechanism to encode uncertainty in sensory measurements.

* [Modeling psychophysical data with non-linear functions](http://nbviewer.ipython.org/github/arokem/teach_optimization/blob/master/optimization.ipynb) by Ariel Rokem.

* [Visualizing mathematical models of brain cell connections](http://nbviewer.ipython.org/github/jonasnick/ReceptiveFields/blob/master/receptiveFields.ipynb). The effect of convolution of different receptive field functions and natural images is examined.

* [Python for Vision Research](http://nbviewer.ipython.org/github/gestaltrevision/python_for_visres/blob/master/index.ipynb). A three-day crash course for vision researchers in programming with Python, building experiments with [PsychoPy](http://psychopy.org/) and [psychopy_ext](http://psychopy_ext.klab.lt/), learning the fMRI multi-voxel pattern analysis with [PyMVPA](http://www.pymvpa.org/), and understading image processing in Python.

* [Loading and visualizing fMRI data](http://nbviewer.ipython.org/github/GaelVaroquaux/nilearn_course/blob/master/rendered_notebooks/1_Introduction.ipynb), part of the [Functional connectivity with NiLearn course](https://github.com/GaelVaroquaux/nilearn_course) by [Gaël Varoquaux](http://gael-varoquaux.info).

### Machine Learning, Statistics and Probability


* [A tutorial introduction to machine learning with sklearn](http://amueller.github.com/sklearn_tutorial), an IPython-based slide deck by [Andreas Mueller](https://github.com/amueller).

* [Introduction to Machine Learning in Python with scikit-learn](http://ipython-books.github.io/featured-04/) by [Cyrille Rossant](http://cyrille.rossant.net/), a free recipe from the [IPython Cookbook](http://ipython-books.github.io/cookbook/), a comprehensive guide to Python for Data Science.

* [An introduction to Predictive Modeling in Python](http://nbviewer.ipython.org/github/ogrisel/parallel_ml_tutorial/blob/master/solutions/01%20-%20An%20Introduction%20to%20Predictive%20Modeling%20in%20Python.ipynb), by  [Olivier Grisel](https://github.com/ogrisel).

* [Face Recognition on a subset of the Labeled Faces in the Wild dataset](http://nbviewer.ipython.org/github/ogrisel/notebooks/blob/master/Labeled%20Faces%20in%20the%20Wild%20recognition.ipynb), by [Olivier Grisel](http://github.com/ogrisel).

* [An Introduction to Bayesian Methods for Multilevel Modeling](http://nbviewer.ipython.org/github/fonnesbeck/multilevel_modeling/blob/master/multilevel_modeling.ipynb), by [Chris Fonnesbeck](http://github.com/fonnesbeck).

* [Introduction to Bayesian Networks](http://nbviewer.ipython.org/github/kuitang/hackny-bayesnet/blob/master/hackNY%20Bayesian%20Network%20Demo.ipynb) by [Kui Tang](https://github.com/kuitang)

* [Bayesian data analysis with PyMC3](http://nbviewer.ipython.org/github/twiecki/pymc3_talk/blob/master/bayesian_pymc3.ipynb) by [Thomas Wiecki](https://github.com/twiecki).

* [A collection of examples for solving pattern classification problems](https://github.com/rasbt/pattern_classification), by [Sebastian Raschka](https://github.com/rasbt).

* [Introduction to Linear Regression using Python](http://nbviewer.ipython.org/github/justmarkham/DAT4/blob/master/notebooks/08_linear_regression.ipynb) by [Kevin Markham](https://github.com/justmarkham)

* [Machine learning in Python](http://nbviewer.jupyter.org/github/jdwittenauer/ipython-notebooks/blob/master/notebooks/ml/ML-Exercise1.ipynb), a series based on Andrew Ng's Coursera class on machine learning.  Part of a [larger collection of data science notebooks](https://github.com/jdwittenauer/ipython-notebooks) by [John Wittenauer](https://github.com/jdwittenauer).

* [Probability, Paradox, and the Reasonable Person Principle](http://nbviewer.ipython.org/url/norvig.com/ipython/Probability.ipynb), by Peter Norvig.

* [How Likely Would You Give A Five-Star Review on Yelp? -- Getting Your Hands Dirty with scikit-learn](http://nbviewer.jupyter.org/github/xun-tang/pyladies_jupyter_demo/blob/master/Predict_Review_Five_Star_Rating.ipynb), by [Xun Tang](https://www.linkedin.com/in/xuntang). Complimentary [slides](https://docs.google.com/presentation/d/1bfrXePztSa-yTP8n_qTdd9zazNS_tyJs1mG3fYItznI/edit).  

* [Geodemographic Segmentation Model](http://nbviewer.jupyter.org/github/filipacsr/DataScience/blob/master/GeodemographicSegmentationModel.ipynb), by [Filipa Rodrigues](https://www.linkedin.com/in/filipacrodrigues/)

### Physics, Chemistry and Biology

* [Writing A Genome Assembler with blasr and (I)Python](http://nbviewer.jupyter.org/github/cschin/Write_A_Genome_Assembler_With_IPython/blob/master/Write_An_Assembler.ipynb), by [Jason Chin](Jason Chin).

* [Multibody dynamics and control with Python](http://www.moorepants.info/blog/npendulum.html) and the [notebook file](http://nbviewer.ipython.org/github/gilbertgede/idetc-2013-paper/blob/master/n-pendulum-control.ipynb) by Jason K. Moore.

* [Manipulation and display of chemical structures](http://nbviewer.ipython.org/gist/4316433), by [Greg Landrum](https://github.com/greglandrum), using rdkit.

* [The sound of Hydrogen](http://nbviewer.ipython.org/github/Carreau/posts/blob/master/07-the-sound-of-hydrogen.ipynb), visualizing and listening to the quantum-mechanical spectrum of Hydrogen. By [Matthias Bussonnier](http://github.com/Carreau).

* Particle physics at the Large Hadron Collider (LHC):  using [ROOT in an LHCb masterclass](http://root.cern.ch/drupal/content/ipython-notebooks-and-root-0): [Notebook 1](http://nbviewer.ipython.org/github/mazurov/webfest2013/blob/master/notebooks/MasterClassD0-ex1.ipynb) and [Notebook 2](http://nbviewer.ipython.org/github/mazurov/webfest2013/blob/master/notebooks/MasterClassD0-ex2%2Cex3.ipynb) notebooks by Alexander Mazurov and Andrey Ustyuzhanin at CERN.

* [A Reaction-Diffusion Equation Solver in Python with Numpy](http://nbviewer.ipython.org/github/waltherg/notebooks/blob/master/2013-12-03-Crank_Nicolson.ipynb), a demonstration of how IPython notebooks can be used to discuss both the theory and implementation of numerical algorithms on one page, by [Georg Walther](https://github.com/waltherg).

* [Comparing different approaches to evolutionary simulations](http://nbviewer.ipython.org/url/www.slideviper.oquanta.info/test/simulation%20frameworks.ipynb). Also available [here](http://slideviewer.herokuapp.com/urls/github.com/yoavram/ipython-notebooks/raw/master/simulation%20frameworks.ipynb) to better visualization. The notebook was converted to a HTML presentation using an old nbconvert with the first developing implementation of `reveal` converter. By Yoav Ram.

### Economics and Finance

* [Replication of the highly-contentious analysis of economic growth by Reinhart and Rogoff](http://nbviewer.ipython.org/github/vincentarelbundock/Reinhart-Rogoff/blob/master/reinhart-rogoff.ipynb), by [Vincent Arel-Bundock](http://umich.edu/~varel), [full repo here](https://github.com/vincentarelbundock/Reinhart-Rogoff). This is based on the [widely-publicized critique of the original analysis done by Herndon, Ash, and Pollin](http://www.peri.umass.edu/236/hash/31e2ff374b6377b2ddec04deaa6388b1/publication/566).

* [fecon235 for Financial Economics](https://github.com/rsvp/fecon235) series of notebooks which examines time-series data for economics and finance. Easy API to freely access data from the Federal Reserve, SEC, CFTC, stock and futures exchanges. Thus research from older notebooks can be replicated, and updated using the most current data. For example, this notebook forecasts likely Fed policy for setting the [Fed Funds rate](https://git.io/fedfunds), but market sentiment across major asset classes is observable from the [CFTC Commitment of Traders Report](https://git.io/cotr). Major economics indicators are renormalized: for example, various measures of [inflation](https://git.io/infl), optionally with the forward-looking break-even rates derived from U.S. Treasury bonds. Other notebooks examine international markets: especially, gold and foreign exchange. 

* [Fixed Income: A Structured Bond- Interactive scenarios ](http://nbviewer.jupyter.org/github/MatsGustavsson/finance-jupyter/blob/2b5c1458b0e9b9c299fe25590566814e92287a1c/SequentialStructure.ipynb), Sequential repayment of a bond using interactive widgets and Python in Jupyter, by [Mats Gustavsson](https://github.com/MatsGustavsson).

### Earth science and geo-spatial data
* [Exploring seafloor habitats: geographic analysis using IPython Notebook with GRASS & R](http://nbviewer.ipython.org/gist/7598354). This embeds a slideshow and a Web Spinning Globe (Cesium) in the notebook.  By Massimo Di Stefano.

* [Geo-Spatial Data with IPython](http://nbviewer.ipython.org/github/mqlaql/geospatial-data/blob/master/Geospatial-Data-with-Python.ipynb). Tutorial by [Kelsey Jordahl](http://kjordahl.net/) from SciPy2013.

### Data visualization and plotting

* [Plotting pitfalls](https://anaconda.org/jbednar/plotting_pitfalls/notebook): common problems when plotting large datasets, and how to avoid them. By James A. Bednar.

* [US Census data](https://anaconda.org/jbednar/census/notebook) and [NYC Taxi data](https://anaconda.org/jbednar/nyc_taxi/notebook) visualized using [datashader](https://github.com/bokeh/datashader).

* A [Notebook](http://nbviewer.ipython.org/github/plotly/python-user-guide/blob/master/s3_bubble-charts/s3_bubble-charts.ipynb) with an interactive Hans Rosling Gapminder bubble chart from [Plotly](https://plot.ly/api/Python). 

* [Data and visualization integration via web based resources](http://tw.rpi.edu/media/2013/09/25/a48/The_Perfect_Storm_1991.html). Using NetCDF, Matplotlib, IPython Parallel and ffmpeg to generate video animation from time series of gridded data. By Massimo Di Stefano.

* [21 Interactive, D3 Plots from matplotlib, ggplot for Python,
prettyplotlib, Stack Overflow, and seaborn](http://nbviewer.ipython.org/gist/msund/7ac1203ded66fe8134cc). 

* [Visualizing complex-valued functions with Matplotlib and Mayavi](http://nbviewer.ipython.org/github/empet/Math/blob/master/DomainColoring.ipynb), by [Emilia Petrisor](https://github.com/empet).

* [bqplot](https://github.com/bloomberg/bqplot) is a d3-based interactive visualization library built entirely on top of that `ipywidgets` infrastructure. Checkout the [pythonic recreation](https://github.com/bloomberg/bqplot/blob/master/examples/Applications/Wealth%20of%20Nations.ipynb) of Hans Rosling's [Wealth of Nations](http://www.ted.com/talks/hans_rosling_shows_the_best_stats_you_ve_ever_seen?language=en).

* [A D3 Viewer for Matplotlib Visualizations](http://jakevdp.github.io/blog/2013/12/19/a-d3-viewer-for-matplotlib/), different from above by not depending on Plot.ly account.

* [Bokeh is an interactive web visualization library for Python](http://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/master/quickstart/quickstart.ipynb) (and other languages). It provides d3-like novel graphics, over large datasets, all without requiring any knowledge of Javascript. It also has a Matplotlib compatibility layer.

* [HoloViews](http://holoviews.org/Tutorials/Showcase.html) lets you construct visualizations very concisely in the notebook.

* [Winner of the 2014 E. Tufte Slope Graphs contest](http://nbviewer.ipython.org/gist/pascal-schetelat/8382651), by [Pascal Schetelat](https://github.com/pascal-schetelat).  The original [contest info on Tufte's site](http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0003nk).

* [matta, d3.js-based visualizations in the IPython Notebook](http://nbviewer.ipython.org/github/carnby/matta/blob/master/examples/Basic%20Examples.ipynb), by [Eduardo Graells-Garrido](http://carnby.github.io/).

* [Clustergrammer Interactive Heatmap and DataFrame Viewer](http://nbviewer.jupyter.org/github/MaayanLab/clustergrammer-widget/blob/master/Running_clustergrammer_widget.ipynb) This Python notebook shows a simple example of how to visualize a matrix file and Pandas DataFrame as an interactive heatmap (built using D3.js) using the Jupyter Widget [Clustergrammer](http://clustergrammer.readthedocs.io/clustergrammer_widget.html) (see [paper](https://www.nature.com/articles/sdata2017151)).

* [The Jupyter Widget Ecosystem - SciPy 2019 Tutorial on ipywidgets](https://github.com/jupyter-widgets/tutorial) - a collection of 40 notebooks.

### Mathematics

* [Linear algebra with Cython](http://nbviewer.ipython.org/github/carljv/cython_testing/blob/master/cython_linalg.ipynb).  A tutorial that styles the notebook differently to show that you can produce high-quality typography online with the Notebook.  By Carl Vogel.

* [Exploring how smooth-looking functions can have very surprising derivatives even at low orders](http://nbviewer.ipython.org/url/finiterank.com/cuadernos/suavesylocas.ipynb), combining SymPy and matplotlib.  By [Javier Moreno](http://finiterank.com).

* [A Collection of Applied Mathematics and Machine Learning Tutorials](http://sayilarvekuramlar.blogspot.co.uk/2015/12/matematik-ders-notlari.html) (in Turkish) and [its English Translation](http://translate.google.com/translate?sl=tr&tl=en&u=http%3A%2F%2Fsayilarvekuramlar.blogspot.com%2F2015%2F12%2Fmatematik-ders-notlari.html)  By Burak Bayramli. 

* [Function minimization with iminuit](http://nbviewer.ipython.org/github/iminuit/iminuit/blob/master/tutorial/tutorial.ipynb), an introductory companion to their [hard core tutorial](http://nbviewer.ipython.org/github/iminuit/iminuit/blob/master/tutorial/hard-core-tutorial.ipynb). By the [iminuit project](http://iminuit.github.io/iminuit).

* [The Discrete Cosine Transform](https://nbviewer.jupyter.org/urls/cs.marlboro.college/cours/spring2019/algorithms/code/discrete_cosine_transform/dct.ipynb), a brief explanation and illustration of the math behind the DCT and its role in the JPEG image format, by [Jim Mahoney](http://cs.marlboro.college).

* [Chebfun in Python](http://nbviewer.ipython.org/gist/6724986), a demo of [PyChebfun](https://github.com/cswiercz/pychebfun), by [Olivier Verdier](http://www.olivierverdier.com). PyChebfun is a pure-python implementation of the celebrated [Chebfun package by Battles and Trefethen](http://people.maths.ox.ac.uk/trefethen/publication/PDF/2004_107.pdf). 

* [The Matrix Exponential](http://nbviewer.ipython.org/github/sdrelton/matrix_function_notebooks/blob/master/TheMatrixExponential.ipynb), an introduction to the matrix exponential, its applications, and a list of available software in Python and MATLAB. By [Sam Relton](http://www.maths.manchester.ac.uk/~srelton/).

* [Fractals, complex numbers, and your imagination](https://github.com/cfangmeier/Small/blob/9037dbd6d7e5843a60d7a92c6e4a713b3b685a74/Imagination.ipynb), by [Caleb Fangmeier](https://github.com/cfangmeier).

* [A SymPy tutorial](http://nbviewer.ipython.org/url/www.inp.nsk.su/~grozin/python/sympy.ipynb), by [Andrey Grozin](http://www.inp.nsk.su/~grozin/).

* [Introduction to Mathematics with Python](https://github.com/drvinceknight/Python-Mathematics-Handbook), a collection of notebooks aimed at Mathematicians with no/little Python knowledge. Notebooks can be selected to serve as resources for a workshop. By [Vince Knight](https://github.com/drvinceknight).

### Signal and Sound Processing

* [Simulation of Delta Sigma modulators in Python](http://nbviewer.ipython.org/github/ggventurini/python-deltasigma/blob/master/examples/dsdemo1.ipynb) with [deltasigma](https://github.com/ggventurini/python-deltasigma), Python port of of Richard Schreier's *excellent* [MATLAB Delta Sigma Toolbox](http://www.mathworks.com/matlabcentral/fileexchange/19-delta-sigma-toolbox), by [Giuseppe Venturini](https://github.com/ggventurini). Several demonstrative notebooks on the package [README](https://github.com/ggventurini/python-deltasigma/blob/master/README.md).

* [PyOracle: Automatic analysis of musical structure](https://github.com/surgesg/PyOracle/blob/master/270D.ipynb), by [Greg Surges](https://www.linkedin.com/in/gregsurges).

* [A Gallery of SciPy's Window Functions for quick visual inspection and comparison](http://nbviewer.ipython.org/urls/gist.githubusercontent.com/jaidevd/b7d865f7f4b237ab5181/raw/30bc8f998bf8f924b56b32ce10acce125656ed7c/scipy_window_gallery.ipynb)
 by [Jaidev Deshpande](http://twitter.com/jaidevd)

* [Poisson Image Editing | Seamless Cloning](http://nbviewer.jupyter.org/github/riddhishb/ipython-notebooks/blob/master/Poisson%20Editing/Seamless_Cloning.ipynb) by [Dhruv Ilesh Shah](https://github.com/PrieureDeSion) is a notebook that achieves Seamless Image Cloning by employing the Poisson Solver in the iterative form.

* [Blind Source Separation | Cocktail Party Problem](http://nbviewer.jupyter.org/github/riddhishb/ipython-notebooks/blob/master/Cocktail%20Party%20Problem/PCA_ICA_FOBI.ipynb) by [Dhruv Ilesh Shah](https://github.com/PrieureDeSion) & [Shashwat Shukla](https://github.com/ShashShukla) is a notebook that achieves blind source separation, on audio signals in an attempt to approach the Cocktail Party Prblem. The problem has been tackled in two different methods - the FOBI and fastICA.
 
### Natural Language Processing

* [Python Programming for the Humanities](http://fbkarsdorp.github.io/python-course/) by Folgert Karsdorp & Maarten van Gompel.
* [News Categorization using Multinomial Naive Bayes](http://nbviewer.jupyter.org/github/andressotov/News-Categorization-MNB/blob/master/News_Categorization_MNB%2010-oct-2017.ipynb) by Andres Soto Villaverde.
* [Using random cross-validation for news categorization](http://nbviewer.jupyter.org/github/andressotov/rnd_cross_valid/blob/master/Using%20random%20cross-validation%20for%20news%20categorization.ipynb) by Andres Soto Villaverde.
* [Named Entity Recognition in French biomedical text](https://nbviewer.jupyter.org/github/andressotov/Named-Entity-Recognition-in-French-biomedical-text/blob/master/Named%20Entity%20Recognition%20in%20French%20biomedical%20text.ipynb) by Andrés Soto Villaverde
* [Named Entity Recognition in French biomedical text (Part 2)](https://nbviewer.jupyter.org/github/andressotov/Named-Entity-Recognition-in-French-biomedical-text/blob/master/Named%20Entity%20Recognition%20in%20French%20biomedical%20text%20Part%202.ipynb) by Andrés Soto Villaverde




### Pandas for data analysis

Note that in the 'collections' section above there are also pandas-related links, such as the one for an [11-lesson tutorial](https://bitbucket.org/hrojas/learn-pandas).

* [Python Pandas DataFrame Basics](https://github.com/Tanu-N-Prabhu/Python/blob/master/Pandas/Pandas_DataFrame.ipynb), this notebook explains the basic concepts of a pandas data frame from scratch for beginners with examples, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu).

* [A 10-minute whirlwind tour of pandas](http://nbviewer.ipython.org/gist/wesm/4757075/PandasTour.ipynb), this is the notebook accompanying a [video presentation](http://vimeo.com/59324550) by Wes McKinney, author of Pandas and the [Python for Data Analysis](http://www.amazon.com/Python-Data-Analysis-Wes-McKinney/dp/1449319793) book.

* [Manipulating the data with Pandas using Python](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Manipulating_the_data_with_Pandas_using_Python.ipynb), this notebook explains various operations and methods of Pandas library from the scratch with the help of an example, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu).

* [Time-series analysis with Pandas](http://nbviewer.ipython.org/github/changhiskhan/talks/blob/master/pydata2012/pandas_timeseries.ipynb).

* [Financial data analysis with Pandas](http://nbviewer.ipython.org/gist/3962843).

* [Clustering of smartphone sensor data for human activity detection using pandas and scipy](http://nbviewer.ipython.org/github/herrfz/dataanalysis/blob/master/week4/clustering_example.ipynb), part of Coursera data analysis course, done in Python ([repo](https://github.com/herrfz/dataanalysis)).

* [Log analysis with Pandas](http://nbviewer.ipython.org/url/taaviburns.ca/presentations/log_analysis_with_pandas/nb/5-Scatterplots.ipynb), part of a [group presented at PyConCa 2012](http://taaviburns.ca/presentations/log_analysis_with_pandas/) by Taavi Burns.

* [Analyzing and visualizing sun spot data with Pandas](http://nbviewer.ipython.org/gist/4569783), by [Josh Hemann](https://github.com/jhemann). An enlightening discussion of how naive plotting choices subtly influence our interpretation of data.

* [Advanced analysis of Apache logs](http://nbviewer.ipython.org/github/koldunovn/nk_public_notebooks/blob/master/Apache_log.ipynb), by [Nikolay Koldunov](https://github.com/koldunovn).

* [Statistical Data Analysis in Python](https://github.com/fonnesbeck/statistical-analysis-python-tutorial), by [Christopher Fonnesbeck](https://github.com/fonnesbeck/), SciPy 2013. Companion videos [1](https://www.youtube.com/watch?v=DXPwSiRTxYY), [2](https://www.youtube.com/watch?v=TGEBpzJUxdI), [3](https://www.youtube.com/watch?v=YZDtBEEZuAk), [4](https://www.youtube.com/watch?v=5_rcdhBXD-0)

## General Python Programming

* [How_to_get_started_coding_in_Python?](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/How_to_get_started_coding_in_Python%3F.ipynb), this notebook explains how to become a good python programmer, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu/Python), author and editor at [Towards data science](https://medium.com/@tanunprabhu95)

* [Python Strings from Scratch !!!](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Strings/Strings.ipynb), this notebook explains Python Strings from basic to advance level, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu/Python)

* [Python Tuples from Scratch !!!](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Tuples/%20Tuples.ipynb), this notebook explains Python Tuples from basic to advance level, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu/Python)

* [Python Dictionary from Scratch !!!](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Dictionary%20/%20Python_Dictionary.ipynb), this notebook explains Python Dictionary from basic to advance level, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu/Python)

* [Python Lists from Scratch !!!](https://nbviewer.jupyter.org/github/Tanu-N-Prabhu/Python/blob/master/Lists.ipynb), this notebook explains Python Lists from basic to advance level with the help of an example, by [Tanu Nanda Prabhu](https://github.com/Tanu-N-Prabhu/Python).

* [Learning to code with Python](http://nbviewer.ipython.org/urls/bitbucket.org/amjoconn/watpy-learning-to-code-with-python/raw/3441274a54c7ff6ff3e37285aafcbbd8cb4774f0/notebook/Learn%20to%20Code%20with%20Python.ipynb), part of an [introduction to Python](https://bitbucket.org/amjoconn/watpy-learning-to-code-with-python/src) from the [Waterloo Python users group](http://watpy.ca/blog/post/learn-code-python-review-feb-2013).

* [Introduction to Python for Data Scientists](http://nbviewer.jupyter.org/github/phelps-sg/python-bigdata/blob/master/src/main/ipynb/intro-python.ipynb) by [Steve Phelps](http://sphelps.net) (part of a larger collection on [Data Science and Big Data](https://github.com/phelps-sg/python-bigdata)).

* [Python Descriptors Demystified](http://nbviewer.ipython.org/gist/ChrisBeaumont/5758381/descriptor_writeup.ipynb), an in-depth discussion of the descriptor protocol in Python, by [Chris Beaumont](http://chrisbeaumont.org).

* [A collection of not so obvious Python stuff you should know!](http://nbviewer.ipython.org/github/rasbt/python_reference/blob/master/tutorials/not_so_obvious_python_stuff.ipynb?create=1), by [Sebastian Raschka](https://github.com/rasbt).

* [Key differences between Python 2.7.x and Python 3.x](http://nbviewer.ipython.org/github/rasbt/python_reference/blob/master/tutorials/key_differences_between_python_2_and_3.ipynb), by [Sebastian Raschka](https://github.com/rasbt).

* [A beginner's guide to Python's namespaces, scope resolution, and the LEGB rule](http://nbviewer.ipython.org/github/rasbt/python_reference/blob/master/tutorials/scope_resolution_legb_rule.ipynb?create=1), by [Sebastian Raschka](https://github.com/rasbt).

* [Sorting CSV files using the Python csv module](http://nbviewer.ipython.org/github/rasbt/python_reference/blob/master/tutorials/sorting_csvs.ipynb), by [Sebastian Raschka](https://github.com/rasbt).

* Python 3 OOP series by [Leonardo Giordani](https://github.com/lgiordani): [Part 1: Objects and types](http://nbviewer.ipython.org/github/lgiordani/blog_source/blob/master/pelican/content/notebooks/Python_3_OOP_Part_1__Objects_and_types.ipynb), [Part 2: Classes and members](http://nbviewer.ipython.org/github/lgiordani/blog_source/blob/master/pelican/content/notebooks/Python_3_OOP_Part_2__Classes_and_members.ipynb), [Part 3: Delegation - composition and inheritance](http://nbviewer.ipython.org/github/lgiordani/blog_source/blob/master/pelican/content/notebooks/Python_3_OOP_Part_3__Delegation__composition_and_inheritance.ipynb), [Part 4: Polymorphism](http://nbviewer.ipython.org/github/lgiordani/blog_source/blob/master/pelican/content/notebooks/Python_3_OOP_Part_4__Polymorphism.ipynb), [Part 5: Metaclasses](http://nbviewer.ipython.org/github/lgiordani/blog_source/blob/master/pelican/content/notebooks/Python_3_OOP_Part_5__Metaclasses.ipynb), [Part 6: Abstract Base Classes](http://nbviewer.ipython.org/github/lgiordani/blog_source/blob/master/pelican/content/notebooks/Python_3_OOP_Part_6__Abstract_Base_Classes.ipynb)

* [How to Aggregate Subscriber's Interest using the 3 methods:](https://nbviewer.jupyter.org/github/abbas-taher/Montreal-Python-69/blob/master/Montreal%20Python%2069.ipynb) (1) Python Dictionary, (2) Apache PySpark - GroupBy Transformation,  and (3) Apache PySpark - ReduceBy Transformation by [Abbas Taher](https://github.com/abbas-taher).

## Notebooks in languages other than Python

These are notebooks that use [one of the IPython kernels for other languages](IPython kernels for other languages):

### Julia

The IPython protocols to communicate between kernels and clients are language agnostic, and other programming language communities have started to build support for this protocol in their language. The Julia team has created [IJulia](https://github.com/JuliaLang/IJulia.jl), and these are some Julia notebooks:

* [Fractals 3 ways](http://nbviewer.ipython.org/url/beowulf.csail.mit.edu/18.337/fractals.ipynb), by [Jeff Bezanson](https://github.com/JeffBezanson).

* [The Design Impact of Multiple Dispatch](http://nbviewer.ipython.org/gist/StefanKarpinski/b8fe9dbb36c1427b9f22), a detailed explanation of Julia's multiple dispatch design, by [Stefan Karpinski](https://github.com/StefanKarpinski).

* A [tutorial](http://nbviewer.ipython.org/gist/7551139) on making interactive graphs with [Plotly](https://plot.ly/) and Julia.

* [Numerical tours in Julia](http://www.numerical-tours.com/julia/)

* [Functional Geometry](http://nbviewer.ipython.org/github/shashi/ijulia-notebooks/blob/master/funcgeo/Functional%20Geometry.ipynb) by [Shashi Gowda](https://github.com/shashi)

* [JuliaOpt notebooks](http://nbviewer.ipython.org/github/JuliaOpt/juliaopt-notebooks/tree/master/notebooks/), a collection of optimization-related notebooks.

* Coursework using IJulia notebooks:
  - [Métodos Numéricos Avanzados (2015-2)](https://github.com/dpsanders/MetodosNumericosAvanzados), Luis Benet and David P. Sanders
  - [Métodos Monte Carlo](https://github.com/dpsanders/metodos-monte-carlo), David Sanders
  - [Linear Partial Differential Equations: Analysis and Numerics](http://math.mit.edu/~stevenj/18.303/), Steven G. Johnson
  - [Julia tutorial for Computational Molecular Biology](http://cs.brown.edu/courses/csci1810/Julia_Tutorial.html), Younhun Kim and Matthew Reyna

* Other collections of IJulia notebooks:
  - [Jiahao Chen](http://jiahao.github.io/code/)
  - [Christoph Ortner](https://homepages.warwick.ac.uk/staff/C.Ortner/index.php?page=julia)
  - [Crossing Language Barriers with Julia, Scipy, and IPython](https://github.com/stevengj/Julia-EuroSciPy14), presented at EuroSciPy '14 by Steven G. Johnson.

### Haskell
There exists a Haskell kernel for IPython in the [IHaskell project](https://github.com/gibiansky/ihaskell).

* [IHaskell Demo Notebook](http://nbviewer.ipython.org/github/gibiansky/IHaskell/blob/master/notebooks/IHaskell.ipynb)
* [Homophone reduction](http://nbviewer.ipython.org/github/gibiansky/IHaskell/blob/master/notebooks/Homophones.ipynb), a solution to a cute problem involving treating English letters as generators of a large group.
* [Gradient descent typeclass](http://nbviewer.ipython.org/github/gibiansky/IHaskell/blob/master/notebooks/Gradient-Descent.ipynb), a look at how arbitrary gradient descent algorithms can be represented with a typeclass.

### OCaml

[iocaml](https://github.com/andrewray/iocaml) is an OCaml kernel for IPython

* [H.261 Video Decoding in OCaml](https://andrewray.github.io/iocamljs/oh261.html)
* [OCaml implementation of the 2048 game](http://gazagnaire.org/fuconf14/)

### Ruby

Similar to the Julia kernel there exists also a [Ruby kernel](https://github.com/SciRuby/iruby) for IPython.

* [IRuby Demo Notebook](http://nbviewer.ipython.org/github/SciRuby/sciruby-notebooks/blob/master/getting_started.ipynb)
* [SciRuby Notebooks](https://github.com/SciRuby/sciruby-notebooks)

The interactive plotting library [Nyaplot](https://github.com/domitry/nyaplot) has some case studies using IRuby:

* [War expenditure per GDP](http://nbviewer.ipython.org/github/domitry/nyaplot/blob/master/examples/notebook/Mapnya.ipynb#Case2-:Fill-countries-in-different-colors)
* [Finding shape consensus among multiple geometrical polygons](http://nbviewer.ipython.org/gist/mgiraldo/a68b53175ce5892531bc)

### Perl

* An example showcasing full use of the [display protocol](http://nbviewer.ipython.org/github/zmughal/zmughal-iperl-notebooks/blob/master/IPerl-demos/20150209_IPerl_display_demo.ipynb) with the IPerl kernel.

### F&#35;

* [F# for Jupyter Notebooks](https://github.com/fsprojects/IfSharp)

### C&#35;

* [Xamarin Workbooks](https://github.com/xamarin/Workbooks) Create a rich C# workbook for Android, iOS, Mac, WPF, or Console, and get instant live results as you learn these APIs.

### Javascript

* Two IJavascript notebooks that demonstrate how to use [D3](https://d3js.org) to [do computations and send a SVG back](https://nbviewer.jupyter.org/gist/Fil/efb1c9f3f0a9092c420dfe4cef8def96) and [play with a virtual DOM](https://nbviewer.jupyter.org/gist/Fil/aec6cbf62f9b71c3407db87d5eb592e7/D3%20notebook.ipynb)

## Miscellaneous topics about doing various things *with* the Notebook itself

* [Blogging With IPython in Blogger](http://nbviewer.ipython.org/github/fperez/blog/blob/master/120907-Blogging%20with%20the%20IPython%20Notebook.ipynb), also available in [blog post form](http://blog.fperez.org/2012/09/blogging-with-ipython-notebook.html), [full repo here](https://github.com/fperez/blog). By Fernando Perez.

* [Blogging With IPython in Octopress](http://nbviewer.ipython.org/urls/github.com/jakevdp/jakevdp.github.com/raw/master/downloads/notebooks/nb_in_octopress.ipynb), by Jake van der Plas and available as a [blog post](http://jakevdp.github.com/blog/2012/10/04/blogging-with-ipython/).  Other [notebooks by Jake](https://github.com/jakevdp/jakevdp.github.com/tree/master/downloads/notebooks) contain many more great examples of doing interesting work with the scientific Python stack.

* [Blogging With IPython in Nikola](http://nbviewer.ipython.org/url/www.damian.oquanta.info/posts/blogging-with-nikola-and-ipython.ipynb), also available in [blog post form](http://www.damian.oquanta.info/posts/blogging-with-nikola-and-ipython.html) by Damián Avila.

* [Custom CSS control of the notebook](http://nbviewer.ipython.org/github/Carreau/posts/blob/master/Blog1.ipynb), this is part of a [blog repo](https://github.com/Carreau/posts) by Matthias Bussonnier.

* [IPython display hookery: tools to help display visual output from various sources](http://nbviewer.ipython.org/gist/5162445), a gist by [@deeplook](https://github.com/deeplook).

* [Importing IPython Notebooks as Modules](http://nbviewer.ipython.org/gist/6011986) by [Min RK](http://github.com/minrk).

* [Getting Started With Jupyter Notebooks for Teaching and Learning](https://notebooks.azure.com/OUsefulInfo/projects/gettingstarted) by [Tony Hirst at OpenLearn](https://www.open.edu/openlearn/profiles/ajh59)

* Toward Data Science blogs:
   * [Bringing the best out of Jupyter Notebooks for Data Science](https://towardsdatascience.com/bringing-the-best-out-of-jupyter-notebooks-for-data-science-f0871519ca29)
   * [Boosting Your Jupyter Notebook Productivity](https://towardsdatascience.com/jupyter-notebook-hints-1f26b08429ad)

## Reproducible academic publications

This section contains academic papers that have been published in the peer-reviewed literature or pre-print sites such as the [ArXiv](http://arxiv.org) that include one or more notebooks that enable (even if only partially) readers to reproduce the results of the publication.  If you include a publication here, please link to the journal article as well as providing the nbviewer notebook link (and any other relevant resources associated with the paper).

1. [Revealing ferroelectric switching character using deep recurrent neural networks](https://www.nature.com/articles/s41467-019-12750-0). [Github page where code is located](https://github.com/jagar2/Revealing-Ferroelectric-Switching-Character-Using-Deep-Recurrent-Neural-Networks). [Jupyter Paper](https://bit.ly/2nCLGDC). [Raw Data](https://doi.org/10.5281/zenodo.1482091)

1. [Discovery of Gravitational Waves by the LIGO collaboration](https://losc.ligo.org/tutorials). That page, from the LIGO Open Science Center, contains multiple notebooks for various datasets corresponding to different events; [this binder](https://github.com/minrk/ligo-binder) lets you run the code right away. More details on the [GW150914](https://losc.ligo.org/events/GW150914) event as well as the original [main Physical Review Letters paper, "Observation of Gravitational Waves from a Binary Black Hole Merger"](http://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.061102).

1. [Characterizing Strain Variation in Engineered E. coli Using a Multi-Omics-Based Workflow](http://www.cell.com/cell-systems/fulltext/S2405-4712(16)30112-0), by Brunk et al. 

1. [Predicting Coronal Mass Ejections Using Machine Learning Methods](http://dx.doi.org/10.3847/0004-637X/821/2/127) by Monica Bobra and Stathis Ilonidis (Astrophysical Journal, 2016). An [IPython notebook](http://nbviewer.jupyter.org/github/mbobra/machine-learning-with-solar-data/blob/master/cme_svm.ipynb), which reproduces all the results, has been permanently deposited in the [Stanford Digital Repository](https://purl.stanford.edu/wt605kh4712).

1. [The Paper of the Future](https://dx.doi.org/10.22541/au.148769949.92783646) by Alyssa Goodman et al. (Authorea Preprint, 2017). This article explains and shows with demonstrations how scholarly "papers" can morph into long-lasting rich records of scientific discourse, enriched with deep data and code linkages, interactive figures, audio, video, and commenting. It includes an interactive d3.js visualization and has an astronomical data figure with an IPYthon Notebook "behind" it.

1. [Reply to 'Influence of cosmic ray variability on the monsoon rainfall and temperature': a false-positive in the field of solar-terrestrial research](http://arxiv.org/abs/1502.00505) by [Benjamin Laken](http://www.benlaken.com), 2015. Reviewed article will appear in JASTP. The [IPython notebook](http://nbviewer.ipython.org/github/benlaken/Comment_BadruddinAslam2014/blob/master/Monsoon_analysis.ipynb) reproduces the full analysis and figures exactly as they appear in the article, and is available on Github: link via [figshare](http://figshare.com/articles/Comment_on_Badruddin_amp_Aslam_2014_/1299413).

1. [An open RNA-Seq data analysis pipeline tutorial with an example of reprocessing data from a recent Zika virus study](http://dx.doi.org/10.12688/f1000research.9110.1), by [Zichen Wang](http://wangz10.github.io/) and [Avi Ma'ayan](http://www.mssm.edu/labs/maayan). (F1000Research 2016, 5:1574). An [IPython notebook](http://nbviewer.jupyter.org/github/maayanlab/Zika-RNAseq-Pipeline/blob/master/Zika.ipynb) was used to perform the proposed RNA-Seq pipeline using public gene expression data of human cells after Zika virus infection. The computational pipeline is also version controlled and Dockerized available [here](https://github.com/MaayanLab/Zika-RNAseq-Pipeline).

1. [The probability of improvement in Fisher's geometric model: a probabilistic approach](http://dx.doi.org/10.1016/j.tpb.2014.10.004), by [Yoav Ram](http://www.yoavram.com/) and [Lilach Hadany](https://sites.google.com/site/hadanylab/). (Theoretical Population Biology, 2014). An [IPython notebook](http://nbviewer.ipython.org/url/www.sciencedirect.com/science/MiamiMultiMediaURL/1-s2.0-S0040580914000811/1-s2.0-S0040580914000811-mmc1.txt/272364/FULL/S0040580914000811/471cf02085a52c248dc76ae65ad4409d/mmc1.txt), allowing figure reproduction, was deposited as a [supplementry file](http://www.sciencedirect.com/science/MiamiMultiMediaURL/1-s2.0-S0040580914000811/1-s2.0-S0040580914000811-mmc1.txt/272364/FULL/S0040580914000811/471cf02085a52c248dc76ae65ad4409d/mmc1.txt).

1. [Stress-induced mutagenesis and complex adaptation](http://rspb.royalsocietypublishing.org/content/281/1792/20141025.abstract), by [Yoav Ram](http://www.yoavram.com/) and [Lilach Hadany](https://sites.google.com/site/hadanylab/) (Proceedings B, 2014). An [IPython notebook](https://github.com/yoavram/ruggedsim/blob/master/manuscript/supplementry.ipynb), allowing figures reproduction, was deposited as a [supplementry file](http://rspb.royalsocietypublishing.org/content/suppl/2014/08/19/rspb.2014.1025.DC1).

1. [Automatic segmentation of odor maps in the mouse olfactory bulb using regularized non-negative matrix factorization](http://www.sciencedirect.com/science/article/pii/S1053811914003103), by J. Soelter et al. (Neuroimage 2014, Open Access). The [notebook](http://nbviewer.ipython.org/github/jansoe/FUImaging/blob/master/examples/IOSsegmentation/regNMF.ipynb) allows to reproduce most figures from the paper and provides a deeper look at the data. The [full code repository](https://github.com/jansoe/FUImaging/tree/Neuroimage2014) is also available.

1. [Multi-tiered genomic analysis of head and neck cancer ties TP53 mutation to 3p loss, by A. Gross et al. (Nature Genetics 2014)](http://www.nature.com/ng/journal/vaop/ncurrent/full/ng.3051.html). The [full collection of notebooks to replicate the results](https://github.com/theandygross/TCGA/tree/master/Analysis_Notebooks#guide-to-running). 

1. [Dog and human inflammatory bowel disease rely on overlapping yet distinct dysbiosis networks, by Vázquez-Baeza et al. (Nature microbiology 2016)](http://www.nature.com/articles/nmicrobiol2016177). The [full collection of notebooks to replicate the results](https://github.com/ElDeveloper/dogs).

1. [powerlaw: a Python package for analysis of heavy-tailed distributions, by J. Alstott et al.](https://code.google.com/p/powerlaw/). [Notebook of examples in manuscript](http://nbviewer.ipython.org/gist/19fcdd6a4ba400ce8de2), [ArXiv link](http://arxiv.org/abs/1305.0215) and [project repository](https://github.com/jeffalstott/powerlaw).

1. [Collaborative cloud-enabled tools allow rapid, reproducible biological insights, by B. Ragan-Kelley et al.](http://www.nature.com/ismej/journal/v7/n3/full/ismej2012123a.html). The [main notebook](http://nbviewer.ipython.org/gist/3693491/cloud_demo_complete.ipynb), the [full collection of related notebooks](http://nbviewer.ipython.org/gist/3693491) and the [companion site](http://qiime.org/home_static/nih-cloud-apr2012) with the Amazon AMI information for reproducing the full paper.

1. [A Reference-Free Algorithm for Computational Normalization of Shotgun Sequencing Data, by C.T. Brown et al.](http://ged.msu.edu/papers/2012-diginorm). [Full notebook](http://nbviewer.ipython.org/urls/github.com/ged-lab/2012-paper-diginorm/raw/master/notebook/diginorm.ipynb), [ArXiv link](http://arxiv.org/abs/1203.4802) and [project repository](https://github.com/ged-lab/2012-paper-diginorm).

1. [The kinematics of the Local Group in a cosmological context](http://arxiv.org/abs/1303.2690) by [J.E. Forero-Romero et al.](http://wwwprof.uniandes.edu.co/~je.forero/). The [Full notebook](http://nbviewer.ipython.org/github/forero/LG_Kinematics/blob/master/code/main_analysis.ipynb) and also all the data in a [github repo](https://github.com/forero/LG_Kinematics).

1. [Warming Ocean Threatens Sea Life](http://www.scientificamerican.com/article.cfm?id=warming-ocean-threatens-sea-life), an article in Scientific American [backed by a notebook for its main plot](http://nbviewer.ipython.org/github/robertodealmeida/notebooks/blob/master/scientific_american/Scientific%20American%20graph.ipynb). By [Roberto de Almeida](https://github.com/robertodealmeida) from [MarinExplore](https://marinexplore.com).

1. [Extrapolating Weak Selection in Evolutionary Games](http://nbviewer.ipython.org/github/juliangarcia/ews/blob/master/notebook.ipynb), by Wu, García, Hauert and Traulsen. [PLOS Comp Bio paper](http://www.ploscompbiol.org/article/info%3Adoi%2F10.1371%2Fjournal.pcbi.1003381) and [Figshare link](http://figshare.com/articles/Extrapolating_weak_selection_in_evolutionary_games_source_code/814470).

1. [Using neural networks to estimate redshift distributions. An application to CFHTLenS](http://nbviewer.ipython.org/urls/bitbucket.org/christopher_bonnett/nn_notebook/raw/5e69b55193a229cb2076a2f18e43b45c56e317e0/T-800.ipynb)
by Christopher Bonnett [paper](http://arxiv.org/abs/1312.1287)(submitted to MNRAS) 

1. [Mechanisms for stable, robust, and adaptive development of orientation maps in the primary visual cortex](http://dx.doi.org/10.1523/JNEUROSCI.1037-13.2013) by Jean-Luc R. Stevens, Judith S. Law, Jan Antolik, and James A. Bednar. Journal of Neuroscience, 33:15747-15766, 2013. [Notebook1]
(https://ioam.github.io/topographica/_static/gcal_notebook.html), [Notebook2](https://ioam.github.io/topographica/_static/stevens_jn13_notebook.html).

1. [Accelerated Randomized Benchmarking](http://nbviewer.ipython.org/github/cgranade/accelerated-randomized-benchmarking/blob/master/src/model_testing.ipynb), by [Christopher Granade](http://www.cgranade.com/), [Christopher Ferrie](https://sites.google.com/site/csferrie/) and D. G. Cory. [New Journal of Physics **17** 013042 (2015)](http://iopscience.iop.org/article/10.1088/1367-2630/17/1/013042/meta;jsessionid=1F48CDD7C7D7849B0777C495ED1551CC.c1), [arXiv](http://arxiv.org/abs/1404.5275), [GitHub repo](https://github.com/cgranade/accelerated-randomized-benchmarking).

1. [Dynamics and associations of microbial community types across the human body](http://dx.doi.org/10.1038/nature13178), by Tao Ding & Patrick D. Schloss. [Notebook replicating results](http://nbviewer.ipython.org/gist/pschloss/9815766/notebook.ipynb).

1. [Variations in submarine channel sinuosity as a function of latitude and slope](http://nbviewer.ipython.org/gist/zsylvester/6040d0015b9b907bc788), by Sylvester, Z., Pirmez, C., Cantelli, A., & Jobe, Z. R.

1. [Frontoparietal representations of task context support the flexible control of goal directed cognition](http://www.jneurosci.org/content/34/32/10743.short), by M.L. Waskom, D. Kumaran, A.M. Gordon, J. Rissman, & A.D. Wagner. [Github repository](https://github.com/WagnerLabPapers/Waskom_JNeurosci_2014) | [Main notebook](http://nbviewer.ipython.org/github/WagnerLabPapers/Waskom_JNeurosci_2014/blob/master/Behavioral_and_Decoding_Analyses.ipynb)

1. [pyparty: Intuitive Particle Processing in Python](http://openresearchsoftware.metajnl.com/article/view/jors.bh), Adam Hughes [Notebook to Generate the Published Figures](http://nbviewer.ipython.org/github/hugadams/pyparty/blob/master/examples/Notebooks/JORS_data.ipynb?create=1) | Also, check out the [pyparty tutorial notebooks](https://github.com/hugadams/pyparty).

1. [Indication of family-specific DNA methylation patterns in developing oysters](http://biorxiv.org/content/early/2014/12/16/012831), Claire E. Olson, Steven B. Roberts
doi: http://dx.doi.org/10.1101/012831. [Notebook to generate results in the paper](http://nbviewer.ipython.org/github/che625/olson-ms-nb/blob/master/BiGo_dev.ipynb).

1. [Parallel Prefix Polymorphism Permits Parallelization, Presentation & Proof](http://conferences.computer.org/hptcdl/2014/papers/7020a047.pdf), [Jiahao Chen](http://jiahao.github.io) and [Alan Edelman](http://www-math.mit.edu/~edelman/), HPTCDL'14. [Website](http://jiahao.github.io/parallel-prefix) and [notebook](https://github.com/jiahao/ijulia-notebooks/blob/master/2014-08-06-parallel-prefix.ipynb)

1. [Transcriptome Sequencing Reveals Potential Mechanism of Cryptic 3’ Splice Site Selection in *SF3B1*-mutated Cancers](http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004105) by [Christopher DeBoever](http://cdeboever3.github.io/) et al. There are several [notebooks](https://github.com/cdeboever3/deboever-sf3b1-2015/tree/master/notebooks) to replicate results and make figures.

1. [A Workflow for Characterizing Nanoparticle Monolayers for Biosensors: Machine Learning on Real and Artificial SEM Images](https://peerj.com/preprints/671/), Adam Hughes, Zhaowen Liu, Maryam Raftari, Mark. E Reeves.  Notebooks are linked in Table 1 in the text.

1. [AtomPy: An Open Atomic Data Curation Environment for Astrophysical Applications](http://www.mdpi.com/2218-2004/2/2/123), by C. Mendoza, J. Boswell, D. Ajoku, M. Bautista.

1. [Visualizing 4-Dimensional Asteroids](http://blogs.scientificamerican.com/sa-visual/2014/09/16/visualizing-4-dimensional-asteroids/), in Scientific American (by Jake VanderPlas)

1. [Challenges and opportunities in understanding microbial communities with metagenome assembly](http://journal.frontiersin.org/article/10.3389/fmicb.2015.00678/abstract), [accompanied by IPython Notebook tutorial](http://nbviewer.ipython.org/github/germs-lab/frontiers-review-2015/blob/master/frontiers-nb-2015.ipynb), by [Adina Howe](http://germslab.org) and  Patrick Chain.

1. [Structure of a shear-line polar low](http://onlinelibrary.wiley.com/doi/10.1002/qj.2911/abstract) (2016) by [Sergeev, D. E.](https://dennissergeev.github.io/), [Renfrew, I. A.](https://archive.uea.ac.uk/~e046/home.htm), Spengler, T. and Dorling, S. R. *Q.J.R. Meteorol. Soc.* doi:10.1002/qj.2911. Accompanied by [Notebooks to generate the published figures](https://github.com/dennissergeev/structure-of-a-shear-line-polar-low-notebooks).

1. [Detecting High-Order Epistasis in Nonlinear Genotype-Phenotype Maps](http://www.genetics.org/content/205/3/1079) by [Zachary R. Sailer](https://github.com/Zsailer) and [Michael J. Harms](https://github.com/harmsm) published in *Genetics*, March 2017 . All figures can be reproduced by the set of notebooks in [this Github repo](https://github.com/harmslab/notebooks-nonlinear-high-order-epistasis). 

1. [Summary Analysis of the 2017 GitHub Open Source Survey](https://osf.io/preprints/socarxiv/qps53/) by [Stuart Geiger](https://github.com/staeiou). Preprint in *SocArXiv*, June 2017. doi:10.17605/OSF.IO/ENRQ5. Paper is derived from a notebook converted to LaTeX with nbconvert. Notebook and materials at: [OSF](https://osf.io/enrq5/), [GitHub](https://github.com/staeiou/github-survey-analysis), [nbviewer](https://nbviewer.jupyter.org/github/staeiou/github-survey-analysis/blob/master/github-survey-descriptive-stats.ipynb)

1. [The weirdest SDSS galaxies: results from an outlier detection algorithm](https://arxiv.org/abs/1611.07526), by [D. Baron](https://github.com/dalya) and D. Poznanski. [Notebooks to replicate](https://github.com/dalya/WeirdestGalaxies).

1. [Clustergrammer, a web-based heatmap visualization and analysis tool for high-dimensional biological data](https://www.nature.com/articles/sdata2017151), by [Nicolas Fernandez](https://github.com/cornhundred) et al. Notebooks: [Fig. 3](http://nbviewer.jupyter.org/github/MaayanLab/CST_Lung_Cancer_Viz/blob/master/notebooks/CST_Data_Viz.ipynb), [Fig. 4](http://nbviewer.jupyter.org/github/MaayanLab/Cytof_Plasma_PMA/blob/master/notebooks/Compare_Cell-Type_Distribution_PMA_Treatment.ipynb), [Fig. 5](http://nbviewer.jupyter.org/github/MaayanLab/CCLE_Clustergrammer/blob/master/notebooks/Clustergrammer_CCLE_Notebook.ipynb)

1. [Sociology: An investigation of Social Class Inequalities in General Cognitive Ability in Two British Birth Cohorts.](https://osf.io/preprints/socarxiv/szxdm/) Preprint in SocArXiv, December 2017. doi: 10.17605/OSF.IO/SZXDM. Notebook and materials at: [OSF](https://osf.io/vey7q/), [GitHub](https://github.com/RoxanneConnelly/Social-Class-Inequalities-in-General-Cognitive-Ability-in-Two-British-Birth-Cohorts), [nbviewer](https://nbviewer.jupyter.org/github/RoxanneConnelly/Social-Class-Inequalities-in-General-Cognitive-Ability-in-Two-British-Birth-Cohorts/blob/master/JupterNotebook_20171122.ipynb). 

1. [An on-chip architecture for self-homodyned nonclassical light](https://arxiv.org/abs/1611.01566), quant-ph ArXiV preprint, Nov 2016, by Fischer et al. A [supporting notebook for all calculations](https://arxiv.org/src/1611.01566v4/anc/QuTiP-example-homodyne-Jaynes-Cummings-system.ipynb) included in the ArXiV submission.

1. [A nested sampling code for targeted searches for continuous gravitational waves from pulsars](https://arxiv.org/abs/1705.08978), gr-qc ArXiV preprint, May 2017, by Pitkin et al. [Complete repo](https://github.com/mattpitkin/CW_nested_sampling_doc) with supporting notebooks and sources on GitHub.

1. [HyperTools: A Python toolbox for visualizing and manipulating high-dimensional data](https://arxiv.org/abs/1701.08290), stat.OT ArXiV preprint by Heusser et al. A [repo with companion notebooks](https://github.com/ContextLab/hypertools-paper-notebooks) is available, that links to [the library itself, HyperTools](https://github.com/ContextLab/hypertools).

1. [Nonsinusoidal beta oscillations reflect cortical pathophysiology in Parkinson's disease](http://www.jneurosci.org/content/early/2017/05/02/JNEUROSCI.2208-16.2017), in Journal of Neuroscience by Cole et al. A [repo with companion notebooks](https://github.com/voytekresearch/Cole_2017) with all necessary data is available to reproduce all figures.

1. [Cycle-by-cycle analysis of neural oscillations](https://www.biorxiv.org/content/early/2018/04/16/302000), in bioRxiv by Cole & Voytek. A [repo with companion notebooks](https://github.com/voytekresearch/Cole_2018_cyclebycycle) with all necessary data is available to reproduce all figures. This repo also links to [the related useful library, neurodsp](https://github.com/voytekresearch/neurodsp), which contains notebooks of tutorials.

1. [pyKNEEr: An image analysis workflow for open and reproducible research on femoral knee cartilage](https://www.biorxiv.org/content/biorxiv/early/2019/05/04/556423.full.pdf), a preprint by S. Bonaretti et al. Jupyter notebooks are used as a graphical user interface for medical image processing and analysis. The paper is interactive, with links to data, software, and documentation throughout the text. Every figure caption contains links to fully reproduce graphs.

## Data-driven journalism

* [The Need for Openness in Data Journalism](http://nbviewer.ipython.org/github/brianckeegan/Bechdel/blob/master/Bechdel_test.ipynb), by [Brian Keegan](http://www.brianckeegan.com).

* [St. Louis County Segregation Analysis](https://github.com/BuzzFeedNews/2014-08-st-louis-county-segregation) , analysis for the article [The Ferguson Area Is Even More Segregated Than You Probably Guessed](http://www.buzzfeed.com/jsvine/the-ferguson-area-is-even-more-segregated-than-you-thought) by [Jeremy Singer-Vine](https://twitter.com/jsvine).

* [Size of thesis and dissertations in Quebec](https://github.com/jhroy/theses/blob/master/theses.ipynb), by [Jean-Hugues Roy](http://jhroy.ca) (in French).

## Whimsical notebooks

* [XKCD-styled plots created with Matplotlib](http://nbviewer.ipython.org/url/jakevdp.github.com/downloads/notebooks/XKCD_plots.ipynb). Here is the [blog post version](http://jakevdp.github.com/blog/2012/10/07/xkcd-style-plots-in-matplotlib/) with discussion.  By Jake van der Plas.

* [Van Gogh's Starry Night with ipythonblocks](http://nbviewer.ipython.org/github/jiffyclub/ipythonblocks/blob/master/demos/starry_night_to_text.ipynb), part of Matt Davis' [ipythonblocks](https://github.com/jiffyclub/ipythonblocks). This is a teaching tool for use with the IPython notebook that provides visual elements to understand programming concepts.

* [Conway's Game of Life](http://nbviewer.ipython.org/gist/3778422). Interesting use of convolution operation to calculate the next state of game board, instead of obvious find neighbors and filter the board for next state.

* [pynguins](https://nbviewer.jupyter.org/gist/denfromufa/9a5e1fdeaf611dc60ea8). Using jupyter notebook, python, and numpy to solve Board Game "Penguins on Ice".

* ["People plots"](http://nbviewer.ipython.org/gist/4544012), stick figures generated with matplotlib.

* [Reveal converter mini-tutorial](http://nbviewer.ipython.org/url/www.damian.oquanta.info/posts/reveal-converter-mini-tutorial.ipynb), also available in [blog post form](http://www.damian.oquanta.info/posts/reveal-converter-mini-tutorial.html). Do you want to make static html/css slideshow straight from the IPython notebook? OK, now you can do it with the *reveal* converter (nbconvert). [Demo](http://www.slideviper.oquanta.info/tutorial/slideshow_tutorial_slides.html) by Damián Avila.  

* [Personal IPython Weight Notebook](http://nbviewer.ipython.org/gist/9769238). Plot your loss of weight with prognosis and motivation features.

* [Streaming Double Pendulum Simulation in IPython NB](http://nbviewer.ipython.org/github/plotly/python-user-guide/blob/master/s7_streaming/s7_streaming.ipynb).

* [Porque Charles Xavier debe cambiar a Cerebro por Python](http://nbviewer.ipython.org/github/mshopper/aurora/blob/master/Aurora.ipynb), a study in data and gender in the Marvel comics universe, by [Mai Giménez](http://twitter.com/adahopper) and [Angela Rivera](http://twitter.com/ghilbrae).

* [Functional Geometry: a deconstruction of the MC Escher woodcut Square Limit](http://nbviewer.ipython.org/github/shashi/ijulia-notebooks/blob/master/funcgeo/Functional%20Geometry.ipynb), an IJulia notebook by [Shashi Gowda](http://shashi.github.io/).

* [Solving physical puzzles with a Jupyter Noteboook](https://notebooks.azure.com/library/puzzles/html/Snake%20Puzzle%20Solver.ipynb).

## Videos of IPython being used in the wild

Of course the first thing you might try is searching for videos about IPython (1900 or so by last count on Youtube) but there are demonstrations of other applications using the power of IPython but are not mentioned is the descriptions. Below are a few such:

* [Video](http://www.youtube.com/watch?v=Nc16qeGBtMU) on how to learn Python featuring IPython as the platform of choice for learning!

* [This video](http://www.youtube.com/watch?v=4ONBVNm3isI) shows IPython being used in the [scikit-learn](http://scikit-learn.org) project

* He does not show IPython in use but his IPython sticker is clear for the entire video: [Planning and Tending the Garden: The Future of Early Childhood Python Education](http://www.youtube.com/watch?v=op61s-QHryk)

* [Wes McKinney's speech](http://youtu.be/qbYYamU42Sw?t=5m9s) on Python and data analysis features IPython as does his book [Python for Data Analysis](http://shop.oreilly.com/product/0636920023784.do)

* [This video](https://www.youtube.com/watch?v=zG8FYPFU9n4) shows Plotly and IPython in use at a Montreal Python meetup. 

## Accessing and programing a IBM quantum computer via notebooks
* [Github](https://github.com/Qiskit/qiskit-tutorial/blob/master/index.ipynb) notebook example (scroll down) illustrating how to use Qiskit and access the IBMQ quantum computers.

## Software Architecture

* Let’s see [How to Grow Neat Software Architecture out of Jupyter Notebooks](https://github.com/guillaume-chevalier/How-to-Grow-Neat-Software-Architecture-out-of-Jupyter-Notebooks), by [Guillaume Chevalier](https://github.com/guillaume-chevalier).
