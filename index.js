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

    const images = root.querySelectorAll('img');

    //
    images.forEach(function (img) {
      let src = img.getAttribute('src');
      if (src) {
        imageUrls.push(src);
      }
    });
  });

for (let i = 0; i < 10; i++) {}
