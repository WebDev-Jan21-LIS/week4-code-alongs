const { response } = require('express');
const express = require('express');

const app = express();

//Make everything inside public, public
app.use(express.static('public'));
//Express needs to know where are views are
app.set('views', __dirname + '/views');
//Tell express we are using hbs
app.set('view engine','hbs');

app.get('/', (request, response) => {
    //In the future the object below
    //Will come from a database
    let data = {
        name: 'Joao',
        bootcamp: '<h1>Webdev</h1>',
        isAuthenticated: true,
        address: 'planet earth',
        cities: ['Amsterdam', 'Barcelona', 'Madrid']
    }

   // response.sendFile(__dirname + '/views/index.html');
   response.render('index', data); //Render hbs view
});
//our first route
//Retrieve data
app.get('/home', (request, response) => {
 //This code inside will run when hit
 //=>localhost:3000/home
    //response.send('<h1>Welcome, Miguel!!!</h1>');
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/cat', (request, response) => {
    //This code inside will run when hit
    //=>localhost:3000/home
       //response.send('<h1>Welcome, Miguel!!!</h1>');
    response.sendFile(__dirname + '/views/cat-page.html');
});


app.listen(3000, () => {
    console.log('My app is listening');
});


