import express, { Request, Response, NextFunction } from 'express';
const logger = require('./logger');
import { PokemonService } from '../services/pokemon.service';

const pokemonRouter = express.Router();

const pokemonService = new PokemonService();

pokemonRouter.get('/pokemonList', ( async (
    _req: Request,
    res: Response,
    next: NextFunction
    ) => {
        logger.info('recieved request for pokemon list');
        try {
            const result = await pokemonService.getPokemonList()

            return res.status(200).json(result);
        } catch (error) {
            return next(error);
        }
    })
);

export default pokemonRouter;