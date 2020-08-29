//Load HTTP module
const http = require("http");
const hostname = '0.0.0.0';
const port = 5001;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);

  const nameObj = {
    name: 'Jun Bang'
  }
  res.end(JSON.stringify(nameObj));
};

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer(requestListener);

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});