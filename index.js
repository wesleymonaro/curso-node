var fs = require('fs'),
    http = require('http'),
    url = require('http'),
    path = require('path');

http.createServer((req, res) => {
    if (req.url !== '/movie.mp4') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<video src="http://localhost:3000/movie.mp4" controls></video>');

    } else {
        var file = path.resolve(__dirname, "movie.mp4");
        var range = req.headers.range;
        var positions = range.replace(/bytes=/, "").split('-');
        var start = parseInt(positions[0], 10);

        fs.stat(file, (err, stats) => {
            var total = stats.size;
            var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
            var chunksize = (end - start) + 1;

            res.writeHead(200, {
                "Content-Range": "bytes " + start + "-" + end + "/" + total,
                "Accept-Ranges": "bytes",
                "Content-Length": chunksize,
                "Content-Type": "video/mp4"
            })

            var stream = fs.createReadStream(file, { start, end })
                .on('open', () => {
                    stream.pipe(res);
                })
                .on('error', () => {
                    res.end(err);
                })
        })
    }
}).listen(3000);