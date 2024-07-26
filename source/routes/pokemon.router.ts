import express from 'express';
import controller from '../controllers/test.controller';

const pokemonRouter = express.Router();

pokemonRouter.get('/pokemonList', controller.getPokemonFunction);

export default pokemonRouter;