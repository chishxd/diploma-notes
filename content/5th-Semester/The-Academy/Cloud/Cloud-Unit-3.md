---
title: Unit 3
draft: false
---
# Academy - Cloud 3.2: Object Storage (S3)

## 1. The Core Concept
Object Storage is a technology for storing vast amounts of unstructured data. Unlike a traditional file system with folders and hierarchies, Object Storage manages data as discrete units called **objects**.

## 2. The Three Components of an Object
Each object is a self-contained bundle consisting of:
1.  **Data:** The actual file itself (e.g., a CSV file, an image, a video, a log file).
2.  **Metadata:** A set of descriptive tags about the data. This is user-defined and can include information like `content-type`, `author`, `creation-date`, etc. This makes the data searchable and easy to manage.
3.  **A Globally Unique ID:** A unique address used to retrieve the object from anywhere over the internet (or a private network) using HTTP APIs.

## 3. How it's Organized
- **Buckets:** Objects are stored in flat containers called "buckets." You can think of a bucket as a simple, top-level folder, but you cannot nest buckets inside other buckets. Bucket names must be globally unique.
- **Flat Hierarchy:** There are no directories in the traditional sense. A "path" like `my-bucket/images/cat.jpg` is just an illusion. The object's full name (or "key") is simply `images/cat.jpg`.

## 4. Why It's Used for Data Science & The Cloud
- **Massive Scalability:** Designed to scale to store exabytes of data without performance degradation.
- **Durability & Availability:** Data is automatically replicated across multiple devices and facilities, making it extremely durable.
- **API Accessibility:** Its "API-first" design makes it perfect for applications. Programs can easily read and write data programmatically, which is essential for data pipelines and ML models.
- **Cost-Effective:** It is the cheapest way to store large amounts of data in the cloud.

## 5. Connection to Practice
Our **MinIO server** is a local implementation of an Object Storage system. When we created a bucket named `autocleanse-data` and uploaded `titanic_train.csv` to it, we were directly using the principles of Object Storage. The `boto3` library is an SDK designed to speak the "language" of the S3 API to manipulate these objects.