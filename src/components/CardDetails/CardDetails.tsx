import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "../../API/apiCall";
import {
  EggGroupProps,
  PokemonAboutProps,
  PokemonEvolutionChainProps,
  PokemonGenderProps,
  PokemonGroupProps,
  SinglePokemonDetailsProps,
} from "../../Types/appTypes";
import "../CardDetails/CardDetails.css";
import { Tabs } from "antd";
import { Tag } from "antd";
import { GiMale } from "react-icons/gi";
import { BiFemaleSign } from "react-icons/bi";

export const CardDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState<
    SinglePokemonDetailsProps | undefined
  >();
  const [pokemonAbout, setPokemonAbout] = useState<
    PokemonAboutProps | undefined
  >();
  const [eggGroup, setEggGroup] = useState<EggGroupProps | undefined>();
  const [gender, setGender] = useState<PokemonGenderProps | undefined>();
  const [evolution, setEvolution] = useState<
    PokemonEvolutionChainProps | undefined
  >();

  const params = useParams();

  useEffect(() => {
    apiCall
      .get(`pokemon/${params.id}`, {})
      .then((res) => setPokemonDetails(res.data))
      .catch((err) => console.log(err));
  }, [params]);

  let id = pokemonDetails && pokemonDetails.id;

  useEffect(() => {
    pokemonDetails &&
      apiCall
        .get(`ability/${pokemonDetails && pokemonDetails.id}`, {})
        .then((res) => setPokemonAbout(res.data))
        .catch((err) => console.log(err));
  }, [id, pokemonDetails]);

  useEffect(() => {
    pokemonDetails &&
      apiCall
        .get(`egg-group/${pokemonDetails && pokemonDetails.id}`, {})
        .then((res) => setEggGroup(res.data));
  }, [pokemonDetails]);

  useEffect(() => {
    params &&
      apiCall.get(`gender/${params.id}`, {}).then((res) => setGender(res.data));
  }, [params]);

  useEffect(() => {
    pokemonDetails &&
      apiCall
        .get(`evolution-chain/${pokemonDetails && pokemonDetails.id}`, {})
        .then((res) => console.log(res.data));
  }, [pokemonDetails]);

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
            children:
              pokemonAbout &&
              pokemonAbout.effect_entries.map((item, index) => {
                return item.language.name === "en" ? (
                  <div key={index} className="details_container">
                    <div>{item.effect}</div>
                    <div className="height_weight_container">
                      <div className="height">
                        <div>Height:</div>
                        {pokemonDetails &&
                          `${pokemonDetails.height}(${
                            pokemonDetails.height * 10
                          } cm)`}
                      </div>
                      <div className="weight">
                        <div>Weight:</div>
                        {pokemonDetails &&
                          `${pokemonDetails.weight * 2.2} lbs(${
                            pokemonDetails.weight * 0.1
                          }${" "}${"kg"})`}
                      </div>
                    </div>
                    <div className="breeding_container">
                      <div className="breeding_header">Breeding</div>
                      <div className="gender_container">
                        <div className="gender_header">Gender</div>
                        <div className="gender_value">
                          {gender && gender.name === "female" ? (
                            <BiFemaleSign className="female" />
                          ) : (
                            <GiMale className="male" />
                          )}
                        </div>
                      </div>
                      <div className="egg-group">
                        <div className="egg-group_header">Egg Group</div>
                        <div className="egg-group_text">
                          {eggGroup && eggGroup.name.charAt(0).toUpperCase()}
                          {eggGroup && eggGroup.name.slice(1)}
                        </div>
                      </div>
                      <div className="egg-cycle">
                        <div className="egg-cycle_header">Egg Cycle</div>
                        <div className="egg-cycle_text">
                          {pokemonDetails &&
                            pokemonDetails.types.map(
                              (item, index) =>
                                `${item.type.name
                                  .charAt(0)
                                  .toUpperCase()}${item.type.name.slice(
                                  1
                                )}${" "}`
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                );
              }),
          },
          {
            label: "Base Stats",
            key: "2",
            children:
              pokemonDetails &&
              pokemonDetails.stats.map((item, index) => {
                return (
                  <ul key={index}>
                    <li>
                      {item.stat.name.toUpperCase()} : {item.base_stat}
                    </li>
                  </ul>
                );
              }),
          },
          {
            label: "Evolution",
            key: "3",
            children: "Evolution",
          },
          {
            label: "Moves",
            key: "4",
            children: `${
              pokemonDetails &&
              pokemonDetails.moves.map((item, index) => item.name)
            }`,
          },
        ]}
      />
    </div>
  );
};
