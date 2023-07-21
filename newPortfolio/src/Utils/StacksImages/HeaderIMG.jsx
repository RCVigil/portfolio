import React from "react";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";

import "./_stacksImages.sass";

export default function HeaderIMG() {
  return (
    <div className="firstDivImages">
      {/* <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://git-scm.com/"
      > */}
      <EngineeringOutlinedIcon className="img_tBody SoftSkillsImg" />
      <p className="pImgStacks">Resolução de problemas</p>
      {/* </a> */}
    </div>
  );
}
