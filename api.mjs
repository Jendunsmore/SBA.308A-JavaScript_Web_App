export async function fetchGIFs() {
    const response = await fetch(
        'https://api.giphy.com/v1/gifs/trending?api_key=fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2&limit=10'
    );
    const data = await response.json();
    return data.data; // Return the array of GIFs
}

export async function searchGIFs(query) {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=fBAFRB0gejbg8XdW2IIRLUO9fyv95pI2&q=${query}&limit=10`
    );
    const data = await response.json();
    return data.data; // Return search results
}
