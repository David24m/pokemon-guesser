import express from 'express';
import pokemonRouter from './routes/pokemon.router';

const app: any = express();

app.use('/', pokemonRouter)

export default app;