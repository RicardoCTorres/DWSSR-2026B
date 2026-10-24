#!/usr/bin/env node

/**
 * Module dependencies.
 */

//var app = require('../app');

//var debug = require('debug')('dwssr-2026b:server');
//importaando debug
import createDebug from 'debug';

//var http = require('http');
import http from 'node:http';
import app from '../app.js';

//crecion del objeto debug
const debug = createDebug('dwssr-2026b:server');

/**
 * Get port from environment and store in Express.
**/

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.

 * Normalize a port into a number, string, or false.

 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind =
    typeof port === 'string'
      ? `Pipe ${port}` //'Pipe ' + port
      : `Port ${port}`; //'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      debug(`${bind} requieres elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(`${bind} is already in use`);
      process.exit(1);
      break;
   default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind =
    typeof addr === 'string'
      ? `pipe ${addr}` //'pipe ' + addr
      : `port ${addr.port}`; //'port ' + addr.port;
  debug(`💻Listening on  ${bind}`);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);