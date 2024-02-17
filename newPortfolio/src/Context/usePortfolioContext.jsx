import * as React from "react";

import PortfolioContext from "./PortfolioContext";

export default function usePortfolioContext() {
  const context = React.useContext(PortfolioContext);

  if (!context) {
    throw new Error("PortfolioContext deve ser usado dentro de um PortfolioContextProvider");
  };

  return context;
};