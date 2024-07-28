import { PokemonService } from "../../../services/pokemon.service"
import { pokemonListResponse } from "../../../__mocks__/pokemon.lis.response";

describe('pokemon service test', () => {
    const pokemonService = new PokemonService();

    describe('getPokemonList', () => {
        it('should call getPokemonList correctly', async () => {

            const result = await pokemonService.getPokemonList()

            expect(result).toBeDefined()
        })
    })

    describe('shuffledPokemon', () => {
        it('should shuffle list with shuffledPokemon correctly', async () => {

            const result = pokemonService.shuffledPokemon(pokemonListResponse)

            expect(result).toBeDefined()
        })

        it('shuffledPokemon should definitely have pikachu in the list', async () => {

            const result = pokemonService.shuffledPokemon(pokemonListResponse)

            expect(result).toEqual(expect.arrayContaining([{ name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }]))
        })
    })

    describe('getFourRandomPokemon', () => {
        it('should call getFourRandomPokemon correctly', async () => {

            const result = pokemonService.getFourRandomPokemon(pokemonListResponse)

            expect(result).toBeDefined();
        })

        it('getFourRandomPokemon return 4 pokemon in the array', async () => {

            const result = pokemonService.getFourRandomPokemon(pokemonListResponse)

            expect(result).toHaveLength(4);
        })
    })

    describe('getPokemonPicture', () => {
        it('should call getPokemonPicture correctly', async () => {

            const result = pokemonService.getPokemonPicture({ name: 'koffing', url: 'https://pokeapi.co/api/v2/pokemon/109/' })

            expect(result).toBeDefined();
        })

        it('getPokemonPicture return pokemon number 109 object', async () => {

            const result = pokemonService.getPokemonPicture({ name: 'koffing', url: 'https://pokeapi.co/api/v2/pokemon/109/' })

            expect(result).toContain('109')
        })
    })

    describe('getPokemonNumber', () => {
        it('should call getPokemonNumber correctly', async () => {

            const result = pokemonService.getPokemonNumber(`https://pokeapi.co/api/v2/pokemon/109/`)

            expect(result).toBeDefined();
        })

        it('getPokemonNumber should return the url with pokemon 109', async () => {

            const result = pokemonService.getPokemonNumber(`https://pokeapi.co/api/v2/pokemon/109/`)

            expect(result).toEqual('109')
        })
    })
})