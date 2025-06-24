---
title: "Day 03: OS Performance Testing at Scale"
draft: false
---
### 1. The Problem
My `autocleanse.py` script ran instantly on the small Titanic dataset. This gave me a false sense of security. To understand its true performance and find real bottlenecks, I needed to test it against a large, challenging dataset.

### 2. The Solution
Since I didn't have a large, messy dataset available, I created one. The strategy was to generate a synthetic CSV file with millions of rows to simulate a real-world workload. This would force the script to work hard, making performance issues visible.

### 3. The Lab Notebook

#### Part A: The Data Generator
I wrote a Python script (`generate_data.py`) using `pandas` and `numpy` to create a challenging dataset.

**Key Steps:**
- **Size:** Generated 5 million rows.
- **Columns:** Created four columns: two numerical, one categorical, and one with dates.
- **Artificial Messiness:** Intentionally introduced a high percentage of `NaN` (missing) values into one of the numerical columns to test my `handle_missing_data` function.
- **Output:** Saved the final DataFrame to `large_dataset.csv`.

#### Part B: The Experiment & The Result
I then used the `time` command in my Linux terminal to measure the execution of my cleaning script on this new large file.

**Command:**
```bash
time python autocleanse.py data/large_dataset.csv
```

**Result:**
```shell
10.51s user 3.32s system 83% cpu 16.564 total
```

#### Part C: Initial Analysis
The total wait time was **16.56 seconds**. The total time the CPU was actively working was `10.51s (user) + 3.32s (sys) = 13.83s`. This immediately tells me that my script is primarily **CPU-bound**—most of the time is spent on the actual data calculations within pandas. However, the ~2.7-second difference between `real` and `Total CPU` time shows that the initial disk read (I/O) is still a noticeable, non-trivial part of the process.

### 4. Academic Bridge
- **OS Unit 2 (Process Management):** This test created a long-running process, which is the fundamental unit of execution managed by the OS.
- **OS Unit 3 (CPU Scheduling):** The `user` vs. `sys` time is a direct result of how the Linux scheduler allocated CPU cycles to my program's code versus kernel tasks (like file access).

### 5. Why It Matters
A script that works on 1,000 rows might crash or take hours on 10 million. This process of stress-testing proves that I think about scalability, which is essential for any professional freelance project. It's the difference between a toy project and an engineering proof-of-concept.