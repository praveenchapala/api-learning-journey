# Multi-API Dashboard - API Analysis

## Objective

The objective of this project is to understand how multiple APIs can work together inside a single application.

The dashboard consumes data from four independent APIs and dynamically updates the user interface.

---

# APIs Used

## 1. GitHub API

### Endpoint

GET https://api.github.com/users/{username}

### Method

GET

### Purpose

Retrieve GitHub user profile information.

### Sample Request

GET https://api.github.com/users/octocat

### Sample Response

```json
{
  "login": "octocat",
  "name": "The Octocat",
  "followers": 18000,
  "public_repos": 8,
  "avatar_url": "..."
}
```

---

# Important Fields

* login
* name
* bio
* followers
* following
* public_repos
* avatar_url

---

## 2. Geocoding API

### Endpoint

GET https://geocoding-api.open-meteo.com/v1/search?name=Bangalore

### Purpose

Convert city names into geographical coordinates.

### Sample Response

```json
{
  "results": [
    {
      "name": "Bangalore",
      "latitude": 12.97,
      "longitude": 77.59
    }
  ]
}
```

---

# Important Fields

* latitude
* longitude
* name

---

## 3. Weather API

### Endpoint

GET https://api.open-meteo.com/v1/forecast

### Purpose

Retrieve weather information.

### Sample Request

GET https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current=temperature_2m,relative_humidity_2m,wind_speed_10m

### Sample Response

```json
{
  "current": {
    "temperature_2m": 28,
    "relative_humidity_2m": 70,
    "wind_speed_10m": 12
  }
}
```

---

# Important Fields

* temperature_2m
* relative_humidity_2m
* wind_speed_10m

---

## 4. Quote API

### Endpoint

GET https://dummyjson.com/quotes/random

### Purpose

Retrieve random motivational quotes.

### Sample Response

```json
{
  "quote": "If you want to achieve greatness...",
  "author": "Unknown"
}
```

---

# Important Fields

* quote
* author

---

## 5. Time API

### Endpoint

GET https://worldtimeapi.org/api/timezone/Asia/Kolkata

### Purpose

Retrieve current time.

### Sample Response

```json
{
  "datetime": "2026-06-28T19:45:10.123456+05:30"
}
```

---

# Application Workflow

```text
Load Dashboard
      ↓
GitHub API
      ↓
Weather API
      ↓
Quote API
      ↓
Time API
      ↓
JSON Responses
      ↓
DOM Manipulation
      ↓
Dashboard Displayed
```

---

# Architecture Diagram

```text
Browser
   ↓
JavaScript Fetch API
   ↓
API 1 - GitHub
API 2 - Weather
API 3 - Quote
API 4 - Time
   ↓
JSON Responses
   ↓
Dashboard UI
```

---

# Concepts Learned

## Fetch API

Used to communicate with external APIs.

---

## Async/Await

Used to handle asynchronous operations.

---

## JSON Parsing

Converting API responses into JavaScript objects.

---

## DOM Manipulation

Updating webpage content dynamically.

---

## API Integration

Combining multiple APIs into one application.

---

## Dashboard Architecture

Displaying data from different services in a unified interface.

---

# API Testing in Postman

The following APIs were tested:

✅ GitHub API

✅ Geocoding API

✅ Weather API

✅ Quote API

✅ Time API

For each API, the following were observed:

* Request URL
* Response Body
* Status Codes
* Headers
* Response Time
* JSON Structure

---

# Key Learning

The most important lesson from this project is understanding that modern applications are built by integrating multiple services together.

This project marks an important step from consuming individual APIs to designing applications that combine data from several independent APIs into a single user experience.
