import * as React from "react";
import HeaderContext from "../Context/HeaderContext";

export default function HeaderProvider(props) {
  const { children } = props;
  const [menuOpen, setMenuOpen] = React.useState(false);
  console.log(menuOpen);

  const [projectsGitHub, setProjectsGitHub] = React.useState([]);
  console.log(projectsGitHub);

  const object = {
    menuOpen,
    setMenuOpen, // Boolean se o hamburger esta aberto ou não
    projectsGitHub,
    setProjectsGitHub,
  };
  return (
    <HeaderContext.Provider value={object}>{children}</HeaderContext.Provider>
  );
}
