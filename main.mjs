import { fetchGIFs, searchGIFs, fetchHalloweenGIFs } from './api.mjs';
import { displayGIFs } from './display.mjs';

window.onload = async () => {
    // Fetch and display Halloween GIFs on page load
    const halloweenGIFs = await fetchHalloweenGIFs();
    if (halloweenGIFs) {
        displayGIFs(halloweenGIFs);
    } else {
        console.log('No Halloween GIFs to display');
    }
};

document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('searchInput').value;
    if (query) {
        const gifs = await searchGIFs(query);
        displayGIFs(gifs);
    }
});
