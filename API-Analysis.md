# API Analysis Report

## API Information

### Base URL

https://jsonplaceholder.typicode.com

### Endpoint Tested

/users

### Full URL

https://jsonplaceholder.typicode.com/users

### HTTP Method

GET

---

# Objective

The purpose of this analysis was to understand how APIs return data, inspect the structure of API responses, and observe how collections and individual resources are represented.

---

# Request Details

Request:

GET /users

Purpose:

Retrieve a collection of users from the server.

---

# Response Details

Status Code:

200 OK

Meaning:

The request was successfully processed and the requested data was returned.

Response Format:

JSON

Response Type:

Array of User Objects

---

# Response Structure Analysis

The API returned multiple user records.

Example:

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {},
  "phone": "1-770-736-8031",
  "website": "hildegard.org",
  "company": {}
}
```

---

# Field Analysis

| Field    | Data Type | Description                  |
| -------- | --------- | ---------------------------- |
| id       | Number    | Unique identifier for a user |
| name     | String    | User's full name             |
| username | String    | Username of the user         |
| email    | String    | User email address           |
| address  | Object    | User address details         |
| phone    | String    | Contact number               |
| website  | String    | Personal or company website  |
| company  | Object    | Company information          |

---

# Collection Endpoint Analysis

Endpoint:

/users

Purpose:

Returns all available users.

Expected Response:

Array []

Observation:

The API returned multiple user objects inside a JSON array.

Example:

```json
[
  {
    "id": 1
  },
  {
    "id": 2
  }
]
```

---

# Single Resource Endpoint Analysis

Endpoint:

/users/1

Purpose:

Returns information for a specific user.

Expected Response:

Object {}

Observation:

Unlike the collection endpoint, this endpoint returned a single JSON object.

Example:

```json
{
  "id": 1,
  "name": "Leanne Graham"
}
```

---

# Collection vs Resource

| Type       | Example  | Returns          |
| ---------- | -------- | ---------------- |
| Collection | /users   | Multiple records |
| Resource   | /users/1 | Single record    |

Key Learning:

Collection endpoints generally return arrays, while resource endpoints generally return single objects.

---

# Path Parameter Analysis

Endpoint:

/users/1

Path Parameter:

1

Meaning:

The value 1 identifies the specific user requested from the server.

Examples:

/users/1

/users/2

/users/3

The value changes depending on which resource is being requested.

---

# Status Code Analysis

| Status Code | Meaning                 |
| ----------- | ----------------------- |
| 200         | Request successful      |
| 201         | Resource created        |
| 401         | Authentication required |
| 404         | Resource not found      |
| 500         | Internal server error   |

Observed Status Code:

200 OK

Reason:

The endpoint exists and successfully returned user data.

---

# Key Learnings

1. APIs commonly return data in JSON format.
2. GET requests are used to retrieve information.
3. Collection endpoints return multiple records.
4. Resource endpoints return a single record.
5. Status codes help determine whether a request succeeded or failed.
6. Path parameters are used to identify specific resources.
7. Understanding API responses is the first step toward building and consuming APIs.

---

# Conclusion

This analysis helped me understand how API requests are structured, how responses are returned, and how to interpret JSON data. Exploring a real API made the concepts of endpoints, HTTP methods, path parameters, and status codes much easier to understand than learning theory alone.
