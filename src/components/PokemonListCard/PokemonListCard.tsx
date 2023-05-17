import * as React from "react";
import "../PokemonListCard/PokemonListCard.css";

import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { PokemonResponse } from "../../Types/appTypes";

export type SingleCardDataProps = {
  item: PokemonResponse;
};

export const PokemonListCard = ({ item }: SingleCardDataProps) => {
  const color = item.data.types.map((item, index) => {
    return item.type.name;
  });
  const navigate = useNavigate();
  return (
    <div
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
};
