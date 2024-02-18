import * as React from "react";

import pegasusIcon from "../images/pegasus.svg";

import MenuIcon from "../Utils/MenuIcon";

import PortfolioProvider from "../Context/PortfolioProviders";

import usePortfolioContext from "../Context/usePortfolioContext";

import "../Styles/Components/Header.sass";

function Header() {
  const { menuOpen } = usePortfolioContext();

  function preventImageDownload(event) {
    event.preventDefault();
    alert("Você não pode baixar este logotipo.");
  }

  function handleContextMenu(event) {
    event.preventDefault();
    alert("Você não pode copiar este logotipo.");
  }

  return (
    <header className="allHeader">
      <div className="menuIconInHeaderCont">
        <MenuIcon />
      </div>
      <div className={!menuOpen ? "h1DivHeader" : "h1DivHeaderDelayed"}>
        <div
          className={
            !menuOpen
              ? "h1DivHeader menuCloseActive"
              : "h1DivHeader menuOpenActive"
          }
        >
          <a href="https://portfolio-cuervo.vercel.app/">
            <img
              className="imgPegasus" 
              src={pegasusIcon}
              alt="logo Pegasus"
              onClick={preventImageDownload}
              onContextMenu={handleContextMenu}
            />
          </a>
          <h1 className="h1Header">CUERVO DEV</h1>
        </div>
      </div>
    </header>
  );
}

function HeaderWrapper() {
  return (
    <PortfolioProvider>
      <Header />
    </PortfolioProvider>
  );
}

export default HeaderWrapper;
