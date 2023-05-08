import React, { useEffect, useState } from "react";
import apiCall from "../../API/apiCall";
import { PokemonGroupProps } from "../../Types/appTypes";
import { useParams } from "react-router-dom";
import { Content } from "../Content/Content";
import { PokemonResponse } from "../../Types/appTypes";

export const MainContainer = () => {
  const params = useParams();
  const [pokeData, setPokeData] = useState<PokemonResponse[] | undefined>();

  useEffect(() => {
    apiCall
      .get(`pokemon/`)
      .then((data) => {
        let results = data.data.results;
        let promisesArray = results.map((result: PokemonGroupProps) => {
          return apiCall.get(`${result.url}`).then((res) => res);
        });
        return Promise.all(promisesArray);
      })
      .then((res) => setPokeData(res));
  }, [params]);

  return (
    <div className="main_container">
      <Content pokeData={pokeData} />
    </div>
  );
};
