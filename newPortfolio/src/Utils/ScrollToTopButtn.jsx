import React from "react";

import pegasusIcon from "../images/pegasus.svg";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToTopStyle = {
    // border: "1px solid white",
    // backgroundColor: "rgb(255,255,255,0.5)",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    height: "7vw",
    width: "4vw",
    top: "80vh",
    left: "93vw",
  };

  return (
    <div style={scrollToTopStyle} onClick={scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        color="#000"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-caret-up"
        viewBox="0 0 16 16"
      >
        <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
      </svg>
      <img className="imgScrollTop" src={pegasusIcon} alt="Pegasus" />
      <p style={{ color: "#fff" }}>UP</p>
    </div>
  );
};

export default ScrollToTopButton;
