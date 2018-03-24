const generator = require('./generateData');
const path = require('path');
const cors = require('cors');
let data = generator.generate(10);
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router({users:data});
const middlewares = jsonServer.defaults()

server.use(middlewares);
server.use(cors());
server.use(router);
server.listen(3000, (param) => {
  console.log(`JSON Server is listening on 3000`);
});
