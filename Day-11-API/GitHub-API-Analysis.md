# GitHub API Analysis

## Project Name

GitHub Profile Explorer

---

# Objective

The objective of this project is to understand how real-world APIs work by interacting with the GitHub REST API.

This project allows users to enter a GitHub username and dynamically retrieve profile information such as:

* Profile Picture
* Name
* Bio
* Followers
* Following
* Public Repositories

The project also helps in understanding how APIs return data and how applications consume and display that data dynamically.

---

# Introduction to GitHub API

The GitHub API is a REST API provided by GitHub that allows developers to interact with GitHub resources programmatically.

Developers can use the API to:

* Retrieve user profiles
* View repositories
* Read issues and pull requests
* Create repositories
* Manage organizations
* Automate workflows

---

# API Used

## Endpoint

```http
GET https://api.github.com/users/{username}
```

Example:

```http
GET https://api.github.com/users/octocat
```

```http
GET https://api.github.com/users/praveenchapala
```

---

# Request Method

```http
GET
```

Purpose:

Retrieve information from the server.

---

# Path Parameter

The endpoint contains:

```text
{username}
```

This is called a Path Parameter.

Examples:

```http
/users/octocat
/users/torvalds
/users/praveenchapala
```

The username changes dynamically depending on user input.

---

# Request Workflow

```text
User Enters Username
          ↓
Button Click Event
          ↓
Fetch API Sends Request
          ↓
GitHub Server Processes Request
          ↓
JSON Response Returned
          ↓
JavaScript Parses JSON
          ↓
DOM Updated
          ↓
Profile Displayed
```

---

# Sample Request

```http
GET https://api.github.com/users/octocat
```

---

# Sample Response

```json
{
  "login": "octocat",
  "id": 583231,
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "name": "The Octocat",
  "company": "@github",
  "blog": "https://github.blog",
  "location": "San Francisco",
  "bio": null,
  "public_repos": 8,
  "followers": 18000,
  "following": 9
}
```

---

# Important Response Fields

## login

Stores the GitHub username.

Example:

```json
"login": "octocat"
```

---

## avatar_url

Stores the profile image URL.

Example:

```json
"avatar_url":
"https://avatars.githubusercontent.com/u/583231?v=4"
```

Purpose:

Display user profile pictures.

---

## name

Stores the user's name.

Example:

```json
"name": "The Octocat"
```

---

## bio

Stores profile description.

Example:

```json
"bio": "Software Developer"
```

---

## public_repos

Stores the total number of repositories.

Example:

```json
"public_repos": 8
```

---

## followers

Stores the number of followers.

Example:

```json
"followers": 18000
```

---

## following

Stores the number of users being followed.

Example:

```json
"following": 9
```

---

# JavaScript Concepts Used

## Fetch API

Used to communicate with GitHub servers.

Example:

```javascript
const response =
await fetch(
`https://api.github.com/users/${username}`
);
```

---

## Async and Await

API requests take time.

The application waits for the response before continuing execution.

Example:

```javascript
const user =
await response.json();
```

---

## Dynamic API Requests

Example:

```javascript
https://api.github.com/users/${username}
```

If:

```text
username = octocat
```

Request becomes:

```http
https://api.github.com/users/octocat
```

---

# DOM Manipulation

Used to display data dynamically.

Example:

```javascript
document.getElementById("profile")
.innerHTML
```

Purpose:

Update webpage content without refreshing the page.

---

# Displaying Images from APIs

GitHub API returns:

```json
"avatar_url"
```

This URL can be directly used inside HTML.

Example:

```html
<img src="${user.avatar_url}">
```

This is how many applications display:

* Profile Pictures
* Product Images
* Company Logos
* User Avatars

---

# API Testing Using Postman

## Request 1

```http
GET https://api.github.com/users/octocat
```

Status:

```text
200 OK
```

---

## Request 2

```http
GET https://api.github.com/users/praveenchapala
```

Status:

```text
200 OK
```

---

## Invalid User

```http
GET https://api.github.com/users/abcdefgh123456
```

Response:

```json
{
    "message": "Not Found"
}
```

Status:

```text
404 Not Found
```

---

# Error Handling Observation

Not every request returns valid data.

Applications should handle:

* Invalid usernames
* Network failures
* Empty responses
* API errors

Professional applications always validate responses before displaying information.

---

# Real-World Applications

The same concepts are used in:

## LinkedIn

Retrieve user profile information.

## Instagram

Display profile picture and follower count.

## Facebook

Retrieve account information.

## Portfolio Websites

Display GitHub statistics and repositories.

## Developer Dashboards

Analyze GitHub contributions and repositories.

---

# Key Learnings

Through this project, I learned:

* Working with Production APIs
* Reading API Documentation
* Understanding Path Parameters
* Dynamic API Requests
* Fetch API
* Async/Await
* JSON Parsing
* DOM Manipulation
* Displaying Images from APIs
* API Testing using Postman
* Response Validation
* Error Handling Concepts

---

# Architecture Diagram

```text
User Input
     ↓
GitHub Username
     ↓
GitHub API
     ↓
JSON Response
     ↓
JavaScript
     ↓
DOM Manipulation
     ↓
Profile Information Displayed
```

---

# Future Improvements

* Display Repository List
* Display Languages Used
* Display Star Count
* Display Contribution Statistics
* Add Loading States
* Add Error Handling
* Add Repository Search
* Add Pagination
* Build Complete GitHub Dashboard

---

# Conclusion

This project helped me transition from learning APIs with mock data to consuming a real production API used by millions of developers worldwide.

By building the GitHub Profile Explorer, I gained practical experience in working with real API responses, dynamic requests, images from APIs, and production-level JSON data structures.

This project is another important step in my journey toward mastering API development and API testing.
