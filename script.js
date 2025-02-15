const img = document.getElementById("image");

fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key="API_KEY"=cats',
    {mode: 'cors'}
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src=response.data.images.original.url
});