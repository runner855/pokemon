import React, { useEffect, useState } from "react";
import "../Favorites/Favorites.css";
import apiCall from "../../API/apiCall";
import { PokemonResponse } from "../../Types/appTypes";
import { PokemonListCard } from "../PokemonListCard/PokemonListCard";
import { useAppDispatch, useAppSelector } from "../../hook/Store";
import { getUserFavorites } from "../../actions/UserFavorites";

export const Favorites = () => {
  const PokemonFavorite = useAppSelector((state) => state.pokemons.PokemonId);
  const UsersFavoritesCollection = useAppSelector(
    (state) => state.userFavorites.UserFavorites
  );
  const [favoritesData, setFavoritesData] = useState<
    PokemonResponse[] | undefined
  >();
  const dispatch = useAppDispatch();
  const UserDetails = useAppSelector((state) => state.users.UserData);
  const Favourites = UserDetails && Object.values(UserDetails)[0].favourites;
  const ArrayFavs = useAppSelector(
    (state) => state.userFavorites.UserFavorites
  );
  console.log(UserDetails);

  console.log(ArrayFavs);

  useEffect(() => {
    apiCall
      .get(`pokemon/`)
      .then((data) => {
        let promisesArray = ArrayFavs.map((result: number) => {
          return apiCall.get(`pokemon/${result}`).then((res) => res);
        });
        return Promise.all(promisesArray);
      })
      .then((res) => setFavoritesData(res));
    dispatch(getUserFavorites(Favourites));
  }, [ArrayFavs, Favourites, PokemonFavorite, dispatch]);

  return (
    <div>
      {favoritesData && ArrayFavs.length > 0 ? (
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
