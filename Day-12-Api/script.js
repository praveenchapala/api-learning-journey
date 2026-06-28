const button = document.getElementById("loadBtn");

button.addEventListener("click", function () {

    const username =
        document.getElementById("username").value;

    document.getElementById("status").innerHTML =
        "Loading Dashboard...";

    loadGithub(username);
    loadWeather();
    loadQuote();
    loadTime();
});


// =========================
// GitHub API
// =========================

async function loadGithub(username) {

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    const user = await response.json();

    document.getElementById("profile").innerHTML = `
        <div class="card">

            <h2>GitHub Profile</h2>

            <img src="${user.avatar_url}" alt="Profile">

            <h3>${user.name}</h3>

            <p><strong>Username:</strong> ${user.login}</p>

            <p><strong>Bio:</strong> ${user.bio}</p>

            <p><strong>Followers:</strong> ${user.followers}</p>

            <p><strong>Following:</strong> ${user.following}</p>

            <p><strong>Repositories:</strong> ${user.public_repos}</p>

        </div>
    `;
}


// =========================
// Weather API
// =========================

async function loadWeather() {

    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=Bangalore`
    );

    const data = await response.json();

    const latitude =
        data.results[0].latitude;

    const longitude =
        data.results[0].longitude;

    const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const weatherData =
        await weatherResponse.json();

    document.getElementById("weather").innerHTML = `
        <div class="card">

            <h2>Weather - Bangalore</h2>

            <p>
                🌡 Temperature:
                ${weatherData.current.temperature_2m}°C
            </p>

            <p>
                💧 Humidity:
                ${weatherData.current.relative_humidity_2m}%
            </p>

            <p>
                🌬 Wind Speed:
                ${weatherData.current.wind_speed_10m} km/h
            </p>

        </div>
    `;
}


// =========================
// Quote API
// =========================

async function loadQuote() {

    const response = await fetch(
        "https://dummyjson.com/quotes/random"
    );

    const data =
        await response.json();

    document.getElementById("quote").innerHTML = `
        <div class="card">

            <h2>Developer Quote</h2>

            <p>
                "${data.quote}"
            </p>

            <p>
                <strong>- ${data.author}</strong>
            </p>

        </div>
    `;
}


// =========================
// Time API
// =========================

async function loadTime() {

    const response = await fetch(
        "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
    );

    const data =
        await response.json();

    document.getElementById("time").innerHTML = `
        <div class="card">

            <h2>Current Time</h2>

            <p>
                ${data.datetime}
            </p>

        </div>
    `;

    document.getElementById("status").innerHTML =
        "Dashboard Loaded Successfully";
}