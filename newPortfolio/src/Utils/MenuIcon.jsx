import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/Menu.css";
import "../Styles/Components/menuHamburguer.sass"

const MenuIcon = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="menuIconInHeader">
      <div
        id="menuBurgger"
        className={active ? "icon iconActive" : "icon"}
        onClick={toggleMenu}
      >
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        {console.log(active)}
        <div className="list">
          <ul className="listItems" aria-hidden="true">
            <li className="liItemsMenu">
              <Link id="linkItemsMenu" to="/">
                Home
              </Link>
            </li>
            {/* <li className="liItemsMenu">
              <Link className="linkItemsMenu" to="/">
                Sobre
              </Link>
            </li>
            <li className="liItemsMenu">
              <Link className="linkItemsMenu" to="/">
                Principais Projetos
              </Link>
            </li>
            <li className="liItemsMenu">
              <Link className="linkItemsMenu" to="/">
                Principais Stacks
              </Link>
            </li> */}
            <li className="liItemsMenu">
              <Link id="linkItemsMenu" to="/projetosFull">
                Todos Projetos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuIcon;
