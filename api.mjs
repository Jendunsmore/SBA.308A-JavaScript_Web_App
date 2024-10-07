export async function fetchGIFs() {
    try {
        const response = await fetch(
            'https://api.giphy.com/v1/gifs/trending?api_key=fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2&limit=10'
        );
        const data = await response.json();
        return data.data; // Return the array of GIFs
    } catch (error) {
        console.error("Error fetching trending GIFs:", error);
    }
}

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
