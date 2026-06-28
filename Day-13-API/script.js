const API_KEY = "31681f52d2e9b4e40ab511a0cb00b0b2";


const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");
const movies = document.getElementById("movies");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumber = document.getElementById("pageNumber");

let currentPage = 1;
let totalPages = 1;
let currentQuery = "";

// Search Button Click
searchBtn.addEventListener("click", () => {

    const query = movieInput.value.trim();

    if (query === "") {
        alert("Please enter a movie name.");
        return;
    }

    currentQuery = query;
    currentPage = 1;

    searchMovies();

});

// Fetch Movies
async function searchMovies() {

    movies.innerHTML = "<h2>Loading...</h2>";

    try {

        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(currentQuery)}&page=${currentPage}`
        );

        const data = await response.json();

        totalPages = data.total_pages;

        pageNumber.textContent = `Page ${currentPage}`;

        displayMovies(data.results);

    }

    catch (error) {

        console.error(error);

        movies.innerHTML = `
            <h2>Something went wrong!</h2>
        `;

    }

}

// Display Movies
function displayMovies(movieList) {

    movies.innerHTML = "";

    if (movieList.length === 0) {

        movies.innerHTML = `
            <h2>No Movies Found</h2>
        `;

        return;

    }

    movieList.forEach(movie => {

        const poster = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image";

        const card = document.createElement("div");

        card.classList.add("movie-card");

        card.innerHTML = `

            <img src="${poster}" alt="${movie.title}">

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p><strong>⭐ Rating:</strong> ${movie.vote_average}</p>

                <p><strong>📅 Release:</strong> ${movie.release_date || "N/A"}</p>

                <p>${movie.overview || "No description available."}</p>

            </div>

        `;

        movies.appendChild(card);

    });

}

// Next Button
nextBtn.addEventListener("click", () => {

    if (currentPage < totalPages) {

        currentPage++;

        searchMovies();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});

// Previous Button
prevBtn.addEventListener("click", () => {

    if (currentPage > 1) {

        currentPage--;

        searchMovies();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});

