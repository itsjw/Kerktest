let express = require('express');
let session = require('express-session');

// Create the app
const app = express();
app.set('trust proxy', 1);
app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false
}));

const questions = require('./data/questions.js');

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

const createSession = function(req) {
    if (!req.session.questions) {
        let qu = Object.keys(questions).map(x => ({id: x, selected: false}));
        req.session.questions = qu;
    }
}

app.get('/test/:id/', (req, res) => {
    let questionId = req.params.id;
    let warning = "w" in req.query || false;
    if (questionId in questions) {

        createSession(req);

        res.render('test/question', {warning: warning, questionId: questionId, question: questions[questionId], questionStatus: (req.session.questions || [])});
    } else {
        res.redirect('/test');
    }
});

app.post('/test/:id/:answer/', (req, res) => {
    let questionId = req.params.id;
    let answer = req.params.answer;

    if (questionId in questions && answer in questions[questionId].answers) {
        createSession(req);
        req.session.questions[questionId - 1].selected = answer;

        res.status(202);
        res.send({error: false, message: 'Answer accepted'});
    } else {
        res.status(405);
        res.send({error: true, message: 'invalid parameter(s)'});
    }
});

app.get('/test', (req, res) => {
    req.session.questions = false;
    res.redirect('/test/1');
});

app.get('/result', (req, res) => {
    createSession(req);

    let s;
    for (const e of req.session.questions) {
        if (!e.selected) {
            // redirect to unanswered question.
            res.redirect("/test/" + e.id + "?w=1");
            return;
        }
    }

    s = req.session.questions.map(x => x.selected ? x.selected : '-').join('');
    res.redirect('/result/' + s);

});

// Sessionless
app.get('/result/:res/', (req, res) => {

    // Seed the initial list with 0
    let answerString = req.params.res || "";
    let amountOfQuestions = Object.keys(questions).length;
    if (answerString.length > amountOfQuestions) {
        answerString = answerString.slice(0, 4);
    } else if (answerString.length < amountOfQuestions) {
        answerString += "-".repeat(amountOfQuestions - answerString);
    }

    let answers = answerString.split('').map((x, i) => ({id: (i + 1), selected: x == '-' ? false : x}));
    let result = require('./calculator')(answers);
    let churches = require('./data/churches');

    // {[id:number]: {church: string, relevance: 0}}
    let filled = {};

    for (const churchId of Object.keys(churches)) {
        filled[churchId] = {
            church: churches[churchId],
            relevance: 0
        };
    }

    for (const churchId of Object.keys(result)) {
        filled[churchId].relevance = result[churchId];
    }

    let orderedList = Object.keys(filled).map(i => filled[i]);

   orderedList.sort((a, b) => a.relevance < b.relevance);

    res.render('result/index', {result: orderedList})
});


app.get('*', (req, res) => {
    res.render('404');
});
app.listen(3000, () => {
    console.log('Server started on port: ', 3000);
});