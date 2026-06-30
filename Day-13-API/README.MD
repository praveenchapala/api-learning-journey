# Day 13 - Movie Explorer using TMDB API

## Project Overview

On Day 13 of my API Learning Journey, I built a **Movie Explorer** using **The Movie Database (TMDB) API** to understand how real-world applications retrieve and display large amounts of data efficiently.

This project introduced me to one of the most important concepts in API development: **Pagination**.

Instead of loading every movie at once, the application retrieves movie data page by page, providing a faster and more efficient user experience.

---

# Project Objectives

The primary objectives of this project were:

* Learn how Search APIs work.
* Understand API Authentication.
* Work with Query Parameters.
* Implement Pagination.
* Build a dynamic movie search application.
* Display API responses using JavaScript.
* Practice working with production-grade APIs.

---

# Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API
* TMDB (The Movie Database) API
* Postman

---

# Features

The application allows users to:

* Search for movies by name.
* Display movie posters.
* View movie ratings.
* View release dates.
* Read movie descriptions.
* Navigate through multiple pages of search results.
* Dynamically update the UI without refreshing the page.

---

# TMDB API

## Search Movies Endpoint

```http
GET https://api.themoviedb.org/3/search/movie
```

Example Request

```http
GET https://api.themoviedb.org/3/search/movie?query=Spider-Man&page=1
```

---

# Query Parameters

This project uses two important query parameters.

### query

Used to search for a movie.

Example:

```text
query=Spider-Man
```

### page

Used to retrieve a specific page of results.

Example:

```text
page=1
page=2
page=3
```

---

# API Authentication

The TMDB API requires authentication before returning data.

Authentication can be done using:

* API Key (v3)
* Bearer Token (Read Access Token)

This ensures that only authorized applications can access the API.

---

# Pagination

One of the main concepts learned in this project was **Pagination**.

Instead of returning thousands of movie records in a single response, the API divides the results into smaller pages.

Example:

```text
Search: Spider-Man

Page 1
↓

First set of movies

↓

Next

↓

Page 2

↓

Next set of movies
```

This improves:

* Performance
* Response Time
* User Experience
* Network Efficiency

---

# Project Workflow

```text
User Enters Movie Name
          ↓
Search Button Clicked
          ↓
Fetch API Sends Request
          ↓
TMDB API
          ↓
JSON Response
          ↓
JavaScript Parses Data
          ↓
DOM Manipulation
          ↓
Movie Cards Displayed
          ↓
Next / Previous Page
          ↓
New API Request
          ↓
Updated Movie Results
```

---

# API Response Example

```json
{
    "page": 1,
    "results": [
        {
            "title": "Spider-Man",
            "release_date": "2002-05-01",
            "vote_average": 7.3,
            "poster_path": "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
            "overview": "After being bitten by a genetically altered spider..."
        }
    ],
    "total_pages": 89,
    "total_results": 1775
}
```

---

# JavaScript Concepts Used

## Fetch API

Used to communicate with the TMDB API.

```javascript
const response = await fetch(url);
```

---

## Async / Await

Allows JavaScript to wait for the API response before continuing execution.

---

## Query Parameters

Dynamic values are added to the API URL.

Example:

```javascript
query=Spider-Man
page=2
```

---

## Pagination

Users can navigate between multiple pages of search results.

```javascript
currentPage++;
currentPage--;
```

---

## DOM Manipulation

Movie information is displayed dynamically without refreshing the webpage.

---

## JSON Parsing

The API response is converted into JavaScript objects.

```javascript
const data = await response.json();
```

---

# Real-World Applications

The same concepts are used in:

* Netflix
* Amazon Prime Video
* Disney+
* IMDb
* Google Search
* YouTube
* Amazon
* GitHub Repository Search

---

# Key Learnings

Through this project, I learned:

* Production API Integration
* API Authentication
* Search APIs
* Query Parameters
* Pagination
* Fetch API
* Async/Await
* JSON Parsing
* DOM Manipulation
* Dynamic UI Rendering
* API Testing using Postman

---

# Future Improvements

* Filter movies by genre.
* Sort movies by popularity or rating.
* Add movie trailers.
* Display cast information.
* Add favorite/watchlist functionality.
* Implement infinite scrolling.
* Improve loading animations.
* Add advanced search filters.

---

# Conclusion

This project helped me understand how modern applications efficiently retrieve and display large datasets using **Pagination**. By integrating the **TMDB API**, implementing search functionality, and dynamically updating the user interface, I gained practical experience working with production APIs, API authentication, query parameters, and real-world API workflows.

This project is another important milestone in my journey toward mastering API development and building interactive web applications.
