import { configureStore } from "@reduxjs/toolkit";
import fetchPokemonId from "../actions/PokemonFavorite";

export const store = configureStore({
  reducer: {
    pokemons: fetchPokemonId,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
