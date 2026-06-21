const userSelect = document.getElementById("userSelect");

async function getUser(userId) {

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const user = await response.json();

    document.getElementById("user").innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.phone}</p>
    `;
}

userSelect.addEventListener("change", function () {

    const selectedUser = userSelect.value;

    getUser(selectedUser);

});

getUser(1);