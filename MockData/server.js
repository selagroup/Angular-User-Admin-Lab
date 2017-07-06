const generator = require('./generateData');
const path = require('path');

const markdown = require('express-markdown')
let data = generator.generate(5);
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router({users:data});
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
