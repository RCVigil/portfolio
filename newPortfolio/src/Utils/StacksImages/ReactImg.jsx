import React from "react";

import iconReactJs from "../../images/react.png";

import "./_stacksImages.sass";

export default function ReactImg() {
  return (
    <div className="firstDivImages">
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://pt-br.reactjs.org/"
        id="outlineNone"
      >
        <img alt="Imagem ReactJS" className="img_tBody" src={iconReactJs} />
        {/* <p className="pImgStacks">React</p> */}
      </a>
    </div>
  );
}
