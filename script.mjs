


// Fetch data from the Giphy API
/*
async function fetchGIFs() {
    try {
        const response = await fetch(
            'https://api.giphy.com/v1/gifs/trending?api_key=fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2&limit=10'
        );
        const data = await response.json();
        displayGIFs(data.data); // Pass the array of GIFs to the display function
    } catch (error) {
        console.error('Error fetching the GIFs:', error);
    }
    console.log(gifs)
}

// Fetch GIFs within search query
async function searchGIFs(query) {
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2&q=${query}&limit=10`
        );
        const data = await response.json();
        displayGIFs(data.data); // Displays search results
    } catch (error) {
        console.error(`Error searching GIFs:`, error);
    }
}

// Search form
document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents form from refreshing page
    const query = document.getElementById('searchInput').value;
    if (query) {
        searchGIFs(query);
    }
});

// Display GIFs in the main content area
function displayGIFs(gifs) {
    const main = document.querySelector('main');
    main.innerHTML = ''; // Clear any existing content

    gifs.forEach((gif) => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.classList.add('gif-image');
        main.appendChild(img);
    });
}

// Initialize the app by fetching and displaying GIFs on page load
window.onload = () => {
    fetchGIFs();
};
*/
