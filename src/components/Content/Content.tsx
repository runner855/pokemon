import React, { useEffect, useState } from "react";
import {
  SinglePokemonDetailsProps,
  PokemonGroupProps,
} from "../../Types/appTypes";
import { Card } from "antd";
import "../Content/Content.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import apiCall from "../../API/apiCall";

type DataProps = {
  pokeData: PokemonGroupProps[] | undefined;
};

export const Content = ({ pokeData }: DataProps) => {
  const [singlePokemon, setSinglePokemon] = useState<
    SinglePokemonDetailsProps | undefined
  >();
  const [data, setData] = useState<SinglePokemonDetailsProps | undefined>();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    pokeData &&
      pokeData.map((item, index) =>
        axios.get(`${item.url}`, {}).then((res) => setData(res.data))
      );
  }, [pokeData]);

  console.log(data);

  return (
    <div className="pokemon_container">
      {pokeData &&
        pokeData.map((item, index) => {
          return (
            <Card
              style={{ width: 250, margin: 20 }}
              cover={
                <img
                  className="pokemon_img"
                  alt="example"
                  src={data && data.sprites.other.dream_world.front_default}
                />
              }
              hoverable
              key={index}
              onClick={() => navigate(`${item.name}`)}
            >
              {`${item.name.charAt(0).toUpperCase()}${item.name.slice(
                1
              )}${" "}`}
              <div>{item.url}</div>
            </Card>
          );
        })}
    </div>
  );
};
