import { configureStore } from "@reduxjs/toolkit";
import fetchPokemonId from "../actions/PokemonFavorite";
import fetchUserData from "../actions/UserData";
import fetchUserFavorites from "../actions/UserFavorites";

export const store = configureStore({
  reducer: {
    pokemons: fetchPokemonId,
    users: fetchUserData,
    userFavorites: fetchUserFavorites,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
