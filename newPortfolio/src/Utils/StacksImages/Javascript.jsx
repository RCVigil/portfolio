import React from "react";

import javaScript from "../../images/js.png";

import "./_stacksImages.sass";

export default function Javascript() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        // rel="noopener noreferrer nofollow"
        href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
        rel="noreferrer"
        id="outlineNone"
      >
        <img
          alt="Imagem JavaScript"
          className="img_tBody"
          src={javaScript}
          style={{ borderRadius: "10px" }}
        />
        <p className="pImgStacks">Javascript</p>
      </a>
    </div>
  );
}
