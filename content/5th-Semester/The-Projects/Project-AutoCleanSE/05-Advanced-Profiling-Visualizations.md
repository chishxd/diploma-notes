---
title: " Forge 05: Advanced Profiling with Visualizations"
---
### 1. The Pain Point (The "Why")

Our basic profiler gives us numbers and statistics, but numbers alone can be misleading. A column's `mean` and `median` might be similar, but this doesn't tell us the *shape* of the data. Are there outliers? Is the data skewed? Furthermore, our initial profile tells us nothing about the **relationships between columns**. To make informed decisions for machine learning, we need to see our data, not just read about it.

### 2. The "Plain English" Intuition (The "What")

We will upgrade our profiler to become a visual auditing tool. This involves creating two key types of plots:

1.  **Histograms:** For every important numerical column, we will create a chart that shows its distribution. This allows us to instantly see the shape of the data and spot potential issues like skewness or outliers.
2.  **Correlation Heatmap:** We will create a single, color-coded matrix that shows the relationship between every pair of numerical columns. This will instantly highlight features that are strongly correlated with each other or with our target variable (`Survived`).

### 3. The Lab Notebook (The "How")

This work was prototyped in a Jupyter Notebook and then finalized into a `visualizer.py` module. The core function, `save_visualizations`, first identifies true numerical columns (excluding IDs) and then generates the plots.

```python
# src/autocleanse/visualizer.py
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import os
from .profiler import get_true_numerical_columns

def save_visualizations(df: pd.DataFrame, output_dir: str = 'reports/figures'):
    """
    Generates and saves key visualizations for the DataFrame.
    """
    # Ensure the output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    # --- 1. Generate Histograms for Numerical Distributions ---
    print("\n[INFO] Generating histograms...")
    numerical_cols = get_true_numerical_columns(df)
    for col in numerical_cols:
        plt.figure(figsize=(10, 6))
        sns.histplot(df[col].dropna(), kde=True, bins=30)
        plt.title(f'Distribution of {col}')
        plt.xlabel(col)
        plt.ylabel('Frequency')
        
        hist_path = f'{output_dir}/{col}_histogram.png'
        plt.savefig(hist_path)
        plt.close()
    print(f"Saved {len(numerical_cols)} histograms to {output_dir}")

    # --- 2. Generate Correlation Heatmap ---
    print("\n[INFO] Generating correlation heatmap...")
    plt.figure(figsize=(12, 8))
    correlation_matrix = df[numerical_cols].corr()
    sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', fmt='.2f')
    plt.title('Correlation Matrix of Numerical Features')
    
    heatmap_path = f'{output_dir}/correlation_heatmap.png'
    plt.savefig(heatmap_path)
    plt.close()
    print(f"Saved correlation heatmap to {output_dir}")

```

### 4. Academic Bridge

- **[[AI/ML Unit 3.2: Data Analysis]]**: This entire feature is a direct, practical implementation of Exploratory Data Analysis (EDA).
    
- **[[AI/ML Unit 3.3: Statistics Data]]**: We moved beyond text-based statistics to visualize them, which is critical for interpreting concepts like [[AI/ML 3.2a: Distribution Analysis|distribution]] and [[AI/ML 3.2b: Correlation Analysis|correlation]].
    

### 5. Why It Matters

In a freelance project, delivering a folder of plots alongside a data report is a powerful way to communicate insights. A client may not understand a table of numbers, but they will instantly understand a chart that shows a strong positive correlation or a skewed distribution. This ability to communicate findings visually is a core consulting skill.