---
title: "Forge 02: API Setup with FastAPI & Uvicorn"
draft: false
---
### 1. The Problem  
A `.pkl` model is dead weight without a way to interact with it. You need a bridge: an API.

### 2. The What (Plain English)  
A **web API** is the front door to your model. Tools:  
- **FastAPI:** defines endpoints.  
- **Uvicorn:** runs the server.

Goal: prove your stack works by serving a basic “Hello, World!”

### 3. The How (Lab Notebook)

**Step A: Install Dependencies**  
```bash
pip install fastapi "uvicorn[standard]"
````

**Step B: Hello World App**  
`app.py`:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Clarion API"}
```

**Step C: Run the Server**

```bash
uvicorn app:app --reload
```

Visit `http://127.0.0.1:8000` — you should see your JSON response.

### 4. Academic Bridge

- [[Cloud Unit 1.4: Cloud Service Models]] — simple PaaS/SaaS example.
    
- [[OS Unit 2.1: Processes]] — running Uvicorn spawns a server process.
    

### 5. Why It Matters

Serving models via APIs is the backbone of MLOps. Knowing how to ship a model from notebook to production makes you valuable.