const img = document.getElementById("image");
const updatePic = document.getElementById("updatePic");
const searchBar = document.getElementById("searchBar");
const submit = document.getElementById("submit");
let api_key = ""
let blankUrl = 'https://api.giphy.com/v1/gifs/translate?api_key='
let baseUrl = blankUrl + api_key + "&s="

function apiFetch (url) {
    fetch(
        url,
        { mode: 'cors' }
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src=response.data.images.original.url
    });
}

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