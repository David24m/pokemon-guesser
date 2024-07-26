import express, { NextFunction } from 'express';
const logger = require('./logger');
import { PokemonService } from '../services/pokemon.service';

const pokemonRouter = express.Router();

const pokemonService = new PokemonService();

pokemonRouter.get('/pokemonList', ( async (
    req: Request,
    res: Response,
    next: NextFunction) => {
        logger.info('recieved request for pokemon list');
        try {
            const result = pokemonService.getPokemonList()

            return result;
        } catch (error) {
            return next(error);
        }
    })
);

export default pokemonRouter;