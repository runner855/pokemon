import { configureStore } from "@reduxjs/toolkit";
import fetchPokemons from "../actions/PokemonList";
import fetchPokemonDetails from "../actions/PokemonDetails";

export const store = configureStore({
  reducer: {
    pokemons: fetchPokemons,
    pokemonDetails: fetchPokemonDetails,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
