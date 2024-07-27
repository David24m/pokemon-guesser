import { FullPokemonList } from "../interfaces/full.pokemon.list";

const logger = require('../logger');

export class PokemonService {
    constructor() {
        logger.info('constructor');
    }

    public async getPokemonList(): Promise<FullPokemonList> {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemon = await res.json();

        return pokemon.results;
    }

    public shuffledPokemon(unshuffledPokemon: FullPokemonList){
        const shuffled = unshuffledPokemon
          .map((value: any) => ({ value, sort: Math.random() }))
          .sort((a: any, b: any) => a.sort - b.sort)
          .map(({ value }: any) => value);
        
        return shuffled;
      }

    public getFourRandomPokemon(randomPokemonList: any): Promise<FullPokemonList> {
        return randomPokemonList.splice(0, 4);
    }

    public getPokemonNumber(url: string) {
        const numberRegEx = /(\d+)\/$/;
        return (url.match(numberRegEx) || [])[1];
    }

    public getPokemonPicture({url}: any): string {
        const pokemonNumber = this.getPokemonNumber(url);
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;
    
    }
}