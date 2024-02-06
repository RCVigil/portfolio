import React from "react";

import gitIcon from "../../images/git.svg";

import "./_stacksImages.sass";

export default function GIT() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://git-scm.com/"
        id="outlineNone"
      >
        <img alt="Imagem Git" className="img_tBody" src={gitIcon} />
        <p className="pImgStacks">Git</p>
      </a>
    </div>
  );
}
