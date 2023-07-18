import * as React from "react";
import HeaderContext from "../Context/HeaderContext";

export default function HeaderProvider(props) {
  const { children } = props;
  const [menuOpen, setMenuOpen] = React.useState(false);

  const object = {
    menuOpen,
    setMenuOpen, // Boolean se o hamburger esta aberto ou não
  };
  return (
    <HeaderContext.Provider value={object}>{children}</HeaderContext.Provider>
  );
}
