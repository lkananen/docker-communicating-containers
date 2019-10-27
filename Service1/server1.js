const http = require('http');
const port = 8001;

// Prints out IP of the client making HTTP GET request and the IP of the server.
http.createServer(function (req, res) {
  console.log("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort + " to " + req.client.localAddress + ":" + req.client.localPort);
  
  const options = {
    hostname: '172.17.0.2',
    port: 8001,
    method: 'GET'
  }

  const request = http.request(options, res => {
    res.on('data', d => {
      console.log(d)
    })
  })

  request.on('error', error => {
    console.error(error)
  })
  
  request.end()

}).listen(port);
