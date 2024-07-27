import { getPokemonNumber } from "./correct.pokemon.number";

export const getPokemonPicture = async ({url}: any) => {
    const pokemonNumber = getPokemonNumber(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

}