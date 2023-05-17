import React from "react";

import "../Content/Content.css";
import { PokemonListCard } from "../PokemonListCard/PokemonListCard";

import { PokemonResponse } from "../../Types/appTypes";

type DataProps = {
  pokeData: PokemonResponse[] | undefined;
};

export const Content = ({ pokeData }: DataProps) => {
  return (
    <div className="pokemon_container">
      {pokeData &&
        pokeData.map((item, index) => {
          return <PokemonListCard item={item} />;
        })}
    </div>
  );
};
