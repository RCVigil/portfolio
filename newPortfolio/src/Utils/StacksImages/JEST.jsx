import React from "react";

import jestIcon from "../../images/jest-icon.png";

import "./_stacksImages.sass";

export default function JEST() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://jestjs.io/pt-BR/"
        id="outlineNone"
      >
        <img alt="Imagem Jest" className="img_tBody" src={jestIcon} />
        <p className="pImgStacks">Jest</p>
      </a>
    </div>
  );
}
