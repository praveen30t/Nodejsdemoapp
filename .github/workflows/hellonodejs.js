// Simple Node.js example
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello , Node Js file exectuion process!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
