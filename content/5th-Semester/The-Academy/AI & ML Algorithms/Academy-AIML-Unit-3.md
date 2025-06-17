---
title: Unit 3
draft: false
---
#### `3.1 History and Evaluation of ML, AI vs ML` 

> [!tip] This part of the unit is not much practical and purely theoretical, I have copied most of this topic from Wikipedia article. It won't be much important during exams or any future work(in my opinion).

- **1. Definition:** Machine learning (ML) is a field of study in artificial intelligence concerned with the development and study of statistical algorithms that can learn from data and generalize to unseen data, and thus perform tasks without explicit instructions.
- **2. History of ML:** The term _machine learning_ was coined in 1959 by [Arthur Samuel](https://en.wikipedia.org/wiki/Arthur_Samuel_\(computer_scientist\) "Arthur Samuel (computer scientist)"), an [IBM](https://en.wikipedia.org/wiki/IBM "IBM") employee and pioneer in the field of [computer gaming](https://en.wikipedia.org/wiki/Computer_gaming "Computer gaming") and [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"). The synonym _self-teaching computers_ was also used in this time period. In the beginning, **machine learning** was just a small part of the bigger dream of **Artificial Intelligence (AI)** — making computers think and act like humans.
	**Early efforts:**
	Researchers in AI wanted machines to **learn from data**, so they used:
	
- **Symbolic methods** (using logic and rules to mimic human thinking)
    
- **Early neural networks** like **perceptrons** (which were basic models similar to statistical tools like linear regression)
    
Also, they tried using **probability** to solve real-world problems like medical diagnosis.

- **3. AI VS ML:** 
By the 1980s:

- Most AI researchers **focused on logic and expert systems** (hardcoded rules and knowledge)
    
- Statistical and probabilistic methods (like ML) were seen as unreliable and got ignored in AI.
    
- So, work like **pattern recognition**, **probability**, and **neural networks** moved outside AI, into other fields.
    

#### 4. **Neural networks were ignored for a while:**

Research on neural networks almost died in AI/CS. But a few researchers (like **Geoffrey Hinton**) from other areas **kept working** on them. Their big breakthrough came in the **mid-1980s** when they **re-discovered backpropagation** — a powerful way to train neural networks.

#### 5. **ML becomes its own field in the 1990s:**

By the 1990s:

- **Machine Learning became independent** — not just a part of AI anymore.
    
- It **stopped trying to “be intelligent”** like humans and instead focused on solving **real, practical problems** (like spam detection, image recognition).
    
- ML methods started using ideas from **statistics, probability, and fuzzy logic**, instead of just symbolic logic.
    

---
![[AI_hierarchy.svg]]
By Lollixzc - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=122023216

> [!note] [This Wikipedia Article](https://en.wikipedia.org/wiki/Machine_learning#History_and_relationships_to_other_fields) explains everything you need to study about 3.1 topic and in depth. You may want to give it a shot if you are curious about the root of AI & ML.

#### `3.2: The ML Life Cycle (Initial Phases)`

*   **1. Definition:** The Machine Learning Life Cycle is a cyclical, structured process for building effective ML products. Our Day 1 work focused on the first three stages.

*   **2. Data Gathering:**
    *   **Concept:** The process of acquiring data from various sources. This can be from files (like CSVs), databases, or APIs.
    *   **Practical Implementation:** Our `load_csv()` function is a direct implementation of this stage. It gathers data from a local `.csv` file into our program.

*   **3. Data Wrangling (or Preprocessing):**
    *   **Concept:** The process of cleaning and organizing raw data to make it suitable for analysis. It is a broad phase that includes many sub-tasks.
    *   **Practical Implementation:** Our entire `autocleanse.py` script is a tool for data wrangling. Identifying missing values and data types is the first step in this process.

*   **4. Data Analysis (or Exploratory Data Analysis - EDA):**
    *   **Concept:** The process of inspecting, summarizing, and analyzing data to understand its main characteristics and identify patterns, anomalies, and underlying structures.
    *   **Practical Implementation:** Our `profile_dataframe()` function is a tool for EDA. It generates a summary (shape, dtypes, nulls, statistics) that allows us to analyze the dataset's condition.

---

#### `3.4: Datasets in Machine Learning`

*   **1. Definition:** A dataset is a collection of data, typically represented as a table where rows correspond to individual observations and columns correspond to variables (or features).

*   **2. Key Types:**
    *   **Training Dataset:** The data used to "teach" or `fit` the machine learning model. The model learns the relationships between the features and the target variable from this data.
        *   **Our Example:** `titanic_train.csv` is our training dataset.
    *   **Testing Dataset:** A separate dataset, unseen by the model during training, used to evaluate the model's performance and see how well it generalizes to new data.
    *   **Validation Dataset:** (Optional) A subset of the training data used during training to tune model parameters and prevent overfitting.

---

 #### `Academy - AI/ML 3.5: Handling Missing Data`

## 1. What is Missing Data?

Missing data refers to the absence of a value for a variable, often represented as `NaN` (Not a Number) in pandas. Most machine learning algorithms cannot process datasets with missing values, making this a critical step in the **Data Cleaning** phase.

## 2. Core Strategies

There are two primary strategies to handle `NaN` values. The choice depends on the nature and amount of missing data.

### Strategy A: Removal (Dropping)

This involves deleting the data that contains null values.

#### When to Use:
- **Drop a Column:** When the column has a very high percentage of missing values (e.g., > 60%). The column contains too little information to be useful and trying to fill it would be fabricating data.
- **Drop a Row:** When only a small number of rows have missing data and the dataset is large. Also used if the missing value is in the target variable (the "answer" you want to predict).

**Pros:**
- Simple and fast.
- Removes any potential bias that could be introduced by making estimations.

**Cons:**
- **Data Loss:** This is the biggest drawback. You may lose valuable information contained in the other features of the dropped rows.

**Connection to Practice:**
> In our `AutoCleanSE` project, the `Cabin` column in the Titanic dataset had over 77% missing values. We chose to **drop this entire column** because it was unsalvageable.

---

### Strategy B: Imputation (Filling)

This involves replacing the missing values with a calculated substitute.

#### When to Use:
- When dropping the data is not an option because it would lead to significant information loss. The goal is to preserve the dataset's size.

**Pros:**
- Retains all data, allowing the model to be trained on a larger sample.

**Cons:**
- Can introduce bias if the imputed value is not representative of what the real value might have been.
- Can reduce the natural variance in the data.

**Connection to Practice:**
> The `Age` and `Embarked` columns had a manageable number of missing values. We chose to **impute** them to preserve the data of those passengers. The specific imputation methods are detailed in the next note.
## Resources to refer for this Unit. 