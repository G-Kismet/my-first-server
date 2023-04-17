
//creating a server
//importing built-in Node modules (HTTP & URL)

const http = require('http');
const path = require('path');
const url = require('url');

//assigning port and hostname values
const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    const pathName = urlObj.pathname;
    if(pathname === '/lunch') {
        res.statusCode =200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Mystery Meat');
    } else if (pathName === '/lunch' && req.method === 'GET') {
        console.log(`This was a ${req.method} request.`)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end(`
            <ul>
            <li>freedom fries</li>
            <li>bell peppers & ranch</li>
            <li>ketchup</li>
            </ul>
        `)
        console.log(pathName);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html')
        res.end(`
            <h1>The resource you requested does not exist</h1>
        `)
        console.log(pathName);
    }  else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/post')
        res.end(`
            <h1>You don't get to decide what lunch is</h1>
        `)
        console.log(pathName);
    }
    
});

//make the server listen for requests at a given port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
