import React, { useEffect, useState } from "react";

import { Tag } from "antd";
import "../Content/Content.css";
import { useNavigate, useParams } from "react-router-dom";

import { IoMdReturnLeft } from "react-icons/io";
import { PokemonResponse } from "../../Types/appTypes";

type DataProps = {
  pokeData: PokemonResponse[] | undefined;
};

export const Content = ({ pokeData }: DataProps) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="pokemon_container">
      {pokeData &&
        pokeData.map((item, index) => {
          const color = item.data.types.map((item, index) => {
            return item.type.name;
          });
          console.log(color);
          return (
            <div
              key={index}
              className={`card_container ${color[0]}`}
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
