---
title: "Forge 06: Modeling, Evaluation, and the Reality Check"
draft: false
---
### 1. The Why  
After all the cleaning and feature engineering, your dataset is ready — but data alone is useless. The real test: can you learn real patterns and make reliable predictions?

### 2. The What (Plain English)  
Start with a simple baseline: **Logistic Regression**. Three critical steps:  
1. **Split the Data** — hide part as a test set for honest evaluation.  
2. **Train (`.fit()`)** — show the model the training set to learn patterns.  
3. **Predict & Evaluate** — test predictions on the hidden set.

### 3. The How (Lab Notebook)

**Step A: Separate Features & Target**  
Split your DataFrame into input features `X` and target `y`.

**Step B: Train-Test Split**  
Use `train_test_split` (20% test, `random_state=42`).

**Step C: Train & Predict**  
```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)
model = LogisticRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
````

**Step D: Evaluate**

- Local test accuracy: **0.88**
    
- Classification: high recall for non-survivors (0.95), moderate for survivors (0.75).
    

**Step E: Kaggle Submission**  
Ran the pipeline on `test.csv`. Public score: **0.775** — a normal “generalization gap.”

### 4. Academic Bridge

- [[AI/ML Unit 5: Regression & Classification]]
    
- [[AI/ML Unit 5.4: Logistic Regression]]
    
- [[AI/ML Unit 5.5: Metrics for Classification]]
    

### 5. Why It Matters

Building a model is easy. Explaining trade-offs and the generalization gap is the mark of a real data scientist. This is what employers care about.

---

