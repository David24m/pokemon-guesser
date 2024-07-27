import { PokemonService } from "../../../services/pokemon.service"

describe('getPokemonList', () => {
    it('should call getPokemonList correctly', async () => {
        const pokemonService = new PokemonService();

        const result = pokemonService.getPokemonList()

        console.log('result:', result)

        expect(result).toBeDefined()
    })
})