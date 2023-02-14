import React, { useState } from "react";

import "../Styles/Menu.css";

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
        <div className="hamburguer hamburguerIcon">
        </div>
      </div>
      <div
        className={active ? "menu menuOpen" : "menu menuClose"}
      >
        {console.log(active)}
        <div className="list">
          <ul
            className="listItems"
            aria-hidden="true"
          >
            <li className="liItemsMenu">Home</li>
            <li className="liItemsMenu">Sobre</li>
            <li className="liItemsMenu">Principais Projetos</li>
            <li className="liItemsMenu">Principais Stacks</li>
            <li className="liItemsMenu">Todos Projetos</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuIcon;
