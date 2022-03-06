import dotenv from 'dotenv'
dotenv.config()

import http from 'http';
import express from 'express';
import { App } from './app';
import { logger } from './config/logger';

const appInstance: App = new App();
const app: express.Application = appInstance.app;

// Setting up the port for the server
const PORT = parseInt(process.env.PORT, 10) || 3000;
app.set('port', PORT);

// Firing up the server
// app.listen(PORT, () => {
//   console.log(`Server is running ❤️ at localhost :${PORT}`);
// });
const server = http.createServer(app);

// Start listening on the specified Port (Default: 3000)
server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);
server.timeout = 1200000;

function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'port ' + PORT;
    switch (error.code) {
        case 'EACCES':
            logger.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(): void {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `Listetning on port ${PORT}`;
    logger.info(bind);
}

