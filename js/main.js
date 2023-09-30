const URL = "https://api.thedogapi.com/v1/images/search";
const img = document.querySelector("img");

const button = document.getElementById("button");


async function getDogs() {
    const res = await fetch(URL);
    const data = await res.json();
    img.src = data[0].url;
    
}

button.onclick = getDogs;

getDogs();