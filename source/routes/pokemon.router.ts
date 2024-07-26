import express, { Request, Response, NextFunction } from 'express';
const logger = require('../logger');
import { PokemonService } from '../services/pokemon.service';

const pokemonRouter = express.Router();

const pokemonService = new PokemonService();

pokemonRouter.get('/pokemonlist', ( async (
    _req: Request,
    res: Response,
    next: NextFunction
    ) => {
        logger.info('recieved request for pokemon list');
        try {
            const pokemon = await pokemonService.getPokemonList()

            const shuffledPokemonList = await pokemonService.shuffledPokemon(pokemon);

            const fourPokemon = await pokemonService.getFourRandomPokemon(shuffledPokemonList);

            const [ firstPokemon ] = fourPokemon;

            const image = pokemonService.getPokemonPicture(firstPokemon)

            const result = {
                fourPokemon: pokemonService.shuffledPokemon(fourPokemon),
                correctAnswer: {
                    image,
                    name: firstPokemon.name
                }
            }

            return res.status(200).json(result);
        } catch (error) {
            return next(error);
        }
    })
);

export default pokemonRouter;