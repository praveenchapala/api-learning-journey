# Day 7 - User Profile & Posts Dashboard

## Overview

On Day 7 of my API Learning Journey, I built a User Profile & Posts Dashboard to understand how modern applications combine multiple API requests and related resources to create richer user experiences.

In previous projects, I learned how to fetch and display user information dynamically. In this project, I extended that concept by fetching not only user details but also the posts created by that user.

This project helped me understand how applications like LinkedIn, Instagram, Facebook, and YouTube connect related data from different API endpoints and display everything in a single interface.

---

# Project Objective

The objective of this project was to learn:

* Multiple API Requests
* Query Parameters in Real Projects
* Resource Relationships
* Rendering Lists from APIs
* Dynamic UI Updates
* Fetch API
* Async/Await
* DOM Manipulation
* forEach Loop

---

# Project Functionality

The application allows users to:

1. Select a user from a dropdown menu
2. Fetch the selected user's information
3. Fetch posts created by the selected user
4. Display the user profile
5. Display all posts associated with that user
6. Update the interface dynamically without refreshing the page

---

# Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API
* JSONPlaceholder API

---

# Topics Learned

## 1. Multiple API Requests

A single user action can trigger multiple API requests.

Example:

```text
GET /users/3

GET /posts?userId=3
```

The first request retrieves user information.

The second request retrieves posts created by that user.

---

## 2. Resource Relationships

Modern APIs often contain related resources.

Example:

```text
User
 ↓
Posts
```

Each post contains a userId field.

Example:

```json
{
  "userId": 3,
  "id": 21,
  "title": "..."
}
```

The userId creates the relationship between the user and their posts.

---

## 3. Query Parameters in Practice

In previous lessons, I learned query parameters conceptually.

In this project, I used them in a real application.

Example:

```text
/posts?userId=3
```

Meaning:

Return only posts created by User 3.

This helped me understand how APIs can filter data before sending responses.

---

## 4. Arrays from APIs

Unlike user details, which return a single object, posts are returned as an array.

Example:

```json
[
  {
    "userId": 3,
    "id": 21,
    "title": "..."
  },
  {
    "userId": 3,
    "id": 22,
    "title": "..."
  }
]
```

This introduced the concept of working with multiple records returned from an API.

---

## 5. forEach Loop

To display multiple posts, I used a forEach loop.

Example:

```javascript
posts.forEach(post => {

});
```

Purpose:

Loop through every post and display it on the webpage.

---

## 6. Dynamic API Requests

The selected user determines which API requests are sent.

Examples:

```text
/users/1
/posts?userId=1
```

```text
/users/8
/posts?userId=8
```

The application automatically updates based on user selection.

---

## 7. DOM Manipulation

DOM Manipulation was used to dynamically update:

* User Profile
* User Posts

without refreshing the page.

---

# Project Workflow

```text
User Selects User
          ↓
Change Event Triggered
          ↓
Fetch User Details
          ↓
GET /users/{id}
          ↓
Display User Profile
          ↓
Fetch User Posts
          ↓
GET /posts?userId={id}
          ↓
Display User Posts
```

---

# Example

### User Selection

```text
User 8
```

### API Request 1

```text
/users/8
```

### API Request 2

```text
/posts?userId=8
```

### Result

```text
User Information Displayed

Name
Email
Phone
Website

Posts Displayed

Post 1
Post 2
Post 3
...
```

---

# Real-World Applications

The same concept is used in:

### LinkedIn

Profile → Posts

### Instagram

Profile → Posts

### Facebook

User → Posts

### YouTube

Channel → Videos

Modern applications connect multiple resources through APIs to build complete user experiences.

---

# Key Learnings

Through this project, I learned:

* Multiple API Requests
* Resource Relationships
* Query Parameters
* Arrays from APIs
* forEach Loop
* Fetch API
* Async/Await
* DOM Manipulation
* Dynamic UI Updates

---

# Key Takeaway

The biggest lesson from this project was understanding that APIs rarely work in isolation.

Modern applications combine multiple API endpoints and related resources to create meaningful experiences for users.

This project helped me understand how a single user action can trigger multiple API requests and dynamically update different sections of an application.

---

# Future Improvements

* Display Post Comments
* Add Search Functionality
* Show User Statistics
* Implement Error Handling
* Add Loading Indicators
* Build a Complete User Dashboard
* Connect Multiple Related APIs

---

# Conclusion

This project provided practical experience in working with multiple API requests and resource relationships.

By combining user profiles and user posts into a single dashboard, I gained a deeper understanding of how modern web applications organize, retrieve, and display related data through APIs.
