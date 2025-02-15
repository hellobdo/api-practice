const img = document.getElementById("image");
const updatePic = document.getElementById("updatePic");
const searchBar = document.getElementById("searchBar");
const submit = document.getElementById("submit");
let api_key = "";
let blankUrl = 'https://api.giphy.com/v1/gifs/translate?api_key='
let baseUrl = blankUrl + api_key + "&s=";

async function apiFetch (url) {
    const response = await fetch(
        url,
        { mode: 'cors' }
    ); // this returns a Response object, not the actual JSON data

    const catData = await response.json(); // parses the response body into a JS object

    img.src=catData.data.images.original.url; // then we can access the URL
};

updatePic.addEventListener("click", handleClick);
submit.addEventListener("click", handleClick);

function handleClick (event) {
    img.src="";
    let newUrl = baseUrl;
    if (event.target.id === "submit") {
        console.log(searchBar.value);
        let newSearch = searchBar.value.trim();
        newUrl += newSearch;
        console.log(newUrl);
    }
    apiFetch(newUrl);
}

apiFetch(baseUrl + "cats");