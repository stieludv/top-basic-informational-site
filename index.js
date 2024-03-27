/*
localhost:8080 should take users to index.html
localhost:8080/about should take users to about.html
localhost:8080/contact-me should take users to contact-me.html
404.html should display any time the user tries to go to a page not listed above.
*/

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

    const uri = req.url === "/" ? "/index" : req.url;
    const parsedPathname = path.parse(req.url).pathname;

    fs.readFile(`.${uri}.html`, "utf-8", (error, data) => {
        if (error) {
            // Errno -2 = file not found
            if (error.errno = -2) {
                fs.readFile('./404.html', 'utf-8', (error, data) => {
                    res.setHeader('Content-Type', 'text/html');
                    res.statusCode = 404;
                    res.end(data);
                });
            }
        }
        else {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.end(data);
        }
    })

    /*
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
    */
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});     