# Day 9 - Weather API Dashboard

## Overview

On Day 9 of my API Learning Journey, I built a Weather API Dashboard to understand how real-world applications retrieve and display live data from external services.

In previous projects, I worked with JSONPlaceholder APIs to learn API fundamentals, resource relationships, CRUD operations, dynamic requests, and API testing. While those APIs were excellent for learning concepts, they provided static sample data.

This project marked an important milestone because I moved from a mock API environment to a real-world API that delivers live weather information.

The Weather API Dashboard allows users to enter a city name and retrieve current weather details such as temperature, humidity, and wind speed.

More importantly, this project introduced me to API Chaining, where the output of one API becomes the input for another API.

---

# Project Objective

The primary objectives of this project were:

* Work with a Real-World API
* Understand API Documentation
* Learn Query Parameters
* Understand API Chaining
* Consume Live Data
* Handle Nested JSON Responses
* Display Dynamic Weather Information
* Practice Fetch API
* Improve API Testing Skills
* Understand Multi-Step API Workflows

---

# Project Functionality

The application allows users to:

1. Enter a city name
2. Send a request to a Geocoding API
3. Retrieve latitude and longitude coordinates
4. Send those coordinates to a Weather API
5. Retrieve weather information
6. Display temperature, humidity, and wind speed
7. Dynamically update the webpage

---

# Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API
* Open-Meteo Weather API
* Open-Meteo Geocoding API
* Browser Developer Tools
* Postman

---

# Problem Statement

Weather APIs require geographical coordinates rather than city names.

For example:

A user enters:

```text
Bangalore
```

The Weather API cannot directly understand the city name.

Instead, it requires:

```text
Latitude: 12.97
Longitude: 77.59
```

This creates a challenge.

The application must first convert the city name into coordinates before retrieving weather information.

---

# Solution

To solve this problem, the application performs two API calls.

### API Call 1

Convert city name into coordinates.

```text
City Name
↓
Geocoding API
↓
Latitude + Longitude
```

### API Call 2

Retrieve weather information.

```text
Latitude + Longitude
↓
Weather API
↓
Temperature
Humidity
Wind Speed
```

This process is known as API Chaining.

---

# Topics Learned

## 1. Real-World APIs

### Definition

A Real-World API provides live data from actual systems and services.

Examples:

* Weather APIs
* Maps APIs
* Payment APIs
* Banking APIs
* Social Media APIs

### What I Learned

Unlike JSONPlaceholder, real APIs provide constantly changing information and require a deeper understanding of API documentation.

---

## 2. API Documentation

### Definition

API Documentation explains:

* Available Endpoints
* Request Parameters
* Response Structure
* Error Responses
* Authentication Requirements

### What I Learned

Before using an API, developers must understand its documentation to know how requests should be constructed.

---

## 3. Query Parameters

### Definition

Query Parameters are used to pass data to APIs through URLs.

Example:

```http
https://geocoding-api.open-meteo.com/v1/search?name=Bangalore
```

Here:

```text
name=Bangalore
```

is a Query Parameter.

### Purpose

Allows APIs to retrieve specific information based on user input.

---

## 4. API Chaining

### Definition

API Chaining occurs when one API's response is used as input for another API.

### Example

```text
City Name
↓
Geocoding API
↓
Coordinates
↓
Weather API
↓
Weather Data
```

### Importance

Many real-world applications use multiple APIs together.

Examples:

* Food Delivery Apps
* Ride Sharing Apps
* Travel Booking Platforms
* Navigation Systems

---

## 5. Geocoding APIs

### Definition

Geocoding APIs convert location names into geographical coordinates.

Example:

```text
Bangalore
```

becomes:

```text
Latitude: 12.97
Longitude: 77.59
```

### Purpose

Enable systems to locate places accurately.

---

## 6. Nested JSON Responses

### Definition

Nested JSON contains objects inside other objects.

Example:

```json
{
  "current": {
    "temperature_2m": 28,
    "relative_humidity_2m": 70,
    "wind_speed_10m": 12
  }
}
```

### What I Learned

Accessing nested data requires navigating through multiple levels.

Example:

```javascript
weatherData.current.temperature_2m
```

---

## 7. Dynamic API Requests

### Definition

Dynamic API Requests change based on user input.

Example:

```javascript
https://geocoding-api.open-meteo.com/v1/search?name=${city}
```

If the user enters:

```text
Mumbai
```

The request becomes:

```http
https://geocoding-api.open-meteo.com/v1/search?name=Mumbai
```

---

## 8. Fetch API

### Definition

The Fetch API allows JavaScript to communicate with external services.

Example:

```javascript
const response = await fetch(url);
```

### Purpose

Retrieve data from APIs asynchronously.

---

## 9. Async/Await

### Definition

Async/Await allows JavaScript to handle long-running operations efficiently.

Example:

```javascript
const response = await fetch(url);
```

### Why Important?

API requests take time.

JavaScript must wait for the response before processing data.

---

## 10. DOM Manipulation

### Definition

DOM Manipulation allows JavaScript to update webpage content dynamically.

Example:

```javascript
document.getElementById("result").innerHTML
```

### Purpose

Display weather information directly on the webpage.

---

# API Workflow

The complete workflow of the application is:

```text
User Enters City Name
           ↓
Button Clicked
           ↓
Geocoding API Request
           ↓
Latitude & Longitude Retrieved
           ↓
Weather API Request
           ↓
Weather Data Retrieved
           ↓
JSON Parsed
           ↓
DOM Updated
           ↓
Weather Information Displayed
```

---

# API Endpoints Used

## Geocoding API

Purpose:

Convert city names into coordinates.

Endpoint:

```http
https://geocoding-api.open-meteo.com/v1/search?name=CityName
```

Example:

```http
https://geocoding-api.open-meteo.com/v1/search?name=Bangalore
```

---

## Weather API

Purpose:

Retrieve weather information using coordinates.

Endpoint:

```http
https://api.open-meteo.com/v1/forecast
```

Parameters:

```text
latitude
longitude
current
```

Example:

```http
https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current=temperature_2m,relative_humidity_2m,wind_speed_10m
```

---

# Sample Output

Input:

```text
Bangalore
```

Output:

```text
Temperature: 28°C

Humidity: 70%

Wind Speed: 12 km/h
```

---

# Key Learnings

Through this project, I learned:

* How Real-World APIs Work
* How to Read API Documentation
* How Query Parameters Work
* How API Chaining Works
* How Geocoding APIs Function
* How Weather APIs Consume Coordinates
* How to Work with Nested JSON
* How to Build Dynamic API Requests
* How to Display Live Data
* How Modern Applications Combine Multiple APIs

---

# Real-World Applications

The concepts learned in this project are used in:

### Google Maps

Location → Coordinates → Navigation Data

### Uber

Pickup Location → Coordinates → Driver Matching

### Swiggy / Zomato

Location → Nearby Restaurants → Delivery Information

### Travel Platforms

Location → Weather → Travel Recommendations

### Smart City Applications

Location → Environmental Data → Real-Time Monitoring

---

# Key Takeaway

The biggest lesson from this project was understanding that modern applications rarely depend on a single API.

Instead, they combine multiple APIs together to solve real-world problems.

By building this Weather API Dashboard, I learned how data flows between systems and how applications transform user input into meaningful information through API Chaining.

This project marks an important step in my journey from learning API fundamentals to building real-world API-driven applications.

---

# Future Improvements

* Add Weather Conditions
* Add Weather Icons
* Add Forecast Data
* Add Loading States
* Add Error Handling
* Add Multiple Day Forecasts
* Add Geolocation Support
* Add Responsive Dashboard Design

---

# Conclusion

This project helped me transition from learning APIs using mock data to consuming real-world live data.

By implementing API Chaining, Query Parameters, Nested JSON Parsing, and Dynamic Data Rendering, I gained a deeper understanding of how modern applications communicate with external services and deliver real-time information to users.
