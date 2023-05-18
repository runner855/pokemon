import React, { useEffect, useState } from "react";
import "../Favorites/Favorites.css";
import { useAppDispatch, useAppSelector } from "../../hook/Store";
import { getPokemonId } from "../../actions/PokemonFavorite";
import apiCall from "../../API/apiCall";
import {
  PokemonGroupProps,
  PokemonResponse,
  SinglePokemonDetailsProps,
} from "../../Types/appTypes";
import { PokemonListCard } from "../PokemonListCard/PokemonListCard";
import axios from "axios";

export const Favorites = () => {
  const dispatch = useAppDispatch();
  const PokemonFavorite = useAppSelector((state) => state.pokemons.PokemonId);
  const [favoritesData, setFavoritesData] = useState<
    PokemonResponse[] | undefined
  >();

  useEffect(() => {
    apiCall
      .get(`pokemon/`)
      .then((data) => {
        let promisesArray = PokemonFavorite.map((result: number) => {
          return apiCall.get(`pokemon/${result}`).then((res) => res);
        });
        return Promise.all(promisesArray);
      })
      .then((res) => setFavoritesData(res));
  }, [PokemonFavorite]);

  return (
    <div>
      <div className="favorites_header">My Favorite Pokemons</div>
      {favoritesData &&
        favoritesData.map((item, index) => {
          return (
            <div key={index} className="favorites_container">
              <PokemonListCard item={item} />
            </div>
          );
        })}
    </div>
  );
};
