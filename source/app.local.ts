const logger = require('logger');
// import app from './app';
import http from 'http';
import express, { Express } from 'express';


const router: Express = express();

// const port = process.env.PORT || 3000;

// const startServer = async () => {
//     app.listen(port, () => {
//         logger.info(`listening on posrt ${port}`);
//     });
// };

// startServer;

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`the server is running on port ${PORT}`));