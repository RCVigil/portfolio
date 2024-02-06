import React from "react";

import iconHTML5 from "../../images/html5_Icon.svg";

import "./_stacksImages.sass";

export default function HTML() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
        id="outlineNone"
      >
        <img alt="Imagem HTML" className="img_tBody" src={iconHTML5} />
        <p className="pImgStacks">HTML</p>
      </a>
    </div>
  );
}
