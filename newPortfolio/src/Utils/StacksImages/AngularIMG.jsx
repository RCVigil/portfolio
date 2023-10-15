import React from "react";

import AngularImage from "../../images/Angular1.png";

const AngularIMG = () => {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://angular.io/docs"
        id="outlineNone"
      >
        <img alt="Imagem Angular" className="img_tBody" src={AngularImage} />
        <p className="pImgStacks">Angular</p>
      </a>
    </div>
  );
};

export default AngularIMG;
