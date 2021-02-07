const http = require('http');

const server = http.createServer((request, response) => {
    console.log('Your hitting the server!');
    if (request.url === '/') {
        response.write('Hello, world!');
      //  response.end();
    } else if (request.url === '/about'){

        response.write('About page');
      //  response.end();
    } else {
        response.statusCode = 404;
        response.write('Page not found');     
    }
    response.end();
});

server.listen(3000); //port
//hostname:port
//localhost:3000 //=> http://localhost:3000

//http://localhost:80 = http://localhost


