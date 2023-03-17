import * as React from "react";
import { PokedexProps } from "../../Types/appTypes";
import { Card } from "antd";
import "../Content/Content.css";
import { useNavigate, useParams } from "react-router-dom";

type DataProps = {
  pokeData: PokedexProps[] | undefined;
};

export const Content = ({ pokeData }: DataProps) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return (
    <div className="pokemon_container">
      {pokeData &&
        pokeData.map((item, index) => {
          return (
            <Card
              style={{ width: 250, margin: 20 }}
              hoverable
              key={index}
              onClick={() => navigate(`${item.name}`)}
            >
              {`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`}
            </Card>
          );
        })}
    </div>
  );
};
