import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { Home } from "./components/Home/Home";
import { CardDetails } from "./components/CardDetails/CardDetails";
import { Favorites } from "./components/Favorites/Favorites";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:page" element={<MainContainer />} />
        <Route path="/:page/:id" element={<CardDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};
