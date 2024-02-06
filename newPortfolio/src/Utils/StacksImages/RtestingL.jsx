import React from "react";

import rtlIcon from "../../images/octopus-64x64_RTL.png";

import "./_stacksImages.sass";

export default function RtestingL() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://testing-library.com/"
        id="outlineNone"
      >
        <img alt="Imagem RTL" className="img_tBody" src={rtlIcon} />
        <p className="pImgStacks">RTL</p>
      </a>
    </div>
  );
}
