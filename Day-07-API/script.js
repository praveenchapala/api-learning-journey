const userSelect = document.getElementById("userSelect");

// Fetch User Details
async function getUser(userId) {

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const user = await response.json();

    document.getElementById("user").innerHTML = `
        <div class="card">
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
        </div>
    `;
}

// Fetch User Posts
async function getPosts(userId) {

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    const posts = await response.json();

    let output = "";

    posts.forEach(post => {

        output += `
            <div class="post-card">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;

    });

    document.getElementById("posts").innerHTML = output;
}

// Dropdown Change Event
userSelect.addEventListener("change", function () {

    const selectedUser = userSelect.value;

    getUser(selectedUser);

    getPosts(selectedUser);

});

// Initial Load
getUser(1);
getPosts(1);