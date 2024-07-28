import { PokemonService } from "../../../services/pokemon.service"
import { pokemonListResponse } from "../../../__mocks__/pokemon.lis.response";

describe('pokemon service test', () => {
    describe('getPokemonList', () => {
        it('should call getPokemonList correctly', async () => {
            const pokemonService = new PokemonService();

            const result = await pokemonService.getPokemonList()

            expect(result).toBeDefined()
        })
    })

    describe('shuffledPokemon', () => {
        it('should shuffle list with shuffledPokemon correctly', async () => {
            const pokemonService = new PokemonService();

            const result = pokemonService.shuffledPokemon(pokemonListResponse)

            expect(result).toBeDefined()
            expect(result).toEqual(expect.arrayContaining([{ name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }]))
        })
    })

    describe('getFourRandomPokemon', () => {
        it('should call getFourRandomPokemon correctly', async () => {
            const pokemonService = new PokemonService();

            const result = pokemonService.getFourRandomPokemon(pokemonListResponse)

            expect(result).toBeDefined();
            expect(result).toHaveLength(4);
        })
    })

    describe('getPokemonPicture', () => {
        it('should call getPokemonPicture correctly', async () => {
            const pokemonService = new PokemonService();

            const result = pokemonService.getPokemonPicture({ name: 'koffing', url: 'https://pokeapi.co/api/v2/pokemon/109/' })

            expect(result).toBeDefined();
            expect(result).toContain('109')
        })
    })

    describe('getPokemonNumber', () => {
        it('should call getPokemonNumber correctly', async () => {
            const pokemonService = new PokemonService();

            const result = pokemonService.getPokemonNumber(`https://pokeapi.co/api/v2/pokemon/109/`)

            expect(result).toBeDefined();
            expect(result).toEqual('109')
        })
    })
})