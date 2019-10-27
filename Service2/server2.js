const http = require('http');
const port = 8001;

// Prints out IP of the client making HTTP GET request and the IP of the server.
http.createServer(function (req, res) {
  console.log("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort + " to " + req.client.localAddress + ":" + req.client.localPort);
}).listen(port);
