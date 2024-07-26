import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

const getPokemonFunction = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-shape/1/`)
    return res.send(result.data);
};

export default { getPokemonFunction }