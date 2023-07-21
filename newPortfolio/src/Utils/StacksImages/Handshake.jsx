import React from "react";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

import "./_stacksImages.sass";

export default function Handshake() {
  return (
    <div className="firstDivImages">
      {/* <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
      > */}
      <HandshakeOutlinedIcon className="img_tBody SoftSkillsImg" />
      <p className="pImgStacks">Trabalho em equipe</p>
      {/* </a> */}
    </div>
  );
}
