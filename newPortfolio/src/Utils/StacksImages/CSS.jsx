import React from "react";

import css3 from "../../images/css3_Icon.svg";

import "./_stacksImages.sass";

export default function CSS() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
        id="outlineNone"
      >
        <img alt="Imagem CSS" className="img_tBody" src={css3} />
        <p className="pImgStacks">CSS</p>
      </a>
    </div>
  );
}
