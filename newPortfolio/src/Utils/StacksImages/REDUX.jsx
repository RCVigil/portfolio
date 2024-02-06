import React from "react";

import reduxIcon from "../../images/reduxIcon.png";

import "./_stacksImages.sass";

export default function REDUX() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://redux.js.org/"
        id="outlineNone"
      >
        <img alt="Imagem Redux" className="img_tBody" src={reduxIcon} />
        <p className="pImgStacks">Redux</p>
      </a>
    </div>
  );
}
