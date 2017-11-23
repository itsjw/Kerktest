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

app.get('/result', (req, res) => {
    let result = require('./calculator')(req.query);
    let churches = require('./data/churches');

    let orderedList = [];
    for (const churchId of Object.keys(result)) {
        orderedList.push({
            church: churches[churchId],
            relevance: result[churchId]
        });
    }

    orderedList.sort((a, b) => a.relevance < b.relevance);
    //res.send(orderedList);
    res.render('result/index', {result: orderedList})
});

app.get('*', (req, res) => {
    res.render('404');
});
app.listen(3000, () => {
    console.log('Server started on port: ', 3000);
});