---
title: Day  01 - Local Cloud Simulation with MinIO
draft: false
---
### 1. The Problem
My ultimate goal is to deploy my ML models to the cloud, but I don't currently have access to an AWS or GCP account. This is a hard blocker. Furthermore, developing directly on a live cloud can be slow and costly. I need a way to build and test my cloud infrastructure locally, offline, and for free.

### 2. The "Plain English" Intuition
The solution is to run a "private cloud" directly on my Fedora machine. We will use a tool called **MinIO**, which is an open-source program that perfectly mimics Amazon's S3 (Simple Storage Service). By running MinIO inside a **Podman container**, we get a completely isolated, disposable, and fast S3-compatible server. Anything I learn to do with MinIO is directly transferable to AWS S3.

### 3. The Lab Notebook

#### Part A: Running the Local Cloud Server
The first step was to run MinIO using Podman. This required learning the key `podman run` flags to configure the server.

- **`podman run -d ...`**: The `-d` (detached) flag was critical. It runs the container in the background so it doesn't shut down when I close my terminal.
- **`-p 9001:9001`**: This maps my local machine's port 9001 to the container's web console port.
- **`-p 9000:9000`**: This maps my local port 9000 to the container's API port, which my Python code will use.
- **`-v ~/minio-data:/data`**: This connects a folder on my machine to a folder inside the container, ensuring any data I upload is saved permanently.
- **`-e "MINIO_ROOT_USER=..."`**: This sets the necessary username and password for the server.

After running the container, I accessed the web console at `http://127.0.0.1:9001`, created a bucket named `autocleanse-data`, and uploaded my `titanic_train.csv` file.

#### Part B: Programmatic Access with `boto3`
The real test is controlling the cloud with code. I wrote a Python script (`cloud_test.py`) to connect to my local MinIO server and list its buckets. The key was configuring the `boto3` client correctly.

```python
import boto3

# Credentials from the podman run command
access_key = "admin"
secret_key = "password"

# The local server URL, not the AWS default
endpoint_url = "http://127.0.0.1:9000"

s3_client = boto3.client(
    's3',
    endpoint_url=endpoint_url,
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key
)

# This command proves the connection works
response = s3_client.list_buckets()
for bucket in response['Buckets']:
    print(f"Found bucket: {bucket['Name']}")
```

### 4. Academic Bridge
- **Cloud Unit 2.1 (Virtualization):** Running MinIO in a Podman container is a form of **Containerization**, which is a lightweight type of application virtualization.
- **Cloud Unit 3.2 (Object-Based Storage):** S3 and MinIO are premier examples of Object Storage, the dominant storage type for modern cloud applications and data lakes.

### 5. Why It Matters
A freelancer who can only work when connected to a live, expensive cloud service is inefficient. Knowing how to simulate the cloud locally allows for rapid, offline development and testing. This skill drastically speeds up development cycles and demonstrates a deep understanding of the underlying cloud technologies.