import React, { useState } from "react";

import "../Styles/Components/Header.sass";

const MenuIcon = () => {
  const [login, setLogin] = useState(false);

  return (
    <div id="menuBurgger">
      {!login ? (
        <button 
          className="btn" 
          // onClick={loginSetup} 
          role="button"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-list menuIcon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default MenuIcon;
