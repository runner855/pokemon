import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../API/apiCall";
import { PokemonDetailsProps } from "../../Types/appTypes";
import { Card } from "antd";

export const CardDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState<
    PokemonDetailsProps | undefined
  >();
  const [activeTabKey1, setActiveTabKey1] = useState<string>("tab1");
  const [activeTabKey2, setActiveTabKey2] = useState<string>("app");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiCall
      .get(`${params.page}/${params.name}`, {})
      .then((res) => setPokemonDetails(res.data));
  }, [params]);

  console.log("details", pokemonDetails);

  const tabList = [
    {
      key: "tab1",
      tab: "tab1",
    },
    { key: "tab2", tab: "tab2" },
    {
      key: "tab3",
      tab: "tab3",
    },
  ];

  const contentList: Record<string, React.ReactNode> = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
    tab3: <p>content3</p>,
  };

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <div>
      <Card
        style={{ width: "100%" }}
        title={`${
          pokemonDetails && pokemonDetails.name.charAt(0).toUpperCase()
        }${pokemonDetails && pokemonDetails.name.slice(1)}`}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
    </div>
  );
};
