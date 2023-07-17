import React, { useContext } from "react";
import "../Styles/Components/Header.sass";

import pegasusIcon from "../images/pegasus.svg";

import MenuIcon from "../Utils/MenuIcon";

import HeaderProvider from "../providers/HeaderProviders";
import HeaderContext from "../Context/HeaderContext";

function Header() {
  const { menuOpen, setMenuOpen } = useContext(HeaderContext);

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
      <div className="menuIconInHeader">
        <MenuIcon />
      </div>
      <div         className={
          !menuOpen
            ? "h1DivHeader"
            : "h1DivHeaderDelayed"
        }>
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
              alt="logo Pégasus"
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
    <HeaderProvider>
      <Header />
    </HeaderProvider>
  );
}

export default HeaderWrapper;
