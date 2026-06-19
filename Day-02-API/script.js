async function getUser() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const user = await response.json();

    document.getElementById("user").innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.email}</p>
    `;
}

getUser();


async function getComments(postId) {

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    return await response.json();
}


async function getPosts() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/posts"
    );

    const posts = await response.json();

    const postsDiv = document.getElementById("posts");

    // MODIFY THIS LOOP
    let totalComments = 0;
    for (const post of posts) {

        const comments = await getComments(post.id);

        totalComments += comments.length;

        postsDiv.innerHTML += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <strong>Comments: ${comments.length}</strong>
                <hr>
            </div>
        `;
    }
    document.getElementById("stats").innerHTML = `
    <h3>Summary</h3>
    <p>Total Posts: ${posts.length}</p>
    <p>Total Comments: ${totalComments}</p>
`;
}

getPosts();