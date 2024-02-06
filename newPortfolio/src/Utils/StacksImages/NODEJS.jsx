import React from "react";

import iconNodeJs from "../../images/nodeJs-White.png";

import "./_stacksImages.sass";

export default function NODEJS() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://nodejs.org/en/docs/"
        id="outlineNone"
      >
        <img alt="Imagem Node.js" className="img_tBody" src={iconNodeJs} />
        <p className="pImgStacks">Node.js</p>
      </a>
    </div>
  );
}
