const button =
    document.getElementById("searchBtn");

button.addEventListener("click", async function () {

    const country =
        document.getElementById("countryInput").value;

   const response = await fetch(
    "https://restcountries.com/v3.1/alpha/in"
);

const data =
    await response.json();

console.log(data);

});