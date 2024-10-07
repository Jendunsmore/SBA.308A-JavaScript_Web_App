export function displayGIFs(gifs) {
    const main = document.querySelector('main');
    main.innerHTML = ''; // Clear the existing content

    gifs.forEach((gif) => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.classList.add('gif-image');
        main.appendChild(img);
    });
}
