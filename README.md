# Kerktest.nl

Kerktest website made in JavaScript.

# Introduction

Met onze kerktest komt u te weten welke kerken het meest uw opvattingen delen.

De kerktest is ontwikkeld zodat verschillende christenen een plaats in de gemeente van Christus zullen vinden met gelijkgestemde broeders en zusters. De uitkomst wordt gepresenteerd als een score van overeenkomst met de verschillende kerkstromingen. Wij hebben geprobeerd zo objectief mogelijk te zijn in het opstellen van de test en plakken geen waarde-oordelen aan de uitkomsten.

De test is ontwikkeld door diverse christelijke studenten en het criterium voor de selectie van kerken is geweest dat zij leren om navolgers van de Heer Jezus Christus te zijn en zich verbonden voelen met de Bijbelse overleveringen. Zo hopen wij dat iedere gelovige zijn of haar relatie met God via een bijpassende gemeenschap kan versterken.

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