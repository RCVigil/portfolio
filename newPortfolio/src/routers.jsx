import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { MemoryRouter } from "react-router";
import Index from "./Components/Index";
import Error404 from "./Pages/Error404";
import ProjetosFullGit from "./Pages/ProjetosFullGit/ProjetosFullGit";

function RoutersApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />

      <Route exact path="/projetosFull" element={<ProjetosFullGit />} />

      <Route
        path="/sitemap.xml"
        element={<Navigate to="/sitemap.xml" replace />}
      />

      <Route path="/404" element={<Error404 />} />

      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default RoutersApp;
