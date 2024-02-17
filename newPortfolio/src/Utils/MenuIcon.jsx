import React from "react";

import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import usePortfolioContext from "../Context/usePortfolioContext";

import "../Styles/Components/menuHamburguer.sass";

import "../Styles/Menu.css";

// Variáveis para animar o menu
const menuVariants = {
  hidden: { x: "-100vw", transition: { duration: 0.6 } },
  visible: { x: "0vw", transition: { delay: 0.1, duration: 0.8 } },
};

// Componente MenuIcon
const MenuIcon = () => {
  // Acessando o estado e a função de HeaderContext usando o useContext
  const { menuOpen, setMenuOpen } = usePortfolioContext();

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
