---
title: Operating Systems - Unit 3
draft: false
---
# Academy - OSY 3.1: CPU and I/O Burst Cycles

## 1. The Core Concept: Process Execution Rhythm

The execution of any process is not a continuous, unbroken use of the CPU. Instead, it is a sequence of alternating cycles:

1.  **CPU Burst:** A period where the process is actively using the CPU to perform computations (e.g., adding numbers, running loops, processing data).
2.  **I/O Burst:** A period where the process is waiting for an Input/Output operation to complete (e.g., reading a file from the disk, waiting for a network packet, getting user input).

This continuous switching between CPU work and I/O waiting is known as the **CPU–I/O Burst Cycle**.

## 2. Visualizing the Cycle

Imagine our `autocleanse.py` script running. Its lifecycle looks like this:

`[Load Program] -> CPU Burst`
`[Read CSV from Disk] -> I/O Burst (Waiting)`
`[Calculate Null Percentages] -> CPU Burst`
`[Calculate Median] -> CPU Burst`
`[Print to Screen] -> I/O Burst (Waiting)`
`[... and so on ...]`
`[End Program] -> CPU Burst`

## 3. Process Characterization (The "Why It Matters")

The relative length and frequency of these bursts determine the "personality" of a process. The OS Scheduler needs to know this to manage the system efficiently.

-   **I/O-Bound Process:**
    *   **Description:** A process that spends most of its time in I/O bursts, with very short CPU bursts.
    *   **Examples:** A web server waiting for requests, a text editor waiting for user input, a script that mainly reads/writes files.
    *   **Scheduling Goal:** The scheduler should run this process frequently for short periods so its I/O requests can be started quickly.

-   **CPU-Bound Process:**
    *   **Description:** A process that spends most of its time in long CPU bursts, with very infrequent I/O waits.
    *   **Examples:** Scientific simulations, complex mathematical calculations, video rendering.
    *   **Scheduling Goal:** The scheduler should give this process longer, uninterrupted time slots on the CPU to let it finish its work.

## 4. Connection to Our Experiment
## Connection to Practice

We practically demonstrated this concept in our AutoCleanSE project. By running the script on a large, 5-million-row file, we were able to measure the time spent in CPU bursts versus I/O bursts and prove that our script was primarily CPU-bound.

**See the full experiment here:** [[03-OS-Performance-Testing-at-Scale | Day 3 : Performance Testing at Scale]]

Our `time` command output gave us the evidence to characterize our script:

-   `real`: 16.564s
-   `user` (CPU Burst Time): 10.51s
-   `sys` (CPU Burst Time for OS tasks): 3.32s
-   `Waiting Time` (I/O Burst Time): `16.564 - (10.51 + 3.32) = ~2.7s`

The evidence shows that our script spent much more time in **CPU Bursts** (13.83s total) than in **I/O Bursts** (~2.7s). Therefore, we can definitively characterize our `autocleanse.py` script, when running on a large file, as being **primarily CPU-bound**. This is a critical insight for any future optimization efforts.