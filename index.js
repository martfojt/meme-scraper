import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import axios from 'axios';
import { parse } from 'node-html-parser';

// Define the folder name to which I want to download images
const folderName = 'memes';

// Check if folder "memes" exists and if not, create one so the test.yml can pass. Using existsSync and mkdirSync methods from fs
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

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

    // Go through all the img elements, take their img urls with the src attribute and save them to imageUrls array
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

      // Create a https request to download the image
      https.get(currentUrl, function (imageResponse) {
        const filePath = path.join(folderName, filename);

        const fileStream = fs.createWriteStream(filePath);
        imageResponse.pipe(fileStream);

        // This is for handling errors!!!!!!
        imageResponse.on('error', function (error) {
          console.log('Error downloading image:', error);
        });
      });
    }
  })
  // If there is .then, I must always use .catch to handle errors!!!!!!!
  .catch(function (error) {
    console.log('Error:', error);
  });
