import React, { useEffect, useState } from "react";
import {
  SinglePokemonDetailsProps,
  PokemonGroupProps,
} from "../../Types/appTypes";
import { Card, Tag } from "antd";
import "../Content/Content.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import apiCall from "../../API/apiCall";
import { IoMdReturnLeft } from "react-icons/io";
import { PokemonResponse } from "../../Types/appTypes";

type DataProps = {
  pokeData: PokemonResponse[] | undefined;
};

export const Content = ({ pokeData }: DataProps) => {
  const [singlePokemon, setSinglePokemon] = useState<
    PokemonGroupProps[] | undefined
  >();
  const [data, setData] = useState<PokemonResponse[] | undefined>();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="pokemon_container">
      {pokeData &&
        pokeData.map((item, index) => {
          return (
            <div
              key={index}
              className={`card_container ${item.data.types.map((item, index) =>
                item.type.name === "grass"
                  ? "green"
                  : item.type.name === "fire"
                  ? "red"
                  : item.type.name === "water"
                  ? "blue"
                  : item.type.name === "bug"
                  ? "yellow"
                  : "purple"
              )}`}
              onClick={() => navigate(`${item.data.name}`)}
            >
              <div className="image_container">
                <img
                  className="character_image"
                  src={item.data.sprites.other.dream_world.front_default}
                  alt={"character_image"}
                />
              </div>
              <div className="character_details">
                <div className="character_name">{`${item.data.name
                  .charAt(0)
                  .toUpperCase()}${item.data.name.slice(1)}`}</div>
                <div className="tags">
                  {item.data.types.map((item, index) => {
                    return (
                      <Tag color="lime" className="btn" key={index}>
                        {`${item.type.name
                          .charAt(0)
                          .toUpperCase()}${item.type.name.slice(1)}${" "}`}
                      </Tag>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
