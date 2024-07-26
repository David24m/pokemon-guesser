const logger = require('./logger');

export class PokemonService {
    constructor() {
        logger.debug('constructor');
    }

    public async getPokemonList() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemon = await res.json();

        return pokemon.results;
    }

    public shuffledPokemon(unshuffledPokemon: any) {
        const shuffled = unshuffledPokemon
          .map((value: any) => ({ value, sort: Math.random() }))
          .sort((a: any, b: any) => a.sort - b.sort)
          .map(({ value }) => value);
        
        return shuffled;
      }

    public getFourRandomPokemon(randomPokemonList: any) {
        return randomPokemonList.splice(0, 4);
    }

    public getPokemonPicture({url}) {
        
    }
}