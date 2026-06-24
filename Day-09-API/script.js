const weatherBtn =
    document.getElementById("weatherBtn");

weatherBtn.addEventListener("click", async function () {

    const city =
        document.getElementById("cityInput").value;

    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    const data = await response.json();

    const latitude =
        data.results[0].latitude;

    const longitude =
        data.results[0].longitude;

    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

    // PASTE THE NEW CODE HERE

    const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const weatherData =
        await weatherResponse.json();

    const temperature =
    weatherData.current.temperature_2m;

const humidity =
    weatherData.current.relative_humidity_2m;

const windSpeed =
    weatherData.current.wind_speed_10m;

document.getElementById("result").innerHTML = `
    <h2>${city}</h2>

    <p>
        <strong>Temperature:</strong>
        ${temperature}°C
    </p>

    <p>
        <strong>Humidity:</strong>
        ${humidity}%
    </p>

    <p>
        <strong>Wind Speed:</strong>
        ${windSpeed} km/h
    </p>
`;

});