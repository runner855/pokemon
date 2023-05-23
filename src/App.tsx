import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { CardDetails } from "./components/CardDetails/CardDetails";
import { Favorites } from "./components/Favorites/Favorites";
import { Login } from "./components/Login/Login";
import { useAppSelector } from "../src/hook/Store";
import { Home } from "./components/Home/Home";
export const App = () => {
  const PokemonFavorite = useAppSelector((state) => state.pokemons.PokemonId);
  const User = useAppSelector((state) => state.users.UserData);

  console.log(PokemonFavorite);
  console.log(User);

  return (
    <div>
      {User && Object.keys(User).length > 0 ? (
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:page" element={<MainContainer />} />
            <Route path="/:page/:id" element={<CardDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      ) : (
        <div className="login_page">
          <Login />
        </div>
      )}
    </div>
  );
};
