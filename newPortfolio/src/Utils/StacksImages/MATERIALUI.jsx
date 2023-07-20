import React from "react";

import MaterialuiIMG from "./logoMUI.png";

import "./_stacksImages.sass";

export default function MATERIALUI() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://mui.com/material-ui/"
      >
        <img className="img_tBody" src={MaterialuiIMG} alt="Logo Mui" />
        <p className="pImgStacks">Material UI</p>
      </a>
    </div>
  );
}
