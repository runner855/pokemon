import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import { HEADER_LABEL } from "../../Constants/Dictionary";
import { SearchBar } from "../SearchBar/SearchBar";
import { NavBarLinks } from "../../Utilities/Utility";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../API/apiCall";
import { PokemonGroupProps } from "../../Types/appTypes";

export const Home = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchData, setSearchData] = useState<
    PokemonGroupProps[] | undefined
  >();
  const [value, setValue] = useState<string>("");

  const valueUpper = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

  useEffect(() => {
    apiCall.get(`pokemon`, {}).then((res) => setSearchData(res.data.results));
  }, [params]);

  return (
    <div className="home_container">
      <div className="title">{HEADER_LABEL}</div>

      <SearchBar
        value={value}
        setValue={(inputValue: string) => setValue(inputValue)}
      />

      <div className="filters_container">
        {NavBarLinks &&
          NavBarLinks.map((item, index) => {
            return (
              <div
                key={index}
                className={`filter_element ${item.color}`}
                onClick={() => navigate(`${item.to}`)}
              >
                {item.link_label}
              </div>
            );
          })}
      </div>
      <div className="filter_pokemon">
        {searchData &&
          searchData
            .filter((item) =>
              item.name.toLowerCase().includes(value.toLowerCase())
            )
            .map((item, index) => {
              return (
                <ul key={index}>
                  {item.name === value ||
                    (valueUpper && (
                      <li
                        className="pokemon_name_result"
                        onClick={() => navigate(`pokemon/${item.name}`)}
                      >{`${item.name.charAt(0).toUpperCase()}${item.name.slice(
                        1
                      )}`}</li>
                    ))}
                </ul>
              );
            })}
      </div>
    </div>
  );
};
