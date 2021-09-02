import http from "http";

const myserver = http.createServer(requestHandler);
const randomNumber = Math.floor(Math.random() * 100);
function requestHandler(req, res) {
  res.write(` hello number: ${randomNumber}`);
  res.end(" from the backend");
}

myserver.listen(8081);
