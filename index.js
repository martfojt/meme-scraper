import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import axios from 'axios';
import { parse } from 'node-html-parser';

// Define the folder name to which I want to download images
const folderName = 'memes';

// Use Axios to fetch HTML content from provided URL
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (response) {
    // Use node-html-parser to parse HTML content
    const root = parse(response.data);

    // Array for URLs
    const imageUrls = [];

    // Select all image elements from HTML using node-html-parser
    const images = root.querySelectorAll('img');

    //
    images.forEach(function (img) {
      const src = img.getAttribute('src');
      if (src) {
        imageUrls.push(src);
      }
    });

    // Loop through the first 10 URLs in the imageUrls array and name them
    for (let i = 0; i < Math.min(imageUrls.length, 10); i++) {
      const currentUrl = imageUrls[i];
      const filename = String(i + 1).padStart(2, '0') + '.jpg';
    }
  })
  // If there is .then, I must always use .catch to handle errors!!!
  .catch(function (error) {
    console.log('Error:', error);
  });
