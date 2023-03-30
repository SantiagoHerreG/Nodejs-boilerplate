import * as http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((_req, res) => {
   res.statusCode = 200;
   res.setHeader("Content-type", "application/json")
   res.end(JSON.stringify("Hello Santi"));
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
