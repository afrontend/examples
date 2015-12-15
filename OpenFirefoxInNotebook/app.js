var http = require('http');
var cp = require('child_process');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  console.log(req.url);
  if(req.url === '/') {
    fs.readFile('index.html', 'utf8', function (error, data) {
      res.end(data);
    });
  } else if(req.url === '/cmd') {
    cp.exec("firefox");
    res.end();
  } else {
    res.end();
  }
});
server.listen(3000);
