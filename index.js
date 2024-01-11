import axios from 'axios';
import fs from 'fs';
import http from 'http';
import { parse } from 'node-html-parser';

//Use Axios to fetch HTML content from provided URL
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (response) {
    //Use node-html-parser to parse HTML content
    const root = parse(response.data);

    //Array for URLs
    let imageUrls = [];

    // Select all image elements from HTML using node-html-parser
    const images = root.querySelectorAll('img');

    //
    images.forEach(function (img) {
      let src = img.getAttribute('src');
      if (src) {
        imageUrls.push(src);
      }
    });

    // Loop through the first 10 URLs in the imageUrls array and name them
    for (let i = 0; i < Math.min(imageUrls.length, 10); i++) {
      let currentUrl = imageUrls[i];
      let filename = String(i + 1).padStart(2, '0') + '.jpg';
    }
  });
