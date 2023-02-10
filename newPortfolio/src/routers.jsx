import React from "react";
import { Route, Routes } from "react-router-dom";
// import { MemoryRouter } from "react-router";
import Index from "./Components/Index";
import ProjetosFullGit from "./Pages/ProjetosFullGit";
import Error404 from "./Pages/Error404";

function RoutersApp() {
  return (
      <Routes>
        {/* <Redirect exact from="/" to="./Components/Index" /> */}
        <Route
          exact path="/"
          element={<Index />}
          >
        </Route>
        <Route
          exact path="/projetosFull"
          element={<ProjetosFullGit />}
          >
          </Route>
        <Route 
          path="*"
          element={<Error404 />}
          >
        </Route>
      </Routes>
  );
}

export default RoutersApp;
