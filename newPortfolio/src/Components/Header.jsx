import "../Styles/Components/Header.sass";

import MenuIcon from "../Utils/MenuIcon";

function Header() {
  return (
    <header className="allHeader">
      <MenuIcon />
      <div className="h1DivHeader">
        <h1 className="h1Header">CUERVO DEV</h1>
      </div>
    </header>
  );
}

export default Header;
