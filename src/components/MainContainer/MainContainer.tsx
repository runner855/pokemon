import React, { useEffect, useState } from "react";
import apiCall from "../../API/apiCall";
import {
  AppUrls,
  PokemonGroupProps,
  SinglePokemonDetailsProps,
} from "../../Types/appTypes";
import { useParams } from "react-router-dom";
import { Content } from "../Content/Content";
import axios from "axios";
import { PokemonResponse } from "../../Types/appTypes";

export const MainContainer = () => {
  const params = useParams();
  const [pokeData, setPokeData] = useState<PokemonResponse[] | undefined>();

  useEffect(() => {
    apiCall
      .get(`pokemon/`)
      .then((res) => res)
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
