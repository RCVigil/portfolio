import "../Styles/Components/Header.sass";
import pegasusIcon from '../images/pegasus.svg'

import MenuIcon from "../Utils/MenuIcon";

function Header() {
  return (
    <header className="container d-flex justify-content-between row allHeader">
      <MenuIcon />
      <div className="col-8 h1DivHeader">
        <img className="imgPegasus" src={pegasusIcon} alt="logo Pégasus" srcset="" />
        <h1 className="h1Header">CUERVO DEV</h1>
      </div>
    </header>
  );
}

export default Header;
