import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateProps {
  PokemonId: number[];
}

const initialState = {
  PokemonId: [],
} as InitialStateProps;

export const fetchPokemonId = createSlice({
  name: "PokemonId",
  initialState,

  reducers: {
    getPokemonId: (
      state: InitialStateProps,

      action: PayloadAction<number[]>
    ) => {
      state.PokemonId = action.payload;
    },
  },
});

export const { getPokemonId } = fetchPokemonId.actions;
export default fetchPokemonId.reducer;
