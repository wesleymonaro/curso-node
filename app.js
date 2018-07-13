var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {

    var url_parts = url.parse(req.url);
    var path = url_parts.pathname;

    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<p>Not found</p>');

        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data.toString());
        }

        res.end();
    })

})

server.listen(3000);

//http://localhost:3000/my_file.txt