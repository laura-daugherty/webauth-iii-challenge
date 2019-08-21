const express = require('express');

const AuthRouter = require('./auth/auth_router.js');
const UsersRouter = require('./users/users_router.js');
const PositionsRouter = require('./positions/positions_router.js');
const DepartmentsRouter = require('./departments/departments_router.js');


const server = express();

server.use(express.json());

server.use('/api/auth', AuthRouter)
server.use('/api/users', UsersRouter)
server.use('/api/positions', PositionsRouter)
server.use('/api/departments', DepartmentsRouter)

server.get('/', (req, res) => {
  res.json({ api: 'up'})
});

module.exports = server;