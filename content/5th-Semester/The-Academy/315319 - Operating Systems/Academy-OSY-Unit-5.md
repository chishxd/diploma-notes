---
title: Operating Systems - Unit 5
draft: false
---

#### **`Academy - OS 5.4: Directory Structure`**

*   **1. Definition:** A directory structure is the way an operating system organizes files and folders on a storage device.

*   **2. Common Types:**
    *   **Flat Structure:** All files are in a single directory. Simple but quickly becomes unmanageable.
    *   **Hierarchical (or Tree-Structured):** Directories can contain files and other directories (subdirectories). This is the standard for all modern OSs (Linux, Windows, macOS).
        *   **Root Directory:** The top-level directory (e.g., `/` in Linux, `C:\` in Windows).

*   **3. Connection to Practice:**
    *   We intentionally created a **tree-structured directory** for `AutoCleanSE`:
        ```
        autocleanse/
        ├── venv/
        ├── data/
        │   └── titanic_train.csv
        └── autocleanse.py
        ```
    *   This is professional practice because it cleanly separates our source code (`autocleanse.py`), our data (`data/`), and our environment dependencies (`venv/`).

---

