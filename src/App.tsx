import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { MainContainer } from "./components/MainContainer/MainContainer";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:page" element={<MainContainer />} />
      </Routes>
    </div>
  );
};
