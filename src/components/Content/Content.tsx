import * as React from "react";
import { PokedexProps } from "../../Types/appTypes";

type DataProps = {
  pokeData: PokedexProps[] | undefined;
};

export const Content = ({ pokeData }: DataProps) => {
  return (
    <div className="pokemon_container">
      <div className="filters_container"></div>
    </div>
  );
};
