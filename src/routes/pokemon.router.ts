import express, { Request, Response, NextFunction } from 'express';
const logger = require('../logger');
import { PokemonService } from '../services/pokemon.service';
import { QuizResponse } from '../interfaces/quiz.response';
import { FullPokemonList } from '../interfaces/full.pokemon.list';

const pokemonRouter = express.Router();

const pokemonService = new PokemonService();

pokemonRouter.get('/pokemonlist', ( async (
    _req: Request,
    res: Response,
    next: NextFunction
    ) => {
        logger.info('recieved request for pokemon list');
        try {
            logger.info('making request to API for full pokemon list')
            const pokemon: FullPokemonList = await pokemonService.getPokemonList()

            logger.info('shuffling full list of pokemon')
            const shuffledPokemonList: FullPokemonList = await pokemonService.shuffledPokemon(pokemon);

            logger.info('selecting 4 pokemon from the full list for the game')
            const fourPokemon: FullPokemonList = await pokemonService.getFourRandomPokemon(shuffledPokemonList);

            logger.info('select the one pokemon who will be the correct answer')
            const [ firstPokemon ] = fourPokemon;

            logger.info('get the image of the correct answer pokemon')
            const image: string = pokemonService.getPokemonPicture(firstPokemon)

            logger.info('create response object')
            const result: QuizResponse = {
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