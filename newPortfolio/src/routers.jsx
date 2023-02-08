import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import ProjetosFullGit from "./Pages/ProjetosFullGit";

const RoutersApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={App} />
      <Route exact path="/projetosFull" element={<ProjetosFullGit/>} />
    </Routes>
  );
};

export default RoutersApp;