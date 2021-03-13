const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("hotels.json");
const middlewares = jsonServer.defaults();
const port = process.env.Port || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);