let express = require('express');

// Create the app
const app = express();

// Set the view engine we use to render html
app.set('view engine', 'ejs');

// Set the directory where we place html
app.set('views', './views');

// Use the public folder to server static files such as .js and .css files
app.use(express.static('public'));

// Handle the main page
app.get('/', (req, res) => {
    res.render('home/index');
});

app.get('/test', (req, res) => {
    let questions = require('./data/questions.js');
    let questionKeys = Object.keys(questions);
    res.render('test/index', {questionKeys, questions});
});

app.get('*', (req, res) => {
    res.render('404');
});
app.listen(3000, () => {
    console.log('Server started on port: ', 3000);
});