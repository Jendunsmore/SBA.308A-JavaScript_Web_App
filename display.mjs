export function displayGIFs(gifs) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // clear existing content


    gifs.forEach((gif) => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.classList.add('gif-image');
        searchResults.appendChild(img); // appends searchResults div
    });
}
