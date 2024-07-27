type IndividualPokemon = {
    name: string;
    url: string;
}

export interface FullPokemonList extends Array<IndividualPokemon>{}
