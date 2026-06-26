# Day 8 - API Testing Playground

## Overview

On Day 8 of my API Learning Journey, I built an API Testing Playground to understand how real-world applications interact with APIs, process user input, handle responses, and manage errors.

In previous projects, API requests were either fixed or controlled through a dropdown menu. In this project, I allowed users to enter their own User ID and dynamically fetch information from an API.

More importantly, I learned that API development is not only about displaying successful responses. A professional application must also handle invalid requests and provide meaningful feedback to users.

This project helped me understand the complete flow of API consumption from user input to API response handling.

---

# Project Objective

The objective of this project was to learn:

* User Input Handling
* Click Events
* Dynamic API Requests
* API Testing
* Fetch API
* Async/Await
* JSON Parsing
* DOM Manipulation
* Loading States
* Error Handling
* Response Validation

---

# Project Functionality

The application allows users to:

1. Enter a User ID
2. Click the Fetch User button
3. Send an API request dynamically
4. Retrieve user information
5. Display the user details
6. Show a loading state while waiting for data
7. Handle invalid User IDs gracefully
8. Display success or failure messages

---

# Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API
* JSONPlaceholder API
* Postman

---

# Topics Learned

## 1. User Input Handling

### Definition

User Input Handling refers to collecting information entered by users.

Example:

```javascript
const userId =
document.getElementById("userId").value;
```

### Purpose

Capture data entered by users and use it in application logic.

### Real-World Examples

* Login Forms
* Search Bars
* Registration Forms
* Product Filters
* Feedback Forms

---

## 2. Click Events

### Definition

A Click Event occurs when a user clicks a button.

Example:

```javascript
button.addEventListener("click", function () {

});
```

### Purpose

Trigger an action when the user interacts with the application.

### Real-World Examples

* Login Button
* Search Button
* Submit Button
* Add to Cart Button

---

## 3. Dynamic API Requests

### Static Request

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
```

Always retrieves User 1.

### Dynamic Request

```javascript
fetch(
`https://jsonplaceholder.typicode.com/users/${userId}`
)
```

Retrieves data based on user input.

Examples:

```text
/users/1
/users/5
/users/10
```

---

## 4. Fetch API

### Definition

The Fetch API is used to communicate with servers and retrieve data.

Example:

```javascript
const response =
await fetch(url);
```

### Purpose

Send HTTP requests and receive responses.

---

## 5. Async Functions

### Definition

Async functions allow JavaScript to handle operations that take time.

Example:

```javascript
async function getUser() {

}
```

### Why Async?

API requests are not instant.

The application must wait for data from the server.

---

## 6. Await Keyword

### Definition

The await keyword pauses execution until a Promise is resolved.

Example:

```javascript
const response =
await fetch(url);
```

### Purpose

Ensure data is received before continuing execution.

---

## 7. JSON Parsing

### Definition

APIs typically return data in JSON format.

Example:

```javascript
const user =
await response.json();
```

### Purpose

Convert JSON responses into JavaScript objects.

---

## 8. DOM Manipulation

### Definition

DOM Manipulation allows JavaScript to modify webpage content dynamically.

Example:

```javascript
resultDiv.innerHTML = `
<h2>${user.name}</h2>
`;
```

### Purpose

Display API responses on the webpage.

---

## 9. Loading States

### Definition

A Loading State informs users that data is currently being processed.

Example:

```javascript
statusDiv.innerHTML =
"Loading...";
```

### Purpose

Improve user experience by providing feedback.

### Real-World Examples

* Loading Products...
* Loading Dashboard...
* Loading Search Results...

---

## 10. Success States

### Definition

A Success State indicates that the request was completed successfully.

Example:

```javascript
statusDiv.innerHTML =
"Success";
```

### Purpose

Inform users that data has been retrieved successfully.

---

## 11. Error Handling

### Definition

Error Handling manages unexpected situations gracefully.

Example:

```javascript
if (!user.id)
```

### Purpose

Prevent applications from displaying broken or invalid data.

### Before Error Handling

```text
undefined
undefined
undefined
```

### After Error Handling

```text
User Not Found
```

---

## 12. Response Validation

### Definition

Response Validation verifies whether the returned data is valid before displaying it.

Example:

```javascript
if (!user.id)
```

### Purpose

Ensure that the application only displays meaningful information.

---

# API Testing Using Postman

To better understand API behavior, I tested several endpoints using Postman.

### Valid User

```http
GET /users/1
```

Response:

```json
{
  "id": 1,
  "name": "Leanne Graham"
}
```

Status:

```text
200 OK
```

---

### Another Valid User

```http
GET /users/5
```

Status:

```text
200 OK
```

---

### Invalid User

```http
GET /users/999
```

Response:

```json
{}
```

Observation:

The API returned an empty object because the user does not exist.

---

# Application Workflow

```text
User Enters User ID
          ↓
Clicks Fetch User
          ↓
JavaScript Reads Input
          ↓
Loading State Shown
          ↓
API Request Sent
          ↓
Server Processes Request
          ↓
Response Returned
          ↓
JSON Parsed
          ↓
Response Validated
          ↓
Success or Failure Message Displayed
          ↓
User Information Displayed
```

---

# Practical Examples

### Valid User ID

Input:

```text
5
```

Result:

```text
Success

Chelsey Dietrich
Lucio_Hettinger@annie.ca
```

---

### Invalid User ID

Input:

```text
999
```

Result:

```text
Failed

User Not Found
```

---

# Key Learnings

Through this project, I learned:

* How to collect user input
* How to trigger actions using click events
* How to create dynamic API requests
* How to consume APIs using Fetch
* How to parse JSON responses
* How to update webpages dynamically
* How to test APIs using Postman
* How to validate API responses
* How to handle invalid data
* How to implement loading, success, and failure states

---

# Real-World Applications

The concepts learned in this project are used in:

* Login Systems
* Search Engines
* Customer Portals
* Admin Dashboards
* E-Commerce Platforms
* Banking Applications
* CRM Systems

---

# Key Takeaway

The biggest lesson from this project was understanding that successful API responses are only one part of application development.

Professional applications must also handle invalid requests, loading states, and unexpected scenarios.

Building this project helped me understand how real-world applications communicate with APIs and manage responses effectively.

---

# Future Improvements

* Add Try-Catch Error Handling
* Display Detailed Error Messages
* Add User Search Functionality
* Integrate Multiple APIs
* Add Pagination
* Build Advanced API Dashboards

---

# Conclusion

This project strengthened my understanding of API consumption, testing, response handling, and error management.

It helped me move beyond simply fetching data and taught me how professional applications provide a complete and reliable user experience when working with APIs.




-----------------------------------------------------------
This is the end of day 8 of my API Learning Journey.
This is the mock data that  iam adding just for the sake of generating pull requests.

