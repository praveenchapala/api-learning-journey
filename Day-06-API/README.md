# Day 4 - Dynamic API User Explorer

## Overview

On Day 4 of my API Learning Journey, I built a Dynamic API User Explorer to understand how modern applications fetch and display data based on user interactions.

In my previous projects, API requests were static and always returned the same data. In this project, I learned how to make API requests dynamic by allowing users to select different users from a dropdown menu and automatically fetching their information from an API.

This project helped me understand how applications such as LinkedIn, Instagram, Facebook, and Amazon dynamically retrieve data based on user actions.

---

# Project Objective

The objective of this project was to learn:

- Event-Driven Programming
- Event Listeners
- Dynamic API Requests
- Fetch API
- Async/Await
- DOM Manipulation
- JSON Parsing
- Reusable Functions

---

# Project Functionality

The application allows users to:

1. Select a user from a dropdown menu
2. Trigger an event when the selected user changes
3. Send a dynamic API request
4. Retrieve the selected user's information
5. Display the user details on the webpage
6. Update the interface without refreshing the page

---

# Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- JSONPlaceholder API

---

# Topics Learned

## 1. Event-Driven Programming

Modern applications react to user actions instead of waiting for page refreshes.

Examples:

- Clicking a button
- Selecting an option
- Typing in a search bar
- Submitting a form

These actions are called events.

---

## 2. Event Listeners

An Event Listener waits for a specific event and executes code when that event occurs.

Example:

```javascript
userSelect.addEventListener("change", function () {

});
```

Meaning:

Whenever the user selects a different option, JavaScript executes the code inside the event listener.

---

## 3. Change Event

The change event occurs whenever a user selects a different option from the dropdown.

Example:

User changes:

User 1

to

User 5

This triggers the change event.

---

## 4. DOM Manipulation

DOM Manipulation allows JavaScript to modify webpage content dynamically.

Example:

```javascript
document.getElementById("user")
```

Using DOM Manipulation, I was able to display user information directly on the webpage.

---

## 5. Dynamic API Requests

### Static Request

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
```

Always returns User 1.

### Dynamic Request

```javascript
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
```

Returns data based on the selected user.

Examples:

```text
/users/1
/users/2
/users/5
/users/10
```

This makes applications flexible and reusable.

---

## 6. Template Literals

Template Literals allow variables to be inserted into strings.

Example:

```javascript
`users/${userId}`
```

If:

```javascript
userId = 5
```

The final URL becomes:

```text
users/5
```

---

## 7. Async Functions

Async functions allow JavaScript to perform operations that take time.

Example:

```javascript
async function getUser(userId) {

}
```

API requests are asynchronous because the application must wait for data from the server.

---

## 8. Await Keyword

The await keyword pauses execution until data is received.

Example:

```javascript
const response = await fetch(url);
```

Purpose:

Wait for the API response before continuing execution.

---

## 9. Fetch API

The Fetch API is used to send HTTP requests and receive responses.

Example:

```javascript
const response = await fetch(url);
```

Purpose:

Retrieve information from external systems.

Examples:

- User Data
- Weather Data
- Product Information
- Social Media Content

---

## 10. JSON Parsing

API responses are usually returned in JSON format.

Example:

```javascript
const user = await response.json();
```

This converts JSON data into a JavaScript object.

---

## 11. Reusable Functions

Instead of creating separate functions for every user:

```javascript
getUser1();
getUser2();
getUser3();
```

I learned to create a reusable function:

```javascript
getUser(userId);
```

Examples:

```javascript
getUser(1);
getUser(5);
getUser(10);
```

This approach is scalable and commonly used in real-world applications.

---

# Project Workflow

```text
User Selects User
          ↓
Change Event Triggered
          ↓
Event Listener Executes
          ↓
Selected User ID Retrieved
          ↓
Dynamic API Request Sent
          ↓
Server Returns Data
          ↓
JSON Converted
          ↓
DOM Updated
          ↓
User Information Displayed
```

---

# Example

### User Selection

```text
User 7
```

### API Endpoint

```text
https://jsonplaceholder.typicode.com/users/7
```

### API Response

```json
{
  "id": 7,
  "name": "Kurtis Weissnat",
  "email": "Elwyn.Skiles@jasper.info"
}
```

### Displayed Output

```text
Kurtis Weissnat
Elwyn.Skiles@jasper.info
```

---

# Real-World Applications

The same concepts are used in:

### LinkedIn

Selecting a profile dynamically loads user information.

### Instagram

Selecting a profile dynamically loads posts and user details.

### Amazon

Selecting a product dynamically loads product information.

### Netflix

Selecting a movie dynamically loads movie details.

---

# Key Learnings

Through this project, I learned:

- Event-Driven Programming
- Event Listeners
- Change Events
- DOM Manipulation
- Dynamic API Requests
- Template Literals
- Async Functions
- Await Keyword
- Fetch API
- JSON Parsing
- Reusable Functions

---

# Key Takeaway

The biggest lesson from this project was understanding that modern applications do not rely on fixed data.

Instead, applications react to user actions, make dynamic API requests, retrieve data from servers, and update the interface in real time.

This project helped me move from simply consuming APIs to building interactive applications powered by APIs.

---

# Future Improvements

- Display User Posts
- Display Comments
- Show User Statistics
- Add Search Functionality
- Implement Error Handling
- Connect Multiple APIs
- Build a Complete User Dashboard

---

# Conclusion

This project provided practical experience in building dynamic API-driven applications.

By implementing user selection, event listeners, dynamic API requests, and DOM updates, I gained a deeper understanding of how real-world web applications communicate with APIs and present data to users.