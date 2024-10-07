import { fetchGIFs, searchGIFs } from './api.js';
import { displayGIFs } from './display.js';

window.onload = async () => {
    const gifs = await fetchGIFs();
    displayGIFs(gifs);
};

document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('searchInput').value;
    if (query) {
        const gifs = await searchGIFs(query);
        displayGIFs(gifs);
    }
});
