import React from "react";

import pegasusIcon from "../images/pegasus.svg";

import "../Styles/Components/scrollToTopButton.sass";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="scrollToTopStyles" onClick={scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="svgArrowUpSTTB"
        viewBox="0 0 16 16"
      >
        <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
      </svg>
      <div className="content__Img_Pegasus__ScrollToTopButton">
        <img
          className="imgScrollTop"
          src={pegasusIcon}
          alt="ícone Pegasus"
          viewBox="0 0 auto auto"
        />
      </div>
      <p className="pScrollTop">UP</p>
    </div>
  );
};

export default ScrollToTopButton;
