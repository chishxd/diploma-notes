---
title: 'Project AutoCleanSE: Day 2 - Building the "Cleaner Tool"'
draft: false
---
Welcome to the Day 2 of this project's walkthrough. As we saw yesterday, We created a new environment for the development of this project, and also wrote a simple function to profile the data loaded in for the code... Next thing is to Clean this data.. This article will also cover the remaining part of[[Academy-AIML-Unit-3#**`3.5 Handling Missing Data`**| Unit 3.5]] in AI & ML Algorithms
Of course. Your momentum is the highest priority. Completing the documentation loop is critical for solidifying knowledge and keeping your digital garden current.

Here is the "Forge" note for the feature you just built. It is written from your perspective, documenting the journey of creating the "Cleaner Tool." Copy and paste this directly into a new file named `02-Handling-Missing-Data.md` inside your `The-Forge/Project-AutoCleanSE/` directory.

---

### **Forge Article: `02-Handling-Missing-Data.md`**

**Title:** Project AutoCleanSE: Day 2 - Building the "Cleaner Tool"

#### **1. The Pain Point (The "Why")**

Our Day 1 profiler did its job perfectly: it showed us that the Titanic dataset is messy. We now have concrete proof that the `Age` and `Cabin` columns are full of missing (`NaN`) values.

This is a major roadblock. Machine learning algorithms are mathematical, and they can't handle these empty gaps. If we try to feed them this data, they will fail. Our diagnostic tool needs an upgrade; it needs to become a repair tool.

#### **2. The "Plain English" Intuition (The "What")**

The goal is to intelligently handle these missing values. We won't use a single, brute-force approach. We'll use a two-step, logic-based strategy:

1.  **Triage (Remove the Unsalvageable):** First, we identify any column that is *mostly* empty. If a column is missing over 60% of its data (like `Cabin`), it's more noise than signal. Trying to guess the values would be fabricating data. The safest move is to remove these columns entirely.
2.  **Impute (Smartly Fill the Gaps):** For columns with a manageable number of missing values, we will fill the gaps. The key is to use a logical substitute:
    *   For **numerical** columns like `Age`, we'll use the **median** value. The median is more robust to outliers than the mean (average).
    *   For **categorical** columns like `Embarked`, we'll use the **mode**, which is simply the most frequent value.

This approach balances the need to preserve data with the need to avoid introducing false information.

#### **3. The Lab Notebook (The "How")**

This is the new function, `handle_missing_data`, which was added to `autocleanse.py`. It contains the logic to execute our strategy.

```python
# This is the new function added to autocleanse.py
def handle_missing_data(df: pd.DataFrame) -> pd.DataFrame:
    '''
    Cleans the DataFrame by dropping columns with excessive nulls
    and imputing remaining missing values based on data type.
    '''
    # Step 1: Identify columns to drop (our "Triage" phase)
    cols_to_drop = []
    for column in df.columns:
        if df[column].isnull().sum() / len(df) * 100 > 60.00:
            cols_to_drop.append(column)

    # After the loop, drop all identified columns at once
    df = df.drop(columns=cols_to_drop)
    print(f"[INFO] Dropped columns with >60% missing values: {cols_to_drop}")

    # Step 2: Impute remaining missing values
    for column in df.columns:
        # We check if the column is numeric first
        if pd.api.types.is_numeric_dtype(df[column]):
            # For numbers, the median is a safe choice
            median_val = df[column].median()
            df[column] = df[column].fillna(median_val)
        else:
            # For text or other object types, the mode is the only logical choice
            mode_val = df[column].mode().iloc[0]
            df[column] = df[column].fillna(mode_val)

    return df

# The main execution block was updated to use the new function
if __name__ == "__main__":
    df = load_csv("data/train.csv")
    if df is not None:
        print("--- Profiling Original Data ---")
        profile_dataframe(df)

        # Call our new cleaning function
        cleaned_df = handle_missing_data(df.copy()) # Use .copy() to keep the original df unchanged

        print("\n--- Profiling Cleaned Data ---")
        profile_dataframe(cleaned_df)
    else:
        print("Script terminated due to file loading error.")
```

#### **4. The Academic Bridge (Connecting to the Syllabus)**

This session was a deep, practical dive into specific syllabus topics:

*   **AI/ML Unit 3.5 (Data Cleaning):** This entire feature is a direct implementation of handling `Missing Data`. We've now covered both identification and resolution.
*   **AI/ML Unit 3.3 (Statistics Data):** We moved beyond just *describing* statistics. We actively *used* statistical measures (`median`, `mode`) as tools to make intelligent decisions and modify our dataset.

#### **5. Why This Skill Matters (The "So What?")**

Real-world data is *always* messy. A client will never give you a perfect dataset. A freelancer who can only run a model on clean data is useless. A freelancer who can take a client's messy, incomplete data and systematically, justifiably clean it is providing immense value. This skill—and being able to explain *why* you chose the median over the mean—is what separates a hobbyist from a hireable professional.

---
### Further Reading & Resources

*   **Official Documentation:** A deep dive into the exact tools we used.
    *   [pandas.DataFrame.fillna](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.fillna.html) - For imputation.
    *   [pandas.DataFrame.dropna](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.dropna.html) - For removal.
*   **Conceptual Guide:** A great article discussing the strategies behind handling missing data.
    *   [How to Handle Missing Data by "Towards Data Science"](https://towardsdatascience.com/how-to-handle-missing-data-8646b18db0d4)
*   **Practical Walkthrough:** See these techniques applied in a full project.
    *   [Titanic Data Science Solutions: A Beginner's Guide on Kaggle](https://www.kaggle.com/code/startupsci/titanic-data-science-solutions)