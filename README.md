# Halloween GIF Search Application

## Description
This is a fun and interactive single-page web application that allows users to search for Halloween-themed GIFs using the Giphy API. On page load, it automatically displays trending Halloween GIFs, and users can search for any GIF by entering a keyword in the search bar. The application was built using JavaScript modules, async/await for handling asynchronous API requests, and the Fetch API for communicating with Giphy.

---------------------------------------------

## Features
-   **Fetch Trending Halloween GIFs**: Automatically fetches and displays 10 trending Halloween GIFs when the page loads.
-   **Search GIFs**: Users can search for any GIFs by entering a keyword in the search bar. The app then fetches and displays relevant GIFs based on the user's query.
-   **Modular JavaScript**: The code is organized into separate modules to ensure clarity and reusability.
-   **Responsive Design**: The layout is styled with CSS to be engaging and responsive on various devices.

---------------------------------------------

## Technologies Used
-   **JavaScript (ES6+)**: The core logic is implemented using modern JavaScript features like async/await and modules.
-   **Fetch API**: Used for making HTTP requests to the Giphy API.
-   **HTML/CSS**: The structure and styling of the web app.
-   **Giphy API**: External API used to fetch GIFs.

---------------------------------------------

## Getting Started
### Prerequisites
Make sure you have the following installed:
-   A modern web browser (Chrome, Firefox, etc.)
-   A local development server (e.g., Live Server for Visual Studio Code) or any basic HTTP server for running HTML files.

---------------------------------------------

## Installation
1. Clone the repository
`git clone https://github.com/Jendunsmore/SBA.308A-JavaScript_Web_App.git`git clone 
2. Navigate into the project directory:
`cd SBA.308A-JavaScript_Web_App`
3. Open the project in a code editor or launch it in a local development server.

---------------------------------------------

### Usage
1.  Open `index.html` in your browser or start your local server to view the application.
2.  On page load, trending Halloween GIFs will be displayed.
3.  To search for GIFs, type a keyword into the search bar and press "Search" or hit enter.
4.  The relevant GIFs will be displayed on the page.

---------------------------------------------

### API Used
-   **Giphy API**: The app uses Giphy's public API to fetch trending GIFs and search results. 
- API Documentation: https://developers.giphy.com/docs/sdk/

---------------------------------------------

### Project Structure 
├── api.mjs    
<p>
├── display.mjs
<p>
├── main.mjs
<p>
├── index.html
<p>
├── styles.css

---------------------------------------------

## Known Issues / Future Improvements <br>
-   **Pagination**: The app currently fetches only 10 GIFs at a time. Adding pagination or a "Load More" button would enhance the user experience.
-   **Error Handling**: More detailed error messages can be added for users when the API request fails.
-   **Mobile Responsiveness**: Though the app works on mobile devices, the design could be improved for smaller screens.

---------------------------------------------

## Blockers / Challenges

One of the main challenges was ensuring that the fetch requests and async functions work correctly, especially when combining them with the event listeners for search functionality. After resolving a few initial bugs with the page load and ensuring correct integration of modules, the application now functions as expected.


