import React, { useEffect, useState } from "react";
import apiCall from "../../API/apiCall";
import { PokedexProps } from "../../Types/appTypes";
import { useParams } from "react-router-dom";
import { Content } from "../Content/Content";

export const MainContainer = () => {
  const params = useParams();
  const [pokeData, setPokeData] = useState<PokedexProps[] | undefined>();
  useEffect(() => {
    apiCall
      .get(`${params.page}`, {})
      .then((res) => setPokeData(res.data.results));
  }, []);

  console.log("here", pokeData);

  return (
    <div className="main_container">
      <Content pokeData={pokeData} />
    </div>
  );
};
