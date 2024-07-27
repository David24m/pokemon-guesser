export const getPokemonList = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemon = await res.json();

    return pokemon.results;
}