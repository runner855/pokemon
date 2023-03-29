import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "../../API/apiCall";
import { SinglePokemonDetailsProps } from "../../Types/appTypes";
import "../CardDetails/CardDetails.css";
import { Tabs } from "antd";
import { Tag } from "antd";

export const CardDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState<
    SinglePokemonDetailsProps | undefined
  >();

  const params = useParams();

  console.log(params.id);

  useEffect(() => {
    apiCall
      .get(`${params.page}/${params.id}`, {})
      .then((res) => setPokemonDetails(res.data));
  }, [params]);

  const abilityUrl = pokemonDetails && pokemonDetails.abilities;
  console.log(typeof abilityUrl);

  console.log("details", pokemonDetails);

  return (
    <div className="card">
      <div className="header">
        <div className="name">{`${
          pokemonDetails && pokemonDetails.name.charAt(0).toUpperCase()
        }${pokemonDetails && pokemonDetails.name.slice(1)}`}</div>
        <div className="types">
          {pokemonDetails &&
            pokemonDetails.types.map((item, index) => {
              return (
                <Tag color="lime" className="btn" key={index}>{`${item.type.name
                  .charAt(0)
                  .toUpperCase()}${item.type.name.slice(1)}${" "}`}</Tag>
              );
            })}
        </div>

        <div className="pokemon_image_container">
          <img
            className="pokemon_image"
            alt="example"
            src={
              pokemonDetails &&
              pokemonDetails.sprites.other.dream_world.front_default
            }
          />
        </div>
      </div>
      <Tabs
        className="tabs"
        defaultActiveKey="1"
        items={[
          {
            label: "About",
            key: "1",
            children: `${
              pokemonDetails &&
              pokemonDetails.abilities.map(
                (item, index) => `${item.ability.url}${"  "}`
              )
            }
           `,
          },
          {
            label: "Base Stats",
            key: "2",
            children: "Base Stats",
          },
          {
            label: "Evolution",
            key: "3",
            children: "Evolution",
          },
          {
            label: "Moves",
            key: "4",
            children: "Moves",
          },
        ]}
      />
    </div>
  );
};
