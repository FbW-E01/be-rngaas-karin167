import http from "http";

const myserver = http.createServer(requestHandler);
const rendomNumber = Math.floor(Math.random() * 100);
function requestHandler(req, res) {
  res.write(` hello number: ${rendomNumber}`);
  res.end(" from the backend");
}

myserver.listen(8081);
