import * as React from "react";
import PropTypes from "prop-types";

import PortfolioContext from "./PortfolioContext";

PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function PortfolioProvider(props) {
  const { children } = props;
  const [menuOpen, setMenuOpen] = React.useState(false);
  // console.log("menuOpen no Providers", menuOpen)

  const [projectsGitHub, setProjectsGitHub] = React.useState([]);
  // console.log("projectsGitHub no Providers", projectsGitHub)

  const [userGitHub, setUserGitHub] = React.useState([]);
  // console.log("userGitHub no Providers", userGitHub)

  const [conectedUserGitHub, setConectedUserGitHub] = React.useState(false);
  // console.log("conectedUserGitHub no Providers", conectedUserGitHub)

  const object = {
    menuOpen,
    setMenuOpen, // Boolean se o hamburger esta aberto ou não
    projectsGitHub,
    setProjectsGitHub, // Projetos do Git hub
    userGitHub,
    setUserGitHub, // User do Git hub
    conectedUserGitHub,
    setConectedUserGitHub,
  };
  return (
    <PortfolioContext.Provider value={object}>
      {children}
    </PortfolioContext.Provider>
  );
}
