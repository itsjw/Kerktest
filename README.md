# Kerktest.nl

Kerktest website made in JavaScript.

## Requirements:
* NodeJS
* npm/yarn

# Notes
This project uses NodeJS and JavaScript. We use Express for handling requests and EJS for rendering html pages.

## Setting up development
1. Download the source code via ```git clone```
2. If you have npm installed run ```npm install```, or if you have yarn run ```yarn install```
3. Run the development server via ```node server.js```

## Project structure
- kerktest
- - data: The folder containing the questions
- - public: The folder containing files that are served as is. These include image or css files.
- - views: The folder containing the html pages
- - - basics: template views that are included in every page
- - - home: The home html page
- - - test: The test html page