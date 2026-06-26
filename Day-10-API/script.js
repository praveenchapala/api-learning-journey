const button =
    document.getElementById("searchBtn");

button.addEventListener("click", async function () {

    const username =
        document.getElementById("username").value;

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    const user =
        await response.json();

    document.getElementById("profile").innerHTML = `
    <img src="${user.avatar_url}" alt="Profile Picture">

    <h2>${user.name}</h2>

    <p><strong>Username:</strong> ${user.login}</p>

    <p><strong>Bio:</strong> ${user.bio}</p>

    <p><strong>Followers:</strong> ${user.followers}</p>

    <p><strong>Following:</strong> ${user.following}</p>

    <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
`;

});