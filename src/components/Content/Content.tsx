import * as React from "react";
import { PokemonGroupProps } from "../../Types/appTypes";
import { Card } from "antd";
import "../Content/Content.css";
import { useNavigate, useParams } from "react-router-dom";

type DataProps = {
  pokeData: PokemonGroupProps[] | undefined;
};

export const Content = ({ pokeData }: DataProps) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div className="pokemon_container">
      {pokeData &&
        pokeData.map((item, index) => {
          return (
            <Card
              style={{ width: 250, margin: 20 }}
              cover={
                <img
                  alt="example"
                  src={
                    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  }
                />
              }
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
