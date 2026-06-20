# CRUD Operations Analysis

## Objective

The objective of this analysis was to understand how APIs manage data using CRUD operations and to perform practical API requests using Postman.

CRUD stands for:

* Create
* Read
* Update
* Delete

These operations are used by almost every application to manage data.

---

# API Used

Base URL:

```text
https://jsonplaceholder.typicode.com
```

Tool Used:

```text
Postman
```

---

# Experiment 1 - Read Data Using GET

## Endpoint

```http
GET /posts/1
```

## Full URL

```text
https://jsonplaceholder.typicode.com/posts/1
```

## Purpose

Retrieve information about a specific post.

## Response

```json
{
  "userId": 1,
  "id": 1,
  "title": "...",
  "body": "..."
}
```

## Status Code

```text
200 OK
```

## Observation

The API successfully returned the requested resource.

The response contained:

* User ID
* Post ID
* Title
* Body

## Learning

GET requests are used whenever an application needs to retrieve information from a server.

Examples:

* Viewing LinkedIn posts
* Viewing Instagram profiles
* Viewing YouTube videos

---

# Experiment 2 - Create Data Using POST

## Endpoint

```http
POST /posts
```

## Full URL

```text
https://jsonplaceholder.typicode.com/posts
```

## Request Body

```json
{
  "title": "Learning APIs",
  "body": "Understanding CRUD Operations",
  "userId": 1
}
```

## Purpose

Create a new resource.

## Response

```json
{
  "title": "Learning APIs",
  "body": "Understanding CRUD Operations",
  "userId": 1,
  "id": 101
}
```

## Status Code

```text
201 Created
```

## Observation

The server accepted the request and created a new resource.

A new ID was automatically assigned.

## Learning

POST requests are used when users create new information.

Examples:

* Creating a LinkedIn post
* Uploading an Instagram photo
* Writing a YouTube comment

---

# Experiment 3 - Update Data Using PUT

## Endpoint

```http
PUT /posts/1
```

## Full URL

```text
https://jsonplaceholder.typicode.com/posts/1
```

## Request Body

```json
{
  "id": 1,
  "title": "Updated Title",
  "body": "Updated Content",
  "userId": 1
}
```

## Purpose

Update an existing resource.

## Response

```json
{
  "id": 1,
  "title": "Updated Title",
  "body": "Updated Content",
  "userId": 1
}
```

## Status Code

```text
200 OK
```

## Observation

The API successfully processed the update request.

The response contained the updated information.

## Learning

PUT requests are used whenever existing information needs modification.

Examples:

* Editing a LinkedIn post
* Updating profile information
* Editing a comment

---

# Experiment 4 - Delete Data Using DELETE

## Endpoint

```http
DELETE /posts/1
```

## Full URL

```text
https://jsonplaceholder.typicode.com/posts/1
```

## Purpose

Delete an existing resource.

## Status Code

```text
200 OK
```

## Observation

The API successfully processed the delete request.

The resource was removed from the system.

## Learning

DELETE requests are used when information is no longer needed.

Examples:

* Deleting a LinkedIn post
* Removing an Instagram photo
* Deleting a comment

---

# HTTP Status Codes Observed

## 200 OK

Meaning:

The request was successfully processed.

Observed During:

* GET Requests
* PUT Requests
* DELETE Requests

---

## 201 Created

Meaning:

A new resource was successfully created.

Observed During:

* POST Requests

---

## 404 Not Found

Meaning:

The requested resource does not exist.

Example:

```http
GET /posts/999999
```

---

## 405 Method Not Allowed

Meaning:

The endpoint does not support the specified HTTP method.

---

# CRUD Lifecycle

```text
Create  → POST
Read    → GET
Update  → PUT
Delete  → DELETE
```

---

# Real-World Mapping

## LinkedIn

```text
Create Post      → POST
View Feed        → GET
Edit Post        → PUT
Delete Post      → DELETE
```

## Instagram

```text
Upload Photo     → POST
View Profile     → GET
Edit Profile     → PUT
Delete Post      → DELETE
```

## E-Commerce

```text
Add Product      → POST
View Product     → GET
Update Product   → PUT
Delete Product   → DELETE
```

---

# Key Takeaways

1. CRUD operations form the foundation of API-driven applications.

2. HTTP methods directly map to CRUD operations.

3. APIs are responsible for managing data throughout its lifecycle.

4. Every action performed in modern applications eventually translates into an API request.

5. Understanding CRUD is essential before learning advanced topics such as authentication, API security, and backend development.

---

# Conclusion

This practical exploration helped me understand that APIs are not only used to retrieve information but also to create, update, and delete data.

CRUD operations are the building blocks of modern software systems and are used in almost every application we interact with daily.
