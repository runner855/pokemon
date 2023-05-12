import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { SinglePokemonDetailsProps } from "../Types/appTypes";

export interface InitialStateProps {
  PokemonList: undefined | SinglePokemonDetailsProps[];
}

const initialState = {
  PokemonList: undefined,
} as InitialStateProps;

export const fetchPokemons = createSlice({
  name: "PokemonList",
  initialState,

  reducers: {
    getPokemon: (
      state: InitialStateProps,

      action: PayloadAction<SinglePokemonDetailsProps[] | undefined>
    ) => {
      state.PokemonList = action.payload || undefined;
    },
  },
});

export const { getPokemon } = fetchPokemons.actions;
export default fetchPokemons.reducer;
