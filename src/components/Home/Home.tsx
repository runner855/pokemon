import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import {
  HEADER_LABEL,
  POKEMON_NEWS_LABEL,
  POKEMON_NEWS_VIEWALL_LABEL,
} from "../../Constants/Dictionary";
import { SearchBar } from "../SearchBar/SearchBar";
import { NavBarLinks, PokemonNews } from "../../Utilities/Utility";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import apiCall from "../../API/apiCall";
import { PokemonGroupProps } from "../../Types/appTypes";
import newsImage1 from "../../Images/regionals-169.jpg";

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
      <div className="pokemon_news_container">
        <div className="pokemon_news_header">
          <ul>
            <li className="Pokemon_news">{POKEMON_NEWS_LABEL}</li>
            <li className="Pokemon_viewall">
              <NavLink to="https://www.pokemon.com/us/pokemon-news">
                {POKEMON_NEWS_VIEWALL_LABEL}
              </NavLink>
            </li>
          </ul>
        </div>
        {PokemonNews &&
          PokemonNews.map((item, index) => {
            return (
              <div className="news_card_container" key={index}>
                <div className="text_content">
                  <div className="article_date">{item.date}</div>

                  <div className="title_news">{item.title}</div>
                </div>
                <div className="image_container">
                  <img
                    className="article_image"
                    src={item.image}
                    alt="article_image"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
