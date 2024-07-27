export const getPokemonNumber = async (url: any) => {
    const numberRegEx = /(\d+)\/$/;
    return (url.match(numberRegEx) || [])[1];
}