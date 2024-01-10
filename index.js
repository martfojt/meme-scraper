import axios from 'axios';
import { parse } from 'node-html-parser';

axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (response) {
    const root = parse(response.data);
    const images = root.querySelectorAll('img');
    images.forEach(function (img) {
      console.log(img.getAttribute('src'));
    });
  });
