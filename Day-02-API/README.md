# Day 2 - API Relationship Explorer

## Project Overview

On Day 2 of my API Learning Journey, I built a simple API-powered web application called **API Relationship Explorer**.

The objective of this project was to move beyond reading API responses in Postman and understand how different resources are connected inside an API.

Using the JSONPlaceholder public API, I explored how a user, their posts, and the comments on those posts are related to each other.

This project helped me understand one of the most important concepts in APIs: **Resource Relationships**.

---

## Problem Statement

When learning APIs, it is easy to focus only on making requests and reading responses.

However, real-world applications do not work with isolated pieces of data.

Applications like LinkedIn, Instagram, YouTube, and Facebook connect multiple resources together.

For example:

* A User creates Posts
* A Post receives Comments
* Comments belong to a specific Post

I wanted to understand how APIs represent these relationships and how applications retrieve connected information.

---

## APIs Used

### Get User Information

```http
GET /users/1
```

Endpoint:

```text
https://jsonplaceholder.typicode.com/users/1
```

Purpose:

Retrieve details of User 1.

---

### Get User Posts

```http
GET /users/1/posts
```

Endpoint:

```text
https://jsonplaceholder.typicode.com/users/1/posts
```

Purpose:

Retrieve all posts created by User 1.

---

### Get Post Comments

```http
GET /posts/{postId}/comments
```

Example:

```http
GET /posts/1/comments
```

Endpoint:

```text
https://jsonplaceholder.typicode.com/posts/1/comments
```

Purpose:

Retrieve all comments associated with a specific post.

---

## Project Flow

The application follows the flow below:

```text
Fetch User
     ↓
Fetch User Posts
     ↓
Fetch Comments For Each Post
     ↓
Calculate Statistics
     ↓
Display Results
```

---

## Relationship Visualization

The core concept explored in this project is Resource Relationships.

```text
User
 ↓
Posts
 ↓
Comments
```

A User can have multiple Posts.

A Post can have multiple Comments.

These relationships are established through IDs.

Example:

### User

```json
{
  "id": 1,
  "name": "Leanne Graham"
}
```

### Post

```json
{
  "userId": 1,
  "id": 1
}
```

The `userId` field tells us that the post belongs to User 1.

### Comment

```json
{
  "postId": 1,
  "id": 1
}
```

The `postId` field tells us that the comment belongs to Post 1.

This is how APIs connect related data.

---

## Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API
* JSONPlaceholder API

---

## Key Concepts Learned

### 1. Fetch API

Used to send HTTP requests and receive data from APIs.

Example:

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
```

---

### 2. Async/Await

Used to handle asynchronous API requests.

Example:

```javascript
const response = await fetch(url);
```

---

### 3. JSON Parsing

Converted API responses into JavaScript objects.

Example:

```javascript
const data = await response.json();
```

---

### 4. DOM Manipulation

Used JavaScript to dynamically update webpage content.

Example:

```javascript
document.getElementById("user").innerHTML
```

---

### 5. Resource Relationships

Learned how APIs connect resources using identifiers such as:

* userId
* postId

---

### 6. Multiple API Requests

The application does not rely on a single endpoint.

It combines data from multiple API endpoints to build meaningful information.

---

## Project Features

* Displays user information
* Retrieves all posts created by the user
* Retrieves comments for each post
* Calculates total number of posts
* Calculates total number of comments
* Visualizes resource relationships

---

## Output Summary

The application generates:

```text
User: Leanne Graham

Total Posts: 10

Total Comments: 50
```

along with all posts and their respective comment counts.

---

## Screenshots

### User Information

(Add Screenshot Here)

### Posts Retrieved From API

(Add Screenshot Here)

### Comments Retrieved From API

(Add Screenshot Here)

### Final Application Output

(Add Screenshot Here)

---

## Key Takeaways

Before building this project, I viewed APIs mainly as tools for retrieving data.

After completing this project, I understood that APIs are also responsible for connecting related resources and enabling applications to retrieve meaningful information.

The most important learning from this project was:

```text
APIs do not return isolated data.

They return connected data.
```

Understanding these relationships helped me better visualize how modern applications such as LinkedIn, Instagram, and YouTube organize and retrieve information.

---

## Next Steps

Future improvements planned for this project:

* User Selection Dropdown
* Dynamic User Loading
* Better UI Design
* Search Functionality
* Error Handling
* Loading Indicators

This project marks my first step toward building real-world API-powered applications.
