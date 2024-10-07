// Import functions
import { displayGIFs } from './display.mjs';

// API Key
const apiKey = 'fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2';

// Base URLs for Giphy API
const giphySearchUrl = 'https://api.giphy.com/v1/gifs/search';
const giphyTrendingUrl = 'https://api.giphy.com/v1/gifs/trending';

// Function to fetch trending GIFs
export async function fetchGIFs() {
    try {
        const response = await fetch(`${giphyTrendingUrl}?api_key=${apiKey}&limit=10`);
        const data = await response.json();
        return data.data; // Return the array of GIFs
    } catch (error) {
        console.error("Error fetching trending GIFs:", error);
    }
}


// Function to fetch and display Halloween GIFs on page load
export async function fetchHalloweenGIFs() {
    const query = 'Halloween';
    const limit = 10;
    const url = `${giphySearchUrl}?api_key=${apiKey}&q=${query}&limit=${limit}&rating=g`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Check if API returns any GIFs
        if (data && data.data.length > 0) {
            // Display GIFs
            displayGIFs(data.data);
        } else {
            console.log('Oh booooooo! No Halloween GIFs found.');
        }
    } catch (error) {
        console.error('Drats! Error fetching Halloween GIFs:', error);
    }
}

// Function to search for GIFs based on query
export async function searchGIFs(query) {
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2&q=${query}&limit=10`
        );
        const data = await response.json();
        return data.data; // Return search results
    } catch (error) {
        console.error("Error searching for GIFs:", error);
    }
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', fetchHalloweenGIFs);
