import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { SinglePokemonDetailsProps } from "../Types/appTypes";

export interface InitialStateProps {
  PokemonDetails: undefined | SinglePokemonDetailsProps[];
}

const initialState = {
  PokemonDetails: undefined,
} as InitialStateProps;

export const fetchPokemonDetails = createSlice({
  name: "PokemonDetails",
  initialState,

  reducers: {
    getPokemonDetails: (
      state: InitialStateProps,

      action: PayloadAction<SinglePokemonDetailsProps[] | undefined>
    ) => {
      state.PokemonDetails = action.payload || undefined;
    },
  },
});

export const { getPokemonDetails } = fetchPokemonDetails.actions;
export default fetchPokemonDetails.reducer;
