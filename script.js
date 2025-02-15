const img = document.getElementById("image");

fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=J0Lm9QyvAuKiP7ZMl8PG0la2SvMs1jfu&s=cats',
    {mode: 'cors'}
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src=response.data.images.original.url
});