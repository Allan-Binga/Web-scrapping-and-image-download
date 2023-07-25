# Puppeteer Web Scraping and Image Download

![Puppeteer Logo](https://upload.wikimedia.org/wikipedia/commons/3/3c/Puppeteer.png)

This repository contains a Node.js script that demonstrates web scraping and image download using Puppeteer, a headless browser automation library.

## How it Works

The provided Node.js script utilizes Puppeteer to launch a headless browser, navigate to a specific webpage, and perform the following tasks:

1. Extract Names: The script scrapes names from the webpage by selecting elements with the CSS selector ".info strong" and saves the extracted names to a file named "names.txt". Each name is written on a new line in the file.

2. Download Images: It extracts URLs of images from the webpage using the "img" CSS selector and stores them in an array. The script then iterates through each image URL, downloads the image, and saves it as an individual image file in the local file system. The filenames are derived from the last part of their respective URLs.

## How to Use

1. Clone the repository to your local machine.

2. Install the required dependencies by running the following command:

3. Run the script by executing the following command:
    node scrap

Note: Make sure to replace "script.js" with the name of the actual script file.

4. After the script execution, you will find the extracted names in the "names.txt" file and the downloaded images in the local file system.

## Prerequisites

- Node.js (https://nodejs.org) installed on your machine.

## License

This project is licensed under the [MIT License](LICENSE).



