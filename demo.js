http = require('http');
fs = require('fs');
server = http.createServer(function (req, res) {
    console.dir(req.param);
    if (req.method == 'POST') {
        var f = fs.createWriteStream('out.jpeg');
        req.on('data', function (data) {
            f.write(data);
        });
        req.on('end', function () {
            f.end();
        });
    }
});

port = 80;
host = '192.168.0.108';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);