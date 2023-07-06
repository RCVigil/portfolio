import "../Styles/Components/Header.sass";
import pegasusIcon from "../images/pegasus.svg";

import MenuIcon from "../Utils/MenuIcon";

function Header() {
  return (
    <header className="allHeader">
      <div className="menuIconInHeader">
        <MenuIcon />
      </div>
      <div className="h1DivHeader">
        <img className="imgPegasus" src={pegasusIcon} alt="logo Pégasus" />
        <h1 className="h1Header">CUERVO DEV</h1>
      </div>
    </header>
  );
}

export default Header;
