var fs =require('fs');
var http=require('http');


//server setup
var server = http.createServer(function(req, res) {
             res.writeHead(200, { 'Content-type': 'text/html'});
             res.end(fs.readFileSync(__dirname+'/index.html'));
             }).listen(8080, function() {
             console.log('Listening at: http://localhost:8080');
});
