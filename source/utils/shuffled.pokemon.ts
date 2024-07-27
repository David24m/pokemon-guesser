export const shuffledPokemon = async (unshuffledPokemon: any) => {
    const shuffled = unshuffledPokemon
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
    
    return shuffled;
  }