import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import { HEADER_LABEL } from "../../Constants/Dictionary";
import { SearchBar } from "../SearchBar/SearchBar";
import apiCall from "../../API/apiCall";
import { PokedexProps } from "../../Types/appTypes";

export const Home = () => {
  const [pokeData, setPokeData] = useState<PokedexProps[] | undefined>();
  useEffect(() => {
    apiCall.get(`pokemon`, {}).then((res) => setPokeData(res.data.results));
  }, []);

  console.log(pokeData);
  return (
    <div className="home_container">
      <div className="title">{HEADER_LABEL}</div>

      <SearchBar />
      <ul></ul>
    </div>
  );
};
