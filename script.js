const img = document.getElementById("image");
const updatePic = document.getElementById("updatePic");

function apiFetch () {
    fetch(
        'https://api.giphy.com/v1/gifs/translate?api_key="APIKEY"&s=cats',
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

function handleClick () {
    img.src="";
    apiFetch();
    return;
}

apiFetch();