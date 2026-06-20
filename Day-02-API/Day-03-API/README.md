# Day 3 - Understanding CRUD Operations with APIs

## Overview

On Day 3 of my API Learning Journey, I explored one of the most fundamental concepts in API development: **CRUD Operations**.

CRUD stands for:

* Create
* Read
* Update
* Delete

These four operations form the foundation of almost every software application we use today.

Whether it's LinkedIn, Instagram, YouTube, Amazon, or any other platform, users constantly create, view, modify, and delete data through APIs.

The goal of this day was to understand how APIs manage the complete lifecycle of data and how different HTTP methods are used to perform these operations.

---

# Learning Objectives

By the end of this learning session, I wanted to understand:

* What CRUD operations are
* How HTTP methods map to CRUD operations
* How APIs create new resources
* How APIs retrieve existing resources
* How APIs update resources
* How APIs delete resources
* How to perform these operations using Postman
* How to interpret API response codes

---

# What is CRUD?

CRUD is an acronym representing the four basic operations that can be performed on data.

| CRUD Operation | HTTP Method | Purpose                |
| -------------- | ----------- | ---------------------- |
| Create         | POST        | Create new data        |
| Read           | GET         | Retrieve existing data |
| Update         | PUT         | Update existing data   |
| Delete         | DELETE      | Remove data            |

These operations are implemented in almost every API-driven application.

---

# Understanding CRUD with Real-World Examples

## LinkedIn

When a user creates a new post:

```http
POST /posts
```

When a user views their feed:

```http
GET /posts
```

When a user edits a post:

```http
PUT /posts/1
```

When a user deletes a post:

```http
DELETE /posts/1
```

---

## Instagram

Upload Photo:

```http
POST /posts
```

View Photos:

```http
GET /posts
```

Update Caption:

```http
PUT /posts/1
```

Delete Photo:

```http
DELETE /posts/1
```

---

## E-Commerce Platforms

Add Product:

```http
POST /products
```

View Product:

```http
GET /products/1
```

Update Product Information:

```http
PUT /products/1
```

Delete Product:

```http
DELETE /products/1
```

---

# API Used for Practice

For hands-on learning, I used the JSONPlaceholder API.

Base URL:

```text
https://jsonplaceholder.typicode.com
```

This public API allows developers to safely practice API concepts without affecting real systems.

---

# Practical Exploration

## 1. GET Request (Read Operation)

### Endpoint

```http
GET /posts/1
```

### Full URL

```text
https://jsonplaceholder.typicode.com/posts/1
```

### Purpose

Retrieve information about a specific post.

### Response

```json
{
  "userId": 1,
  "id": 1,
  "title": "...",
  "body": "..."
}
```

### Status Code

```text
200 OK
```

### Observation

The API successfully returned the requested resource.

---

# 2. POST Request (Create Operation)

### Endpoint

```http
POST /posts
```

### Full URL

```text
https://jsonplaceholder.typicode.com/posts
```

### Request Body

```json
{
  "title": "Learning APIs",
  "body": "Understanding CRUD Operations",
  "userId": 1
}
```

### Purpose

Create a new resource.

### Response Code

```text
201 Created
```

### Observation

The API accepted the request and created a new resource.

---

# 3. PUT Request (Update Operation)

### Endpoint

```http
PUT /posts/1
```

### Full URL

```text
https://jsonplaceholder.typicode.com/posts/1
```

### Request Body

```json
{
  "id": 1,
  "title": "Updated Title",
  "body": "Updated Content",
  "userId": 1
}
```

### Purpose

Update an existing resource.

### Response Code

```text
200 OK
```

### Observation

The API successfully updated the resource and returned the updated object.

---

# 4. DELETE Request (Delete Operation)

### Endpoint

```http
DELETE /posts/1
```

### Full URL

```text
https://jsonplaceholder.typicode.com/posts/1
```

### Purpose

Delete an existing resource.

### Response Code

```text
200 OK
```

### Observation

The API successfully processed the deletion request.

---

# HTTP Status Codes Learned

## 200 OK

Indicates that the request was successfully processed.

Example:

* GET Request
* PUT Request
* DELETE Request

---

## 201 Created

Indicates that a new resource was successfully created.

Example:

* POST Request

---

## 404 Not Found

Indicates that the requested resource does not exist.

Example:

```http
GET /posts/999999
```

---

## 405 Method Not Allowed

Indicates that the endpoint does not support the specified HTTP method.

Example:

Attempting to use an unsupported method on an endpoint.

---

# CRUD Lifecycle Visualization

```text
User
 │
 ├── Create Data  → POST
 │
 ├── Read Data    → GET
 │
 ├── Update Data  → PUT
 │
 └── Delete Data  → DELETE
```

This lifecycle exists in almost every modern software system.

---

# Tools Used

* Postman
* JSONPlaceholder API
* GitHub
* VS Code

---

# Key Concepts Learned

During this learning session, I explored:

* REST APIs
* CRUD Operations
* HTTP Methods
* Request Body
* Response Body
* API Testing
* Status Codes
* Resource Management
* Postman Usage

---

# Key Takeaways

Before this lesson, I mainly viewed APIs as a way to retrieve data.

After practicing CRUD operations, I understood that APIs are responsible for managing data throughout its entire lifecycle.

The most important realization was:

Every button we click in an application is often an API request happening behind the scenes.

Examples:

* Creating a LinkedIn post → POST
* Viewing a LinkedIn feed → GET
* Editing a profile → PUT
* Deleting a post → DELETE

Understanding CRUD helped me connect API concepts with real-world software applications.

---

# Screenshots

## GET Request

(Add Screenshot Here)

## POST Request

(Add Screenshot Here)

## PUT Request

(Add Screenshot Here)

## DELETE Request

(Add Screenshot Here)

---

# Next Learning Goals

Moving forward, I plan to explore:

* Dynamic API Requests
* API Integration Projects
* Error Handling
* Authentication & Authorization
* API Security Concepts
* Building Complete API-Based Applications

This marks another step in my journey toward becoming a better software engineer and understanding how modern applications communicate through APIs.
