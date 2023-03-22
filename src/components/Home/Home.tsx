import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import { HEADER_LABEL } from "../../Constants/Dictionary";
import { SearchBar } from "../SearchBar/SearchBar";
import apiCall from "../../API/apiCall";
import { PokemonGroupProps } from "../../Types/appTypes";
import { FiltersArray, NavBarLinks } from "../../Utilities/Utility";
import { useNavigate, useParams } from "react-router-dom";

export const Home = () => {
  const [pokeData, setPokeData] = useState<PokemonGroupProps[] | undefined>();
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.page);
  useEffect(() => {
    apiCall
      .get(`${params.page}`, {})
      .then((res) => setPokeData(res.data.results));
  }, [params]);

  return (
    <div className="home_container">
      <div className="title">{HEADER_LABEL}</div>

      <SearchBar />

      <div className="filters_container">
        {NavBarLinks &&
          NavBarLinks.map((item, index) => {
            return (
              <div
                key={index}
                className="filter_element"
                onClick={() => navigate(`${item.to}`)}
              >
                {item.link_label}
              </div>
            );
          })}
      </div>
    </div>
  );
};
