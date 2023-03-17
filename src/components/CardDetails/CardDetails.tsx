import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../API/apiCall";
import { PokemonDetailsProps } from "../../Types/appTypes";

export const CardDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState<
    PokemonDetailsProps | undefined
  >();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiCall
      .get(`${params.page}/${params.name}`, {})
      .then((res) => setPokemonDetails(res.data));
  }, [params]);

  console.log("details", pokemonDetails);

  return (
    <div>
      {`${pokemonDetails && pokemonDetails.name.charAt(0).toUpperCase()}${
        pokemonDetails && pokemonDetails.name.slice(1)
      }`}
    </div>
  );
};
