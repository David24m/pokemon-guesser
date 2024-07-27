export const getFourRandomPokemon = async (randomPokemonList: any) => {
    return randomPokemonList.splice(0, 4);
}