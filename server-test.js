// Prints out IP of the client making HTTP GET request and the IP of the server.
http.createServer(function (req, res) {
  console.log("Req came from " + req.client.remoteAddress + ":" + req.client.remotePort);
  console.log("Req served at " + req.client.localAddress + ":" + req.client.localPort);
}).listen(8001);
