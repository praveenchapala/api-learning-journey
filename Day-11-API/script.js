const loadBtn =
    document.getElementById("loadBtn");

const dateInput =
    document.getElementById("dateInput");

const result =
    document.getElementById("result");

// Set today's date automatically

const today =
    new Date().toISOString().split("T")[0];

dateInput.value = today;

loadBtn.addEventListener(
    "click",
    getNASAData
);

async function getNASAData() {

    const selectedDate =
        dateInput.value;

    result.innerHTML = `
        <h2 class="loading">
            Loading NASA Data...
        </h2>
    `;

    try {

        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=LdtGV46MEL1DkfBngJDu9qWU6U2a1livxnWd2BGY&date=${selectedDate}`
        );

        const data =
            await response.json();

        console.log(data);

        if (data.error) {

            result.innerHTML = `
                <p class="error">
                    ${data.error.message}
                </p>
            `;

            return;
        }

        // IMAGE

        if (data.media_type === "image") {

            result.innerHTML = `
                <div class="card">

                    <h2>${data.title}</h2>

                    <img
                        src="${data.hdurl || data.url}"
                        alt="${data.title}"
                        class="nasa-image"
                    >

                    <p class="date">
                        📅 ${data.date}
                    </p>

                    <p class="description">
                        ${data.explanation}
                    </p>

                </div>
            `;
        }

        // VIDEO

        else if (data.media_type === "video") {

            result.innerHTML = `
                <div class="card">

                    <h2>${data.title}</h2>

                    <p class="date">
                        📅 ${data.date}
                    </p>

                    <a
                        href="${data.url}"
                        target="_blank"
                        class="video-btn"
                    >
                        ▶ Watch Video
                    </a>

                    <p class="description">
                        ${data.explanation}
                    </p>

                </div>
            `;
        }

        else {

            result.innerHTML = `
                <div class="card">
                    <h2>${data.title}</h2>
                    <p>${data.explanation}</p>
                </div>
            `;
        }

    }

    catch(error) {

        console.error(error);

        result.innerHTML = `
            <p class="error">
                Failed to load NASA data.
            </p>
        `;
    }
}

// Auto load today's APOD

getNASAData();