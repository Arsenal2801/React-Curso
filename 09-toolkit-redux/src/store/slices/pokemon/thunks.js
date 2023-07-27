import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi.js";


export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch( startLoadingPokemons() );
    
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    
    dispatch( setPokemons( { pokemon: data.results, page: page + 1 } ) );
  }
}