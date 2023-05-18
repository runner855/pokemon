import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "../../API/apiCall";
import {
  EggGroupProps,
  PokemonAboutProps,
  PokemonEvolutionChainProps,
  PokemonGenderProps,
  SinglePokemonDetailsProps,
  SpeciesDetailsProps,
} from "../../Types/appTypes";
import "../CardDetails/CardDetails.css";
import { Tabs } from "antd";
import { Tag } from "antd";
import { GiMale } from "react-icons/gi";
import { BiFemaleSign } from "react-icons/bi";
import { StatsChart } from "../StatsChart/StatsChart";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hook/Store";
import { getPokemonId } from "../../actions/PokemonFavorite";
export const CardDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState<
    SinglePokemonDetailsProps | undefined
  >();
  const [secondpokemonDetails, setSecondPokemonDetails] = useState<
    SinglePokemonDetailsProps | undefined
  >();
  const [fourthpokemonDetails, setFourthPokemonDetails] = useState<
    SinglePokemonDetailsProps | undefined
  >();

  const [species, setSpecies] = useState<SpeciesDetailsProps | undefined>();

  const [pokemonAbout, setPokemonAbout] = useState<
    PokemonAboutProps | undefined
  >();
  const [eggGroup, setEggGroup] = useState<EggGroupProps | undefined>();
  const [gender, setGender] = useState<PokemonGenderProps | undefined>();

  const [evolution, setEvolution] = useState<
    PokemonEvolutionChainProps | undefined
  >();

  const StatData = pokemonDetails && pokemonDetails.stats;

  const params = useParams();
  const dispatch = useAppDispatch();
  const PokemonFavorite = useAppSelector((state) => state.pokemons.PokemonId);

  useEffect(() => {
    params &&
      apiCall
        .get(`pokemon/${params.id}`, {})
        .then((res) => setPokemonDetails(res.data))
        .catch((err) => console.log(err));
  }, [params]);

  const IdSecondEvolution =
    evolution &&
    evolution.chain.evolves_to.map((item, index) => {
      return item.species.url.split("species/")[1].split("/")[0];
    });

  const IdGender = pokemonDetails && pokemonDetails.id;

  useEffect(() => {
    pokemonDetails &&
      apiCall
        .get(`ability/${pokemonDetails && pokemonDetails.id}`, {})
        .then((res) => setPokemonAbout(res.data))
        .catch((err) => console.log(err));
  }, [pokemonDetails]);

  useEffect(() => {
    pokemonDetails &&
      apiCall
        .get(`egg-group/${pokemonDetails && pokemonDetails.id}`, {})
        .then((res) => setEggGroup(res.data));
  }, [pokemonDetails]);

  useEffect(() => {
    pokemonDetails &&
      apiCall
        .get(`pokemon-species/${pokemonDetails.name}`, {})
        .then((res) => setSpecies(res.data));
  }, [pokemonDetails]);

  const Id =
    species && species.evolution_chain.url.split("chain/")[1].split("/")[0];

  useEffect(() => {
    IdGender &&
      !gender &&
      apiCall.get(`gender/${IdGender}`, {}).then((res) => setGender(res.data));
  }, [IdGender, gender]);

  useEffect(() => {
    Id &&
      apiCall
        .get(`evolution-chain/${Id}`, {})
        .then((res) => setEvolution(res.data));
  }, [Id]);

  useEffect(() => {
    IdSecondEvolution &&
      !secondpokemonDetails &&
      apiCall
        .get(`pokemon/${IdSecondEvolution}`, {})
        .then((res) => setSecondPokemonDetails(res.data))
        .catch((err) => console.log(err));
  }, [IdSecondEvolution, secondpokemonDetails]);

  const IdFourthEvolution =
    evolution &&
    evolution.chain.evolves_to.map((item, index) => {
      return item.evolves_to.map((item, index) => {
        return item.species.url.split("species/")[1].split("/")[0];
      });
    });

  useEffect(() => {
    IdFourthEvolution &&
      !fourthpokemonDetails &&
      apiCall
        .get(`pokemon/${IdFourthEvolution}`, {})
        .then((res) => setFourthPokemonDetails(res.data))
        .catch((err) => console.log(err));
  }, [IdFourthEvolution, fourthpokemonDetails]);

  const handleClick = (event: any) => {
    pokemonDetails &&
      PokemonFavorite &&
      dispatch(getPokemonId([...PokemonFavorite, pokemonDetails.id]));
    pokemonDetails &&
      PokemonFavorite.includes(pokemonDetails.id) &&
      dispatch(
        getPokemonId(
          [...PokemonFavorite, pokemonDetails.id] &&
            PokemonFavorite.filter((id) => id !== pokemonDetails.id)
        )
      );
  };

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
          <div className="heart" onClick={handleClick}>
            {pokemonDetails && PokemonFavorite.includes(pokemonDetails.id) ? (
              <AiFillHeart className="filledheart" />
            ) : (
              <AiOutlineHeart />
            )}
          </div>
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
            children: StatData && <StatsChart StatData={StatData} />,
          },
          {
            label: "Evolution",
            key: "3",
            children: (
              <div className="evolution_container">
                <div className="evolution_header">Evolution Chain</div>
                <div className="evolution_top">
                  <div className="evo_image_container">
                    <img
                      src={
                        pokemonDetails &&
                        pokemonDetails.sprites.other.dream_world.front_default
                      }
                      alt="evo_image"
                    />
                    <div className="evolution_name">{`${
                      species && species.name.charAt(0).toUpperCase()
                    }${species && species.name.slice(1)}`}</div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                    <div className="evolution_level">
                      Lvl.
                      {`${
                        evolution &&
                        evolution.chain.evolves_to.map((item, index) => {
                          return item.evolution_details.map((item, index) => {
                            return item.min_level;
                          });
                        })
                      }`}
                    </div>
                  </div>
                  <div className="evo_image_container">
                    <img
                      src={
                        secondpokemonDetails &&
                        secondpokemonDetails.sprites.other.dream_world
                          .front_default
                      }
                      alt="evo_image"
                    />
                  </div>
                </div>
                <div className="evolution_top">
                  <div className="evo_image_container">
                    <img
                      src={
                        secondpokemonDetails &&
                        secondpokemonDetails.sprites.other.dream_world
                          .front_default
                      }
                      alt="evo_image"
                    />
                    <div className="evolution_name">{`${
                      pokemonDetails &&
                      pokemonDetails.name.charAt(0).toUpperCase()
                    }${pokemonDetails && pokemonDetails.name.slice(1)}`}</div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                    <div className="evolution_level">
                      Lvl.
                      {`${
                        evolution &&
                        evolution.chain.evolves_to.map((item, index) => {
                          return item.evolves_to.map((item, index) => {
                            return item.evolution_details.map((item, index) => {
                              return item.min_level;
                            });
                          });
                        })
                      }`}
                    </div>
                  </div>
                  <div className="evo_image_container">
                    <img
                      src={
                        fourthpokemonDetails &&
                        fourthpokemonDetails.sprites.other.dream_world
                          .front_default
                      }
                      alt="evo_image"
                    />
                  </div>
                </div>
              </div>
            ),
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
