const button = document.getElementById("fetchBtn");

button.addEventListener("click", async function () {

    const userId =
        document.getElementById("userId").value;

    const statusDiv =
        document.getElementById("status");

    const resultDiv =
        document.getElementById("result");

    // Loading State
    statusDiv.innerHTML = "Loading...";
    resultDiv.innerHTML = "";

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const user = await response.json();

    // User Not Found
    if (!user.id) {

        statusDiv.innerHTML = "Failed";

        resultDiv.innerHTML = `
            <h2>User Not Found</h2>
        `;

        return;
    }

    // Success State
    statusDiv.innerHTML = "Success";

    resultDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Website:</strong> ${user.website}</p>
    `;
});