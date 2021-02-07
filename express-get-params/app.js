const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

function myMiddleWare(req, res, next) {
    console.log("I'm passing through the middleware");
    //code to check if user is auth
    req.isAuthenticated = true;
    next();

  //  res.redirect('/not-auth-route');
}

app.use(myMiddleWare);

app.get('/books', (req, res) => {
    console.log(req.isAuthenticated);
    res.render('books');
});

//app.use -> we are using a middleware
//necessary for post requests with body
app.use(bodyParser.urlencoded({extended: true}));

//Query params
app.get('/books/:bookId', (req, res) => {
    //need to get the parameter that the
    //user passed on the url
    //eventually I will pass that param
    //to a findById(23e2432)
    let theIdThatIGot = req.params.bookId;
    console.log(theIdThatIGot);
    res.render('book-detail');
});

//Query params
app.get('/search', (req, res) => {
    //Getting the query string values
    const { city, startDate, endDate } = req.query;
    console.log(city);
    console.log(startDate);
    console.log(endDate);
    res.render('book-search');
});


app.get('/create', (req, res) => {
    res.render('create-book');
});

//Pass in body
app.post('/create', (req, res) => {
   // let bookName = req.body.bookName;
   // let bookDescription = req.body.bookDescription;
    const { bookName, bookDescription } = req.body;
    console.log(bookName);
    console.log(bookDescription);
    res.render('books');
});

app.listen(3000, () => {
    console.log('App listening on port 3000.');
});

app.get('/song', (req, res) => {
    let song = req.query.song;
    Spotify.search(song).then((response) => {
        res.render(songs, {response});
    });
});