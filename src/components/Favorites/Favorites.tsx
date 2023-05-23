import React, { useEffect, useState } from "react";
import "../Favorites/Favorites.css";
import { useAppSelector } from "../../hook/Store";
import apiCall from "../../API/apiCall";
import { PokemonResponse } from "../../Types/appTypes";
import { PokemonListCard } from "../PokemonListCard/PokemonListCard";

export const Favorites = () => {
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
      {favoritesData && PokemonFavorite.length > 0 ? (
        favoritesData.map((item, index) => {
          return (
            <div className="favorites_container" key={index}>
              <PokemonListCard item={item} />
            </div>
          );
        })
      ) : (
        <div className="no_favorites">
          <div className="no_favorites_text">
            You Don't have any Favorites!!
          </div>
          <div className="no_favorites_image">
            <img
              src="https://assets1.ignimgs.com/vid/thumbnails/user/2014/05/07/6SaddestPokemonMoments-2_1280.jpg?width=1280"
              alt="pokemon_crying"
              className="pokemon_crying"
            />
          </div>
        </div>
      )}
    </div>
  );
};
