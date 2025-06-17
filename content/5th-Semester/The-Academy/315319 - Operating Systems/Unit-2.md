---
title: Unit 2
---
**`2.1: Processes and Process State`**

*   **1. Definition:**
    *   A **Process** is a program that is currently in execution. It is more than just the program code; it includes the program's current activity, represented by its memory, open files, and the value of its program counter.

*   **2. Process in Memory:**
    *   When a program is run, the OS allocates memory for its different parts:
        *   **Text Section:** The compiled code.
        *   **Data Section:** Global variables.
        *   **Heap:** Memory that is dynamically allocated during runtime.
        *   **Stack:** Memory for local variables and function calls.

*   **3. Process States:**
    *   As a process executes, it moves through different states. A simplified model includes:
        *   **New:** The process is being created.
        *   **Ready:** The process is waiting to be assigned to a CPU to run. It has everything it needs except the CPU itself.
        *   **Running:** Instructions are being executed by the CPU.
        *   **Waiting:** The process is waiting for some event to occur (e.g., waiting for an I/O operation like reading a file from the disk to complete).
        *   **Terminated:** The process has finished execution.

*   **4. Connection to Practice (`AutoCleanSE`):**
    *   When we ran the command `python autocleanse.py`, the Fedora OS performed the following actions:
        1.  It created a **New** process.
        2.  It loaded the Python interpreter and our script into memory.
        3.  The process moved to the **Ready** state.
        4.  The OS scheduler assigned it to a CPU, moving it to the **Running** state.
        5.  When our script called `pd.read_csv()`, it likely moved to the **Waiting** state until the file was fully read from the disk.
        6.  Once finished, it moved to the **Terminated** state.

---
