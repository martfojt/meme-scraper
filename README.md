# MEME SCRAPER

## OVERVIEW
This application can do following tasks:

1. Creates a "memes" folder if it doesnt exist
2. Fetching and parsing HTML
3. Download the first 10 images from the website below, name them and save them into the "memes" folder.

[Website used for downloading images](https://memegen-link-examples-upleveled.netlify.app/)

## Used packages
For this application, I used following packages/modules:
- 'fs' - File System - for handling file operations
- 'https' - for https requests
- 'path' - for file paths
- Axios - for https requests
- node-html-parser - for parsing html content

Be sure to install Axios and node-html-parser with the following:
> npm install axios node-html-parser

## How to run the application
Simply run the following in the terminal:
> node index.js
