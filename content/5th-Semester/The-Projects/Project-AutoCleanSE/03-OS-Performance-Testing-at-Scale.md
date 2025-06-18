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
```

### **Generated "Academy" Note**

**File:** `OS-3.1-Understanding-Process-Time.md`

```markdown
# Academy - OS 3.1: Diagnosing Performance with `time`

## 1. The Core Concept
The Linux `time` command is a fundamental diagnostic tool. It breaks down the execution time of a process into three key components, allowing us to understand *where* the time was spent.

## 2. The Three Metrics

When you run `time [your_command]`, you get three outputs:

#### **`real` (Wall-Clock Time)**
- **Definition:** The total time elapsed from start to finish, as if measured by a stopwatch on the wall.
- **Includes:** Everything—CPU execution, waiting for disk I/O, network delays, etc.
- **Analogy:** The total time you spend at a restaurant, from sitting down to leaving.

#### **`user` (User CPU Time)**
- **Definition:** The time the CPU spent executing the program's *own code* in user mode. This is your loops, your pandas calculations, your logic.
- **Analogy:** The time the chef spent actively cooking your food.

#### **`sys` (System CPU Time)**
- **Definition:** The time the CPU spent executing OS kernel code *on behalf of your program*. This includes handling file open/read requests, memory allocation, etc.
- **Analogy:** The time the waiter spent taking your order and bringing your food.

## 3. The Diagnostic Formula

The key to finding a bottleneck is comparing the total CPU work to the real-world time.

**`Total CPU Time = user + sys`**

- **If `Total CPU Time` ≈ `real` time:** The process is **CPU-bound**. Its speed is limited by the processor. To make it faster, you need to optimize the code itself.
- **If `Total CPU Time` << `real` time:** The process is **I/O-bound**. It spent most of its time waiting for the disk, network, or other external devices. To make it faster, you need to improve the I/O operations.

## 4. Practical Connection
Our `autocleanse.py` script on a 5M row file gave:
- `real`: 16.564s
- `user`: 10.51s
- `sys`: 3.32s

`Total CPU Time` = 13.83s. Since this is a large portion of the 16.564s `real` time, we proved our script is primarily **CPU-bound**. The next step in optimization would be to look at the Python code itself, not the disk access.
```


---
## Conclusion
Today's work does not cover much of topic as per our MSBTE's Syllabus. But it is a AI engineer's responsibility to optimize their codes to be as fast and resource-efficient as it can be.
I think this work will somehow connect to OSY's 