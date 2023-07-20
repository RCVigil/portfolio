import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "../Styles/Menu.css";
import "../Styles/Components/menuHamburguer.sass";
import HeaderContext from "../Context/HeaderContext";

// Variáveis para animar o menu
const menuVariants = {
  hidden: { x: "-100vw", transition: { duration: 0.6 } },
  visible: { x: "0vw", transition: { delay: 0.1, duration: 0.8 } },
};

// Componente MenuIcon
const MenuIcon = () => {
  // Acessando o estado e a função de HeaderContext usando o useContext
  const { menuOpen, setMenuOpen } = React.useContext(HeaderContext);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="menuIconInHeader">
      {/* Ícone do menu */}
      <div
        id="menuBurgger"
        className={!menuOpen ? "icon" : "icon iconActive"}
        onClick={toggleMenu}
      >
        <div className="hamburguer hamburguerIcon"></div>
      </div>

      <AnimatePresence>
        {/* Renderiza o menu se estiver aberto */}
        {menuOpen && (
          <motion.div
            className="menuOpen"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <nav className="list">
              {/* Itens do menu */}
              <ul className="listItems listUl" aria-hidden="true">
                <li className="liItemsMenu">
                  <Link id="linkItemsMenu" to="/">
                    Home
                  </Link>
                </li>
                {/* Itens adicionais do menu */}
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MenuIcon;
