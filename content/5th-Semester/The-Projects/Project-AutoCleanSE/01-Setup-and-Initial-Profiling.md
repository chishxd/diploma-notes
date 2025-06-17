---
title: "Project AutoCleanSE: Day 1 - Setup and Initial Data Profiling"
---
## **1. The Why:**

- The reason I came up with this project is to clean the data for any data that will come to me when I am working with data. You need to follow this guide to setup any project you need to work on in the future.
- The Reason we need to create a structured setup like the one I am implementing is because it clears all the ambiguity for anybody who is working with the code in future, so that in the long run, it creates less conflicts in your projects.
- Git is a version control software which lets you jump between different versions of your code effectively allowing any contributors or team members to access and analyze your works.
- Understanding the setup part of the project will also help you understand the Unit 1's 1.3, 1.5 and Maybe get an Idea about how things in Unit 5 work.

---

## 2. The What (The "What"):

- We need to initialize a separate venv environment so that it won't mess up our system configurations in the long run using Several terminal commands later covered in [[#3. The How | The How]] part of this article.
- After setting up the venv, we used git to initialize version control for our code so that we can test and implement feature freely.
- I have used VSCode for development of this project, but you can use anything you might find interesting or easier to use.


---

## 3. The How:

> [!tip] **DISCLAIMER** : I am using Fedora Linux for Developing this project. Though I am giving the commands for Windows as well, Please avoid blindly copy-pasting commands.
### Setting Up
- To replicate this project locally, you will need Python 3 and git installed on your system. The following commands will create the project structure, set up an isolated virtual environment, install the necessary dependencies, and download the data.

---

### For Linux & macOS

Execute these commands in your terminal.
```shell
# 1. Create the project directory and navigate into it
# The -p flag ensures parent directories are created if they don't exist
mkdir -p ~/projects/autocleanse
cd ~/projects/autocleanse

# 2. Initialize a new Git repository
git init

# 3. Create a Python virtual environment
# Using python3 is explicit and avoids issues on systems with legacy Python 2
python3 -m venv venv

# 4. Activate the virtual environment
source venv/bin/activate

# 5. Install the required pandas library
pip install pandas

# 6. Create a data directory and download the Titanic dataset
mkdir data
# Note: If wget is not installed on macOS, use 'brew install wget' or use the curl command below
wget -O data/titanic_train.csv https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv

# Alternative for macOS using curl:
# curl -o data/titanic_train.csv https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv
```

### For Windows

Execute these commands in **PowerShell**.
```powershell
# 1. Create the project directory and navigate into it
# $env:USERPROFILE is a reliable way to get to your user home directory
mkdir $env:USERPROFILE\projects\autocleanse
cd $env:USERUSERPROFILE\projects\autocleanse

# 2. Initialize a new Git repository
git init

# 3. Create a Python virtual environment
# 'py' or 'python' can be used depending on your PATH configuration
py -m venv venv

# 4. Activate the virtual environment
.\venv\Scripts\Activate.ps1

# 5. Install the required pandas library
pip install pandas

# 6. Create a data directory and download the Titanic dataset
mkdir data
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv" -OutFile "data/titanic_train.csv"
```

After completing the steps above, You can now create a file name `autocleanse.py` And study the following code while writing it in your own way.

```python
import pandas as pd

def load_csv(data : str) -> pd.DataFrame:
    """
    Loads a CSV file into a Pandas DataFrame.

    Args:
        data (str): File path to the CSV file.

    Returns:
        pd.DataFrame: DataFrame parsed from the CSV file.

    Raises:
        FileNotFoundError: If the file path is incorrect or the file does not exist.
    """
    try:
        df = pd.read_csv(data) #read_csv() method is used to load and read the contents in a CSV file
        return df
    except FileNotFoundError: #We handle the FileNotFoundError so that the program won't crash.
        print("File Not Found!")
        return None


def profile_dataframe(df: pd.DataFrame):
    """
    Profiles the input DataFrame and returns key data statistics.

    This includes:
        - Column names and their data types
        - Percentage of missing values in each column
        - Descriptive statistics for numerical columns
        - Count of categorical columns

    Args:
        df (pd.DataFrame): The input Pandas DataFrame.

    Returns:
        TBD: Currently returns [TODO: A CSV/JSON file with profiling data for API integration].

    Raises:
        None
    """

    print("--- Profiling Data ---")

    print(f"Shape of Dataframe(rows, columns):{df.shape}\n") #Prints rows and columns in a Dataframe
    print("Name Of Each Column:")
    for column in df.columns: #Uses For loop to go through each column in the Index of all columns in the dataframe and print them
        print(column)
    print()

    print("Data Type of Each Column:")
    print(df.dtypes) #dtypes() returns datatype of each column in the dataframe.
    print()

    print("Percentage of missing Values:")
    null_percentages = (df.isnull().sum() / len(df)) * 100
    #.isnull() returns bool values if a value is null or not and .sum() sums up all True values. Then a percentage of the null values in each column is calculated.
    print(f"{null_percentages.round(2)}")
    print()

    print("Description of Numerical Columns: ")
    #.describe() function calculates Count, Mean, standard derivation, quartiles, min and max values of each column
    #Basically It is a summary of all the important data needed about the data.
    print(df.describe())
    print()

    print("Count of Unique Values in Categorical Columns: ")
    #Categorical Column means the columns which have limited values, like Male and Female are the only two values in Sex Column of the Dataframe, hence it is a Categorical Column.

    #.nunique() is used to calculate total number of unique values in a column, which has less than 5% of unique value.
    for column in df.columns:
        if df[column].nunique()/len(df) * 100 < 5 :
            print(f"{column} : {df[column].nunique()}") 
    print()
    print("--- End Of Profiling ---")

#this part of the code let's us to check code in a seperate part when we are working in a modular ecosystem.
#When this code is imported into other program, the code won't directly run, but only desired functions will run.
if __name__ == "__main__":
        df = load_csv("data/train.csv")
        if df is not None:
            profile_dataframe(df)
        else:
            print("Could not load File properly")
```
    

## 4. The Academic Bridge (Connecting to the Syllabus):

- **AI/ML:** "This work is the practical application of **Unit 3**: Data Gathering, Data Wrangling, and Datasets."
        
- **Operating Systems:** "We directly interacted with the OS using concepts from **Unit 1** (System Calls like python), **Unit 2** (creating a Process), and **Unit 5** (File Management with mkdir and Directory Structure)."


## 5. Why This Skill Matters:

- Being able to set up a clean project environment and write a script to quickly profile any new dataset is the starting point of every single data science freelance gig.


---
# Conclusion

So that's all for today. It was a fantastic day to start with, let's see what we will be doing in upcoming days!

---

BTW You can always check out this project and it's history [here](https://github.com/chishxd/autocleanse#)

**Academy To-Do:**

- AI/ML Unit 3.5: Missing Data
    
- AI/ML Unit 3.3: Statistics Data
    
- OS Unit 5.4: Directory Structure
    
- OS Unit 2.1: Processes