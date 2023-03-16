import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import { HEADER_LABEL } from "../../Constants/Dictionary";
import { SearchBar } from "../SearchBar/SearchBar";
import apiCall from "../../API/apiCall";
import { AppUrls, PokedexProps } from "../../Types/appTypes";
import { FiltersArray } from "../../Utilities/Utility";
import { Card, Col, Row } from "antd";

export const Home = () => {
  const [pokeData, setPokeData] = useState<PokedexProps[] | undefined>();
  useEffect(() => {
    apiCall.get(`pokemon`, {}).then((res) => setPokeData(res.data.results));
  }, []);

  console.log(pokeData);
  return (
    <div className="home_container">
      <div className="title">{HEADER_LABEL}</div>

      <SearchBar />
      {/* <div className="cont">
        <Row gutter={16}>
          {FiltersArray &&
            FiltersArray.map((item, index) => {
              return (
                <Col span={10}>
                  <Card bordered={false} style={{ margin: 2 }}>
                    {item.filter}
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div> */}
      <div className="filters_container">
        {FiltersArray &&
          FiltersArray.map((item, index) => {
            return (
              <div key={index} className="filter_element">
                {item.filter}
              </div>
            );
          })}
      </div>
    </div>
  );
};
