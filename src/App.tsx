import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { AppUrls } from "./Types/appTypes";
import { Home } from "./components/Home/Home";
import { CardDetails } from "./components/CardDetails/CardDetails";
import apiCall from "./API/apiCall";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:page" element={<MainContainer />} />
        <Route path="/:page/:name" element={<CardDetails />} />
      </Routes>
    </div>
  );
};
