import http from 'http';
import express, { Express } from 'express';
import pokemonRouter from './routes/pokemon.router';

const router: Express = express();

router.use('/v1', pokemonRouter);

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`the server is running on port ${PORT}`));