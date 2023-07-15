// import "../Styles/Components/Header.sass";
// import pegasusIcon from "../images/pegasus.svg";

// import MenuIcon from "../Utils/MenuIcon";

// function Header() {
//   function preventImageDownload(event) {
//     event.preventDefault();
//     alert("Você não pode baixar este logotipo.");
//   }

//   return (
//     <header className="allHeader">
//       <div className="menuIconInHeader">
//         <MenuIcon />
//       </div>
//       <div className="h1DivHeader">
//         <a href="https://portfolio-cuervo.vercel.app/">
//           <img
//             src={pegasusIcon}
//             alt="logo Pégasus"
//             onClick={preventImageDownload}
//           />
//         </a>
//         <h1 className="h1Header">CUERVO DEV</h1>
//       </div>
//     </header>
//   );
// }

// export default Header;
import React from "react";
import "../Styles/Components/Header.sass";

import pegasusIcon from "../images/pegasus.svg";

import MenuIcon from "../Utils/MenuIcon";

function Header() {
  function preventImageDownload(event) {
    event.preventDefault();
    alert("Você não pode baixar este logotipo.");
  }

  function handleContextMenu(event) {
    event.preventDefault();
    alert("Você não pode copiar este logotipo.");
  }

  return (
    <header className="allHeader">
      <div className="menuIconInHeader">
        <MenuIcon />
      </div>
      <div className="h1DivHeader">
        <a href="https://portfolio-cuervo.vercel.app/">
          <img
            className="imgPegasus"
            src={pegasusIcon}
            alt="logo Pégasus"
            onClick={preventImageDownload}
            onContextMenu={handleContextMenu}
          />
        </a>
        <h1 className="h1Header">CUERVO DEV</h1>
      </div>
    </header>
  );
}

export default Header;
